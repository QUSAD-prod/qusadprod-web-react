export type Language = 'ru' | 'en';

export interface Project {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  detailedDescription?: Record<Language, string>;
  problemSolved?: Record<Language, string>;
  technicalChallenges?: Record<Language, string>;
  technologies?: string[];
  tags?: Record<Language, string>[];
  links?: {
    label: string;
    url: string;
  }[];
  period?: string;
  company?: string;
  icon?: string;
}

export interface WorkExperience {
  id: string;
  position: Record<Language, string>;
  company: Record<Language, string>;
  period: string;
  description: Record<Language, string>;
  responsibilities?: Record<Language, string[]>;
  techStack?: string[];
  projects?: Project[];
}

export interface Education {
  id: string;
  institution: Record<Language, string>;
  specialization: Record<Language, string>;
  period: string;
  location: Record<Language, string>;
  url?: string;
  certificateNumber?: string;
  type?: 'education' | 'hackathon';
  award?: Record<Language, string>;
  description?: Record<Language, string>;
}

export interface PersonalInfo {
  nickname: string;
  fullName: Record<Language, string>;
  position: Record<Language, string>;
  avatar?: string;
  email: string;
  telegram: string;
  age?: number;
  country?: Record<Language, string>;
  city?: Record<Language, string>;
  summary?: Record<Language, string>;
}

export interface SiteData {
  personalInfo: PersonalInfo;
  workExperience: WorkExperience[];
  education: Education[];
  projects?: Project[];
}

