"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuClass, setMenuClass] = useState("mobile-menu-enter");
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      setMenuClass("mobile-menu-enter");
      setTimeout(
        () => setMenuClass("mobile-menu-enter mobile-menu-enter-active"),
        10
      );
    } else {
      setMenuClass("mobile-menu-enter");
    }
  }, [isOpen]);

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return pathname === path
      ? "text-green-500"
      : "text-black hover:text-green-500";
  };

  const isTechnologyActive = () => {
    return technologyItems.some((item) => pathname === item.href)
      ? "text-green-500"
      : "text-black hover:text-green-500";
  };

  const technologyItems = [
    { href: "/technology-description", label: "TECHNOLOGY DESCRIPTION" },
    { href: "/demo-resoil-plant", label: "DEMO RESOIL PLANT" },
    { href: "/sales-program", label: "SALES PROGRAM" },
    { href: "/case-studies", label: "CASE STUDIES" },
    { href: "/ip", label: "IP" },
    { href: "/resoil-in-brief", label: "RESOIL IN BRIEF" },
    { href: "/rnd", label: "RND" },
    { href: "/soil-washing", label: "SOIL WASHING" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-2">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <Image
                  src="/logo2.png"
                  alt="Logo"
                  className="h-full"
                  width={80}
                  height={80}
                  objectFit="contain"
                  quality={100}
                />
              </Link>
            </div>
          </div>
          <div className="hidden text-sm md:flex items-center space-x-2">
            <Link
              href="/#home"
              className={`py-4 px-2 font-bold transition duration-300 ${isActive("/")}`}
            >
              HOME
            </Link>
            <Link
              href="/news"
              className={`py-4 px-2 font-bold transition duration-300 ${isActive("/news")}`}
            >
              NEWS
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`py-4 px-2 ring-0 flex items-center border-0 border-none font-bold transition duration-300 ${isTechnologyActive()}`}
              >
                TECHNOLOGY
                <RiArrowDropDownLine size={22} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {technologyItems.map((item) => (
                  <Link
                    href={item.href}
                    key={item.href}
                    className={`w-full ${isActive(item.href)}`}
                  >
                    <DropdownMenuItem className="px-6 py-4">
                      <strong>{item.label}</strong>
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/faq"
              className={`py-4 px-2 font-bold transition duration-300 ${isActive("/faq")}`}
            >
              FAQ
            </Link>
            <Link
              href="/about-us"
              className={`py-4 px-2 font-bold transition duration-300 ${isActive("/about-us")}`}
            >
              ABOUT US
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6 text-black font-bold hover:text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden ${menuClass}`}>
        <Link
          href="/#home"
          className="block py-2 px-4 text-sm hover:bg-green-500 font-medium hover:text-white text-black transition duration-300"
          onClick={closeNavbar}
        >
          HOME
        </Link>
        <Link
          href="/news"
          className="block py-2 px-4 text-sm hover:bg-green-500 font-medium hover:text-white text-black transition duration-300"
          onClick={closeNavbar}
        >
          NEWS
        </Link>
        <div className="py-2 flex px-4 text-sm text-black font-bold">
          TECHNOLOGY
          <RiArrowDropDownLine size={22} />
        </div>
        {technologyItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block py-2 px-8 text-sm hover:bg-green-500 font-medium hover:text-white text-black transition duration-300"
            onClick={closeNavbar}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/faq"
          className="block py-2 px-4 text-sm hover:bg-green-500 font-medium hover:text-white text-black transition duration-300"
          onClick={closeNavbar}
        >
          FAQ
        </Link>
        <Link
          href="/about-us"
          className="block py-2 px-4 text-sm hover:bg-green-500 font-medium hover:text-white text-black transition duration-300"
          onClick={closeNavbar}
        >
          ABOUT US
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
