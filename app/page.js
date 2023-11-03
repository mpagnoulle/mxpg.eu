import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import AboutMe from "@/components/about-me";

export default function Home() {

  return (
    <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <AboutMe />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Contact />
    </main>
  );
}