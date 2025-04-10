"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Mail, Github, Linkedin, Twitter, Send, Sparkles } from "lucide-react";

// Particle background component
const ParticleBackground = () => {
  // Use a fixed seed for consistent particle generation
  const particles = Array.from({ length: 200 }).map((_, i) => {
    // Use a simple hash function to generate consistent values
    const hash = (i * 16807) % 2147483647;
    const x = (hash % 100) / 100;
    const y = ((hash * 16807) % 100) / 100;
    // More varied sizes: 0.5px to 4px
    const size = 0.5 + (hash % 35) / 10;
    // More varied durations: 5s to 25s
    const duration = 5 + (hash % 20);
    // More varied delays: 0s to 10s
    const delay = hash % 10;
    // Add some opacity variation
    const opacity = 0.2 + (hash % 8) / 10;

    return {
      id: i,
      x: x * 100,
      y: y * 100,
      size,
      duration,
      delay,
      opacity,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, particle.opacity, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Floating card component
const FloatingCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn("relative group", className)}
      style={{
        transform: `perspective(1000px) rotateX(${
          (mousePosition.y - 150) / 20
        }deg) rotateY(${(mousePosition.x - 200) / 20}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"
        style={{
          transform: `translate(${(mousePosition.x - 200) / 20}px, ${
            (mousePosition.y - 150) / 20
          }px)`,
        }}
      />
      {children}
    </motion.div>
  );
};

// Social links data
const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/yourusername",
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/yourusername",
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/yourusername",
    color: "hover:text-sky-500 dark:hover:text-sky-400",
  },
];

export function Contact() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const springConfig = { stiffness: 300, damping: 30 };
  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 50]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]),
    springConfig
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [hoveredField, setHoveredField] = useState<string | null>(null);

  // Intersection observer for animations
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 relative overflow-hidden min-h-screen flex items-center"
    >
      <ParticleBackground />

      {/* Decorative backgrounds */}
      <motion.div
        className="absolute top-40 -left-24 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl dark:bg-blue-500/10 z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 -right-24 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl dark:bg-purple-500/10 z-0"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <BlurFade delay={0.2} inView={isInView}>
          <motion.div className="text-center mb-16" style={{ y, opacity }}>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Have a project in mind or want to collaborate? I&apos;d love to
              hear from you.
            </motion.p>
            <motion.div
              className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <FloatingCard>
            <motion.form
              onSubmit={handleSubmit}
              className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                {[
                  { id: "name", label: "Name", type: "text" },
                  { id: "email", label: "Email", type: "email" },
                  { id: "message", label: "Message", type: "textarea" },
                ].map((field) => (
                  <motion.div
                    key={field.id}
                    onHoverStart={() => setHoveredField(field.id)}
                    onHoverEnd={() => setHoveredField(null)}
                    className="relative"
                  >
                    <motion.label
                      htmlFor={field.id}
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      animate={{
                        color:
                          hoveredField === field.id ? "#3b82f6" : undefined,
                      }}
                    >
                      {field.label}
                    </motion.label>
                    {field.type === "textarea" ? (
                      <motion.textarea
                        id={field.id}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [field.id]: e.target.value,
                          })
                        }
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        required
                        animate={{
                          borderColor:
                            hoveredField === field.id ? "#3b82f6" : undefined,
                        }}
                      />
                    ) : (
                      <motion.input
                        type={field.type}
                        id={field.id}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [field.id]: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        required
                        animate={{
                          borderColor:
                            hoveredField === field.id ? "#3b82f6" : undefined,
                        }}
                      />
                    )}
                    {hoveredField === field.id && (
                      <motion.div
                        className="absolute inset-0 -z-10 bg-blue-500/5 rounded-lg blur-xl"
                        layoutId="hover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.div>
                ))}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-3 px-6 rounded-lg font-medium transition-all duration-200",
                    "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
                    "hover:from-blue-600 hover:to-purple-600",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "relative overflow-hidden group"
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ filter: "blur(20px)" }}
                  />
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </span>
                </motion.button>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 text-green-500"
                  >
                    <Sparkles className="w-5 h-5" />
                    Message sent successfully!
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-center"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </div>
            </motion.form>
          </FloatingCard>

          {/* Social Links and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h3
                className="text-2xl font-semibold text-slate-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Connect with me
              </motion.h3>
              <motion.p
                className="text-slate-600 dark:text-slate-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Feel free to reach out through any of these platforms or send me
                a message directly.
              </motion.p>
            </div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-500" />
                <a
                  href="mailto:your.email@example.com"
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  your.email@example.com
                </a>
              </div>

              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "p-3 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700",
                      "transition-all duration-200 hover:scale-110",
                      social.color
                    )}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              className="relative mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              </motion.div>
              <motion.div
                className="relative text-center p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.p
                  className="text-slate-700 dark:text-slate-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  &ldquo;Let&apos;s create something amazing together&rdquo;
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
