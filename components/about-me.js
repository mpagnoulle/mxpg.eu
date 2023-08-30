"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function AboutMe() {
  const { ref } = useSectionInView("About", 0.33);

  return (
    <motion.section
      ref={ref}
      className='max-w-[45rem] leading-8 scroll-mt-28'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi, I&apos;m Maxime Pagnoulle, a passionate{" "}
        <span className="font-medium">Software Engineer</span> striving to turn ideas into user-centric applications.
      </p>
      <p>
        At a young age, I was put in front of a computer, while for many of my age that translated into playing video games, 
        my interest was very much different. I was fascinated by the technology and how it worked and I became eager to learn as much as possible. 
        I started by making websites using FrontPage, learning HTML, CSS and JavaScript in the process. 
        I then moved onto making my pages dynamic using PHP and MySQL. 
      </p>
      <p className="pt-4 italic">  
        Technology is ever-evolving and I am always looking to learn new things and taking on new challenges.
      </p>
      <p className="pt-4">
        I specialize in software engineering, full stack web development, mobile
        application development and embedded systems. Using problem-solving to turn ideas into fully functional applications.
        I love the feeling of finally being able to use the finished product and knowing that I&apos;ve helped someone by providing a solution to a problem.
      </p>
      <p className="pt-4">
        And when I&apos;m not in front of the screen I like to go for runs, the gym
        or enjoy a nice meal out with my friends.
      </p>
      <p className="pt-4">
        I&apos;m currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a {" "}
        <span className="font-medium">Software Engineer</span>.
      </p>
    </motion.section>
  );
}
