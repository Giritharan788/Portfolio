import {
  Code2, Server, Database, Cloud, Wrench, Brain,
} from 'lucide-react';

export const personalInfo = {
  name: 'Giritharan S',
  firstName: 'Giritharan',
  lastName: 'S',
  title: 'Full-Stack Developer',
  tagline: 'I architect scalable web applications that solve real problems.',
  email: 'giritharan134@gmail.com',
  phone: '+91 7358035790',
  location: 'Chennai, India',
  github: 'https://github.com/Giritharan788',
  linkedin: 'https://linkedin.com/in/giritharan01',
  resumeFile: '/Giritharan_S_Resume.pdf',
};

export const aboutText = {
  paragraphs: [
    "I build full-stack web applications using the MERN stack, with strong focus on scalable backend systems and clean, responsive frontend experiences. My work includes designing RESTful APIs, authentication and authorization systems, database architecture, and building intuitive user interfaces with reusable components.",
    "I care about writing maintainable code, solving real problems efficiently, and creating applications that are both technically solid and user-friendly. I enjoy turning ideas into complete products \u2014 from database design to deployment \u2014 while continuously improving my skills as a developer.",
  ],
  highlights: [
    { label: 'Focus', value: 'Full-Stack Development' },
    { label: 'Education', value: 'B.Sc. Computer Science' },
    { label: 'Projects', value: '2+ Production Apps' },
  ],
};

export const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    color: '#818cf8',
    skills: ['React.js', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript (ES6+)'],
  },
  {
    title: 'Backend',
    icon: Server,
    color: '#22d3ee',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Middleware Design'],
  },
  {
    title: 'Databases',
    icon: Database,
    color: '#34d399',
    skills: ['MongoDB', 'Firebase Firestore', 'Schema Design', 'Indexing'],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: '#f472b6',
    skills: ['AWS EC2', 'Nginx', 'Vercel', 'Firebase Hosting', 'DuckDNS'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: '#fb923c',
    skills: ['Git', 'GitHub', 'Nodemailer', 'OneSignal', 'Figma'],
  },
  {
    title: 'CS Fundamentals',
    icon: Brain,
    color: '#a78bfa',
    skills: ['Data Structures', 'Algorithms', 'OOP', 'Java', 'Python', 'C'],
  },
];

export const projects = [
  {
    title: 'Gym Management SaaS',
    subtitle: 'Multi-Tenant Full-Stack Platform',
    description:
      'A production-grade SaaS platform enabling independent gym businesses to manage members, trainers, and operations — with complete tenant isolation, role-based access control, and automated notifications.',
    features: [
      'Multi-tenant architecture with zero cross-tenant data leakage',
      'Role-based access for Admins, Trainers, and Members',
      'Push notifications via OneSignal and email alerts via Nodemailer',
      'JWT authentication with tenant-isolation middleware',
      'Deployed on AWS EC2 behind Nginx with 99%+ uptime',
      'Custom domain routing via DuckDNS with full production server setup',
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS EC2', 'Nginx', 'OneSignal', 'Nodemailer'],
    challenges: [
      'Engineered tenant-isolation middleware to ensure complete data separation across all gym instances',
      'Managed full production deployment independently — from EC2 provisioning to Nginx reverse-proxy and SSL',
      'Built a scalable RBAC system supporting three distinct user roles with different permission levels',
    ],
    github: 'https://github.com/Giritharan788/gym-management-system',
    live: 'https://gym-management-system-gules-eight.vercel.app',
    demoCredentials: {
      gymSlug: 'iron-fitness-gym',
      password: 'Password@123',
      roles: [
        { role: 'Super Admin', email: 'superadmin@gymmanager.com', route: '/platform/login' },
        { role: 'Admin', email: 'admin@ironfitness.com', route: '/login' },
        { role: 'Trainer 1–5', email: 'trainer1@ironfitness.com ... trainer5@ironfitness.com', route: '/login' },
        { role: 'Member 1–50', email: 'member1@ironfitness.com ... member50@ironfitness.com', route: '/login' },
      ],
    },
    featured: true,
    gradient: 'from-indigo-500/10 to-cyan-500/10',
    accentColor: '#6366f1',
  },
  {
    title: 'Deadline Reminder',
    subtitle: 'Full-Stack Task Management App',
    description:
      'A feature-rich task management application with real-time sync, secure authentication, and intelligent deadline categorization — designed for productivity across multiple devices.',
    features: [
      'Secure Firebase Authentication with real-time data sync',
      'Priority-based sorting with 3 automated status categories',
      'Overdue, Due Soon, and Upcoming deadline classification',
      'CRUD operations with instant UI updates',
      'Fully responsive design with sub-2s load times',
      'Multi-session support across concurrent devices',
    ],
    techStack: ['React', 'Node.js', 'Firebase Auth', 'Firestore', 'Firebase Hosting'],
    challenges: [
      'Implemented real-time sync across multiple concurrent sessions without data conflicts',
      'Designed an automated categorization system that dynamically classifies deadlines based on proximity',
      'Achieved sub-2s load times through optimized Firebase configuration and asset management',
    ],
    github: 'https://github.com/Giritharan788/smart-deadline-reminder',
    live: 'https://deadline-reminder-f15b5.web.app/',
    featured: true,
    gradient: 'from-cyan-500/10 to-emerald-500/10',
    accentColor: '#22d3ee',
  },
];

export const education = [
  {
    institution: 'Dwaraka Doss Goverdhan Doss Vaishnav College',
    location: 'Chennai',
    degree: 'B.Sc. Computer Science',
    period: '2024 – 2027',
    status: 'In Progress',
  },
  {
    institution: 'Kamaraj Matriculation School',
    location: 'Ayanavaram, Chennai',
    degree: 'HSC (State Board)',
    period: 'Mar 2024',
    score: '83.7%',
  },
];

export const training = {
  title: 'Web Development Training Programme',
  organization: 'Webbed (Startup)',
  highlights: [
    'Firebase ecosystem — Auth, Firestore, and Hosting hands-on setup',
    'Prompt engineering & AI-assisted development workflows',
    'Figma-based UI/UX design fundamentals',
    'Shipped the Deadline Reminder app as the capstone deliverable',
  ],
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
