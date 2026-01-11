import { createContext, useContext, useEffect, useState } from 'react';

const ImageLoadingContext = createContext();

// Image paths to preload - organized by category
const IMAGES_TO_LOAD = {
  hero: [
    '/images/hero-bg.webp',
    '/images/hero-text.webp',
    '/images/watch-trailer.png',
    '/images/play.png',
    '/images/logo.webp',
    '/images/ps-logo.svg',
    '/images/x-logo.svg',
  ],
  jasonFrames: Array.from(
    { length: 59 },
    (_, i) => `/jason-canvas-frames/frame_${String(i + 1).padStart(4, '0')}.jpg`,
  ),
  jasonGallery: ['/images/jason-1.webp', '/images/jason-2.webp', '/images/jason-3.webp'],
  luciaFrames: Array.from(
    { length: 89 },
    (_, i) => `/lucia-canvas-frames/frame_${String(i + 1).padStart(4, '0')}.jpg`,
  ),
  luciaGallery: ['/images/lucia-1.webp', '/images/lucia-3.webp', '/images/lucia-2.webp'],
  outroFrames: Array.from(
    { length: 55 },
    (_, i) => `/outro-canvas-frames/frame_${String(i + 1).padStart(4, '0')}.jpg`,
  ),
};

// Calculate total images
const TOTAL_IMAGES = Object.values(IMAGES_TO_LOAD).reduce((sum, arr) => sum + arr.length, 0);

export function ImageLoadingProvider({ children }) {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    let currentLoaded = 0;

    // Flatten all images
    const allImages = Object.values(IMAGES_TO_LOAD).flat();

    allImages.forEach((imageSrc) => {
      const img = new Image();
      img.onload = () => {
        currentLoaded++;
        setLoadedCount(currentLoaded);
        setLoadingProgress(Math.round((currentLoaded / TOTAL_IMAGES) * 100));
        if (currentLoaded === TOTAL_IMAGES) {
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        currentLoaded++;
        setLoadedCount(currentLoaded);
        setLoadingProgress(Math.round((currentLoaded / TOTAL_IMAGES) * 100));
        if (currentLoaded === TOTAL_IMAGES) {
          setIsLoaded(true);
        }
      };
      img.src = imageSrc;
    });
  }, []);

  return (
    <ImageLoadingContext.Provider
      value={{ isLoaded, loadingProgress, loadedCount, totalCount: TOTAL_IMAGES }}
    >
      {children}
    </ImageLoadingContext.Provider>
  );
}

export function useImageLoading() {
  const context = useContext(ImageLoadingContext);
  if (!context) {
    throw new Error('useImageLoading must be used within ImageLoadingProvider');
  }
  return context;
}
