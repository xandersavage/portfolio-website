"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Mail, Send, Sparkles } from "lucide-react";

type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>LinkedIn</title>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  x: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>X</title>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </svg>
  ),
  github: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.959 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      />
    </svg>
  ),
};

// Social links data
const socialLinks = [
  {
    name: "GitHub",
    icon: Icons.github,
    href: "https://github.com/xandersavage",
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    name: "LinkedIn",
    icon: Icons.linkedin,
    href: "https://www.linkedin.com/in/alexander-olomukoro-699255199/",
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    name: "X",
    icon: Icons.x,
    href: "https://x.com/xandersavage7",
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
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Intersection observer for animations
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setSuccessMessage("Message sent successfully!");
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
      className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden min-h-screen flex items-center"
    >
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                  { id: "name", label: "Name", type: "text" },
                  { id: "email", label: "Email", type: "email" },
                  { id: "message", label: "Message", type: "textarea" },
                ].map((field) => (
                  <div key={field.id} className="relative">
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                    >
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.id}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [field.id]: e.target.value,
                          })
                        }
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        required
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [field.id]: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        required
                      />
                    )}
                  </div>
                ))}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </button>

                {submitStatus === "success" && (
                  <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 mt-4">
                    <Sparkles className="w-5 h-5" />
                    {successMessage}
                  </div>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-500 text-center mt-4">
                    Something went wrong. Please try again.
                  </p>
                )}
            </form>
          </motion.div>

          {/* Social Links and Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 lg:pl-12"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Connect with me
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                Feel free to reach out through any of these platforms or send me
                a message directly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-500" />
                <a
                  href="mailto:swankylex@gmail.com"
                  className="text-lg text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  swankylex@gmail.com
                </a>
              </div>

              <div className="flex space-x-6 pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "p-3 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700",
                      "transition-all duration-200 hover:scale-110",
                      social.color
                    )}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-12 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
               <p className="text-slate-700 dark:text-slate-300 italic text-center text-lg">
                  &ldquo;Let&apos;s create something amazing together&rdquo;
               </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
