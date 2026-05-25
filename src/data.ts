export interface EducationItem {
  institution: string;
  degree: string;
  timeline: string;
  details: string[];
  coursework?: string[];
  ratingLabel?: string;
  ratingValue?: string;
}

export interface LeadershipItem {
  organization: string;
  role: string;
  timeline: string;
  bullets: string[];
}

export interface SkillCategory {
  categoryName: string;
  items: {
    name: string;
    level: "Expert" | "Intermediate" | "Basic" | "Proficient";
    description: string;
    percentage: number; // For visualization
  }[];
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "University of Dhaka",
    degree: "Bachelor of Business Administration (BBA) in Accounting",
    timeline: "Expected 2026",
    details: [
      "Current CGPA: 3.65 / 4.00 (Final Semester)",
      "Relevant Coursework: Corporate Tax, Financial Accounting, Cost Accounting, Auditing, and Management Accounting."
    ],
    coursework: [
      "Corporate Tax",
      "Financial Accounting",
      "Cost Accounting",
      "Auditing",
      "Management Accounting"
    ],
    ratingLabel: "Academic Performance",
    ratingValue: "CGPA: 3.65/4.00"
  },
  {
    institution: "The Institute of Chartered Accountants of Bangladesh (ICAB)",
    degree: "CA Professional Level",
    timeline: "Expected 2027",
    details: [
      "Successfully completed all Certificate Level courses.",
      "CA Professional Level in progress."
    ],
    ratingLabel: "CA Level",
    ratingValue: "Professional Level"
  }
];

export const LEADERSHIP_DATA: LeadershipItem[] = [
  {
    organization: "University of Dhaka Accounting Forum (UDAF)",
    role: "Vice President – Promotion & Content Development Wing",
    timeline: "2025 - Present",
    bullets: [
      "Organized academic and networking events while leading promotional campaigns across social media platforms to increase student engagement.",
      "Spearheaded organizational operations by coordinating between the faculty and student body to enhance academic engagement.",
      "Coordinated seminars and workshops involving faculty members, professionals, and students, improving participation in accounting-related activities."
    ]
  },
  {
    organization: "Accounting Bulletin / DU",
    role: "Managing Editor, Editorial",
    timeline: "2025",
    bullets: [
      "Led editorial coordination and publication of the departmental quarterly newsletter with cross-functional collaboration among students and faculty.",
      "Facilitated communication between faculty, students, and team members to ensure seamless execution of the newsletter."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    categoryName: "Accounting & Compliance",
    items: [
      { name: "Corporate Tax & VAT Compliance", level: "Proficient", description: "In-depth understanding of Bangladesh tax laws, regulatory filing, and compliance workflows.", percentage: 85 },
      { name: "Tally ERP", level: "Intermediate", description: "Proficient inside general ledgers, voucher entry, reconciliation, and reporting.", percentage: 75 },
      { name: "Xero Cloud Accounting", level: "Basic", description: "Familiar with cloud ledger integrations, invoice automation, and bank synchronization.", percentage: 60 }
    ]
  },
  {
    categoryName: "Data & Analytics",
    items: [
      { name: "MS Excel", level: "Intermediate", description: "Specialized in interactive dashboards, complex lookup formulas, slicers, and advanced data cleaning.", percentage: 80 },
      { name: "Power BI", level: "Basic", description: "Created relational data configurations and simple custom dashboards for executive analytics.", percentage: 55 },
      { name: "Python", level: "Basic", description: "Basics of data structures, scripting automated processes, and data exploration with Pandas.", percentage: 45 }
    ]
  },
  {
    categoryName: "Professional Tools",
    items: [
      { name: "Google Workspace", level: "Proficient", description: "Collaborative tools management, docs, sheets, slides, and administrative workflows.", percentage: 90 },
      { name: "AI Tools for Productivity", level: "Proficient", description: "Leverage generative AI models for prompt engineering, research synthesis, and rapid copy editing.", percentage: 92 },
      { name: "Business Analytics", level: "Intermediate", description: "Gathering and documenting requirements, creating functional designs, and data modeling.", percentage: 70 }
    ]
  }
];

export const SOFT_SKILLS = [
  {
    skill: "Communication",
    description: "Proficient in professional correspondence and public speaking within academic and professional forums."
  },
  {
    skill: "Teamwork & Leadership",
    description: "Proven ability to lead student organizations, coordinate events, and manage cross-functional projects."
  },
  {
    skill: "Work Ethic",
    description: "Highly disciplined with a strong focus on time management, accuracy, and meeting complex project deadlines."
  }
];

export const CONTACT_INFO = {
  name: "Md. Sujon Shikder",
  phone: "01345502209",
  email: "sujonshikder736@gmail.com",
  address: "865/E, Badda, Dhaka",
  linkedin: "https://linkedin.com/in/sujon-shikder-accounting/"
};
