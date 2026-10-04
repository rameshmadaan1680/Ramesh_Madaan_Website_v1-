export interface CaseStudy {
  id: string;
  title: string;
  category: 'Industrial & B2B' | 'Distribution & Channel' | 'Turnaround Strategy';
  organization: string;
  role: string;
  metricHighlight: string;
  metricLabel: string;
  challenge: string;
  intervention: string;
  outcomes: string[];
  keyClientsOrApprovals?: string[];
}

export interface ConsultingService {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  idealFor: string;
  tags: string[];
}

export interface AuditQuestion {
  id: number;
  question: string;
  area: string;
  options: {
    label: string;
    points: number;
    description: string;
  }[];
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  revenueBracket: string;
  primaryChallenge: string;
  message: string;
}
