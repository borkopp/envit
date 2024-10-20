"use client";
import React, {useState} from "react";
import {HoveredLink, Menu, MenuItem, ProductItem} from "@/components/ui/navbar-menu";
import {cn} from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-5" />
    </div>
  );
}

function Navbar({className}: {className?: string}) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          Home
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="News">
          <HoveredLink href="/news">News</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Technology">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/technology-description">Technology Description</HoveredLink>
            <HoveredLink href="/demo-resoil-plant">Demo Resoil Plant</HoveredLink>
            <HoveredLink href="/sales-program">Sales Program</HoveredLink>
            <HoveredLink href="/case-studies">Case Studies</HoveredLink>
            <HoveredLink href="/ip">IP</HoveredLink>
            <HoveredLink href="/resoil-in-brief">Resoil In Brief</HoveredLink>
            <HoveredLink href="/rnd">RND</HoveredLink>
            <HoveredLink href="/soil-washing">Soil Washing</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Us">
          <HoveredLink href="/about-us">About Us</HoveredLink>
        </MenuItem>
        {/* <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem> */}
      </Menu>
    </div>
  );
}
