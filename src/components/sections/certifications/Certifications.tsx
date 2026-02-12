import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Marquee } from "@/components/magicui/marquee";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const certifications = [
  {
    src: "/certificates/web-development-bootcamp.jpg",
    alt: "The Complete 2020 Web Development Bootcamp",
  },
  {
    src: "/certificates/advanced-css-and-sass.jpg",
    alt: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
  },
  {
    src: "/certificates/c-sharp-unity-developer.jpg",
    alt: "Complete C# Unity Game Developer 2D",
  },
  {
    src: "/certificates/complete-node-js-developer.jpg",
    alt: "The Complete Node.js Developer Course (3rd Edition)",
  },
  {
    src: "/certificates/data-science-and-ai-masters.jpg",
    alt: "Data Science and AI Masters 2026",
  },
];

export function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-slate-100 dark:bg-slate-900"
    >
      {/* Animated Grid Pattern Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "absolute inset-x-0 inset-y-0 h-full w-full"
        )}
      />

      <Container className="relative z-10">
        <BlurFade delay={0.2} inView={isInView}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
              Certifications
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-body">
              Continuous learning and professional development through verified
              courses.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6"></div>
          </div>
        </BlurFade>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:40s]">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="relative mx-4 h-60 w-80 cursor-pointer overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-300"
              >
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate-100 dark:from-slate-900"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-slate-100 dark:from-slate-900"></div>
        </div>
      </Container>
    </section>
  );
}
