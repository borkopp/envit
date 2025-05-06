import {Linkedin, Youtube} from "lucide-react";
import {BsTwitterX} from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="w-full md:w-1/4 flex justify-center md:justify-start">
            <Link href="/">
              <Image src="/logo2.png" alt="ENVIT Logo" className="h-15 w-30" width={150} height={70} />
            </Link>
          </div>

          {/* Company Information */}
          <div className="w-full md:w-2/4 text-left text-sm flex justify-center">
            <div>
              <p>
                <span className="font-bold">Full official name:</span> ENVIT, environmental engineering and technologies Ltd.
              </p>
              <p>
                <span className="font-bold">Full official address:</span> Pod lipami 35, 1218 Komenda, Slovenia
              </p>
              <p>
                <span className="font-bold">VAT registration number:</span> SI67241026
              </p>
              <p>
                <span className="font-bold">Company registration number:</span> 3668541000
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 flex justify-center md:justify-end space-x-4">
            <Link 
              href="https://x.com/envitltd" 
              className="hover:text-blue-400 transition-colors" 
              aria-label="Follow us on Twitter"
              target="_blank"
              rel="noopener noreferrer">
              <BsTwitterX size={22} />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCNoq64TvmGHiUs1mku-6wIg"
              className="hover:text-red-500 transition-colors"
              aria-label="Subscribe to our YouTube channel"
              target="_blank"
              rel="noopener noreferrer">
              <Youtube size={25} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/envit/?originalSubdomain=si"
              className="hover:text-blue-600 transition-colors"
              aria-label="Connect with us on LinkedIn"
              target="_blank"
              rel="noopener noreferrer">
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
