export interface Blog {
  id: number;
  concept: string;
  title: string;
  description: string;
  photo?: string;
  link?: string;
  adminId: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  liveLink: string;
  frontendLink: string;
  backendLink: string;
  technologies: string[];
  features: string[];
  adminId: string;
  createdAt: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level?: number;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  description: string;
  startDate: string;
  endDate?: string;
  current: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}
