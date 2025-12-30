import ComingSoon from './ComingSoon';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useMaskSettings } from '../../../constants';

function Hero() {
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } = useMaskSettings();

  useGSAP(() => {
    gsap.set('.mask-wrapper', {
      // maskPosition: initialMaskPos,
      // maskSize: initialMaskSize,
    });
  });

  return (
    <section className="hero-section">
      <div className="mask-wrapper size-full">
        {/* jason and lucia bg image */}
        <img src="/images/hero-bg.webp" alt="background" className="scale-out" />
        {/*  */}

        {/* white header behind jason and lucia */}
        <img src="/images/hero-text.webp" alt="hero-logo" className="title-logo fade-out" />
        {/*  */}

        <img
          src="/images/watch-trailer.png"
          alt="watch-trailer"
          className="trailer-logo fade-out"
        />

        <div className="play-img fade-out">
          <img src="/images/play.png" alt="Play trailer" className="ml-1 w-7" />
        </div>
      </div>

      <div>
        <img
          src="/images/big-hero-text.svg"
          alt="text-logo"
          className="mask-logo size-full object-cover"
        />
      </div>

      <div className="fake-logo-wrapper">
        <img src="/images/big-hero-text.svg" alt="logo" className="overlay-logo" />
      </div>

      <ComingSoon />
    </section>
  );
}

export default Hero;
