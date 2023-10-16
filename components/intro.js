"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ReactTyped from "react-typed";
import { useSectionInView } from "@/lib/hooks";
import { SiLinkedin, SiGithub } from "@icons-pack/react-simple-icons";
import NowPlaying from "./now-playing";

import data from "../data.json";
const { intro } = data;

export default function Intro() {
  const { ref } = useSectionInView("Home");

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col w-[min(100%,38rem)] text-center items-center sm:mb-0 scroll-mt-[100rem]"
      style={{ height: "calc(100vh - 10rem)" }}
    >
      <div className="flex grow flex-row w-full items-center">
        <div className="flex-auto">
          <motion.h1
            className="mb-10 mt-4 text-xl text-left font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="block font-bold">Hello,</span>
            <span className="block font-bold">I&apos;m Maxime Pagnoulle</span>
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
            <div className="relative w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]">
              <Image
                src="/me.jpg"
                alt="Maxime's portrait"
                width={150}
                height={150}
                quality={90}
                priority={true}
                className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] bg-white bg-opacity-80 rounded-full shadow-lg p-1.5"
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
