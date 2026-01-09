import { useRef } from 'react';

function PostCard() {
  const videoRef = useRef(null);
  return (
    <section className="post-card">
      <div className="animated-gradient-bg flex h-dvh w-full items-center px-10">
        <div className="post-card-wrapper group transition-all duration-700 hover:scale-[1.02] hover:rotate-1">
          <img src="/images/overlay.webp" alt="" />
          <video
            src="/videos/postcard-vd.mp4"
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            className="h-full w-full"
          />

          <button className="group-hover:bg-yellow transition-all duration-700">
            Explore Vice City
          </button>
        </div>
      </div>
    </section>
  );
}

export default PostCard;
