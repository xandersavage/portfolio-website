// components/sections/about/AboutTerminal.tsx
import { useRef, useState, useEffect } from "react";
import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/magicui/terminal";

export function AboutTerminal() {
  const typingDuration = 150;
  const terminalRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When terminal becomes visible, set isVisible to true
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once we've seen it, no need to keep observing
          if (terminalRef.current) {
            observer.unobserve(terminalRef.current);
          }
        }
      },
      {
        // Start animations when terminal is 10% visible
        threshold: 0.1,
      }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => {
      if (terminalRef.current) {
        observer.unobserve(terminalRef.current);
      }
    };
  }, []);

  return (
    <div ref={terminalRef} className="w-full">
      <Terminal className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 rounded-xl overflow-x-auto max-w-full font-mono text-xs sm:text-sm md:text-base">
        {/* Only start animations if terminal is visible */}
        {isVisible && (
          <>
            <TypingAnimation duration={typingDuration}>
              $ whoami
            </TypingAnimation>

            <AnimatedSpan
              delay={1500}
              className="text-green-600 dark:text-green-500"
            >
              Alexander Olomukoro - Full Stack Developer
            </AnimatedSpan>

            <TypingAnimation delay={3000} duration={typingDuration}>
              $ cat skills.json
            </TypingAnimation>

            <AnimatedSpan
              delay={5000}
              className="text-blue-600 dark:text-blue-500"
            >
              {`{
  "frontend": ["React", "Next.js"],
  "backend": ["Node.js", "Express"],
  "database": ["MongoDB", "PostgreSQL"],
  "devOps": ["Docker", "AWS"]
}`}
            </AnimatedSpan>

            <TypingAnimation delay={7500} duration={typingDuration}>
              $ git log --oneline -n3
            </TypingAnimation>

            <AnimatedSpan delay={10000}>
              <div className="flex">
                <span className="text-amber-600 dark:text-yellow-500 w-16 flex-shrink-0">
                  a1b2c3d
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  E-commerce platform
                </span>
              </div>
              <div className="flex">
                <span className="text-amber-600 dark:text-yellow-500 w-16 flex-shrink-0">
                  e4f5g6h
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  AI recommendation engine
                </span>
              </div>
              <div className="flex">
                <span className="text-amber-600 dark:text-yellow-500 w-16 flex-shrink-0">
                  i7j8k9l
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  Collaboration tool
                </span>
              </div>
            </AnimatedSpan>

            <TypingAnimation delay={12500} duration={typingDuration}>
              $ ./view-projects.sh
            </TypingAnimation>

            <AnimatedSpan
              delay={14500}
              className="text-green-600 dark:text-green-500"
            >
              Redirecting to projects section...
            </AnimatedSpan>
          </>
        )}
      </Terminal>
    </div>
  );
}
