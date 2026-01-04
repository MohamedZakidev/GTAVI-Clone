import Navbar from './components/Navbar';
import ComingSoon from './components/Sections/ComingSoon';
import FirstVideo from './components/Sections/FirstVideo';
import Hero from './components/Sections/Hero';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

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
      </main>
    </>
  );
}

export default App;
