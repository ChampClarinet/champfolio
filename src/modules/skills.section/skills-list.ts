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
  { title: "CSS", years: 7, tags: ["frontend", "language"] },
  { title: "Github", years: 7, tags: ["tool"] },
  { title: "HTML", years: 7, tags: ["frontend", "language"] },
  { title: "JavaScript", years: 7, tags: ["frontend", "language"] },
  { title: "Linux Server", years: 7, tags: ["tool"] },
  { title: "npm/yarn", years: 7, tags: ["tool"] },
  { title: "React", years: 7, tags: ["frontend", "ui-frameworks"] },
  { title: "VSCode", years: 7, tags: ["tool"] },
  { title: "Nginx", years: 6, tags: ["tool"] },
  { title: "TypeScript", years: 6, tags: ["frontend", "language"] },
  { title: "AWS EC2", years: 5, tags: ["cloud"] },
  { title: "Django", years: 5, tags: ["backend"] },
  { title: "PostgreSQL", years: 5, tags: ["database"] },
  { title: "Docker", years: 5, tags: ["tool"] },
  { title: "Next.js", years: 5, tags: ["frontend", "ui-frameworks"] },
  { title: "Material UI", years: 3, tags: ["ui-frameworks"] },
  { title: "SQLite", years: 3, tags: ["database"] },
  { title: "Tailwind CSS", years: 3, tags: ["ui-frameworks"] },
  { title: "Vercel", years: 3, tags: ["cloud", "tool"] },
  { title: "Vite", years: 3, tags: ["tool"] },
  { title: "pnpm", years: 3, tags: ["tool"] },
  { title: "Python3", years: 3, tags: ["language"] },
  { title: "Bun", years: 1, tags: ["tool", "language"] },
  { title: "ClaudeAI", years: 1, link: "https://claude.ai", tags: ["ai"] },
  { title: "ElysiaJS", years: 1, tags: ["backend"] },
  { title: "Flutter", years: 1, tags: ["frontend", "language"] },
  { title: "GatsbyJS", years: 1, tags: ["frontend", "ui-frameworks"] },
  { title: "Github CI/CD", years: 1, tags: ["tool"] },
  { title: "Laravel", years: 1, tags: ["backend", "frontend"] },
  { title: "MongoDB", years: 1, tags: ["database"] },
  { title: "NestJS", years: 1, tags: ["backend"] },
  { title: "Preplexity", years: 1, link: "https://www.perplexity.ai", tags: ["ai"] },
  { title: "SOL7", years: 1, link: "https://sol7.ai", tags: ["ai"] },
  { title: "ShadCN", years: 1, tags: ["ui-frameworks"] },
  { title: "Java", years: 1, tags: ["language"] },
];

export interface Skill {
  title: string;
  years: number;
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
