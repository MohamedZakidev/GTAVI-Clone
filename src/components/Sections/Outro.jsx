import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Outro() {
  useGSAP(() => {
    gsap.set('.final-message', { autoAlpha: 0, marginTop: '-140vh' });

    const tl = gsap.timeline();
    tl.to('.final-content', { autoAlpha: 0 });
    tl.to('.final-message', { autoAlpha: 1 });

    ScrollTrigger.create({
      trigger: '.final-message',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      pin: true,
      animation: tl,
    });
  });
  return (
    <section className="final-message flex-center">
      <div className="col-center w-full gap-14">
        <img src="/images/logo.webp" alt="logo" className="w-[40%] max-w-60 object-contain" />

        <div>
          <h3 className="gradient-title">
            Coming <br />
            novermber 19 <br /> 2026
          </h3>
        </div>

        <div className="flex-center gap-10">
          <img src="/images/ps-logo.svg" className="w-20 md:w-32" />
          <img src="/images/x-logo.svg" className="w-40 md:w-52" />
        </div>
      </div>
    </section>
  );
}

export default Outro;
