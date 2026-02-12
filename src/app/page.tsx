"use client";

import { About } from "@/components/sections/about/About";
import { Contact } from "@/components/sections/contact/Contact";
import { Hero } from "@/components/sections/hero/Hero";
import { Projects } from "@/components/sections/project/Projects";
import { Certifications } from "@/components/sections/certifications/Certifications";

const HomePage = () => {
  return (
    <main className="">
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
};
export default HomePage;
