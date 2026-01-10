import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function SecondVideo() {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set('.lucia', { marginTop: '-30vh', autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'none' } });
    tl.to('.lucia', { autoAlpha: 1 });
    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, { currentTime: videoRef.current.duration, duration: 2 }, '');
    };
    // tl.to('.second-vd', {
    //   objectPosition: '15%',
    //   duration: 1,
    //   ease: 'power1.inOut',
    // });

    ScrollTrigger.create({
      trigger: '.lucia',
      start: 'top top',
      end: 'bottom top',
      pin: true,
      animation: tl,
      scrub: true,
    });
  });

  return (
    <section className="lucia">
      <div className="h-dvh">
        <video
          ref={videoRef}
          src="/videos/output2.mp4"
          muted
          preload="auto"
          playsInline
          className="second-vd size-full object-cover"
          style={{ objectPosition: '15%' }}
        />
      </div>
    </section>
  );
}

export default SecondVideo;
