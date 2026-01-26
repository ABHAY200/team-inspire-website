import {
  FileText,
  Briefcase,
  Calculator,
  Target,
  Users,
  Award,
  Heart,
  Shield,
  Clock,
  TrendingUp,
  Upload,
} from 'lucide-react';

export const getIcon = (iconName: string, size: number = 40) => {
  const icons: Record<string, any> = {
    FileText,
    Briefcase,
    Calculator,
    Target,
    Users,
    Award,
    Heart,
    Shield,
    Clock,
    TrendingUp,
    Upload,
  };

  const Icon = icons[iconName];
  return Icon ? <Icon size={size} /> : null;
};
