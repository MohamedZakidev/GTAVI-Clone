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
    <section
      className="jason grid grid-cols-[minmax(2rem,0.3fr)_0.7fr_1fr_3rem] gap-3 md:auto-rows-fr"
      data-speed="1.1"
    >
      {/* first */}
      <div className="jason-content col-span-2 col-start-2 row-start-1 mb-20 max-w-sm md:col-span-1 md:col-start-2 lg:max-w-md">
        <h1>Jason Duval</h1>
        <h2 className="font-bold">
          Jason wants an easy life, but things just keep getting harder.
        </h2>
        <p className="font-semibold">
          Jason grew up around grifters and crooks. After a stint in the Army trying to shake off
          his troubled teens, he found himself in the Keys doing what he knows best, working for
          local drug runners. It might be time to try something new.
        </p>
      </div>

      {/* second */}
      <div className="jason-1">
        <img src="/images/jason-1.webp" />
      </div>

      {/* third */}
      <div className="jason-2">
        <img
          src="/images/jason-2.webp"
          className="object-co ver h-full w-full object-[80%_center]"
        />
      </div>

      {/* fourth */}
      <div className="jason-3">
        <img src="/images/jason-3.webp" alt="Jason in a bar" />
      </div>
    </section>
  );
}

export default JasonGallery;
