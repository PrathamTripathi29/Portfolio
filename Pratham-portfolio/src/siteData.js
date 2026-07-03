// ============================================================
// Edit everything about your portfolio's content right here.
// None of the components below have hardcoded text — they all
// read from this file.
// ============================================================

export const profile = {
  name: "Pratham Tripathi",
  role: "B.Tech CSE Student",
  tagline: "I build full-stack apps and break my brain on algorithms.",
  bio:
    "I'm a Computer Science undergrad at MANIT Bhopal, currently sharpening my skills on both ends of the stack — shipping full-stack applications and grinding competitive programming problems. I like understanding systems end-to-end, from a model in a notebook to a button someone actually clicks.",
  location: "Bhopal, India",
  email: "prathamtripathi29@gmail.com",
  resumeUrl: "#",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/PrathamTripathi29", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pratham-tripathi-526689290/", icon: "linkedin" },
  { label: "LeetCode", href: "https://leetcode.com/u/PrathamTripathi/", icon: "leetcode" },
  { label: "Codeforces", href: "https://codeforces.com/profile/Pratham_shrewd", icon: "codeforces" },
  { label: "Email", href: "mailto:prathamtripathi29@gmail.com", icon: "mail" },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Algorithms", to: "/algorithms" },
  { label: "About", to: "/about" },
];

// ------------------------------------------------------------
// PROJECTS — replace title/description/tags/links for each.
// Add a 4th object to this array any time; the grid grows on its own.
// ------------------------------------------------------------
export const projects = [
  {
    id: "proj-01",
    tag: "System Design",
    title: "Pulse: Asynchronous Task Framework",
    description:
      "A distributed task framework for job scheduling and task automation. Inspired by dropbox's own ATF. https://dropbox.tech/infrastructure/asynchronous-task-scheduling-at-dropbox",
    stack: ["React", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
    highlights: [
      "Automates tasks by defining lambdas and creating their instances",
      "Uses Redis Streams for task listing and FOR UPDATE SKIP LOCKED SQL query to ensure concurrency and non-duplicacy.",
      "Several other features are used, go to the github repository for more information",
    ],
    github: "https://github.com/your-handle/repo",
    demo: "https://your-demo-link.com",
    accent: "coral",
  },
  {
    id: "proj-02",
    tag: "FULL-STACK/Machine Learning",
    title: "ChestAI",
    description:
      "Full Stack web app that uses Dense-Net-121 trained on the CheXpert dataset to detect ailments through chest x-rays. Uses BLIP model for report generation.",
    stack: ["React", "Fast API", "MySQL"],
    highlights: [
      "Dense-Net-121 trained on 200,000+ x-ray images",
      "Specfically detects Cardiomegaly, Pneumonia, Pleural Effusion and Edema with an AUC of 8.6",
    ],
    github: "https://github.com/your-handle/repo",
    demo: "https://your-demo-link.com",
    accent: "sage",
  },
  {
    id: "proj-03",
    tag: "Full Stack",
    title: "Stick-Store",
    description:
      "E-Commerce web app for stickers, with user authentication and payments with Stripe.",
    stack: ["Spring Boot", "React", "MySQL"],
    highlights: [
      "Redux for cart-context",
      "Stripe for payments",
    ],
    github: "https://github.com/your-handle/repo",
    demo: "https://your-demo-link.com",
    accent: "yellow",
  },
];

// ------------------------------------------------------------
// ALGORITHMS — plug in your real numbers + rating history.
// ------------------------------------------------------------
export const leetcode = {
  handle: "your-handle",
  profileUrl: "https://leetcode.com/your-handle",
};

export const codeforces = {
  handle: "your-handle",
  profileUrl: "https://codeforces.com/profile/your-handle",
};

// ------------------------------------------------------------
// ABOUT — education + interests
// ------------------------------------------------------------
export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Maulana Azad National Institute of Technology (MANIT), Bhopal",
    period: "2023 — 2027",
    detail: "Scholar No. 2311201105 · CGPA 9.25/10",
  },
];

export const interests = [
  "Competitive Programming",
  "Full-Stack Development",
  "Machine Learning",
  "System Design",
  "Problem Solving",
];
