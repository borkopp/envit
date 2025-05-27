import Image from "next/image";
import Link from "next/link";
import React from "react";

export function SimpleFooterWithFourGrids() {
  const pages = [
    {
      title: "About Us",
      href: "/about-us",
    },
    {
      title: "Technology",
      href: "/technology-description",
    },
    {
      title: "ReSoil in Brief",
      href: "/resoil-in-brief",
    },
    {
      title: "Case Studies",
      href: "/case-studies",
    },
    {
      title: "News",
      href: "/news",
    },
  ];

  const services = [
    {
      title: "Soil Washing",
      href: "/soil-washing",
    },
    {
      title: "R&D Services",
      href: "/rnd",
    },
    {
      title: "Sales Program",
      href: "/sales-program",
    },
    {
      title: "IP & Patents",
      href: "/ip",
    },
  ];

  const resources = [
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "Events",
      href: "/events",
    },
    {
      title: "Case Studies",
      href: "/case-studies",
    },
    {
      title: "News",
      href: "/news",
    },
  ];

  const socials = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/company/envit/",
    },
    {
      title: "Twitter",
      href: "https://x.com/EnvitLtd",
    },
    {
      title: "Email",
      href: "mailto:info@envit.si",
    },
  ];
  return (
    <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-background dark:bg-neutral-950 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start  md:px-8">
        <div>
          <div className="mr-0 md:mr-4  md:flex mb-4">
            <Logo />
          </div>

          <div className="mt-2 ml-2">
            &copy; copyright Envit Ltd. 2024. All rights reserved.
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-start mt-10 sm:mt-0 md:mt-0">
          <div className="flex justify-center space-y-4 flex-col w-full">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
              Company
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
              {pages.map((page, idx) => (
                <li key={"pages" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-text-neutral-800 "
                    href={page.href}
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
              Services
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
              {services.map((service, idx) => (
                <li key={"service" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-text-neutral-800 "
                    href={service.href}
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
              Resources
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
              {resources.map((resource, idx) => (
                <li key={"resource" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-text-neutral-800 "
                    href={resource.href}
                  >
                    {resource.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
              Connect
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
              {socials.map((social, idx) => (
                <li key={"social" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-text-neutral-800 "
                    href={social.href}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {social.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
    >
      <Image src="/logo2.png" alt="logo" width={100} height={100} />
    </Link>
  );
};
