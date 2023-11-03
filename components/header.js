"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] fixed top-0 sm:top-6 w-full flex flex-col items-center">
      <motion.div
        className="flex flex-col h-[3.4rem] w-full rounded-none border items-center justify-center border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[28rem] sm:rounded-xl dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1  }}
        transition={{
          duration: 0.7,
          ease: "backOut",
        }}
      >

      <nav className="flex py-2 h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className=" bg-gray-700 bg-opacity-5 rounded-lg absolute inset-0 -z-10 dark:bg-opacity-30"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      </motion.div>
    </header>
  );
}
