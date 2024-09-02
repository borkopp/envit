import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h6 className="text-lg font-semibold mb-4">Top Products</h6>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-green-500">
                  Managed Website
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500">
                  Manage Reputation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500">
                  Power Tools
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-500">
                  Marketing Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8">
            <h6 className="text-lg font-semibold mb-4">Newsletter</h6>
            <p className="mb-4">
              You can trust us. we only send promo offers, not a single spam.
            </p>
            <form className="flex flex-wrap">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full md:w-2/3 p-2 mb-2 md:mb-0 bg-gray-800 text-white"
              />
              <button
                type="submit"
                className="w-full md:w-1/3 bg-green-500 text-white p-2 hover:bg-green-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h6 className="text-lg font-semibold mb-4">Instragram Feed</h6>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Image
                  key={i}
                  src={`/i${i}.jpg`}
                  alt={`Instagram ${i}`}
                  width={80}
                  height={80}
                  className="w-full h-auto"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-wrap justify-between items-center">
          <p className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
            Copyright &copy; All rights reserved
          </p>
          <div className="w-full md:w-auto flex justify-center md:justify-end space-x-4">
            <Link href="#" className="text-2xl hover:text-green-500">
              <i className="fa fa-facebook"></i>
            </Link>
            <Link href="#" className="text-2xl hover:text-green-500">
              <i className="fa fa-twitter"></i>
            </Link>
            <Link href="#" className="text-2xl hover:text-green-500">
              <i className="fa fa-dribbble"></i>
            </Link>
            <Link href="#" className="text-2xl hover:text-green-500">
              <i className="fa fa-behance"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
