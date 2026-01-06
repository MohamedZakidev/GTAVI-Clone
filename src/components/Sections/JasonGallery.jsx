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
    <section className="jason grid grid-cols-[3rem_0.7fr_1fr_3rem] gap-3" data-speed="1.1">
      {/* first */}
      <div className="jason-content col-span-3 col-start-2 row-start-1 mb-15 w-full max-w-sm justify-self-center md:col-span-1 md:col-start-2 md:mb-0 md:max-w-md">
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
      <div className="bg-yellow col-span-4 md:row-start-1 md:h-[70vh] lg:h-[90vh] xl:h-screen">
        <img
          src="/images/jason-1.webp"
          className="size-full object-cover [object-position:5%_center] transition duration-700 ease-in-out hover:scale-[0.98]"
        />
      </div>

      {/* third */}
      <div className="col-span-4 row-start-3">
        <img
          src="/images/jason-2.webp"
          className="h-full w-full object-cover [object-position:80%_center]"
        />
      </div>

      {/* fourth */}
      <div className="col-span-4 row-start-4">
        <img src="/images/jason-3.webp" alt="" />
      </div>
    </section>
  );
}

export default JasonGallery;
