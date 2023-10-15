"use client";

import React from "react";
import { useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { textToIconName } from "@/lib/utils";
import SVG from "react-inlinesvg";
import { CSharpIcon } from "@/lib/icons";

import data from "../data.json";
const { skills } = data;

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
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

const getIcon = async (iconName) => {
  const iconSlug = textToIconName(iconName);
  const cdnUrl = `https://cdn.simpleicons.org/${iconSlug}`;

  // Special case for C# because the icon is not available on the CDN
  if (iconName === "C#") {
    const iconSVG = CSharpIcon;
    const iconColor = "#803788";

    return {
      iconSVG: iconSVG,
      iconColor: iconColor,
    };
  } else {
    try {
      // Fetch the icon from the CDN
      const response = await fetch(cdnUrl);

      if (response.ok) {
        const iconSVG = await response.text();

        // Extract color using regular expressions
        const fillMatch = iconSVG.match(/fill="([^"]+)"/);
        const strokeMatch = iconSVG.match(/stroke="([^"]+)"/);

        const color = fillMatch
          ? fillMatch[1]
          : strokeMatch
          ? strokeMatch[1]
          : "#000000";

        return {
          iconSVG: iconSVG,
          iconColor: color,
        };
      } else {
        console.error(`Failed to fetch icon: ${iconSlug}`);
        return {
          iconSVG: '<svg><path d="M0,0"/></svg>',
          iconColor: "#000000",
        };
      }
    } catch (error) {
      console.error(`Error fetching icon: ${iconSlug}`, error);
      return {
        iconSVG: '<svg><path d="M0,0"/></svg>',
        iconColor: "#000000",
      };
    }
  }
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.33);

  const [iconDataMap, setIconDataMap] = useState({});

  useEffect(() => {
    const fetchAllIcons = async () => {
      const skillsWithIcons = await Promise.all(
        Object.keys(skills).map(async (title) => {
          const iconDataPromises = skills[title].map(async (skill) => {
            try {
              const iconData = await getIcon(skill);
              return { skill, iconData };
            } catch (error) {
              console.error(`Error fetching icon for ${skill}:`, error);
              return { skill, iconData: null };
            }
          });

          const iconDataArray = await Promise.all(iconDataPromises);
          return { title, skills: iconDataArray };
        })
      );

      const iconDataResult = {};
      skillsWithIcons.forEach((skillEntry) => {
        iconDataResult[skillEntry.title] = skillEntry.skills;
      });
      setIconDataMap(iconDataResult);
    };

    fetchAllIcons();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="max-w-[53rem] scroll-mt-28 text-center"
    >
      <SectionHeading>Skills</SectionHeading>
      {Object.getOwnPropertyNames(iconDataMap).map((title, id) => (
        <React.Fragment key={title}>
          <motion.h3
            className="text-xl capitalize m-8 text-center"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={id}
            viewport={{
              once: true,
            }}
          >
            {title}
          </motion.h3>
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {iconDataMap[title].map((entry, index) => {
              const { skill, iconData } = entry;
              if (!iconData) {
                // Handle the case where the icon data could not be fetched
                return null;
              }

              const { iconSVG, iconColor } = iconData;

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
                  style={{
                    backgroundColor: iconColor,
                    height: "64px",
                    width: "64px",
                  }}
                >
                  <SVG
                    src={iconSVG}
                    fill="#FFF"
                    style={{ height: "40px", width: "40px" }}
                  />
                  <span class="tooltip relative mt-11 p-2 text-sm border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.10] backdrop-blur-[0.5rem] rounded-lg dark:text-white dark:text-opacity-80 dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 transition ease-in-out opacity-0">
                    {skill}
                  </span>
                </motion.li>
              );
            })}
          </ul>
        </React.Fragment>
      ))}
    </section>
  );
}
