export interface CountryInfo {
  id: string;
  name: string;
  flag: string;
  tagline: string;
  image: string;
  popularUniversities: string[];
  courseDuration: string; // e.g. "5.8 Years (incl. internship)"
  mediumOfInstruction: string;
  avgTuitionPerYearINR: string;
  avgLivingCostPerMonthINR: string;
  neetRequirement: string;
  intakeMonths: string[];
  climate: string;
  indianFoodAvailability: 'High' | 'Moderate' | 'Limited';
  fmglCompliant: boolean;
  whoRecognized: boolean;
  description: string;
  keyHighlights: string[];
  eligibilityNotes: string;
}

export interface University {
  id: string;
  name: string;
  nativeName?: string;
  country: string;
  city: string;
  established: number;
  type: 'Public / State' | 'Autonomous State' | 'Private';
  worldRanking?: string;
  countryRanking?: string;
  image: string;
  totalCourseDuration: string;
  medium: '100% English Medium' | 'Bilingual' | 'English & Russian';
  tuitionPerYearUSD: number;
  tuitionPerYearINR: number;
  hostelPerYearINR: number;
  recognition: string[]; // WHO, NMC, ECFMG, FAIMER, WDOMS
  hospitalBeds: number;
  intake: string;
  officialWebsite: string;
  highlights: string[];
  eligibilityCriteria: {
    min12thPCB: number;
    neetMandatory: boolean;
    minAge: number;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'Counselling' | 'Admissions' | 'Documentation' | 'Post-Arrival';
  shortDesc: string;
  detailedDesc: string;
  deliverables: string[];
  whatWeDoNotDo: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  studentName: string;
  photoUrl: string;
  homeCity: string;
  universityName: string;
  country: string;
  yearOfAdmission: string;
  currentYear: string;
  neetScore: number;
  quote: string;
  story: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'NMC Guidelines' | 'Country Guide' | 'Financial Planning' | 'Admission Guide';
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}

export interface FAQItem {
  id: string;
  category: 'General' | 'NEET & NMC' | 'Fees & Budget' | 'Living & Safety' | 'Admission Process';
  question: string;
  answer: string;
}

export interface LeadEnquiry {
  studentName: string;
  parentName?: string;
  mobileNumber: string;
  whatsappNumber?: string;
  email: string;
  city: string;
  state: string;
  educationLevel: string;
  class12Year: string;
  pcbPercentage: string;
  neetStatus: 'Qualified' | 'Appearing' | 'Not Qualified' | 'Planning';
  neetScore?: string;
  preferredCountry: string;
  budgetRange: string;
  message?: string;
  timestamp: string;
}
