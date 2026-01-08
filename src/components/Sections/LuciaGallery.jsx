import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function LuciaGallery() {
  useGSAP(() => {
    gsap.set('.lucia', { marginTop: '-90vh' });

    const tl = gsap.timeline();
    tl.to('.second-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    ScrollTrigger.create({
      trigger: '.lucia',
      start: 'top 90%',
      end: 'bottom top',
      scrub: 2,
      animation: tl,
    });
  });

  return (
    <section
      className="lucia-life lucia grid grid-cols-[minmax(2rem,0.4fr)_1fr_0.7fr_3rem] gap-3 md:auto-rows-fr md:grid-cols-[3rem_1fr_0.1fr_0.6fr_minmax(2rem,0.3fr)]"
      data-speed="1.1"
    >
      {/* first */}
      <div className="lucia-life-content col-span-2 col-start-2 mb-20 max-w-75 md:col-span-2 md:col-start-4 lg:max-w-121.25">
        <h1>Lucia Caminos</h1>
        <h2 className="font-bold">Lucia’s father taught her to fight as soon as she could walk.</h2>
        <p className="font-semibold">
          Life has been coming at her swinging ever since. Fighting for her family landed her in the
          Leonida Penitentiary. Sheer luck got her out. Lucia’s learned her lesson — only smart
          moves from here.
        </p>
      </div>

      {/* second */}
      <div className="lucia-1">
        <img src="/images/lucia-1.webp" />
      </div>

      {/* third */}
      <div className="lucia-2">
        <img src="/images/lucia-3.webp" />
      </div>

      {/* fourth */}
      <div className="lucia-3">
        <img src="/images/lucia-2.webp" alt="Jason in a bar" />
      </div>
    </section>
  );
}

export default LuciaGallery;
