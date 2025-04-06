// src/data/projectsData.ts

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnailUrl: string;
  images: string[];
  technologies: string[];
  features: string[];
  challenges?: string[];
  solutions?: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: "completed" | "in-progress";
  isFeatured: boolean;
  category: string[];
}

export const projects: Project[] = [
  {
    id: "complaint-management",
    title: "Complaint Management System",
    shortDescription:
      "A web application for managing and tracking student complaints within educational institutions.",
    fullDescription:
      "This system streamlines the process of submitting and resolving complaints in educational settings. Users can register with their college and department details, submit complaints, and track their status through a personalized dashboard. The application features role-based access control, with administrators having enhanced privileges to manage all complaints across departments.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    technologies: ["MongoDB", "Express.js", "Node.js", "Pug", "HTML", "CSS"],
    features: [
      "User registration and authentication",
      "Role-based access control",
      "Complaint submission and tracking",
      "Status updates and notifications",
      "Admin dashboard for complaint management",
      "Department-wise complaint filtering",
    ],
    challenges: [
      "Implementing secure role-based permissions",
      "Creating an intuitive dashboard for complaint tracking",
      "Ensuring data privacy for sensitive complaints",
    ],
    solutions: [
      "Utilized middleware for permission checks",
      "Designed user-friendly dashboards with status indicators",
      "Implemented data access controls at the database level",
    ],
    githubUrl: "https://github.com/yourusername/complaint-management",
    status: "completed",
    isFeatured: false,
    category: ["Web Application", "Education", "Management System"],
  },
  {
    id: "school-dashboard",
    title: "School Dashboard",
    shortDescription:
      "Comprehensive school management platform connecting students, parents, teachers, and administrators.",
    fullDescription:
      "This Next.js-powered school dashboard provides a centralized platform for all stakeholders in the educational ecosystem. Students can access their results, assignments, and schedules. Parents can monitor their children's progress. Teachers can manage classes, create assignments, and upload results. Administrators have complete oversight of school operations with advanced management capabilities.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    images: [
      "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      "https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "React Calendar",
    ],
    features: [
      "Multi-role user system (students, parents, teachers, admin)",
      "Academic performance tracking",
      "Assignment management",
      "Calendar for scheduling",
      "Announcements and notifications",
      "Secure authentication with Clerk",
    ],
    challenges: [
      "Building a unified platform for multiple user types",
      "Creating intuitive interfaces for different user needs",
      "Managing complex data relationships between users",
    ],
    solutions: [
      "Implemented role-based routing and permissions",
      "Designed tailored dashboards for each user type",
      "Used Prisma's relational capabilities to model school data",
    ],
    githubUrl: "https://github.com/yourusername/school-dashboard",
    status: "in-progress",
    isFeatured: true,
    category: ["Web Application", "Education", "Dashboard"],
  },
  {
    id: "real-estate-app",
    title: "Real Estate Platform",
    shortDescription:
      "Modern real estate marketplace connecting buyers with agents through live chat and detailed listings.",
    fullDescription:
      "This real estate application is being built to streamline property searching and agent communication. It features detailed property listings, real-time chat with agents via WebSockets, and personalized user accounts. Agents can create and manage listings, while users can save favorites and directly communicate with property representatives. The platform uses JWT for secure authentication and MongoDB for flexible data storage.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    images: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1496&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Prisma",
      "SCSS",
      "WebSockets",
      "JWT",
    ],
    features: [
      "Property listing and searching",
      "Real-time chat with WebSockets",
      "User authentication with JWT",
      "Saved listings functionality",
      "Agent dashboard for listing management",
      "Admin controls for platform oversight",
    ],
    challenges: [
      "Implementing real-time communication",
      "Creating an efficient property search system",
      "Building secure user authentication",
    ],
    solutions: [
      "Utilized WebSockets for instant messaging",
      "Designed advanced filtering for property searches",
      "Implemented JWT with proper security practices",
    ],
    githubUrl: "https://github.com/yourusername/real-estate-platform",
    status: "in-progress",
    isFeatured: true,
    category: ["Web Application", "Real Estate", "Communication"],
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio",
    shortDescription:
      "Modern developer portfolio showcasing skills, projects, and professional journey with interactive elements.",
    fullDescription:
      "This portfolio website you're currently viewing was built to showcase my projects and skills as a developer. It features a clean, responsive design with interactive elements like the terminal component and animated sections. The site is built with Next.js and Tailwind CSS, incorporating custom animations and components from MagicUI. It's designed to provide visitors with an engaging experience while highlighting my technical capabilities and project work.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1510&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MagicUI",
      "Framer Motion",
      "Shadcn UI",
    ],
    features: [
      "Interactive terminal component",
      "Responsive design for all devices",
      "Dark/light mode support",
      "Animated section transitions",
      "Project showcase with detailed information",
      "Optimized performance and accessibility",
    ],
    challenges: [
      "Creating engaging interactive elements",
      "Balancing aesthetics with performance",
      "Implementing responsive design across all devices",
    ],
    solutions: [
      "Utilized MagicUI for custom animations",
      "Optimized assets and implemented lazy loading",
      "Used Tailwind's responsive utilities for adaptive layouts",
    ],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
    status: "completed",
    isFeatured: true,
    category: ["Web Application", "Portfolio", "Personal"],
  },
  {
    id: "coinblazers",
    title: "Coinblazers Trading Platform",
    shortDescription:
      "Simulated cryptocurrency trading platform with account management and automated trading features.",
    fullDescription:
      "Coinblazers is a simulated trading platform that mimics cryptocurrency trading experiences. Users can create accounts, make deposit requests, and interact with simulated trading algorithms. The platform includes features like balance updates, withdrawal requests, and email notifications for account activities. While not performing actual trades, it provides a realistic trading experience through algorithmic balance updates based on market simulation patterns.",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    images: [
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1402&q=80",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "Node.js",
      "Pug",
      "HTML",
      "CSS",
      "Nodemailer",
    ],
    features: [
      "User registration and authentication",
      "Simulated trading algorithms",
      "Deposit and withdrawal requests",
      "Email notifications for account activities",
      "Admin panel for request management",
      "Real-time balance updates",
    ],
    challenges: [
      "Creating realistic trading simulations",
      "Implementing secure financial request handling",
      "Building an email notification system",
    ],
    solutions: [
      "Developed algorithms to simulate market fluctuations",
      "Created a multi-step approval process for withdrawals",
      "Integrated Nodemailer for automated communications",
    ],
    githubUrl: "https://github.com/yourusername/coinblazers",
    status: "completed",
    isFeatured: false,
    category: ["Web Application", "Finance", "Simulation"],
  },
];

export default projects;
