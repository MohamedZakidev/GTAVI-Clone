import Navbar from './components/Navbar';
import FirstVideo from './components/Sections/FirstVideo';
import Hero from './components/Sections/Hero';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import JasonGallery from './components/Sections/JasonGallery';
import SecondVideo from './components/Sections/SecondVideo';
import LuciaGallery from './components/Sections/LuciaGallery';
import OutroVideo from './components/Sections/OutroVideo';
import Outro from './components/Sections/Outro';

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

        <FirstVideo />
        <JasonGallery />

        <SecondVideo />
        <LuciaGallery />
        <OutroVideo />
        <Outro />
        {/* <PostCard /> */}
      </main>
    </>
  );
}

export default App;
