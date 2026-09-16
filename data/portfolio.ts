export interface SkillItem {
  name: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  categoryIcon: string;
  borderColor: string;
  items: SkillItem[];
}

export interface ProjectCardItem {
  title: string;
  subtitle: string;
  iconName: string;
  link: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  extra?: string;
}

export const personalInfo = {
  name: "Vishv Munjapara",
  initials: "VM",
  headline: "Hey, I'm",
  highlightedName: "Vishv Munjapara.",
  tagline: "Here, you can check out what I'm working on. I try my best to create things with ❤️",
  email: "vishvmunjapara23@gmail.com",
  phone: "+91 63554 47669",
  github: "https://github.com/vishv183",
  linkedin: "https://linkedin.com/in/vishv-munjapara",
  portfolio: "https://portfoliovishv.vercel.app",
  resume: "/Resume.pdf",
  profileImage: "/profile.jpg",
};

export const projectCards: ProjectCardItem[] = [
  {
    title: "Distributed Order Engine",
    subtitle: "AI-powered supply chain automation",
    iconName: "fastapi",
    link: "https://github.com/vishv183",
  },
  {
    title: "Connect Platform",
    subtitle: "Real-time messaging & P2P video",
    iconName: "django",
    link: "https://github.com/vishv183",
  },
  {
    title: "Churn Prediction",
    subtitle: "ML-powered telecom analytics",
    iconName: "scikitlearn",
    link: "https://github.com/vishv183",
  },
  {
    title: "Banking System",
    subtitle: "RESTful banking & transaction ledger",
    iconName: "sqlite",
    link: "https://github.com/vishv183",
  },
  {
    title: "AI Exception Triage",
    subtitle: "Gemini 2.5 agentic sandbox pipeline",
    iconName: "gemini",
    link: "https://github.com/vishv183",
  },
  {
    title: "Redis Streams Engine",
    subtitle: "Sub-50ms concurrent webhook ingest",
    iconName: "redis",
    link: "https://github.com/vishv183",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    categoryIcon: "python",
    borderColor: "border-slate-800",
    items: [
      { name: "Python", iconName: "python" },
      { name: "JavaScript", iconName: "javascript" },
      { name: "TypeScript", iconName: "typescript" },
      { name: "Go", iconName: "go" },
      { name: "C++", iconName: "cpp" },
      { name: "HTML5", iconName: "html" },
      { name: "CSS3", iconName: "css" },
    ],
  },
  {
    title: "Backend & Frameworks",
    categoryIcon: "fastapi",
    borderColor: "border-slate-800",
    items: [
      { name: "FastAPI", iconName: "fastapi" },
      { name: "Django", iconName: "django" },
      { name: "DRF", iconName: "drf" },
      { name: "Flask", iconName: "flask" },
      { name: "Celery", iconName: "celery" },
      { name: "Redis Streams", iconName: "redis" },
    ],
  },
  {
    title: "AI & ML",
    categoryIcon: "gemini",
    borderColor: "border-slate-800",
    items: [
      { name: "LangChain", iconName: "langchain" },
      { name: "LangSmith", iconName: "langsmith" },
      { name: "Scikit-learn", iconName: "scikitlearn" },
      { name: "XGBoost", iconName: "xgboost" },
      { name: "Pydantic", iconName: "pydantic" },
      { name: "Gemini", iconName: "gemini" },
    ],
  },
  {
    title: "Databases",
    categoryIcon: "postgresql",
    borderColor: "border-slate-800",
    items: [
      { name: "PostgreSQL", iconName: "postgresql" },
      { name: "SQLite", iconName: "sqlite" },
      { name: "Redis", iconName: "redis" },
    ],
  },
  {
    title: "Real-Time",
    categoryIcon: "webrtc",
    borderColor: "border-slate-800",
    items: [
      { name: "WebSockets", iconName: "websockets" },
      { name: "WebRTC", iconName: "webrtc" },
      { name: "Django Channels", iconName: "django" },
      { name: "ASGI", iconName: "asgi" },
    ],
  },
  {
    title: "Cloud & DevOps",
    categoryIcon: "aws",
    borderColor: "border-slate-800",
    items: [
      { name: "AWS", iconName: "aws" },
      { name: "Docker", iconName: "docker" },
      { name: "Git", iconName: "git" },
      { name: "GitHub", iconName: "github" },
      { name: "Pytest", iconName: "pytest" },
      { name: "Postman", iconName: "postman" },
      { name: "JWT", iconName: "jwt" },
    ],
  },
];

export const experienceData: ExperienceItem = {
  role: "Backend Developer Intern",
  company: "Elixir Techne · Ahmedabad, Gujarat",
  period: "Jun 2024 – Sep 2024",
  bullets: [
    "Shipped 15+ RESTful API endpoints using Django REST Framework covering auth, data processing, and CRUD workflows, reducing manual admin operations by ~40%.",
    "Optimized PostgreSQL schemas and queries — eliminated N+1 patterns and improved index utilization for faster response times.",
    "Integrated JWT auth, conducted code reviews, maintained Git branching discipline, and authored full Postman API documentation.",
  ],
};

export const educationData: EducationItem = {
  degree: "B.Tech — Computer Science & IT",
  institution: "Ganpat University · Ahmedabad, Gujarat",
  period: "May 2026",
  extra: "Also: Sal Institute of Diploma Studies · Ahmedabad, Gujarat",
};
