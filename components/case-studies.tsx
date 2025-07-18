"use client";

import React, {useEffect, useId, useRef, useState} from "react";
import {AnimatePresence, motion} from "motion/react";
import {useOutsideClick} from "@/hooks/use-outside-click";
import {client} from "@/sanity/lib/client";

interface CaseStudy {
  title: string;
  slug: {
    current: string;
  };
  description: string;
  thumbnail: {
    asset: {
      url: string;
    };
  };
  date: string;
  primaryLink: {
    type: "url" | "pdf";
    url?: string;
    fileUrl?: string;
  };
  secondaryLink?: {
    type: "url" | "pdf";
    url?: string;
    fileUrl?: string;
  };
}

export function ExpandableCardDemo() {
  const [active, setActive] = useState<any | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      const query = `*[_type == "caseStudy"] | order(date desc) [0...4] {
        title,
        "slug": slug.current,
        description,
        thumbnail {
          asset-> {
            url
          }
        },
        date,
        primaryLink {
          type,
          url,
          "fileUrl": file.asset->url
        },
        secondaryLink {
          type,
          url,
          "fileUrl": file.asset->url
        }
      }`;
      const result = await client.fetch(query);
      setCaseStudies(result);

      // Transform case studies into cards format
      const transformedCards = result.map((study: CaseStudy) => ({
        description: study.date,
        title: study.title,
        src: study.thumbnail.asset.url,
        ctaText: study.primaryLink?.type === "pdf" ? "View PDF" : "Read More",
        ctaLink: study.primaryLink?.type === "url" ? study.primaryLink.url : study.primaryLink?.fileUrl,
        isExternal: study.primaryLink?.type === "url" ? !study.primaryLink.url?.startsWith("/") : true,
        content: () => {
          return (
            <div>
              <p className="mb-4 font-semibold text-neutral-700 dark:text-neutral-300">Published: {study.date}</p>
              <p className="text-neutral-600 dark:text-neutral-400">{study.description}</p>
            </div>
          );
        },
      }));

      setCards(transformedCards);
    };

    fetchCaseStudies();
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="fixed inset-0 bg-black/20 h-full w-full z-10" />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}>
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-contain"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3 layoutId={`title-${active.title}-${id}`} className="font-medium text-neutral-700 dark:text-neutral-200 text-base">
                      {active.title}
                    </motion.h3>
                    <motion.p layoutId={`description-${active.description}-${id}`} className="text-neutral-600 dark:text-neutral-400 text-base">
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    href={active.ctaLink}
                    target={active.isExternal ? "_blank" : "_self"}
                    rel={active.isExternal ? "noopener noreferrer" : undefined}
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white">
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
                    {typeof active.content === "function" ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="w-full max-w-7xl mx-auto my-20 py-20 px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Title Section - 40% */}
          <div className="w-full lg:w-[40%]">
            <div className="sticky top-20">
              <h2 className="text-4xl font-medium tracking-tight text-center lg:text-left md:text-7xl bg-gradient-to-b from-neutral-800 to-neutral-600 bg-clip-text text-transparent leading-tight">
                Case Studies
              </h2>
              <p className="text-sm text-center lg:text-left mx-auto lg:mx-0 text-neutral-600 dark:text-neutral-400 mt-6 max-w-sm">
                Discover how we&apos;ve helped transform contaminated sites into thriving environments through innovative soil remediation solutions.
              </p>
            </div>
          </div>

          {/* Right Case Studies Section - 60% */}
          <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 items-start gap-4">
            {cards.map((card, index) => (
              <motion.div
                layoutId={`card-${card.title}-${id}`}
                key={card.title}
                onClick={() => setActive(card)}
                className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
                <div className="flex gap-4 flex-col w-full">
                  <motion.div layoutId={`image-${card.title}-${id}`}>
                    <img width={100} height={100} src={card.src} alt={card.title} className="h-60 w-full rounded-lg object-contain" />
                  </motion.div>
                  <div className="flex justify-center items-center flex-col">
                    <motion.h3
                      layoutId={`title-${card.title}-${id}`}
                      className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base">
                      {card.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${card.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base">
                      {card.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
