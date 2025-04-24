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

  // Calculate precise animation timings
  const calculateTypingTime = (text: string) => {
    // Calculate how long the typing animation will take
    return text.length * typingDuration;
  };

  // Define all the commands
  const command1 = "$ whoami";
  const command2 = "$ cat skills.json";
  const command3 = "$ git log --oneline -n3";
  const command4 = "$ ./view-projects.sh";

  // Calculate typing durations for each command
  const typingTime1 = calculateTypingTime(command1);
  const typingTime2 = calculateTypingTime(command2);
  const typingTime3 = calculateTypingTime(command3);
  const typingTime4 = calculateTypingTime(command4);

  // Define delays between animations (time to show each response before next command)
  const postCommandPause = 1000; // 1 second pause after a command finishes typing
  const responseDisplayTime = 1500; // How long to display each response

  // Calculate precise timing for each animation
  const timings = {
    // Command 1: starts immediately (delay: 0)
    command1End: typingTime1,

    // Response 1: starts after command1 finishes + pause
    response1Start: typingTime1 + postCommandPause,
    response1End: typingTime1 + postCommandPause + responseDisplayTime,

    // Command 2: starts after response1 ends
    command2Start: typingTime1 + postCommandPause + responseDisplayTime,
    command2End:
      typingTime1 + postCommandPause + responseDisplayTime + typingTime2,

    // Response 2: starts after command2 finishes + pause
    response2Start:
      typingTime1 +
      postCommandPause +
      responseDisplayTime +
      typingTime2 +
      postCommandPause,
    response2End:
      typingTime1 +
      postCommandPause +
      responseDisplayTime +
      typingTime2 +
      postCommandPause +
      responseDisplayTime,

    // Command 3: starts after response2 ends
    command3Start:
      typingTime1 +
      postCommandPause +
      responseDisplayTime +
      typingTime2 +
      postCommandPause +
      responseDisplayTime,
    command3End:
      typingTime1 +
      postCommandPause +
      responseDisplayTime +
      typingTime2 +
      postCommandPause +
      responseDisplayTime +
      typingTime3,

    // Response 3: starts after command3 finishes + pause
    response3Start:
      typingTime1 +
      postCommandPause +
      responseDisplayTime +
      typingTime2 +
      postCommandPause +
      responseDisplayTime +
      typingTime3 +
      postCommandPause,
    response3End:
      typingTime1 +
      postCommandPause +
      responseDisplayTime +
      typingTime2 +
      postCommandPause +
      responseDisplayTime +
      typingTime3 +
      postCommandPause +
      responseDisplayTime,

    // Command 4: starts after response3 ends
    command4Start:
      typingTime1 +
      postCommandPause +
      responseDisplayTime +
      typingTime2 +
      postCommandPause +
      responseDisplayTime +
      typingTime3 +
      postCommandPause +
      responseDisplayTime,
    command4End:
      typingTime1 +
      postCommandPause +
      responseDisplayTime +
      typingTime2 +
      postCommandPause +
      responseDisplayTime +
      typingTime3 +
      postCommandPause +
      responseDisplayTime +
      typingTime4,

    // Response 4: starts after command4 finishes + pause
    response4Start:
      typingTime1 +
      postCommandPause +
      responseDisplayTime +
      typingTime2 +
      postCommandPause +
      responseDisplayTime +
      typingTime3 +
      postCommandPause +
      responseDisplayTime +
      typingTime4 +
      postCommandPause,
  };

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
            {/* Command 1: whoami */}
            <TypingAnimation duration={typingDuration}>
              {command1}
            </TypingAnimation>

            {/* Response 1 */}
            <AnimatedSpan
              delay={timings.response1Start}
              className="text-green-600 dark:text-green-500"
            >
              Alexander Olomukoro - Full Stack Developer
            </AnimatedSpan>

            {/* Command 2: cat skills.json */}
            <TypingAnimation
              delay={timings.command2Start}
              duration={typingDuration}
            >
              {command2}
            </TypingAnimation>

            {/* Response 2 */}
            <AnimatedSpan
              delay={timings.response2Start}
              className="text-blue-600 dark:text-blue-500"
            >
              {`{
  "frontend": ["React", "Next.js"],
  "backend": ["Node.js", "Express"],
  "database": ["MongoDB", "PostgreSQL"],
  "devOps": ["Docker", "AWS"]
}`}
            </AnimatedSpan>

            {/* Command 3: git log */}
            <TypingAnimation
              delay={timings.command3Start}
              duration={typingDuration}
            >
              {command3}
            </TypingAnimation>

            {/* Response 3 */}
            <AnimatedSpan delay={timings.response3Start}>
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

            {/* Command 4: ./view-projects.sh */}
            <TypingAnimation
              delay={timings.command4Start}
              duration={typingDuration}
            >
              {command4}
            </TypingAnimation>

            {/* Response 4 */}
            <AnimatedSpan
              delay={timings.response4Start}
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
