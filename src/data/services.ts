import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'career-counselling',
    title: 'MBBS Abroad Career Counselling',
    category: 'Counselling',
    shortDesc: 'One-on-one personalized consultation mapping student academic strengths, NEET performance, and long-term career aspirations.',
    detailedDesc: 'Our experienced senior education counselors conduct comprehensive profile evaluations with students and parents. We objectively compare Indian private medical college seat costs versus foreign universities, explore licensing paths (NExT, USMLE, PLAB), and set realistic clinical expectations.',
    deliverables: [
      'Comprehensive academic profile & budget evaluation report',
      'Realistic analysis of licensing exam pathways (NExT / USMLE / PLAB)',
      'Parent and student joint counselling sessions (in-person or video conference)',
      'Unbiased comparison of state vs private international universities'
    ],
    whatWeDoNotDo: 'We do not sell specific universities for agent commissions. We provide transparent, student-first guidance based on verified regulatory norms.',
    iconName: 'Compass'
  },
  {
    id: 'country-selection',
    title: 'Country Selection Assistance',
    category: 'Counselling',
    shortDesc: 'Objective country evaluation considering climate, flight distance, clinical curriculum, FMGL compliance, and total cost of living.',
    detailedDesc: 'Choosing the right country is fundamental to student comfort and graduation success. We analyze geopolitical stability, local language requirements during clinical rotations, flight connectivity, safety indices, and Indian embassy support networks.',
    deliverables: [
      'Multi-country side-by-side comparison matrix',
      'Detailed climate, safety, and cultural adaptation briefs',
      'Cost of living breakdown with historical currency fluctuations',
      'Indian embassy advisory checks and student welfare records'
    ],
    whatWeDoNotDo: 'We do not recommend countries or regions with active civil unrest, unverified accreditation, or non-English classroom mediums.',
    iconName: 'Globe'
  },
  {
    id: 'university-shortlisting',
    title: 'University Shortlisting',
    category: 'Admissions',
    shortDesc: 'Data-driven selection of WHO/WDOMS-listed government medical institutions matching the student budget and academic criteria.',
    detailedDesc: 'We assist students in shortlisting 3–4 verified medical universities based on patient bed counts, teacher-to-student ratios, cadaver availability for anatomy dissection, research facilities, and historical FMGE/NExT success rates.',
    deliverables: [
      'Verified list of 3-4 medical universities tailored to student profile',
      'Verification of university listing on WDOMS (World Directory of Medical Schools)',
      'Hospital bed count, clinical faculty profiles, and library facilities review',
      'Direct peer connection with senior Indian students currently studying there'
    ],
    whatWeDoNotDo: 'We do not partner with or recommend unaccredited, blacklisted, or makeshift private institutions.',
    iconName: 'GraduationCap'
  },
  {
    id: 'eligibility-assessment',
    title: 'Eligibility Assessment',
    category: 'Admissions',
    shortDesc: 'Thorough evaluation of 12th PCB marks, NEET qualification score, and age criteria as per National Medical Commission (NMC) guidelines.',
    detailedDesc: 'Before any financial commitments, our legal and compliance desk reviews the student’s Class 10 and 12 mark sheets, category certificates, and NEET scorecards to guarantee 100% compliance with NMC Foreign Medical Graduate Licentiate (FMGL) Regulations 2021.',
    deliverables: [
      'Formal NMC FMGL 2021 compliance verification',
      'Subject-wise mark evaluation (PCB 50% for UR, 40% for Reserved)',
      'Verification of NEET validity period (3 years for overseas MBBS)',
      'Identification of any potential regulatory red flags upfront'
    ],
    whatWeDoNotDo: 'We never bypass eligibility rules or promise admission to unqualified candidates.',
    iconName: 'CheckCircle2'
  },
  {
    id: 'application-assistance',
    title: 'University Application Assistance',
    category: 'Admissions',
    shortDesc: 'End-to-end guidance in filing accurate university application dossiers directly with international university admissions offices.',
    detailedDesc: 'Submitting official foreign university admission papers requires meticulous precision. We coordinate directly with university international faculties to prepare, submit, and track the official application file.',
    deliverables: [
      'Error-free filing of university admission application forms',
      'Coordination with university international affairs departments',
      'Submission tracking and status updates to student & parents',
      'Provisional admission letter issuance and verification'
    ],
    whatWeDoNotDo: 'We do not guarantee admission on behalf of any university; final selection decisions rest solely with university academic senate authorities.',
    iconName: 'FileText'
  },
  {
    id: 'documentation-support',
    title: 'Admission Documentation Support',
    category: 'Documentation',
    shortDesc: 'Professional assistance for Apostille, Ministry of External Affairs (MEA) attestation, state translation, and notary verification.',
    detailedDesc: 'International universities require verified certificates with legal apostilles and certified native language translations (Russian, Georgian, etc.). Our dedicated liaison team manages the end-to-end attestation pipeline with government ministries.',
    deliverables: [
      'MEA (Ministry of External Affairs, India) Apostille guidance',
      'HRD / State Home Department education certificate attestation',
      'Official sworn translations by certified university/consulate translators',
      'Police Clearance Certificate (PCC) and medical fitness dossier preparation'
    ],
    whatWeDoNotDo: 'We do not forge, fabricate, or alter any academic or legal documents.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'invitation-letter-coordination',
    title: 'Invitation Letter Coordination',
    category: 'Documentation',
    shortDesc: 'Liaison with federal migration services and university departments to secure official government student invitation letters.',
    detailedDesc: 'For countries like Russia, Kazakhstan, Uzbekistan, and Georgia, an official government invitation letter from the Ministry of Internal Affairs or Foreign Affairs is mandatory to initiate student visa processing. We track this workflow meticulously.',
    deliverables: [
      'Coordination with Federal Migration Services (FMS) / Ministry',
      'Procurement of official hard-copy and electronic student invitation letters',
      'Verification of university seal, rector signature, and immigration entry codes',
      'Prompt dispatch of original letters required for embassy submission'
    ],
    whatWeDoNotDo: 'We do not control foreign immigration department processing timelines, which typically take 25–45 days.',
    iconName: 'Mail'
  },
  {
    id: 'student-visa-guidance',
    title: 'Student Visa Guidance',
    category: 'Documentation',
    shortDesc: 'Complete visa dossier compilation, embassy appointment booking, biometric scheduling, and mock visa interview preparation.',
    detailedDesc: 'Our dedicated visa team guides students through financial documentation, bank statements, medical certificates (HIV/Hepatitis/TB tests), and embassy interview protocols to ensure a smooth visa stamping process.',
    deliverables: [
      'Customized country-specific visa document checklist',
      'Embassy / VFS appointment scheduling and fee payment assistance',
      'Mock visa interview sessions and question-answer training',
      'Passport tracking, insurance stamping, and visa collection assistance'
    ],
    whatWeDoNotDo: 'We do not promise or guarantee visa issuance, as foreign embassies and consulates retain sole sovereign discretion.',
    iconName: 'Stamp'
  },
  {
    id: 'education-loan-guidance',
    title: 'Education Loan Guidance',
    category: 'Admissions',
    shortDesc: 'Guidance with public and private bank documentation, Vidya Lakshmi portal registration, and university fee breakdown letters.',
    detailedDesc: 'Financing a medical degree is a crucial family consideration. We furnish comprehensive university fee schedules, tuition estimate certificates, and expenditure certificates recognized by nationalized Indian banks (SBI, Canara, PNB, etc.) and NBFCs.',
    deliverables: [
      'Official fee estimate certificates on university letterhead for bank submission',
      'Guidance on the Government of India Vidya Lakshmi education loan portal',
      'Collateralized and non-collateral loan option advisory',
      'Assistance with loan disbursement schedule aligned with university semestral fees'
    ],
    whatWeDoNotDo: 'We are not a lending institution and do not approve or guarantee bank loan sanctions.',
    iconName: 'BadgePercent'
  },
  {
    id: 'travel-pre-departure',
    title: 'Travel & Pre-Departure Assistance',
    category: 'Post-Arrival',
    shortDesc: 'Group flight bookings, student forex cards, extra baggage allowance coordination, and detailed pre-departure briefing seminars.',
    detailedDesc: 'Leaving home for a foreign university can be intimidating. We organize group departures escorted by our staff representatives, assist with discounted student air tickets, forex currency exchange, international SIM cards, and winter clothing checklists.',
    deliverables: [
      'Escorted group departures with experienced Aventis coordinators',
      'Special student airfares with 40kg+ baggage allowance',
      'International multicurrency forex cards and local currency guidance',
      'Comprehensive pre-departure seminar for students and parents covering winter living, laws, and culture'
    ],
    whatWeDoNotDo: 'We do not leave first-year students to travel unaccompanied to foreign airports.',
    iconName: 'Plane'
  },
  {
    id: 'accommodation-guidance',
    title: 'Accommodation Guidance',
    category: 'Post-Arrival',
    shortDesc: 'Guaranteed university hostel allotment with verified heating, 24/7 security, Indian mess facilities, and Wi-Fi connectivity.',
    detailedDesc: 'We inspect student residential dormitories to ensure safety, central heating, separate boys and girls floors/wings, and hygienic Indian kitchen setups. We also assist senior students transitioning to rented university apartments in later years.',
    deliverables: [
      'Advance university hostel room reservation prior to arrival',
      'Hostel inspection report covering central heating, bathrooms, and security',
      'Enrollment in Indian mess facilities with daily breakfast, lunch, and dinner',
      'Assistance with verified private student flat leases in later academic years'
    ],
    whatWeDoNotDo: 'We do not place students in unverified private hostels or unmonitored accommodation.',
    iconName: 'Home'
  },
  {
    id: 'post-arrival-support',
    title: 'Post-Arrival Student Support',
    category: 'Post-Arrival',
    shortDesc: 'Airport pickup, local police registration, medical checkups, local SIM cards, bank account opening, and year-round on-ground assistance.',
    detailedDesc: 'Our dedicated on-ground representatives stationed in university cities welcome students at the airport, assist with immigration clearances, accompany students to health examinations, complete university registration, and remain accessible throughout their study tenure.',
    deliverables: [
      'Warm airport welcome & chartered transport to university hostel',
      'Local police registration & biometric residence permit processing',
      'Campus orientation, library card issuance, and class schedule hand-over',
      'Round-the-clock emergency support hotline for parents back home'
    ],
    whatWeDoNotDo: 'Our relationship does not end once the flight takes off; on-ground support continues year-round.',
    iconName: 'HeartHandshake'
  }
];
