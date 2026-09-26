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

    // 获取当前 HTML 的 data-theme 状态
    let currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';

    // 监听主题属性变更 (MutationObserver)
    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      currentTheme = newTheme;
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // 粒子数据初始化
    const particleCount = 50;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.4,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.5 + 0.1,
      // 1% 几率产生朱砂微光粒
      isCinnabar: Math.random() < 0.08,
    }));

    // 1px 几何爻线旋转角度
    let rotationAngle = 0;

    const resize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = currentTheme === 'dark';

      // ==========================================
      // 1. 绘制 1px 同心几何爻线阵列 (中心巨幅几何)
      // ==========================================
      const centerX = width / 2;
      const centerY = height * 0.42;
      const ringRadius = Math.min(width, height) * 0.35;

      ctx.save();
      ctx.translate(centerX, centerY);
      
      if (isDark) {
        rotationAngle += 0.0008; // 极慢动态旋转
        ctx.rotate(rotationAngle);
      }

      // 外外层 1px 断续爻线圆环
      ctx.beginPath();
      ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
      ctx.setLineDash(isDark ? [3, 12, 1, 12] : [8, 20]);
      ctx.strokeStyle = isDark ? 'rgba(0, 255, 204, 0.08)' : 'rgba(42, 39, 37, 0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // 内层 1px 几何虚线环
      ctx.beginPath();
      ctx.arc(0, 0, ringRadius * 0.65, 0, Math.PI * 2);
      ctx.setLineDash(isDark ? [20, 40] : [12, 12]);
      ctx.strokeStyle = isDark ? 'rgba(245, 244, 240, 0.06)' : 'rgba(158, 147, 133, 0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();

      // ==========================================
      // 2. 绘制粒子流动 (烟墨微粒 ⇄ 暖沙风蚀)
      // ==========================================
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        if (isDark) {
          // 青黑科技禅：青白/朱砂微粒
          if (p.isCinnabar) {
            ctx.fillStyle = `rgba(200, 50, 43, ${p.opacity * 0.6})`;
          } else {
            ctx.fillStyle = `rgba(245, 244, 240, ${p.opacity * 0.25})`;
          }
        } else {
          // 暖沙寂素：深碳灰/暖风蚀沙粒
          if (p.isCinnabar) {
            ctx.fillStyle = `rgba(184, 58, 46, ${p.opacity * 0.5})`;
          } else {
            ctx.fillStyle = `rgba(42, 39, 37, ${p.opacity * 0.2})`;
          }
        }

        ctx.fill();
      });

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
