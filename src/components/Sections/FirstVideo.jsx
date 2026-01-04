import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function FirstVideo() {
  const videoRef = useRef(null);
  useGSAP(() => {
    gsap.set('.first-vd-wrapper', {
      marginTop: '-190vh',
      opacity: 0,
    });

    const tl = gsap.timeline();
    tl.to('.hero-section', { delay: 1, duration: 1, opacity: 0, ease: 'power1.inOut' });
    tl.to('.first-vd-wrapper', { opacity: 1, ease: 'power1.out' });

    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 3,
          ease: 'power1.inOut',
        },
        '-=1',
      );
    };

    ScrollTrigger.create({
      trigger: '.first-vd-wrapper',
      start: 'top top',
      end: '+=200%',
      markers: true,
      scrub: true,
      pin: true,
      animation: tl,
    });
  });
  return (
    <section className="first-vd-wrapper h-dvh">
      <div className="h-full">
        <video
          ref={videoRef}
          src="/videos/output1.mp4"
          className="first-vd"
          muted
          preload="auto"
          playsInline
        />
      </div>
    </section>
  );
}

export default FirstVideo;
