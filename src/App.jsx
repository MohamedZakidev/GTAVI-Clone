import Navbar from './components/Navbar';
import Hero from './components/Sections/Hero';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';
import JasonGallery from './components/Sections/JasonGallery';
import LuciaGallery from './components/Sections/LuciaGallery';
import Outro from './components/Sections/Outro';
import JasonCanvas from './components/Sections/JasonCanvas';
import LuciaCanvas from './components/Sections/LuciaCanvas';
import OutroCanvas from './components/Sections/OutroCanvas';
import { ImageLoadingProvider } from './context/ImageLoadingContext';
import LoadingScreen from './components/LoadingScreen';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function AppContent() {
  // Reset scroll to top on page load/refresh
  useEffect(() => {
    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Use requestAnimationFrame to ensure scroll happens after render
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }, []);

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1, // desktop smoothness
      smoothTouch: 0.1, // mobile
      effects: true, // data-speed & data-lag support
    });
  }, []);

  return (
    <>
      <LoadingScreen />
      <header>
        <Navbar />
      </header>
      <main id="smooth-content">
        <Hero />

        <JasonCanvas />
        <JasonGallery />

        <LuciaCanvas />
        <LuciaGallery />

        <OutroCanvas />
        <Outro />
      </main>
    </>
  );
}

function App() {
  return (
    <ImageLoadingProvider>
      <AppContent />
    </ImageLoadingProvider>
  );
}

export default App;
