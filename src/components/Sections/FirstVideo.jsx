import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function FirstVideo() {
  const videoRef = useRef(null);
  useGSAP(() => {
    gsap.set('.first-vd-wrapper', {
      marginTop: '-150vh',
      opacity: 0,
    });

    const tl = gsap.timeline();
    tl.to('.hero-section', { opacity: 0, ease: 'power1.inOut' });
    tl.to('.first-vd-wrapper', { opacity: 1 });

    ScrollTrigger.create({
      trigger: '.first-vd-wrapper',
      start: 'top top',
      end: '+=200%',
      markers: true,
      scrub: true,
      pin: true,
      animation: tl,
      onEnter: () => videoRef.current.play(1),
    });
  });
  return (
    <section className="first-vd-wrapper h-dvh border-2 border-orange-400">
      <div className="h-full">
        <video ref={videoRef} src="/videos/output1.mp4" className="first-vd" />
      </div>
    </section>
  );
}

export default FirstVideo;
