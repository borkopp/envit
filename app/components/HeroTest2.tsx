import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import {Button} from "@/components/ui/button";
import {Leaf} from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-gray-200 to-gray-100  py-20">
      <div className="absolute inset-0 overflow-hidden">
        {/* <Leaf size={300} className="absolute top-[100px] text-green-500 opacity-80 right-[140px]" /> */}
        {/* <Leaf size={300} className="absolute top-[100px] text-green-400 opacity-50 left-[100px]" /> */}
        {/* <Leaf size={300} className="absolute top-[700px] text-green-400 opacity-80 left-[140px] rotate-180" /> */}
      </div>
      <div className="container mx-auto px-4 text-center">
        <h1 data-aos="fade-up" className="text-4xl md:text-6xl font-bold mb-4 space-y-2">
          Restoring {""}
          <span className="bg-gradient-to-r from-green-500 to-green-600 text-transparent bg-clip-text">Degraded Land</span> for <br />
          <span className="bg-gradient-to-r from-green-500 to-green-600 text-transparent bg-clip-text">Green Transition</span> Worldwide
        </h1>

        <div className="max-w-4xl mx-auto my-12">
          <div data-aos="fade-up" data-aos-delay="100" className="aspect-w-16 aspect-h-9">
            <HeroVideoDialog
              className="dark:hidden block shadow-xl"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/watch?v=am8N_qhzBSg"
              thumbnailSrc="/thumbnail-yt.png"
              thumbnailAlt="Hero Video"
            />
          </div>
        </div>

        <Button
          data-aos="fade-up"
          data-aos-delay="200"
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          Discover Our Technology
        </Button>
      </div>
    </section>
  );
}
