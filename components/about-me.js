"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function AboutMe() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hi, I&apos;m Maxime Pagnoulle, a passionate{" "}
        <span className="font-medium">Software Developer</span> striving to
        bring ideas to life by coding.
      </p>
      <p>
        I specialize in software engineering, full stack web development, mobile
        application design and embedded systems. My favorite part in coding is
        the problem-solving aspect. I love the feeling of finally figuring out a
        solution to a problem. I am always looking to learn new technologies.
      </p>
      <p className="pt-4">
        And when I&apos;m not in front of the screen I like to go for runs, the gym
        or enjoy a nice meal out with my friends.
      </p>
      <p className="pt-4">
        I&apos;m currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a {" "}
        <span className="font-medium">Software Developer</span>.
      </p>
    </motion.section>
  );
}
