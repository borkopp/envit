"use client";
import {cn} from "@/lib/utils";
import {IconChevronDown, IconMenu2, IconX} from "@tabler/icons-react";
import {motion, AnimatePresence} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";

interface NavItem {
  name: string;
  link: string;
  children?: NavItem[];
}

export const Navbar = () => {
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
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </div>
  );
};

const DesktopNav = ({navItems}: any) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <motion.div
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-white px-4 py-2 lg:flex dark:bg-neutral-950",
        "sticky inset-x-0 top-40"
      )}>
      <Logo />
      <div className="hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2">
        <Menu setActive={setActive}>
          {navItems.map((item: NavItem, index: number) => {
            if (item.children) {
              return (
                <MenuItem key={index} setActive={setActive} active={active} item={item.name}>
                  <div className="flex flex-col space-y-4 text-sm">
                    {item.children.map((child: NavItem, childIndex: number) => (
                      <HoveredLink key={childIndex} href={child.link}>
                        {child.name}
                      </HoveredLink>
                    ))}
                  </div>
                </MenuItem>
              );
            } else {
              return (
                <Link
                  key={index}
                  href={item.link}
                  className="cursor-pointer text-neutral-700 hover:opacity-[0.9] py-4 px-2 font-medium transition duration-300 dark:text-neutral-300">
                  {item.name}
                </Link>
              );
            }
          })}
        </Menu>
      </div>
      <button className="hidden rounded-full bg-black px-8 py-2 text-sm font-bold text-white shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.4)_inset] md:block dark:bg-white dark:text-black">
        Book a call
      </button>
    </motion.div>
  );
};

const MobileNav = ({navItems}: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        animate={{borderRadius: open ? "4px" : "2rem"}}
        key={String(open)}
        className="relative mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-white px-4 py-2 lg:hidden dark:bg-neutral-950">
        <div className="flex w-full flex-row items-center justify-between">
          <Logo />
          {open ? (
            <IconX className="text-black dark:text-white" onClick={() => setOpen(!open)} />
          ) : (
            <IconMenu2 className="text-black dark:text-white" onClick={() => setOpen(!open)} />
          )}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              className="absolute inset-x-0 top-16 z-20 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 dark:bg-neutral-950">
              {navItems.map((navItem: any, idx: number) => (
                <div key={`navItem-${idx}`} className="w-full">
                  {navItem.children ? (
                    <MobileChildNavItems navItem={navItem} />
                  ) : (
                    <Link href={navItem.link} className="relative text-neutral-600 dark:text-neutral-300">
                      <motion.span className="block">{navItem.name}</motion.span>
                    </Link>
                  )}
                </div>
              ))}
              <button className="w-full rounded-lg bg-black px-8 py-2 font-medium text-white shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.4)_inset] dark:bg-white dark:text-black">
                Book a call
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const MobileChildNavItems = ({navItem}: {navItem: any}) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div className="overflow-hidden">
      <button onClick={() => setOpen(!open)} className="relative flex w-full justify-between text-neutral-600 dark:text-neutral-300">
        <motion.span className="block">{navItem.name}</motion.span>
        <IconChevronDown className="text-neutral-700 dark:text-neutral-300" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{height: 0, opacity: 0}} animate={{height: "auto", opacity: 1}} exit={{height: 0}} className="pl-4">
            {navItem.children.map((child: any, childIdx: number) => (
              <Link key={`child-${childIdx}`} href={child.link} className="relative text-neutral-600 dark:text-neutral-300">
                <motion.span className="block">{child.name}</motion.span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Logo = () => {
  return (
    <Link href="/" className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black">
      <Image src="/logo-black.png" alt="logo" width={100} height={100} />
    </Link>
  );
};

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p transition={{duration: 0.3}} className="cursor-pointer text-neutral-700 hover:opacity-[0.9] dark:text-neutral-300">
        {item}
      </motion.p>
      {active !== null && (
        <motion.div initial={{opacity: 0, scale: 0.85, y: 10}} animate={{opacity: 1, scale: 1, y: 0}} transition={transition}>
          {active === item && (
            <div className="absolute left-1/2 top-[calc(100%_+_0.2rem)] -translate-x-1/2 transform pt-4">
              <div className="">
                <motion.div
                  transition={transition}
                  layoutId="active" // layoutId ensures smooth animation
                  className="mt-4 overflow-hidden rounded-2xl bg-white shadow-xl backdrop-blur-sm dark:bg-neutral-950">
                  <motion.div
                    layout // layout ensures smooth animation
                    className="h-full w-max p-4">
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({setActive, children}: {setActive: (item: string | null) => void; children: React.ReactNode}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative flex justify-center space-x-4 rounded-full bg-white px-4 py-3 dark:bg-neutral-950">
      {children}
    </nav>
  );
};

export const ProductItem = ({title, description, href, src}: {title: string; description: string; href: string; src: string}) => {
  return (
    <Link href={href} className="flex gap-4">
      <Image src={src} width={140} height={70} alt={title} className="flex-shrink-0 rounded-md shadow-2xl" />
      <div>
        <h4 className="mb-1 text-base font-normal text-black dark:text-white">{title}</h4>
        <p className="max-w-[10rem] text-sm text-neutral-700 dark:text-neutral-300">{description}</p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({children, ...rest}: any) => {
  return (
    <Link {...rest} className="text-neutral-700 hover:text-black dark:text-neutral-200">
      {children}
    </Link>
  );
};
