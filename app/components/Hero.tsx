"use client";
import styles from "@/styles/Banner.module.css";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { useRef, useState } from "react";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative h-[calc(100vh-64px)]" id="home">
      <div
        className={`${styles.videoBackground} absolute inset-0 overflow-hidden`}
      >
        <video
          id="background-video"
          className="w-full h-full object-cover"
          autoPlay
          muted={isMuted}
          loop
          ref={videoRef}
        >
          <source src="/envit-presentation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4 z-30">
          <button
            onClick={toggleMute}
            className="bg-white text-black py-2 px-4 rounded-full text-sm font-semibold hover:bg-gray-200 transition duration-300 flex items-center"
          >
            {isMuted ? (
              <VscMute className="mr-2" />
            ) : (
              <VscUnmute className="mr-2" />
            )}
            {isMuted ? "Unmute" : "Mute"}
          </button>
        </div>
      </div>
      {/* <div className="container mx-auto px-4 h-full flex items-center justify-start relative z-20">
        <div className="text-white">
          <button
            onClick={toggleMute}
            className="mt-4 bg-white text-black py-2 px-4 rounded-full text-sm font-semibold hover:bg-gray-200 transition duration-300"
          >
            {isMuted ? "Unmute" : "Mute"}
          </button>
          {/* <h1 className="text-4xl md:text-6xl font-bold mb-4">
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
      </div> */}
    </section>
  );
};

export default Hero;
