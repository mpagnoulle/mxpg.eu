"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { textToIconName } from "@/lib/utils";
import * as icons from 'simple-icons';
import SVG from 'react-inlinesvg';
import { CSharpIcon } from "@/lib/icons";


import data from '../data.json'
const { skills } = data

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    duration: 0.5,
    transition: {
      delay: 0.05 * index,
      ease: "easeInOut",
    },
  }),
};

const getIcon = (iconName) => {
  const icon = icons["si" + textToIconName(iconName)];

  if(iconName === "C#") {
    const iconSVG = CSharpIcon
    const iconColor = "#803788";

    return {
      iconSVG: iconSVG,
      color: iconColor
    };
  }
  else if (icon) {
    const iconSVG = icon.svg
    const iconColor = icon.hex;

    return {
      iconSVG: iconSVG,
      color: "#" + iconColor
    };
  } else {
    return {
      iconSVG: '<svg><path d="M0,0"/></svg>',
      color: "#000000"
    };
  }
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.33)

  return (
    <section
      id="skills"
      ref={ref}
      className="max-w-[53rem] scroll-mt-28 text-center"
    >
      <SectionHeading>Skills</SectionHeading>
      {
        Object.getOwnPropertyNames(skills).map((title, id) =>
        <React.Fragment key={title}>
          <motion.h3 
            className="text-xl capitalize m-8 text-center" 
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={id}
            viewport={{
              once: true,
          }}>
            {title}
          </motion.h3>
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {skills[title].map((skill, index) => {
              const { iconSVG, color: iconColor } = getIcon(skill);
              return (
                <motion.li
                  className="rounded-xl px-3 py-3 has-tooltip flex flex-col items-center"
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                  key={skill + index}
                  style={{ backgroundColor: iconColor, height: "64px", width: "64px" }}
                >
                  <SVG src={iconSVG} fill="#FFF" style={{ height: "40px", width: "40px" }} />
                  <span class='tooltip relative mt-11 p-2 text-sm border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.10] backdrop-blur-[0.5rem] rounded-lg dark:text-white dark:text-opacity-80 dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 transition ease-in-out opacity-0'>{skill}</span>
                </motion.li>
              )})}
          </ul>
        </React.Fragment>
        ) 
      }
    </section>
  )
}