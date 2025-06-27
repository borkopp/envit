"use client";
import React, { useState } from "react";
import { motion, AnimationProps } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Text = ({
  children,
  className,
  delay = 0,
  isGradientText = false,
  ...animationProps
}: {
  children: string;
  className?: string;
  delay?: number;
  isGradientText?: boolean;
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
          className={cn(
            "inline-block",
            isGradientText &&
              "bg-gradient-to-b from-neutral-400 via-white to-white bg-clip-text text-transparent"
          )}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
};

export function FullBackgroundImageWithText({
  gradientFade = true,
}: {
  gradientFade?: boolean;
}) {
  const logos = [
    {
      name: "EU Partnership",
      image: "/logo-black.png", // Placeholder - replace with actual partner logos
    },
    {
      name: "Gamity",
      image: "https://assets.aceternity.com/pro/logos/gamity.png",
    },
    {
      name: "Host it",
      image: "https://assets.aceternity.com/pro/logos/hostit.png",
    },
    {
      name: "Asteroid Kit",
      image: "https://assets.aceternity.com/pro/logos/asteroid-kit.png",
    },
  ];
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-10">
      <div className="absolute inset-0 h-full w-full bg-black"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.3] }}
        transition={{ duration: 2 }}
        className="absolute inset-0 h-full w-full"
      >
        <BlurImage
          src="/hero.jpeg"
          className={cn(
            "pointer-events-none absolute inset-0 h-full w-full select-none object-cover",
            gradientFade &&
              "[mask-image:radial-gradient(200px_at_center,transparent,black)]"
          )}
          width={1000}
          height={1000}
          alt="Environmental technology hero"
        />
        <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-black to-transparent"></div>
      </motion.div>
      <div className="relative z-10 max-w-5xl text-balance text-center text-3xl font-medium tracking-tight md:text-7xl md:leading-tight">
        <Text className="" isGradientText={true}>
          Restoring degraded land for green transition worldwide
        </Text>
      </div>
      <Text
        className="relative z-10 mt-2 max-w-2xl text-center text-neutral-200 md:mt-6 md:text-xl"
        delay={0.6}
      >
        ENVIT develops innovative soil decontamination technologies, including
        RESOIL®, to restore contaminated sites and enable sustainable land use
        for a greener future.
      </Text>

      <motion.div
        className="mt-6 flex flex-col gap-4 sm:flex-row"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.2 }}
      >
        <Button as={Link} href="/technology-description" variant="secondary">
          Our Technology
        </Button>
        <Button as={Link} href="/about-us" variant="simple">
          Learn More
        </Button>
      </motion.div>
      <motion.div
        className="relative z-10 mt-10 flex flex-wrap justify-center gap-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.4 }}
      >
        {logos.map((logo) => (
          <BlurImage
            key={logo.name}
            src={logo.image}
            width={100}
            height={100}
            alt={logo.name}
            className="w-24 object-contain invert filter md:w-40"
          />
        ))}
      </motion.div>
    </div>
  );
}

export const Button = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType | any;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "simple";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "no-underline flex space-x-2 group cursor-pointer relative border-none transition duration-200 rounded-full p-px text-xs font-semibold leading-6 px-4 py-2";

  const variantStyles = {
    primary:
      "w-full sm:w-44 h-10 rounded-lg text-sm text-center items-center justify-center relative z-20 bg-black  text-white",
    secondary:
      "relative z-20 text-sm bg-white  text-black  w-full sm:w-44 h-10  flex items-center justify-center rounded-lg hover:-translate-y-0.5 ",
    simple:
      "relative z-20 text-sm bg-transparent  text-white  w-full sm:w-44 h-10  flex items-center justify-center rounded-lg hover:-translate-y-0.5 ",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

import Image from "next/image";

export const BlurImage = (props: React.ComponentProps<typeof Image>) => {
  const [isLoading, setLoading] = useState(true);

  const { src, width, height, alt, layout, ...rest } = props;
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "opacity-0" : "opacity-100",
        props.className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={src as string}
      layout={layout}
      alt={alt ? alt : "Avatar"}
      {...rest}
    />
  );
};
