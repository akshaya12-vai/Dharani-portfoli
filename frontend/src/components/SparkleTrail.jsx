import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';

// Lightweight cursor-following sparkle trail. Each mouse move spawns a
// few short-lived star particles tinted with the active theme's accents.
export default function SparkleTrail() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const { accents, sparkles } = useTheme();
  const accentsRef = useRef(accents);
  accentsRef.current = accents;

  useEffect(() => {
    if (!sparkles) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf;
    let lastSpawn = 0;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function spawn(x, y) {
      const { violetSoft, magenta, cyan } = accentsRef.current;
      const palette = [violetSoft, magenta, cyan];
      for (let i = 0; i < 2; i++) {
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          size: Math.random() * 2.5 + 1.5,
          color: palette[Math.floor(Math.random() * palette.length)],
          life: 1,
          decay: Math.random() * 0.02 + 0.015,
          vy: -(Math.random() * 0.6 + 0.2),
          vx: (Math.random() - 0.5) * 0.6,
          spin: Math.random() * Math.PI,
        });
      }
      if (particlesRef.current.length > 220) {
        particlesRef.current.splice(0, particlesRef.current.length - 220);
      }
    }

    function onMove(e) {
      const now = performance.now();
      if (now - lastSpawn > 24) {
        spawn(e.clientX, e.clientY);
        lastSpawn = now;
      }
    }
    function onTouch(e) {
      if (e.touches && e.touches[0]) {
        spawn(e.touches[0].clientX, e.touches[0].clientY);
      }
    }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onTouch, { passive: true });

    function drawStar(x, y, r, color, alpha, rot) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.beginPath();
      for (let i = 0; i < 4; i++) {
        ctx.rotate(Math.PI / 2);
        ctx.moveTo(0, 0);
        ctx.lineTo(0, r);
        ctx.quadraticCurveTo(r * 0.15, r * 0.15, r, 0);
        ctx.quadraticCurveTo(r * 0.15, -r * 0.15, 0, -r);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const list = particlesRef.current;
      for (let i = list.length - 1; i >= 0; i--) {
        const p = list[i];
        p.life -= p.decay;
        if (p.life <= 0) {
          list.splice(i, 1);
          continue;
        }
        p.x += p.vx;
        p.y += p.vy;
        drawStar(p.x, p.y, p.size * 2.4, p.color, Math.max(p.life, 0), p.spin + p.life * 2);
      }
      raf = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onTouch);
      cancelAnimationFrame(raf);
      particlesRef.current = [];
    };
  }, [sparkles]);

  if (!sparkles) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
}
