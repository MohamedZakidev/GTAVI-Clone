import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function PostCard() {
  return (
    <section className="post-card h-[150vh]">
      <div className="flex h-full items-center justify-center">
        <div className="post-card-wrapper group relative w-[95%] max-w-7xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:rotate-1">
          <img
            src="/images/overlay.webp"
            alt="overlay image for vice city"
            className="absolute h-full w-full"
          />
          <video src="/videos/postcard-vd-2.mp4" className="w-full" />
          <button className="group-hover:bg-yellow absolute -bottom-28 left-1/2 w-2/3 -translate-x-1/2 rounded-full bg-white px-5 py-4 text-lg md:bottom-16 md:w-fit md:px-7">
            Explore Vice City
          </button>
        </div>
      </div>
    </section>
  );
}

export default PostCard;
