"use client"

import React from "react"
import SectionHeading from "./section-heading"
import Project from "./project"
import { useSectionInView } from "@/lib/hooks"

import data from '../data.json'
const { projects } = data

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.25)

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
