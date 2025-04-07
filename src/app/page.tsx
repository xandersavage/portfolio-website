import { About } from "@/components/sections/about/About";
import { Hero } from "@/components/sections/hero/Hero";
import { Projects } from "@/components/sections/project/Projects";
import { Reviews } from "@/components/sections/reviews/Reviews";

const HomePage = () => {
  return (
    <main className="">
      <Hero />
      <About />
      <Projects />
      <Reviews />
    </main>
  );
};
export default HomePage;
