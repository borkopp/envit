import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import Image from "next/image";
export default function VideoSection() {
  return (
    <section id="technology" className="w-full py-24">
      <div className="container px-4 md:px-6">
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
              <h2
                className="text-3xl font-semibold font-lato tracking-tighter sm:text-4xl md:text-5xl"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Innovative Techniques for a Greener Tomorrow
              </h2>
              <p
                className="text-neutral-600 dark:text-neutral-400 text-lg mt-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Our advanced soil remediation technology offers unparalleled
                benefits, transforming contaminated sites into vibrant
                ecosystems.
              </p>
            </div>

            <div className="space-y-6">
              <div
                className="flex items-start gap-3"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <span className="text-green-600 text-xl">🌱</span>
                <div>
                  <h3 className="font-semibold text-xl">
                    Sustainable Practices
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Implement eco-friendly methods to ensure long-lasting soil
                    health.
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-3"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <span className="text-green-600 text-xl">⚡</span>
                <div>
                  <h3 className="font-semibold text-xl">Advanced Technology</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Utilize state-of-the-art technology for effective soil
                    restoration.
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-3"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <span className="text-green-600 text-xl">🤝</span>
                <div>
                  <h3 className="font-semibold text-xl">Community Impact</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Enhance local environments and contribute to community
                    well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <HeroVideoDialog
              className="w-[350px]"
              videoSrc="https://www.youtube.com/embed/your-video-id"
              thumbnailSrc="/yt-image.png"
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
