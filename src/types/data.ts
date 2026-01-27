export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
}

export interface Article {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  url: string;
}

export interface Particle {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}
