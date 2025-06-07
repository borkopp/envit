"use client";

import {cn} from "@/lib/utils";
import {IconChevronDown, IconMenu2, IconX} from "@tabler/icons-react";
import {motion, AnimatePresence} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React, {useState, useEffect} from "react";

interface NavItem {
  name: string;
  link: string;
  children?: NavItem[];
}

export const NewNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "NEWS",
      link: "/news",
    },
    {
      name: "TECHNOLOGY",
      link: "#",
      children: [
        {name: "TECHNOLOGY DESCRIPTION", link: "/technology-description"},
        {name: "SALES PROGRAM", link: "/sales-program"},
        {name: "CASE STUDIES", link: "/case-studies"},
        {name: "IP", link: "/ip"},
        {name: "RESOIL IN BRIEF", link: "/resoil-in-brief"},
        {name: "R&D", link: "/rnd"},
        {name: "SOIL WASHING WITH RESOIL®", link: "/soil-washing"},
      ],
    },
    {
      name: "FAQ",
      link: "/faq",
    },
    {
      name: "ABOUT US",
      link: "/about-us",
    },
  ];

  return (
    <div className="w-full">
      <DesktopNav navItems={navItems} scrolled={scrolled} isHomepage={isHomepage} />
      <MobileNav navItems={navItems} scrolled={scrolled} isHomepage={isHomepage} />
    </div>
  );
};

const DesktopNav = ({navItems, scrolled, isHomepage}: {navItems: NavItem[]; scrolled: boolean; isHomepage: boolean}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <motion.div
      initial={{backgroundColor: "rgba(255, 255, 255, 0)"}}
      animate={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0)",
        backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
      }}
      transition={{duration: 0.3, ease: "easeInOut"}}
      className={cn(
        "fixed top-0 left-0 right-0 z-[60] mx-auto hidden w-full flex-row items-center justify-between px-8 py-4 lg:flex",
        scrolled && "shadow-lg border-b border-gray-100"
      )}>
      <Logo scrolled={scrolled} isHomepage={isHomepage} />

      <div className="flex flex-row items-center justify-end space-x-8">
        {navItems.map((item: NavItem, index: number) => {
          if (item.children) {
            return (
              <DropdownItem
                key={index}
                item={item}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
                scrolled={scrolled}
                isHomepage={isHomepage}
              />
            );
          } else {
            return (
              <NavLink key={index} href={item.link} scrolled={scrolled} isHomepage={isHomepage}>
                {item.name}
              </NavLink>
            );
          }
        })}
      </div>
    </motion.div>
  );
};

const NavLink = ({href, children, scrolled, isHomepage}: {href: string; children: React.ReactNode; scrolled: boolean; isHomepage: boolean}) => {
  return (
    <Link href={href} className="relative group">
      <motion.span
        className={cn(
          "text-sm font-semibold transition-colors duration-300",
          scrolled
            ? "text-gray-700 group-hover:text-black dark:text-gray-300 dark:group-hover:text-white"
            : isHomepage
              ? "text-white group-hover:text-gray-200"
              : "text-gray-700 group-hover:text-black dark:text-gray-300 dark:group-hover:text-white"
        )}
        whileHover={{y: -2}}
        transition={{duration: 0.2}}>
        {children}
      </motion.span>
      <motion.div
        className={cn(
          "absolute -bottom-1 left-0 h-0.5 origin-left",
          scrolled ? "bg-black dark:bg-white" : isHomepage ? "bg-white" : "bg-black dark:bg-white"
        )}
        initial={{scaleX: 0}}
        whileHover={{scaleX: 1}}
        transition={{duration: 0.3, ease: "easeInOut"}}
        style={{width: "100%"}}
      />
    </Link>
  );
};

