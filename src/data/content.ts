/**
 * ============================================================
 *  EDIT THIS FILE to personalize your portfolio.
 *  All portfolio content is kept here for easy editing.
 * ============================================================
 */

export const site = {
  name: "Balaji K",
  firstName: "Balaji",
  role: "Software Developer",
  title: "Balaji K — Aspiring Software Developer",
  seoDescription:
    "Portfolio of Balaji K, a B.Tech Information Technology student and aspiring software developer focused on Java, Python, and full stack web development.",
  email: "balaji.k2675@gmail.com",
  phone: "9952067887",
  profileImage: "/images/profile.png",
  siteUrl: "https://your-domain.vercel.app",
};

export const heroBio =
  "Aspiring Software Developer with a strong foundation in Java, Python, and full stack web development. Passionate about building scalable applications, solving real-world problems, and continuously learning new technologies.";

export const heroAboutPreview =
  "I am a B.Tech Information Technology student at Kings Engineering College, building a strong foundation in software development and practical problem solving.";

export const heroWorkPreview =
  "My work includes an AI-powered real-time language communication system and an OLX clone web application.";

export const aboutText =
  "I am pursuing B.Tech Information Technology at Kings Engineering College in Chennai, Tamil Nadu, with a current CGPA of 7.7 up to the 6th semester. I work with Java, Python, and full stack web technologies including HTML, CSS, JavaScript, Node.js, Express.js, SQL, and MongoDB. I enjoy building scalable applications, solving real-world problems, and continuously learning new technologies. I am seeking an opportunity to contribute my technical skills and grow as a Software Developer.";

export const aboutHeadingPhrase = "software solutions that solve real problems.";

export const stats = [
  { value: 2, suffix: "", label: "Projects" },
  { value: 7, suffix: ".7", label: "Current CGPA" },
  { value: 2027, suffix: "", label: "Graduation Year" },
];

export const skills = [
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "Express.js",
  "SQL",
  "MongoDB",
  "GitHub",
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Global Talk",
    description:
      "An AI-powered platform for real-time communication between users speaking different languages. The system is being developed to translate speech into the listener's native language while preserving voice characteristics, tone, and modulation for natural conversations.",
    tags: ["Artificial Intelligence", "Speech Processing"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/balajik2605",
    image: "/images/projects/project-1.svg",
  },
  {
    title: "OLX Clone Web Application",
    description:
      "A classified advertisement web application that allows users to post, browse, edit, and manage listings. Implemented user authentication, product listing, and CRUD operations using Node.js, Express.js, and MongoDB.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/balajik2605",
    image: "/images/projects/project-2.svg",
  },
];

export type TimelineItem = {
  type: "experience" | "education";
  title: string;
  org: string;
  period: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    type: "education",
    title: "B.Tech Information Technology",
    org: "Kings Engineering College — Chennai, Tamil Nadu",
    period: "2023 — 2027",
    description: "Current CGPA: 7.7 (up to the 6th semester).",
  },
  {
    type: "education",
    title: "Higher Secondary Education (12th Grade)",
    org: "Avichi Higher Secondary School",
    period: "2021 — 2023",
    description: "Completed with a percentage of 76.3%.",
  },
  {
    type: "education",
    title: "Secondary Education (10th Grade)",
    org: "Kaveri High School",
    period: "2016 — 2021",
    description: "Completed secondary education.",
  },
];

export type SocialLink = {
  name: "GitHub" | "LinkedIn" | "X" | "Instagram" | "YouTube";
  url: string;
};

export const socials: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/balajik2605" },
];

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/blog" },
  { label: "Portfolio", href: "/#projects" },
];

export const pageLinks = [
  { label: "Skills", href: "/#skills" },
  { label: "Education", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export const footerLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Portfolio", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];
