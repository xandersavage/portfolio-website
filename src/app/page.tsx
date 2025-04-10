import { About } from "@/components/sections/about/About";
import { Contact } from "@/components/sections/contact/Contact";
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
      <Contact />
    </main>
  );
};
export default HomePage;
