"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import ReactTyped from "react-typed";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { SiLinkedin, SiGithub } from "@icons-pack/react-simple-icons";
import NowPlaying from "./now-playing";

import data from "../data.json";
const { intro } = data;

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-20 sm:mt-28 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-[100rem] justify-center"
    >
      <div className="flex flex-row">
        <div className="flex-auto">
          <motion.h1
            className="mb-10 mt-4 px-4 text-2xl text-left font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="block font-bold">Hello,</span>
            <span className="block font-bold">I'm Maxime</span>
            <ReactTyped
              strings={intro.typed}
              typeSpeed={60}
              backSpeed={25}
              loop
              className="text-lg sm:text-xl"
            />
          </motion.h1>
        </div>
        <div className="flex-none items-right justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <div className="relative w-[100px] h-[123px] sm:w-[150px] sm:h-[184px]">
              <Image
                src="/me_avatar.png"
                alt="Maxime's portrait"
                fill={true}
                quality={100}
                priority={true}
                className="w-[100px] h-[123px] sm:w-[150px] sm:h-[184px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 my-10 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="flex-initial">
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 mx-1 flex items-center gap-2 rounded-xl outline-none focus:scale-[1.05] hover:scale-[1.05] hover:bg-gray-950 active:scale-100 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
        </div>
        <div className="flex-initial grid grid-cols-2 my-4">
          <a
            className="flex-none bg-white bg-opacity-80 p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 mx-1 rounded-xl focus:scale-[1.10] hover:scale-[1.10] active:scale-100 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/mpagnoulle/"
            target="_blank"
          >
            <SiLinkedin />
          </a>

          <a
            className="flex-none bg-white p-3 bg-opacity-80 text-gray-700 flex items-center gap-2 mx-1 text-[1.35rem] rounded-xl focus:scale-[1.10] hover:scale-[1.10] hover:text-gray-950 active:scale-100 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/mpagnoulle"
            target="_blank"
          >
            <SiGithub />
          </a>
        </div>
      </motion.div>
      <div
        className="flex items-center justify-center mt-20">
        <NowPlaying />
      </div>
    </section>
  );
}
