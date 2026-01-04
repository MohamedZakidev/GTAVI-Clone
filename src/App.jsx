import Navbar from './components/Navbar';
import FirstVideo from './components/Sections/FirstVideo';
import Hero from './components/Sections/Hero';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

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
    <main id="smooth-content">
      <Navbar />
      <Hero />
      <FirstVideo />
    </main>
  );
}

export default App;
