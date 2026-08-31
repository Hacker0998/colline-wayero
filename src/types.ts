export type ServiceCategory = 'GRAPHIC_DESIGN' | 'VIDEO_EDITING' | 'ARTWORK_DESIGN';

export interface ServiceItem {
  id: string;
  title: string;
  category: ServiceCategory;
  tagline: string;
  description: string;
  iconName: string;
  tags: string[];
  deliverables: string[];
  highlightColor: string;
  gradient: string;
}

export type PortfolioCategory = 'ALL' | 'GRAPHIC DESIGN' | 'VIDEO' | 'BRANDING' | 'ARTWORK';

export interface ProjectItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  type: 'Concept Project' | 'Creative Exploration';
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  clientScope: string;
  palette: string[];
  deliverables: string[];
  year: string;
}

export interface TeamMemberRole {
  id: string;
  role: string;
  category: string;
  description: string;
  responsibilities: string[];
  avatarBg: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  deadline: string;
  projectDescription: string;
  workspacePreference: 'online' | 'office' | 'both';
}
