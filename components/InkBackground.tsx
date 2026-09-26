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

    // 1. 烟墨流体粒子系统
    const particleCount = 65;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      // 增大半径以支持羽化墨晕效果
      radius: Math.random() * 18 + 6,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.35 + 0.15,
      // 极少比例的微量朱砂墨斑
      isCinnabar: Math.random() < 0.08,
      angle: Math.random() * Math.PI * 2,
      angularVelocity: (Math.random() - 0.5) * 0.005,
    }));

    // 2. 1px 几何爻线角度控制
    let outerAngle = 0;
    let innerAngle = 0;

    const resize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);

    // 简单流场计算 (模拟微水流与风吹)
    const getFlowVector = (x: number, y: number, time: number) => {
      const scale = 0.0015;
      const angle = Math.sin(x * scale + time) * Math.cos(y * scale + time) * Math.PI * 2;
      return {
        fx: Math.cos(angle) * 0.15,
        fy: Math.sin(angle) * 0.15,
      };
    };

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.005;

      const isDark = currentTheme === 'dark';

      // =========================================================================
      // 1. 绘制清晰神秘的 1px 同心几何爻线阵列 (Trigram Lines meets Sacred Geometry)
      // =========================================================================
      const centerX = width / 2;
      const centerY = height * 0.42;
      const baseRadius = Math.min(width, height) * 0.32;

      outerAngle += isDark ? 0.0006 : 0.0002;
      innerAngle -= isDark ? 0.0004 : 0.0001;

      // 外圈：1px 主爻线圆环
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(outerAngle);

      ctx.beginPath();
      ctx.arc(0, 0, baseRadius, 0, Math.PI * 2);
      ctx.setLineDash(isDark ? [8, 16, 2, 16] : [12, 24]);
      ctx.strokeStyle = isDark ? 'rgba(0, 255, 204, 0.22)' : 'rgba(42, 39, 37, 0.28)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // 外圈刻度指点 (四正位 1px 细刻痕)
      for (let i = 0; i < 4; i++) {
        const rad = (Math.PI / 2) * i;
        ctx.beginPath();
        ctx.moveTo(Math.cos(rad) * (baseRadius - 6), Math.sin(rad) * (baseRadius - 6));
        ctx.lineTo(Math.cos(rad) * (baseRadius + 6), Math.sin(rad) * (baseRadius + 6));
        ctx.strokeStyle = isDark ? 'rgba(200, 50, 43, 0.5)' : 'rgba(184, 58, 46, 0.6)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.restore();

      // 内圈：1px 逆向旋转细爻线
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(innerAngle);

      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 0.68, 0, Math.PI * 2);
      ctx.setLineDash(isDark ? [32, 20, 4, 20] : [16, 16]);
      ctx.strokeStyle = isDark ? 'rgba(245, 244, 240, 0.18)' : 'rgba(120, 100, 80, 0.32)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // 中心定标点
      ctx.beginPath();
      ctx.arc(centerX, centerY, 2, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? 'rgba(0, 255, 204, 0.4)' : 'rgba(184, 58, 46, 0.5)';
      ctx.fill();

      // =========================================================================
      // 2. 绘制气韵流转的水墨扩散微粒 (Ink Diffusion / Fluid Dispersal)
      // =========================================================================
      if (isDark) {
        ctx.globalCompositeOperation = 'screen'; // 青黑夜墨开启加色滤光
      } else {
        ctx.globalCompositeOperation = 'source-over';
      }

      particles.forEach((p) => {
        // 叠加流场动力
        const flow = getFlowVector(p.x, p.y, time);
        p.vx = p.vx * 0.98 + flow.fx * 0.02;
        p.vy = p.vy * 0.98 + flow.fy * 0.02;

        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.angularVelocity;

        // 边界循环处理
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // 创建径向渐变（实现边缘羽化的水墨晕染感）
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);

        if (isDark) {
          if (p.isCinnabar) {
            // 朱砂冷光墨斑
            grad.addColorStop(0, `rgba(200, 50, 43, ${p.opacity * 0.7})`);
            grad.addColorStop(0.5, `rgba(200, 50, 43, ${p.opacity * 0.2})`);
            grad.addColorStop(1, 'rgba(200, 50, 43, 0)');
          } else {
            // 青白/烟灰淡墨蒸发
            grad.addColorStop(0, `rgba(180, 220, 210, ${p.opacity * 0.4})`);
            grad.addColorStop(0.6, `rgba(120, 150, 150, ${p.opacity * 0.12})`);
            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          }
        } else {
          if (p.isCinnabar) {
            // 暖沙沉朱墨印
            grad.addColorStop(0, `rgba(184, 58, 46, ${p.opacity * 0.6})`);
            grad.addColorStop(0.5, `rgba(184, 58, 46, ${p.opacity * 0.15})`);
            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          } else {
            // 暖钛粗陶/沙丘微粒
            grad.addColorStop(0, `rgba(74, 68, 63, ${p.opacity * 0.35})`);
            grad.addColorStop(0.6, `rgba(120, 100, 80, ${p.opacity * 0.1})`);
            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // 恢复合成模式
      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
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
