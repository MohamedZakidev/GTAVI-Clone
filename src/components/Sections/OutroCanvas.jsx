import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 55;

// const getFrameSrc = (i) => `/frames/frame_${String(i).padStart(4, '0')}.jpg`;

export default function OutroCanvas() {
  const canvasRef = useRef(null);
  const images = useRef([]);
  const frame = useRef({ current: 0 });

  useEffect(() => {
    if (images.current.length) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const render = () => {
      const index = Math.min(Math.max(frame.current.current, 0), images.current.length - 1);

      const img = images.current[index];
      if (!img) {
        console.log('Error');
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate scaling to fit image while maintaining aspect ratio
      const imgRatio = img.width / img.height;
      const canvasRatio = canvas.width / canvas.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (imgRatio > canvasRatio) {
        // Image is wider - fit to canvas height
        drawHeight = canvas.height;
        drawWidth = drawHeight * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      } else {
        // Image is taller - fit to canvas width
        drawWidth = canvas.width;
        drawHeight = drawWidth / imgRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // 1️⃣ PRELOAD
    let loaded = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/outro-canvas-frames/frame_${String(i).padStart(4, '0')}.jpg`;
      img.onload = () => {
        loaded++;
        if (loaded === FRAME_COUNT) initScroll();
      };
      images.current.push(img);
    }

    // 2️⃣ INIT GSAP AFTER IMAGES LOAD
    const initScroll = () => {
      resize();
      render(); // draw first frame after all images loaded
      gsap.set('.outro-canvas', {
        marginTop: '-100vh',
        autoAlpha: 0,
      });
      gsap.to(frame.current, {
        current: FRAME_COUNT - 1,
        snap: 'current',
        ease: 'none',
        scrollTrigger: {
          trigger: canvas,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true,
        },
        onUpdate: render,
      });
      const timeline = gsap.timeline();
      timeline.to('.lucia', { opacity: 0 });
      timeline.to('.outro-canvas', {
        autoAlpha: 1,
      });
      ScrollTrigger.create({
        trigger: canvas,
        start: 'top top',
        end: '30% top',
        scrub: true,
        animation: timeline,
      });
    };

    window.addEventListener('resize', () => {
      resize();
      render();
      ScrollTrigger.refresh();
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="outro-canvas top-0 left-0 h-dvh w-full" />;
}
