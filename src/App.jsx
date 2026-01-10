import Navbar from './components/Navbar';
import Hero from './components/Sections/Hero';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import JasonGallery from './components/Sections/JasonGallery';
import LuciaGallery from './components/Sections/LuciaGallery';
import Outro from './components/Sections/Outro';
import JasonCanvas from './components/Sections/jasonCanvas';
import LuciaCanvas from './components/Sections/LuciaCanvas';
import OutroCanvas from './components/Sections/OutroCanvas';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1, // desktop smoothness
      smoothTouch: 0.1, // mobile
      effects: true, // data-speed & data-lag support
    });
  }, []);

  return (
    <>
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

export default App;
