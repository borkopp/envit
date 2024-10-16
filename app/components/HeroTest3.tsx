import HeroVideoDialog from "@/components/ui/hero-video-dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroTest3() {
  return (
    <section className="py-12 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl"
            >
              Restoring Earth&apos;s Foundation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-green-700 md:text-2xl"
            >
              Innovative Soil Remediation Solutions
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-700"
            >
              We specialize in advanced soil remediation techniques, restoring contaminated land to its natural, healthy state. Our eco-friendly approaches ensure a sustainable future for generations to come.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button asChild size="lg" className="bg-primary-hover hover:bg-primary">
                <Link href="/contact">
                  Learn more
                </Link>
              </Button>
            </motion.div>
          </div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <HeroVideoDialog
              className="shadow-xl"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/am8N_qhzBSg?si=53uWH-LEMRl-lmE0"
              thumbnailSrc="/thumbnail-yt.png"
              thumbnailAlt="Envit Video"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
