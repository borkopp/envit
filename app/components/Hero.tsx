import Link from "next/link";
import styles from "@/styles/Banner.module.css";
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <section className="relative h-screen" id="home">
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div
        className={`${styles.videoBackground} absolute inset-0 overflow-hidden`}
      >
        <video
          id="background-video"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/123.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container mx-auto px-4 h-full flex items-center justify-start relative z-20">
        <div className="text-white text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Restoring <br />
            <span className="text-green-500">Degraded Land</span> for <br />
            <span className="text-green-500">Green Transition</span> Worldwide
          </h1>
          <Link
            href="#blog"
            className="inline-block bg-green-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300"
          >
            Read More
            <IoIosArrowDown className="inline-block ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
