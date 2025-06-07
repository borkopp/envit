import {HeroVideoDialog} from "@/components/ui/hero-video-dialog";
import Image from "next/image";
import {Quote} from "lucide-react";
export default function VideoSection() {
  return (
    <section id="technology" className="w-full py-24">
      <div className="container ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video on the left */}

          {/* Content on the right */}
          <div className="space-y-8">
            <div className="space-y-2">
              {/* <p
                className="text-green-600 font-medium"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Pioneering Soil Remediation
              </p> */}
              <div className="pt-12 space-y-4">
                <p className="text-neutral-600 dark:text-neutral-400 text-xl" data-aos="fade-up" data-aos-delay="100">
                  CEO @ ENVIT
                </p>
                <p className="text-green-500 text-xl" data-aos="fade-up" data-aos-delay="200">
                  Prof. Dr. Domen Leštan
                </p>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="text-3xl md:text-5xl tracking-tighter relative">
              <Quote className="absolute -top-4 -right-2 md:-top-8 md:-right-12 w-16 h-16 md:w-24 md:h-24 text-green-500/20 dark:text-green-400/20 rotate-12 z-0" />
              <p className="relative z-10">Today, the soil polution is affecting more than 2 billion people worldwide.</p>
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-end">
            <HeroVideoDialog
              className="w-[600px]"
              videoSrc="https://www.youtube.com/embed/your-video-id"
              thumbnailSrc="/thumbnail-yt.png"
              thumbnailAlt="Soil remediation process video"
              animationStyle="from-left"
            />
            {/* <Image
              src="/yt-image.png"
              alt="Soil remediation process video"
              width={350}
              height={350}
              quality={100}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
