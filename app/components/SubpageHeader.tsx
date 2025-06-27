"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { AnimationProps, motion } from "motion/react";

type SubpageHeaderProps = {
  title: string;
  description?: string;
};

const Text = ({
  children,
  className,
  delay = 0,
  ...animationProps
}: {
  children: string;
  className?: string;
  delay?: number;
} & AnimationProps) => {
  return (
    <motion.div {...animationProps} className={className}>
      {children.split(" ").map((word, index) => (
        <motion.span
          key={`word-${index}-${word}`}
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          transition={{
            duration: 0.2,
            delay: delay + index * 0.02,
          }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function SubpageHeader({
  title,
  description,
}: SubpageHeaderProps) {
  return (
    <div className="relative h-[30vh] bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Modern dotted background pattern */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-0 h-full w-full",
          "bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.4)_1px,transparent_0)]",
          "dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.4)_1px,transparent_0)]",
          "[mask-image:radial-gradient(circle_at_center,white,transparent)]",
          "bg-repeat",
          "[background-size:20px_20px]"
        )}
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 dark:from-primary/10 dark:via-transparent dark:to-primary/10"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full mx-auto">
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            {/* Main title */}
            <Text className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 dark:text-white leading-tight">
              {title}
            </Text>

            {/* Description */}
            {description && (
              <Text
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                delay={0.3}
              >
                {description}
              </Text>
            )}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
    </div>
  );
}
