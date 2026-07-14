import {
  BrainCircuit,
  Cloud,
  CodeXml,
  Cog,
  Database,
  GitBranch,
  Layers,
  Palette,
} from "lucide-react";

export const skills: Skill[] = [
  { title: "CSS", since: 2018, tags: ["frontend", "language"] },
  { title: "GitHub", since: 2016, tags: ["tool"] },
  { title: "HTML", since: 2014, tags: ["frontend", "language"] },
  { title: "JavaScript", since: 2014, tags: ["frontend", "language"] },
  { title: "Linux Server", since: 2017, tags: ["tool"] },
  { title: "npm/yarn", since: 2018, tags: ["tool"] },
  { title: "React", since: 2018, tags: ["frontend", "ui-frameworks"] },
  { title: "VSCode", since: 2018, tags: ["tool"] },
  { title: "Nginx", since: 2018, tags: ["tool"] },
  { title: "TypeScript", since: 2019, tags: ["frontend", "language"] },
  { title: "AWS EC2", since: 2017, tags: ["cloud"] },
  { title: "Django", since: 2020, tags: ["backend"] },
  { title: "PostgreSQL", since: 2020, tags: ["database"] },
  { title: "Docker", since: 2021, tags: ["tool"] },
  { title: "Next.js", since: 2021, tags: ["frontend", "ui-frameworks"] },
  { title: "Material UI", since: 2023, tags: ["ui-frameworks"] },
  { title: "SQLite", since: 2019, tags: ["database"] },
  { title: "Tailwind CSS", since: 2024, tags: ["ui-frameworks"] },
  { title: "Vercel", since: 2022, tags: ["cloud", "tool"] },
  { title: "Vite", since: 2022, tags: ["tool"] },
  { title: "pnpm", since: 2022, tags: ["tool"] },
  { title: "Python3", since: 2020, tags: ["language"] },
  { title: "ChatGPT", since: 2022, tags: ["ai"] },
  { title: "Bun", since: 2024, tags: ["tool", "language"] },
  { title: "ClaudeAI", since: 2024, link: "https://claude.ai", tags: ["ai"] },
  { title: "ElysiaJS", since: 2024, tags: ["backend"] },
  { title: "Flutter", since: 2023, tags: ["frontend", "language"] },
  { title: "GatsbyJS", since: 2022, tags: ["frontend", "ui-frameworks"] },
  { title: "GitHub CI/CD", since: 2025, tags: ["tool"] },
  { title: "Laravel", since: 2017, tags: ["backend", "frontend"] },
  { title: "MongoDB", since: 2019, tags: ["database"] },
  { title: "NestJS", since: 2019, tags: ["backend"] },
  { title: "ShadCN", since: 2025, tags: ["ui-frameworks"] },
  { title: "Java", since: 2013, tags: ["language"] },
];

export interface Skill {
  title: string;
  since: number;
  tags: string[];
  link?: string;
}

export const categories = [
  { key: "frontend", Icon: Palette },
  { key: "ui-frameworks", Icon: Layers },
  { key: "backend", Icon: Cog },
  { key: "database", Icon: Database },
  { key: "language", Icon: CodeXml },
  { key: "cloud", Icon: Cloud },
  { key: "tool", Icon: GitBranch },
  { key: "ai", Icon: BrainCircuit },
];
