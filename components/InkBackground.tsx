'use client';

import { useEffect, useRef } from 'react';

export default function InkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';

    const observer = new MutationObserver(() => {
      currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // 捕获鼠标位置（用于水墨交互）
    const mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // 1. 精细烟墨微粒系统 (小型化 + 凝练质感)
    const particleCount = 75;
    const particles = Array.from({ length: particleCount }, () => {
      const radius = Math.random() * 2.5 + 1.2; // 精确小尺寸粒径
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        baseRadius: radius,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.45 + 0.15,
        isCinnabar: Math.random() < 0.06,
        orbitRadius: Math.random() * (Math.min(width, height) * 0.4) + 80,
        orbitAngle: Math.random() * Math.PI * 2,
        orbitSpeed: (Math.random() * 0.0008 + 0.0003) * (Math.random() < 0.5 ? 1 : -1),
      };
    });

    let outerAngle = 0;
    let innerAngle = 0;

    const resize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = currentTheme === 'dark';
      const centerX = width / 2;
      const centerY = height * 0.42;

      // =========================================================================
      // 1. 绘制 1px 同心几何爻线阵列 (中心时空仪规)
      // =========================================================================
      const baseRadius = Math.min(width, height) * 0.32;
      outerAngle += isDark ? 0.0005 : 0.0002;
      innerAngle -= isDark ? 0.0003 : 0.0001;

      // 外圈 1px 爻线
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(outerAngle);
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius, 0, Math.PI * 2);
      ctx.setLineDash(isDark ? [8, 16, 2, 16] : [12, 24]);
      ctx.strokeStyle = isDark ? 'rgba(0, 255, 204, 0.25)' : 'rgba(42, 39, 37, 0.25)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // 指点刻度
      for (let i = 0; i < 4; i++) {
        const rad = (Math.PI / 2) * i;
        ctx.beginPath();
        ctx.moveTo(Math.cos(rad) * (baseRadius - 5), Math.sin(rad) * (baseRadius - 5));
        ctx.lineTo(Math.cos(rad) * (baseRadius + 5), Math.sin(rad) * (baseRadius + 5));
        ctx.strokeStyle = isDark ? 'rgba(200, 50, 43, 0.55)' : 'rgba(184, 58, 46, 0.55)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.restore();

      // 内圈 1px 逆旋爻线
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(innerAngle);
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 0.68, 0, Math.PI * 2);
      ctx.setLineDash(isDark ? [24, 18, 2, 18] : [16, 16]);
      ctx.strokeStyle = isDark ? 'rgba(245, 244, 240, 0.2)' : 'rgba(120, 100, 80, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // =========================================================================
      // 2. 向心漩涡烟墨微粒 + 鼠标互动
      // =========================================================================
      particles.forEach((p) => {
        // 向心漩涡运动逻辑 (取代原来的向下单向漂移)
        p.orbitAngle += p.orbitSpeed;
        const targetX = centerX + Math.cos(p.orbitAngle) * p.orbitRadius;
        const targetY = centerY + Math.sin(p.orbitAngle) * p.orbitRadius * 0.75; // 略呈椭圆切向

        p.x += (targetX - p.x) * 0.02;
        p.y += (targetY - p.y) * 0.02;

        // 鼠标物理推拒涟漪
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 120;

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 35;
            const angle = Math.atan2(dy, dx);
            p.x += Math.cos(angle) * force * 0.1;
            p.y += Math.sin(angle) * force * 0.1;
          }
        }

        // 绘制凝练墨粒 (微弱边缘羽化，绝无模糊大光斑)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        if (isDark) {
          if (p.isCinnabar) {
            ctx.fillStyle = `rgba(200, 50, 43, ${p.opacity * 0.8})`;
            ctx.shadowColor = 'rgba(200, 50, 43, 0.5)';
            ctx.shadowBlur = 4;
          } else {
            ctx.fillStyle = `rgba(0, 255, 204, ${p.opacity * 0.5})`;
            ctx.shadowColor = 'rgba(0, 255, 204, 0.3)';
            ctx.shadowBlur = 3;
          }
        } else {
          if (p.isCinnabar) {
            ctx.fillStyle = `rgba(184, 58, 46, ${p.opacity * 0.75})`;
            ctx.shadowBlur = 0;
          } else {
            ctx.fillStyle = `rgba(42, 39, 37, ${p.opacity * 0.45})`;
            ctx.shadowBlur = 0;
          }
        }

        ctx.fill();
        ctx.shadowBlur = 0; // 重置 Shadow
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
    />
  );
}
