import { LucideIcon } from "lucide-react";

export interface ResourceLink {
  url: string;
  title: string;
  subtitle: string;
  author: string;
  imageUrl: string;
}

export interface SlideProps {
  isActive: boolean;
}

export interface SlideData {
  id: number;
  title: string;
  component: React.FC<SlideProps>;
}

export interface PresentationConfig {
  institutionColors: {
    primary: string; // Verde Oscuro
    secondary: string; // Guinda
  };
  logoUrl: string;
}