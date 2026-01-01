import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import ComingSoon from './ComingSoon';
import { useMaskSettings } from '../../../constants';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } = useMaskSettings();

  useGSAP(() => {
    gsap.set('.mask-wrapper', {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

    gsap.set('.mask-logo', { marginTop: '-100vh', opacity: 0 });

    gsap.set('.entrance-message', { marginTop: '0vh' });

    // Create GSAP timeline with ScrollTrigger
    const tl = gsap
      .timeline()
      .to('.fade-out', { opacity: 0, ease: 'power1.inOut' })
      .to('.scale-out', { scale: 1, ease: 'power1.inOut' })
      .to('.mask-wrapper', { maskSize, maskPosition: maskPos, ease: 'power1.inOut' }, '<')
      .to('.mask-wrapper', { opacity: 0 })
      .to(
        '.overlay-logo',
        {
          opacity: 1,
          onComplete: () => {
            gsap.to('.overlay-logo', { opacity: 0 });
          },
        },
        '<',
      )
      .to(
        '.entrance-message',
        {
          duration: 1,
          ease: 'power1.inOut',
          maskImage: 'radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)',
        },
        '<',
      );
    ScrollTrigger.create({
      trigger: '.hero-section',
      start: 'top top',
      end: '+=200%',
      pin: true,
      scrub: 2.5,
      animation: tl,
      markers: true,
    });
  });

  return (
    <section className="hero-section">
      <div className="mask-wrapper size-full">
        <img src="/images/hero-bg.webp" alt="background" className="scale-out w-full" />
        <img
          src="/images/hero-text.webp"
          alt="hero-logo"
          className="title-logo fade-out scale-out"
        />
        <img src="/images/watch-trailer.png" alt="trailer" className="trailer-logo fade-out" />
        <div className="play-img fade-out">
          <img src="/images/play.png" alt="play" className="ml-1 w-7" />
        </div>
      </div>

      <div>
        <img
          src="/images/big-hero-text.svg"
          alt="logo"
          className="mask-logo size-full object-cover"
        />
      </div>

      <div className="fake-logo-wrapper">
        <img src="/images/big-hero-text.svg" className="overlay-logo" />
      </div>

      <ComingSoon />
    </section>
  );
};

export default Hero;
