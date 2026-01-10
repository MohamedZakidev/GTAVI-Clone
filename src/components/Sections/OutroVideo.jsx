import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function OutroVideo() {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set('.final', { autoAlpha: 0, marginTop: '-30vh' });

    const tl = gsap.timeline();

    tl.to('.final', { autoAlpha: 1 });
    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 3,
          ease: 'none',
        },
        '<',
      );
    };

    ScrollTrigger.create({
      trigger: '.final',
      start: 'top top',
      end: 'bottom top',
      pin: true,
      scrub: true,
      animation: tl,
    });
  });
  return (
    <section className="final h-screen overflow-hidden">
      <div className="final-content size-full">
        <video
          ref={videoRef}
          src="/videos/output3.mp4"
          muted
          preload="auto"
          playsInline
          className="size-full object-cover"
        />
      </div>
    </section>
  );
}

export default OutroVideo;
