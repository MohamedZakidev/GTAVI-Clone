import { useImageLoading } from '../context/ImageLoadingContext';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function LoadingScreen() {
  const { isLoaded, loadingProgress } = useImageLoading();
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (isLoaded && containerRef.current) {
      // Fade out and hide the loading screen
      gsap.to(containerRef.current, {
        autoAlpha: 0,
        duration: 0.2,
        ease: 'power2.inOut',
        onComplete: () => {
          if (containerRef.current) {
            containerRef.current.style.pointerEvents = 'none';
          }
        },
      });
    }
  }, [isLoaded]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center gap-6"
      style={{
        background:
          'linear-gradient(223.17deg, rgb(28, 24, 41) 0%, rgb(27, 24, 40) 8.61%, rgb(25, 23, 36) 17.21%, rgb(22, 21, 32) 25.82%, rgb(20, 19, 28) 34.42%, rgb(18, 18, 24) 43.03%, rgb(17, 17, 23) 51.63%)',
      }}
    >
      {/* Logo */}
      <img src="/images/logo.webp" alt="GTAVI" className="mb-6 w-32 object-contain md:w-48" />

      {/* Loading Text */}
      <div className="text-center">
        <h2 className="mb-2 text-xl font-semibold text-white/90 md:text-2xl">Loading Experience</h2>
        <p className="text-sm text-white/70 md:text-base">{loadingProgress}%</p>
      </div>

      {/* Progress Bar Container */}
      <div className="h-1.5 w-64 overflow-hidden rounded-full bg-white/20 md:w-80">
        {/* Progress Bar Fill */}
        <div
          ref={progressBarRef}
          className="h-full rounded-full bg-gradient-to-r from-[#fff9cb] to-[#ffb0c4] transition-all duration-300"
          style={{ width: `${loadingProgress}%` }}
        />
      </div>

      {/* Loading Dots Animation */}
      <div className="mt-4 flex gap-2">
        <div
          className="h-2 w-2 animate-bounce rounded-full bg-white/60"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="h-2 w-2 animate-bounce rounded-full bg-white/60"
          style={{ animationDelay: '0.15s' }}
        />
        <div
          className="h-2 w-2 animate-bounce rounded-full bg-white/60"
          style={{ animationDelay: '0.3s' }}
        />
      </div>
    </div>
  );
}
