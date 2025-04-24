// src/components/sections/Reviews.tsx
"use client";

import { useState, useEffect, useRef, memo } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { BlurFade } from "@/components/magicui/blur-fade";
import { motion } from "framer-motion";
import Image from "next/image";

// Define TypeScript interface for review data
interface ReviewData {
  id: string;
  name: string;
  username: string;
  body: string;
  img: string;
  rating?: number;
}

// Professional testimonials data
const reviewsData: ReviewData[] = [
  {
    id: "review1",
    name: "Sarah Johnson",
    username: "Tech Lead at InnovateX",
    body: "Exceptional React architecture with clean, maintainable code. The performance optimization reduced our load time by 40% and significantly improved UX.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    id: "review2",
    name: "Michael Chen",
    username: "CTO at DataFlow",
    body: "Outstanding work on our real-time analytics dashboard. The WebSocket implementation and data visualization components were flawlessly executed.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: "review3",
    name: "Alex Rodriguez",
    username: "Product Manager at TechSolutions",
    body: "Excellent TypeScript architecture and API integration. The codebase is well-structured, thoroughly tested, and easy to maintain.",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 5,
  },
  {
    id: "review4",
    name: "Emily Parker",
    username: "UI/UX Designer at CreativeHub",
    body: "Implemented our designs with pixel-perfect accuracy. The micro-interactions and animations added significant value to the user experience.",
    img: "https://randomuser.me/api/portraits/women/17.jpg",
    rating: 5,
  },
  {
    id: "review5",
    name: "David Wilson",
    username: "Founder at LaunchPad",
    body: "Transformed our MVP into a scalable product. The database architecture and authentication system are robust and security-focused.",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
  },
  {
    id: "review6",
    name: "Jasmine Liu",
    username: "Lead Developer at TechNova",
    body: "Excellent Next.js implementation with server-side rendering and optimized data fetching. The project was delivered ahead of schedule with all requirements met.",
    img: "https://randomuser.me/api/portraits/women/8.jpg",
    rating: 5,
  },
  {
    id: "review7",
    name: "Thomas Wright",
    username: "VP Engineering at CloudScale",
    body: "Implemented a complex microservices architecture with Docker and Kubernetes that scaled flawlessly during our 10x growth phase. The CI/CD pipeline saved us countless development hours.",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 5,
  },
  {
    id: "review8",
    name: "Sophia Rodriguez",
    username: "Lead Designer at CreativeTech",
    body: "Exceptional front-end development skills. The animations and responsive design implementation perfectly captured our vision while maintaining excellent performance metrics.",
    img: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 5,
  },
  {
    id: "review9",
    name: "James Kim",
    username: "Startup Founder & CEO",
    body: "Built our MVP from scratch using Next.js and MongoDB. The architecture choices enabled us to iterate quickly and secure our first round of funding based on the technical foundation.",
    img: "https://randomuser.me/api/portraits/men/36.jpg",
    rating: 5,
  },
  {
    id: "review10",
    name: "Aisha Patel",
    username: "Senior Backend Developer",
    body: "The GraphQL API implementation transformed our data access patterns. Query efficiency improved by 70% and the TypeScript types generation from the schema was brilliantly executed.",
    img: "https://randomuser.me/api/portraits/women/37.jpg",
    rating: 5,
  },
  {
    id: "review11",
    name: "Marcus Johnson",
    username: "CTO at FinTech Innovations",
    body: "Delivered a secure, compliant financial application with robust authentication and real-time transaction processing. The WebSocket implementation for live updates was particularly impressive.",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
  },
];

// Marquee component implementation
function Marquee({
  className,
  reverse,
  pauseOnHover,
  vertical,
  children,
}: {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex overflow-hidden",
        vertical ? "flex-col h-full" : "w-full",
        className
      )}
    >
      <div
        className={cn(
          "flex flex-nowrap will-change-transform",
          vertical ? "flex-col" : "flex-row",
          reverse && "animate-marquee-reverse",
          !reverse && "animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]",
          vertical && reverse && "animate-marquee-vertical-reverse",
          vertical && !reverse && "animate-marquee-vertical"
        )}
      >
        {children}
        {/* Clone children for seamless looping */}
        {children}
      </div>
    </div>
  );
}

