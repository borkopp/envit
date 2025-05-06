"use client";
import Link from "next/link";
import {useEffect, useState} from "react";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {RiArrowDropDownLine} from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuClass, setMenuClass] = useState("mobile-menu-enter");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setMenuClass("mobile-menu-enter");
      setTimeout(() => setMenuClass("mobile-menu-enter mobile-menu-enter-active"), 10);
    } else {
      setMenuClass("mobile-menu-enter");
    }
  }, [isOpen]);

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return pathname === path ? "text-primary" : "text-black hover:text-primary";
  };

  const isTechnologyActive = () => {
    return technologyItems.some((item) => pathname === item.href) ? "text-primary" : "text-black hover:text-primary";
  };

  const technologyItems = [
    {href: "/technology-description", label: "TECHNOLOGY DESCRIPTION"},
    {href: "/sales-program", label: "SALES PROGRAM"},
    {href: "/case-studies", label: "CASE STUDIES"},
    {href: "/ip", label: "IP"},
    {href: "/resoil-in-brief", label: "RESOIL IN BRIEF"},
    {href: "/rnd", label: "R&D"},
    {href: "/soil-washing", label: "SOIL WASHING WITH RESOIL®"},
  ];

  const handleNavigation = (href: string) => {
    closeNavbar();
    router.push(href);
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    closeNavbar();
    router.push("/");
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-[85rem] mx-auto px-4 py-2">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" onClick={handleHomeClick} className="flex items-center py-2">
                <Image src="/logo-black.png" alt="Envit Logo" className="h-full" width={100} height={100} objectFit="contain" quality={100} />
              </Link>
            </div>
          </div>
          <div className="hidden text-sm md:flex items-center space-x-2">
            <Link href="/" onClick={handleHomeClick} className={`py-4 px-2 font-bold transition duration-300 ${isActive("/")}`}>
              HOME
            </Link>
            <button onClick={() => handleNavigation("/news")} className={`py-4 px-2 font-bold transition duration-300 ${isActive("/news")}`}>
              NEWS
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`py-4 px-2 ring-0 flex items-center border-0 border-none font-bold transition duration-300 ${isTechnologyActive()}`}>
                TECHNOLOGY
                <RiArrowDropDownLine size={22} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex flex-col">
                {technologyItems.map((item) => (
                  <DropdownMenuItem key={item.href} onSelect={() => handleNavigation(item.href)}>
                    <button className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${isActive(item.href)}`}>
                      <strong>{item.label}</strong>
                    </button>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <button onClick={() => handleNavigation("/faq")} className={`py-4 px-2 font-bold transition duration-300 ${isActive("/faq")}`}>
              FAQ
            </button>
            <button onClick={() => handleNavigation("/about-us")} className={`py-4 px-2 font-bold transition duration-300 ${isActive("/about-us")}`}>
              ABOUT US
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button p-2" onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6 text-black hover:text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden ${menuClass} bg-white`}>
        <Link
          href="/"
          onClick={handleHomeClick}
          className="block py-2 px-4 text-sm hover:bg-green-500 font-medium hover:text-white text-black transition duration-300 w-full text-left">
          HOME
        </Link>
        <button
          onClick={() => handleNavigation("/news")}
          className="block py-2 px-4 text-sm hover:bg-green-500 font-medium hover:text-white text-black transition duration-300 w-full text-left">
          NEWS
        </button>
        <div className="py-2 px-4 text-sm text-black font-bold flex items-center">
          TECHNOLOGY
          <RiArrowDropDownLine size={22} />
        </div>
        {technologyItems.map((item) => (
          <button
            key={item.href}
            onClick={() => handleNavigation(item.href)}
            className="block py-2 px-8 text-sm hover:bg-green-500 font-medium hover:text-white text-black transition duration-300">
            {item.label}
          </button>
        ))}
        <button
          onClick={() => handleNavigation("/faq")}
          className="block py-2 px-4 text-sm hover:bg-green-500 font-medium hover:text-white text-black transition duration-300">
          FAQ
        </button>
        <button
          onClick={() => handleNavigation("/about-us")}
          className="block py-2 px-4 text-sm hover:bg-green-500 font-medium hover:text-white text-black transition duration-300">
          ABOUT US
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
