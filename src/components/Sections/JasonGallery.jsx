import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function JasonGallery() {
  useGSAP(() => {
    gsap.set('.jason', { marginTop: '-80vh' });

    const tl = gsap.timeline();
    tl.to('.first-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    ScrollTrigger.create({
      trigger: '.jason',
      start: 'top 90%',
      end: '10% center',
      scrub: 2,
      animation: tl,
    });
  });
  return (
    <section className="jason" data-speed="1.1">
      <div className="jason-content max-w-lg">
        <h1>Jason Duval</h1>
        <h2 className="font-bold">
          Jason wants an easy life, but things just keep getting harder.
        </h2>
        <p className="font-semibold">
          Jason grew up around grifters and crooks. After a stint in the Army trying to shake off
          his troubled teens, he found himself in the Keys doing what he knows best, working for
          local drug runners. It might be time to try something new.
        </p>

        <div className="jason-2">
          <img src="/images/jason-2.webp" />
        </div>
      </div>

      <div className="img-box order-0 space-y-5 lg:mt-80">
        <div className="jason-1">
          <img src="/images/jason-1.webp" alt="" />
        </div>
        <div className="jason-3">
          <img src="/images/jason-3.webp" alt="" />
        </div>
      </div>
    </section>
  );
}

export default JasonGallery;
