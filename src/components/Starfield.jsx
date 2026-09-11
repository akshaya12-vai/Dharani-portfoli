import { useEffect, useRef } from 'react';

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let stars = [];
    let raf;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    }
    function initStars() {
      stars = [];
      const count = Math.floor((canvas.width * canvas.height) / 9000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.3 + 0.2,
          o: Math.random() * 0.6 + 0.2,
          s: Math.random() * 0.015 + 0.003,
          dir: Math.random() > 0.5 ? 1 : -1,
        });
      }
    }
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#fff';
      stars.forEach((st) => {
        st.o += st.s * st.dir;
        if (st.o > 0.85 || st.o < 0.1) st.dir *= -1;
        ctx.globalAlpha = st.o;
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }
    function setup() {
      resize();
      initStars();
    }
    setup();
    draw();
    window.addEventListener('resize', setup);
    return () => {
      window.removeEventListener('resize', setup);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas id="stars" ref={canvasRef} />;
}
