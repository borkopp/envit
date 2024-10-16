import HeroVideoDialog from "@/components/magicui/hero-video-dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroTest3() {
  return (
    <section className=" py-12 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl">
              Restoring Earth&apos;s Foundation
            </h1>
            <p className="text-xl text-green-700 md:text-2xl">
              Innovative Soil Remediation Solutions
            </p>
            <p className="text-lg text-gray-700">
              We specialize in advanced soil remediation techniques, restoring contaminated land to its natural, healthy state. Our eco-friendly approaches ensure a sustainable future for generations to come.
            </p>
            <Button asChild size="lg" className="bg-primary-hover hover:bg-primary">
              <Link href="/contact">
                Learn more
              </Link>
            </Button>
          </div>
          <div data-aos="fade-up" data-aos-delay={300} className="relative">
              <HeroVideoDialog
                className="shadow-xl"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/am8N_qhzBSg?si=53uWH-LEMRl-lmE0"
                thumbnailSrc="/thumbnail-yt.png"
                thumbnailAlt="Envit Video"
              />
            </div>
        </div>
      </div>
    </section>
  )
}