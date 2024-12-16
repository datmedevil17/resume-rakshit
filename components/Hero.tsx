"use client";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import DownloadResume from "./ui/DownloadResume";
import Image from "next/image";
import BGimage from "@/public/images/background.jpg";
import { GridBeam } from "./ui/GridBeam";
import { FaArrowDown } from "react-icons/fa6";
import Star from "@/public/images/emojistar.png";
import Helix from "@/public/images/cube-helix.png";
import Pyramid from "@/public/images/pyramid.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="h-screen relative bg-[#0e0e0e] overflow-hidden flex flex-col items-center justify-center px-4">
      <Image
        src={BGimage}
        alt="Background"
        className="absolute md:top-1/2 bottom-0"
      />

      <div className="absolute top-8 right-8 z-10">
        <DownloadResume />
      </div>

      <div className="">
        <motion.img
          src={Star.src}
          alt="Star Image"
          className="absolute md:top-24 sm:right-8 xl:right-36 size-48 lg:size-60 xl:size-72 top-16 -right-16 sm:block hidden"
          animate={{
            translateY: [-30, 30],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 3,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src={Pyramid.src}
          alt="Pyramid Image"
          className="absolute size-36 top-32 -right-4 sm:hidden block"
          animate={{
            translateY: [-30, 30],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 3,
            ease: "easeInOut",
          }}
        />

        <motion.img
          src={Helix.src}
          alt="Helix Image"
          className="absolute size-48 lg:size-60 xl:size-72 bottom-32 left-4 xl:left-16 2xl:left-24 hidden md:block"
          animate={{
            translateY: [30, -30],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </div>

      <GridBeam className="flex items-center justify-center flex-col max-w-lg h-1/2">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 relative z-10 text-center font-recoleta">
            Raj Rakshit Shukla
          </h1>

          <div className="text-xl lg:text-2xl text-neutral-400 mb-4 relative z-10 font-medium text-center">
            Full Stack Web3 Developer & UI/UX Designer
          </div>
          <div className="flex justify-center items-center gap-4 relative z-10">
            <a
              href="https://github.com/datmedevil17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl hover:scale-110" />
            </a>
            <a
              href="https://www.linkedin.com/in/rakshit-shukla/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-2xl hover:scale-110" />
            </a>
            <a
              href="mailto:rakshitshukla17@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail className="text-2xl hover:scale-110" />
            </a>
          </div>
        </div>
      </GridBeam>

      <div className="absolute bottom-10 mx-auto z-10">
        <FaArrowDown className="bg-neutral-800 rounded-full animate-bounce w-8 h-8 p-2" />
      </div>
    </div>
  );
}
