"use client";
import {useState, useEffect} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Image from "next/image";
import {ArrowRight, Menu, X, ChevronDown} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

const NewNavbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const isActive = (path: string) => {
    return pathname === path ? "text-primary font-semibold" : "text-black hover:text-primary";
  };

  useEffect(() => {
    // Mount animation
    setMounted(true);

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const handleLinkClick = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <nav
      className={`
        fixed left-1/2 -translate-x-1/2 z-50 font-lato
        transition-all duration-700 ease-in-out
        ${visible ? "top-5" : "-top-[140%]"}
        ${mounted ? "opacity-100" : "opacity-0"}
      `}>
      <div 
        className={`
          bg-white bg-opacity-90 shadow-lg
          transition-all duration-700 ease-in-out
          ${mounted ? "w-[75vw] rounded-full" : "w-0 rounded-none"}
          origin-center overflow-hidden
        `}
      >
        <div 
          className={`
            max-w-7xl mx-auto px-4 sm:px-6 lg:px-4
            transition-all duration-700 ease-in-out
            ${mounted ? "opacity-100" : "opacity-0"}
          `}
        >
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image src="/logo-black.png" alt="Envit Logo" width={100} height={40} objectFit="contain" />
              </Link>
            </div>
            <div className="hidden md:flex items-center">
              <div className="flex items-baseline space-x-4">
                <Link href="/" className={`px-3 py-2 rounded-md text-sm ${isActive("/")}`}>
                  Home
                </Link>
                <Link href="/news" className={`px-3 py-2 rounded-md text-sm ${isActive("/news")}`}>
                  News
                </Link>
                <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
                  <DropdownMenuTrigger className={`px-3 py-2 rounded-md text-sm ${isActive("/technology")} flex items-center gap-1`}>
                    Technology
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="flex flex-col">
                    {[
                      {href: "/technology-description", label: "Technology Description"},
                      {href: "/demo-resoil-plant", label: "Demo Resoil Plant"},
                      {href: "/sales-program", label: "Sales Program"},
                      {href: "/case-studies", label: "Case Studies"},
                      {href: "/ip", label: "IP"},
                      {href: "/resoil-in-brief", label: "Resoil In Brief"},
                      {href: "/rnd", label: "R&D"},
                      {href: "/soil-washing", label: "Soil Washing"},
                    ].map((item) => (
                      <DropdownMenuItem key={item.href} onSelect={() => setDropdownOpen(false)}>
                        <Link
                          href={item.href}
                          className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${isActive(item.href)}`}
                          onClick={handleLinkClick}>
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link href="/faq" className={`px-3 py-2 rounded-md text-sm ${isActive("/faq")}`}>
                  FAQ
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Link
                href="/about-us"
                className="bg-primary text-white flex items-center px-4 py-2 rounded-full text-sm font-medium hover:bg-primary-hover transition duration-300">
                About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="md:hidden self-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-black">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu with animation */}
        <div 
          className={`
            md:hidden absolute w-full top-full left-0 shadow-lg
            transition-all duration-300 ease-in-out
            ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
          `}
        >
          <div className="bg-white rounded-b-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className={`block px-3 py-2 rounded-md text-base ${isActive("/")}`} onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/news" className={`block px-3 py-2 rounded-md text-base ${isActive("/news")}`} onClick={() => setIsOpen(false)}>
                News
              </Link>
              <details className="group" onClick={(e) => e.preventDefault()}>
                <summary
                  className={`list-none px-3 py-2 rounded-md text-base flex items-center justify-between cursor-pointer ${isActive("/technology")}`}>
                  Technology
                  <ChevronDown 
                    className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" 
                  />
                </summary>
                <div className="pl-4 space-y-2 mt-2">
                  {[
                    {href: "/technology-description", label: "TECHNOLOGY DESCRIPTION"},
                    {href: "/demo-resoil-plant", label: "DEMO RESOIL PLANT"},
                    {href: "/sales-program", label: "SALES PROGRAM"},
                    {href: "/case-studies", label: "CASE STUDIES"},
                    {href: "/ip", label: "IP"},
                    {href: "/resoil-in-brief", label: "RESOIL IN BRIEF"},
                    {href: "/rnd", label: "R&D"},
                    {href: "/soil-washing", label: "SOIL WASHING"},
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-sm ${isActive(item.href)}`}
                      onClick={handleLinkClick}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </details>
              <Link href="/faq" className={`block px-3 py-2 rounded-md text-base ${isActive("/faq")}`} onClick={() => setIsOpen(false)}>
                FAQ
              </Link>
              <Link
                href="/about-us"
                className="block bg-primary text-white px-3 py-2 rounded-md text-base font-medium hover:bg-primary-hover transition duration-300"
                onClick={() => setIsOpen(false)}>
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NewNavbar;
