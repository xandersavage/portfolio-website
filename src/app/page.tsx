import { About } from "@/components/sections/about/About";
import { Hero } from "@/components/sections/hero/Hero";
import { Projects } from "@/components/sections/project/Projects";

const HomePage = () => {
  return (
    <main className="">
      <Hero />
      <About />
      <Projects />
    </main>
  );
};
export default HomePage;
