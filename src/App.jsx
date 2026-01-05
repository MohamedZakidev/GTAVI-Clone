import Navbar from './components/Navbar';
import FirstVideo from './components/Sections/FirstVideo';
import Hero from './components/Sections/Hero';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import JasonGallery from './components/Sections/JasonGallery';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1.2, // desktop smoothness
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
        <FirstVideo />
        <JasonGallery />
      </main>
    </>
  );
}

export default App;
