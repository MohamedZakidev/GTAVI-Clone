import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function JasonGallery() {
  // useGSAP(() => {
  //   gsap.set('.jason', { marginTop: '-80vh' });

  //   const tl = gsap.timeline();
  //   tl.to('.first-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

  //   ScrollTrigger.create({
  //     trigger: '.jason',
  //     start: 'top 90%',
  //     end: '10% center',
  //     scrub: 2,
  //     animation: tl,
  //   });
  // });
  return (
    <section
      className="jason auto-cols-fr grid-cols-1 gap-3 md:grid md:grid-cols-[0.7fr_1fr]"
      data-speed="1.1"
    >
      {/* first */}
      <div className="jason-content mb-15 w-full border pl-10">
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
      <div className="md:mt-30">
        <img
          src="/images/jason-1.webp"
          className="h-full w-full object-cover [object-position:5%_center]"
        />
      </div>

      {/* third */}
      <div className="md:-mt-8 md:h-[80vh] lg:-mt-27">
        <img
          src="/images/jason-2.webp"
          className="h-full w-full object-cover [object-position:80%_center]"
        />
      </div>

      {/* fourth */}
      <div className="">
        <img src="/images/jason-3.webp" alt="" />
      </div>
    </section>
  );
}

export default JasonGallery;
