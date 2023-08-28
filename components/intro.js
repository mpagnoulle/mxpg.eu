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
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col w-[min(100%,38rem)] text-center items-center sm:mb-0"
      style={{ height: "calc(100vh - 10rem)" }}
    >
      <div className="flex grow flex-row w-full items-center">
        <div className="flex-auto">
          <motion.h1
            className="mb-10 mt-4 px-4 text-2xl text-left font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="block font-bold">Hello,</span>
            <span className="block font-bold">I&apos;m Maxime</span>
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
              delay: 0.2,
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
            className="group px-7 py-3 mx-1 flex items-center gap-2 button-lg"
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
            className="flex-none backdrop-blur-[0.5rem] flex items-center gap-2 mx-1 p-3.5 button-lg"
            href="https://www.linkedin.com/in/mpagnoulle/"
            target="_blank"
          >
            <SiLinkedin />
          </a>

          <a
            className="flex-none backdrop-blur-[0.5rem] flex items-center gap-2 mx-1 p-3.5 button-lg"
            href="https://github.com/mpagnoulle"
            target="_blank"
          >
            <SiGithub />
          </a>
        </div>
      </motion.div>
      <div
        className="flex grow items-center justify-center w-full">
        <NowPlaying />
      </div>
    </section>
  );
}
