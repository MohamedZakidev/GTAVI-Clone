import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import ComingSoon from './ComingSoon';
import { useMaskSettings } from '../../../constants';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } = useMaskSettings();

  useGSAP(() => {
    gsap.set('.mask-wrapper', {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });

    gsap.set('.entrance-message', { marginTop: '0vh' });

    gsap.to('.scroll-down-icon', {
      opacity: 0.7,
      scale: 0.8,
      y: 8,
      duration: 1,
      repeat: -1,
      yoyo: true,
    });

    // Create GSAP timeline with ScrollTrigger
    const tl = gsap
      .timeline()
      .set('.mask-wrapper', { opacity: 1 })
      .to('.fade-out', { opacity: 0, ease: 'power1.inOut', duration: 0.25 })
      .to('.scale-out', { scale: 1, ease: 'power1.inOut' }, 0)
      .to(
        '.mask-wrapper',
        { duration: 0.5, maskSize: maskSize, maskPosition: maskPos, ease: 'power1.inOut' },
        0,
      )
      .to('.bg-fill', { backgroundColor: 'white', duration: 0.4 }, '-=0.28')
      .to('.mask-wrapper', { autoAlpha: 0 })
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
    });
  });

  return (
    <section className="hero-section">
      <div className="mask-wrapper relative size-full">
        <div className="bg-fill absolute inset-0 z-1000 bg-white/0"></div>
        <img src="/images/hero-bg.webp" alt="background" className="scale-out w-full" />
        <img
          src="/images/hero-text.webp"
          alt="hero-logo"
          className="title-logo fade-out scale-out"
        />
        <div className="play-img fade-out">
          <img src="/images/play.png" alt="play" className="ml-1 w-7" />
        </div>

        <img src="/images/watch-trailer.png" alt="trailer" className="trailer-logo fade-out" />

        <img
          src="/images/scroll-down-chevron.png"
          className="scroll-down-icon absolute bottom-1 left-1/2 w-12 -translate-x-1/2"
        />
      </div>

      <ComingSoon />
    </section>
  );
}