// Memoized ReviewCard component for performance optimization
const ReviewCard = memo(
  ({ img, name, username, body, rating = 5 }: Omit<ReviewData, "id">) => {
    // Reference for spotlight effect
    const cardRef = useRef<HTMLElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile on mount
    useEffect(() => {
      setIsMobile(window.innerWidth < 640);

      const handleResize = () => {
        setIsMobile(window.innerWidth < 640);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Handle mouse movement for spotlight effect
    const handleMouseMove = (e: React.MouseEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    // Truncate text for mobile
    const truncatedBody =
      isMobile && body.length > 40 ? body.substring(0, 40) + "..." : body;

    return (
      <figure
        ref={cardRef as React.RefObject<HTMLElement>}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "relative h-full w-28 xs:w-32 sm:w-60 cursor-pointer overflow-hidden rounded-xl border my-2 mx-1 sm:my-3 sm:mx-2",
          "p-2 xs:p-3 sm:p-5", // Smaller padding on mobile
          // light styles
          "border-blue-500/20 bg-white/90 backdrop-blur-sm hover:bg-white shadow-sm",
          // dark styles
          "dark:border-blue-500/30 dark:bg-slate-800/90 dark:backdrop-blur-sm dark:hover:bg-slate-800 dark:shadow-slate-900/30",
          // transition
          "transition-all duration-300 ease-out",
          // hover effects
          "hover:shadow-md hover:translate-y-[-2px]"
        )}
      >
        {/* Spotlight effect */}
        {isHovered && !isMobile && (
          <div
            className="absolute inset-0 pointer-events-none opacity-70"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 70%)`,
            }}
          />
        )}

        {/* Top border accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>

        <div className="flex flex-row items-center gap-1 sm:gap-3">
          <Image
            className="rounded-full border border-slate-100 dark:border-slate-700 sm:border-2"
            width={isMobile ? 20 : 40}
            height={isMobile ? 20 : 40}
            alt={`Profile picture of ${name}`}
            src={img}
            quality={90}
            priority={true}
          />
          <div className="flex flex-col">
            <figcaption className="text-[10px] xs:text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
              {name}
            </figcaption>
            <p className="text-[8px] xs:text-[10px] sm:text-xs text-slate-600 dark:text-slate-400">
              {username}
            </p>
          </div>
        </div>

        {/* Star rating */}
        <div className="flex mt-1 sm:mt-2 mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={cn(
                "w-2 h-2 sm:w-3.5 sm:h-3.5",
                i < rating
                  ? "text-yellow-400"
                  : "text-gray-300 dark:text-gray-600"
              )}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <blockquote className="mt-1 sm:mt-2 text-[10px] xs:text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          &quot;{truncatedBody}&quot;
        </blockquote>
      </figure>
    );
  }
);

ReviewCard.displayName = "ReviewCard";

// Prepare review data for different rows
function prepareReviewRows() {
  // Create 4 rows with different orderings for visual diversity
  const firstRow = reviewsData.slice(0, 2);
  const secondRow = reviewsData.slice(2, 4);
  const thirdRow = reviewsData.slice(4, 6);
  const fourthRow = [...reviewsData.slice(0, 3)].reverse();

  return { firstRow, secondRow, thirdRow, fourthRow };
}

// Main Reviews Component
export function Reviews() {
  // Use native intersection observer
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // Set up intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Check device on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobileDevice(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Get review rows
  const { firstRow, secondRow, thirdRow, fourthRow } = prepareReviewRows();

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 relative overflow-hidden"
    >
      {/* Decorative backgrounds */}
      <div
        className="absolute top-40 -left-24 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl dark:bg-blue-500/10 z-0 animate-pulse"
        style={{ animationDuration: "8s" }}
      ></div>
      <div
        className="absolute bottom-20 -right-24 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl dark:bg-purple-500/10 z-0 animate-pulse"
        style={{ animationDuration: "12s" }}
      ></div>

      <Container className="relative z-10">
        {/* Section Header with Animation */}
        <BlurFade delay={0.2} inView={isInView}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
              Client Testimonials
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-body">
              What clients and collaborators are saying about my technical
              expertise and project delivery.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6"></div>
          </div>
        </BlurFade>

        {/* 3D Marquee for ALL screen sizes */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="relative flex h-[500px] w-full flex-row items-center justify-center gap-1 xs:gap-2 sm:gap-4 overflow-hidden [perspective:300px] sm:[perspective:400px]"
        >
          <motion.div
            initial={{ rotateX: 15, rotateY: -10, rotateZ: 15 }}
            animate={
              isMobileDevice
                ? { rotateX: 15, rotateY: -10, rotateZ: 15 }
                : {
                    rotateX: [15, 17, 15],
                    rotateY: [-10, -8, -10],
                    rotateZ: [15, 17, 15],
                  }
            }
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="flex flex-row items-center gap-1 xs:gap-2 sm:gap-4"
            style={{
              transform: isMobileDevice
                ? "translateX(-50px) translateY(0px) translateZ(-50px) rotateX(15deg) rotateY(-10deg) rotateZ(15deg)"
                : "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(15deg) rotateY(-10deg) rotateZ(15deg)",
            }}
          >
            {/* First column - Always visible */}
            <Marquee pauseOnHover vertical className="[--duration:25s]">
              {firstRow.map((review) => (
                <ReviewCard key={`${review.id}-1`} {...review} />
              ))}
            </Marquee>

            {/* Second column - Also visible on mobile */}
            <div>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:30s]"
                vertical
              >
                {secondRow.map((review) => (
                  <ReviewCard key={`${review.id}-2`} {...review} />
                ))}
              </Marquee>
            </div>

            {/* Third column - Only on md screens and up */}
            <div className={cn("hidden md:block")}>
              <Marquee
                reverse
                pauseOnHover
                className="[--duration:27s]"
                vertical
              >
                {thirdRow.map((review) => (
                  <ReviewCard key={`${review.id}-3`} {...review} />
                ))}
              </Marquee>
            </div>

            {/* Fourth column - Only on lg screens and up */}
            <div className={cn("hidden lg:block")}>
              <Marquee pauseOnHover className="[--duration:32s]" vertical>
                {fourthRow.map((review) => (
                  <ReviewCard key={`${review.id}-4`} {...review} />
                ))}
              </Marquee>
            </div>
          </motion.div>

          {/* Gradient Overlays for fade effect */}
          {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white dark:from-slate-900"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white dark:from-slate-900"></div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-slate-900"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-slate-900"></div> */}
        </motion.div>
      </Container>
    </section>
  );
}
