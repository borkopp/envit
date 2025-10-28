"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Scale, BookOpen, Target, Handshake } from "lucide-react";

export default function PartnershipSection() {
  const benefits = [
    {
      icon: Scale,
      title: "Scalable & Sustainable Technology",
      description:
        "ReSoil® technology scales from pilot projects to large-scale industrial applications with proven environmental sustainability.",
    },
    {
      icon: BookOpen,
      title: "Strong Scientific Foundation",
      description:
        "Years of R&D backed by peer-reviewed research, EU projects, and university partnerships.",
    },
    {
      icon: Target,
      title: "Proven Real-World Results",
      description:
        "Successfully implemented on contaminated sites worldwide with measurable remediation outcomes.",
    },
    {
      icon: Handshake,
      title: "Flexible Integration Models",
      description:
        "Multiple partnership approaches including licensing, joint ventures, and technology transfer agreements.",
    },
  ];

  return (
    <section className="w-full py-24">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Benefits Section - 60% */}
          <div className="w-full lg:w-[60%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 rounded-2xl shadow-md transition-all duration-300 border border-gray-100/50 dark:border-slate-700/50 hover:border-green-200 dark:hover:border-green-800"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg mb-4">
                    <benefit.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Title Section - 40% */}
          <div className="w-full lg:w-[40%]">
            <div className="sticky top-20">
              <h2 className="text-4xl font-medium tracking-tight text-center lg:text-left md:text-7xl bg-gradient-to-b from-neutral-800 to-neutral-600 bg-clip-text text-transparent leading-tight">
                Partnership Opportunities
              </h2>
              <p className="text-sm text-center lg:text-left mx-auto lg:mx-0 text-neutral-600 dark:text-neutral-400 mt-6 max-w-sm">
                Join leading environmental remediation companies who trust
                ReSoil® technology to deliver scalable, sustainable solutions
                for contaminated site restoration.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 space-y-4"
              >
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold"
                  >
                    <Link href="/about-us">Partner With Us</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-full font-bold"
                  >
                    <Link href="/rnd">View Scientific Base</Link>
                  </Button>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center lg:text-left">
                  Ready to integrate proven soil remediation technology into
                  your projects?
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