const DropdownItem = ({
  item,
  activeDropdown,
  setActiveDropdown,
  scrolled,
  isHomepage,
}: {
  item: NavItem;
  activeDropdown: string | null;
  setActiveDropdown: (item: string | null) => void;
  scrolled: boolean;
  isHomepage: boolean;
}) => {
  const isActive = activeDropdown === item.name;

  return (
    <div className="relative group" onMouseEnter={() => setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
      <motion.button
        className={cn(
          "flex items-center gap-1 text-sm font-semibold transition-colors duration-300",
          scrolled
            ? "text-gray-700 group-hover:text-black dark:text-gray-300 dark:group-hover:text-white"
            : isHomepage
              ? "text-white group-hover:text-gray-200"
              : "text-gray-700 group-hover:text-black dark:text-gray-300 dark:group-hover:text-white"
        )}
        whileHover={{y: -2}}
        transition={{duration: 0.2}}>
        {item.name}
        <motion.div animate={{rotate: isActive ? 180 : 0}} transition={{duration: 0.3, ease: "easeInOut"}}>
          <IconChevronDown size={16} />
        </motion.div>
      </motion.button>

      <motion.div
        className={cn(
          "absolute -bottom-1 left-0 h-0.5 origin-left",
          scrolled ? "bg-black dark:bg-white" : isHomepage ? "bg-white" : "bg-black dark:bg-white"
        )}
        initial={{scaleX: 0}}
        whileHover={{scaleX: 1}}
        transition={{duration: 0.3, ease: "easeInOut"}}
        style={{width: "100%"}}
      />

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{opacity: 0, y: 10, scale: 0.95}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={{opacity: 0, y: 10, scale: 0.95}}
            transition={{duration: 0.2, ease: "easeOut"}}
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 transform">
            <div className="rounded-xl bg-white p-4 shadow-2xl border border-gray-100 backdrop-blur-sm dark:bg-gray-900 dark:border-gray-800">
              <div className="flex flex-col space-y-3 min-w-[240px]">
                {item.children?.map((child: NavItem, childIndex: number) => (
                  <motion.div
                    key={childIndex}
                    initial={{opacity: 0, x: -10}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.2, delay: childIndex * 0.05}}>
                    <Link
                      href={child.link}
                      className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-gray-50 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white">
                      {child.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileNav = ({navItems, scrolled, isHomepage}: {navItems: NavItem[]; scrolled: boolean; isHomepage: boolean}) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{backgroundColor: "rgba(255, 255, 255, 0)"}}
      animate={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0)",
        backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
      }}
      transition={{duration: 0.3, ease: "easeInOut"}}
      className={cn(
        "fixed top-0 left-0 right-0 z-[60] mx-auto flex w-full flex-col items-center justify-between px-4 py-4 lg:hidden",
        scrolled && "shadow-lg border-b border-gray-100"
      )}>
      <div className="flex w-full flex-row items-center justify-between">
        <Logo scrolled={scrolled} isHomepage={isHomepage} />
        <motion.button whileTap={{scale: 0.95}} onClick={() => setOpen(!open)} className="p-2">
          {open ? (
            <IconX
              className={cn(
                "transition-colors duration-300",
                scrolled ? "text-black dark:text-white" : isHomepage ? "text-white" : "text-black dark:text-white"
              )}
              size={24}
            />
          ) : (
            <IconMenu2
              className={cn(
                "transition-colors duration-300",
                scrolled ? "text-black dark:text-white" : isHomepage ? "text-white" : "text-black dark:text-white"
              )}
              size={24}
            />
          )}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: "auto"}}
            exit={{opacity: 0, height: 0}}
            transition={{duration: 0.3, ease: "easeInOut"}}
            className="w-full overflow-hidden">
            <div className="flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white/95 backdrop-blur-sm px-4 py-8 mt-4 border border-gray-100 dark:bg-gray-900/95 dark:border-gray-800">
              {navItems.map((navItem: NavItem, idx: number) => (
                <motion.div
                  key={`navItem-${idx}`}
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 0.2, delay: idx * 0.1}}
                  className="w-full">
                  {navItem.children ? (
                    <MobileDropdownItem navItem={navItem} />
                  ) : (
                    <Link
                      href={navItem.link}
                      className="block text-gray-700 hover:text-black transition-colors duration-200 dark:text-gray-300 dark:hover:text-white"
                      onClick={() => setOpen(false)}>
                      {navItem.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const MobileDropdownItem = ({navItem}: {navItem: NavItem}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <motion.button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-gray-700 hover:text-black transition-colors duration-200 dark:text-gray-300 dark:hover:text-white"
        whileTap={{scale: 0.98}}>
        <span>{navItem.name}</span>
        <motion.div animate={{rotate: open ? 180 : 0}} transition={{duration: 0.3, ease: "easeInOut"}}>
          <IconChevronDown size={20} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: "auto"}}
            exit={{opacity: 0, height: 0}}
            transition={{duration: 0.3, ease: "easeInOut"}}
            className="overflow-hidden">
            <div className="pl-4 pt-3 space-y-2">
              {navItem.children?.map((child: NavItem, childIdx: number) => (
                <motion.div
                  key={`child-${childIdx}`}
                  initial={{opacity: 0, x: -10}}
                  animate={{opacity: 1, x: 0}}
                  transition={{duration: 0.2, delay: childIdx * 0.05}}>
                  <Link
                    href={child.link}
                    className="block py-2 text-sm text-gray-600 hover:text-black transition-colors duration-200 dark:text-gray-400 dark:hover:text-white">
                    {child.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Logo = ({scrolled, isHomepage}: {scrolled: boolean; isHomepage: boolean}) => {
  return (
    <Link href="/" className="relative z-20 flex items-center space-x-2 px-2 py-1">
      <motion.div whileHover={{scale: 1.05}} transition={{duration: 0.2}}>
        <Image
          src="/logo2.png"
          alt="logo"
          width={100}
          height={100}
          className={cn("transition-all duration-300", !scrolled && isHomepage && "brightness-0 invert")}
        />
      </motion.div>
    </Link>
  );
};
