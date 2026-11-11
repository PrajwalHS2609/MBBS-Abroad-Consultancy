import { University } from '../types';

export const UNIVERSITIES_DATA: University[] = [
  {
    id: 'kazan-federal-university',
    name: 'Kazan Federal University',
    nativeName: 'Казанский федеральный университет',
    country: 'Russia',
    city: 'Kazan, Tatarstan',
    established: 1804,
    type: 'Public / State',
    worldRanking: 'Top 350 QS World Ranking',
    countryRanking: 'Top 5 in Russia',
    image: '/assets/images/campus_university_russia_1794401015785.jpg',
    totalCourseDuration: '6 Years (Full-time MD/MBBS degree)',
    medium: '100% English Medium',
    tuitionPerYearUSD: 5200,
    tuitionPerYearINR: 430000,
    hostelPerYearINR: 35000,
    recognition: ['WHO', 'NMC (India)', 'WDOMS', 'ECFMG (USA)', 'FAIMER', 'GMC (UK)'],
    hospitalBeds: 2400,
    intake: 'September / October 2026',
    officialWebsite: 'https://kpfu.ru',
    highlights: [
      'Over 220 years of history; alma mater of famous scholars and medical researchers',
      'Institute of Fundamental Medicine and Biology with robotic simulation center',
      'High cadaver availability for first-hand anatomy dissection',
      'Modern university campus with Olympic village hostel accommodations',
      'Dedicated Indian mess serving vegetarian and non-vegetarian food daily'
    ],
    eligibilityCriteria: {
      min12thPCB: 50,
      neetMandatory: true,
      minAge: 17
    }
  },
  {
    id: 'bashkir-state-medical-university',
    name: 'Bashkir State Medical University',
    nativeName: 'Башкирский государственный медицинский университет',
    country: 'Russia',
    city: 'Ufa, Republic of Bashkortostan',
    established: 1932,
    type: 'Public / State',
    worldRanking: 'Leading Russian Medical Academy',
    countryRanking: 'Top 10 Russian Medical Universities',
    image: '/assets/images/medical_lab_training_1794401015734.jpg',
    totalCourseDuration: '6 Years (General Medicine)',
    medium: '100% English Medium',
    tuitionPerYearUSD: 4200,
    tuitionPerYearINR: 350000,
    hostelPerYearINR: 32000,
    recognition: ['WHO', 'NMC (India)', 'WDOMS', 'ECFMG', 'FAIMER'],
    hospitalBeds: 3200,
    intake: 'September / October 2026',
    officialWebsite: 'https://bashgmu.ru',
    highlights: [
      'Over 3,000+ Indian students successfully graduated and practicing globally',
      'Large university clinic with robotic DaVinci surgery unit',
      'Very affordable tuition fee structure with zero hidden annual hikes',
      'In-house preparation classes for NExT / USMLE licensing exams',
      'Direct flights connectivity via Moscow / Samara / Ufa International Airport'
    ],
    eligibilityCriteria: {
      min12thPCB: 50,
      neetMandatory: true,
      minAge: 17
    }
  },
  {
    id: 'tbilisi-state-medical-university',
    name: 'Tbilisi State Medical University',
    nativeName: 'თბილისის სახელმწიფო სამედიცინო უნივერსიტეტი',
    country: 'Georgia',
    city: 'Tbilisi',
    established: 1918,
    type: 'Public / State',
    worldRanking: 'Premier Caucasus State Medical University',
    countryRanking: 'Rank 1 in Georgia',
    image: '/assets/images/hero_indian_med_students_1794401014765.jpg',
    totalCourseDuration: '6 Years (360 ECTS Credits)',
    medium: '100% English Medium',
    tuitionPerYearUSD: 8000,
    tuitionPerYearINR: 660000,
    hostelPerYearINR: 120000,
    recognition: ['WHO', 'NMC (India)', 'WFME', 'AMEE', 'ECFMG', 'GMC'],
    hospitalBeds: 1800,
    intake: 'September 2026 & February 2027',
    officialWebsite: 'https://tsmu.edu.ge',
    highlights: [
      'Pioneer of English-medium medical education in the Caucasus region since 1996',
      'Affiliated with First University Clinic and leading European medical institutions',
      'Georgia boasts one of the lowest crime rates in all of Europe',
      'USMLE integrated clinical coursework and OSCE examination standards',
      'Cosmopolitan European city life with extensive Indian student associations'
    ],
    eligibilityCriteria: {
      min12thPCB: 50,
      neetMandatory: true,
      minAge: 17
    }
  },
  {
    id: 'david-tvildiani-medical-university',
    name: 'David Tvildiani Medical University (DTMU)',
    nativeName: 'დავით ტვილდიანის სამედიცინო უნივერსიტეტი',
    country: 'Georgia',
    city: 'Tbilisi',
    established: 1989,
    type: 'Autonomous State',
    worldRanking: 'Top Medical School in Georgia for USMLE',
    countryRanking: 'Top 3 in Georgia',
    image: '/assets/images/graduation_ceremony_doctors_1794401016581.jpg',
    totalCourseDuration: '6 Years (Medical Doctor - MD)',
    medium: '100% English Medium',
    tuitionPerYearUSD: 8500,
    tuitionPerYearINR: 700000,
    hostelPerYearINR: 110000,
    recognition: ['WHO', 'NMC', 'WFME', 'ECFMG', 'FAIMER', 'GMC'],
    hospitalBeds: 1200,
    intake: 'September / October 2026',
    officialWebsite: 'https://dtmu.edu.ge',
    highlights: [
      'Renowned for the highest USMLE Step 1 and Step 2 pass rates in Eastern Europe',
      'Over 500+ DTMU alumni currently practicing as residents/consultants in the USA and UK',
      'Rigorous American-style problem-based learning (PBL) clinical curriculum',
      'Dedicated campus library with 24/7 access to UpToDate and medical journals'
    ],
    eligibilityCriteria: {
      min12thPCB: 50,
      neetMandatory: true,
      minAge: 17
    }
  },
  {
    id: 'kazakh-national-medical-university',
    name: 'Kazakh National Medical University (Asfendiyarov)',
    nativeName: 'С.Ж. Асфендияров атындағы Қазақ ұлттық медицина университеті',
    country: 'Kazakhstan',
    city: 'Almaty',
    established: 1930,
    type: 'Public / State',
    worldRanking: 'Top 600 QS World Ranking',
    countryRanking: 'Rank 1 Medical University in Kazakhstan',
    image: '/assets/images/medical_lab_training_1794401015734.jpg',
    totalCourseDuration: '5 Years + 1 Year Internship',
    medium: '100% English Medium',
    tuitionPerYearUSD: 5100,
    tuitionPerYearINR: 420000,
    hostelPerYearINR: 50000,
    recognition: ['WHO', 'NMC (India)', 'WDOMS', 'ECFMG', 'FAIMER'],
    hospitalBeds: 3500,
    intake: 'September / October 2026',
    officialWebsite: 'https://kaznmu.edu.kz',
    highlights: [
      'National status university with highest government medical accreditation in Central Asia',
      'Over 90 years of clinical research; training over 11,000 medical students',
      'Only 3.5 hours direct flight from New Delhi to Almaty International Airport',
      'Low cost of living, safe scenic city at the base of the Tian Shan mountain range',
      'Dedicated hostel with Indian cooks and round-the-clock Indian wardens'
    ],
    eligibilityCriteria: {
      min12thPCB: 50,
      neetMandatory: true,
      minAge: 17
    }
  },
  {
    id: 'samarkand-state-medical-university',
    name: 'Samarkand State Medical University',
    nativeName: 'Samarqand davlat tibbiyot universiteti',
    country: 'Uzbekistan',
    city: 'Samarkand',
    established: 1930,
    type: 'Public / State',
    worldRanking: 'Leading Central Asian Medical Institute',
    countryRanking: 'Top 3 in Uzbekistan',
    image: '/assets/images/campus_university_russia_1794401015785.jpg',
    totalCourseDuration: '5 Years + 1 Year Internship',
    medium: '100% English Medium',
    tuitionPerYearUSD: 3800,
    tuitionPerYearINR: 315000,
    hostelPerYearINR: 45000,
    recognition: ['WHO', 'NMC', 'WDOMS', 'ECFMG', 'FAIMER'],
    hospitalBeds: 2100,
    intake: 'September 2026',
    officialWebsite: 'https://sammu.uz',
    highlights: [
      'Historic medical university completely revamped with modern digital simulation clinics',
      'Highly economical total package with tuition + hostel around ₹22 Lakhs total',
      'Warm and welcoming local community with historical ties to Indian culture',
      'Direct flights from Delhi to Tashkent / Samarkand',
      'Fully equipped Indian mess serving fresh food daily'
    ],
    eligibilityCriteria: {
      min12thPCB: 50,
      neetMandatory: true,
      minAge: 17
    }
  },
  {
    id: 'osh-state-university',
    name: 'Osh State University - Medical Faculty',
    nativeName: 'Ош мамлекеттик университети',
    country: 'Kyrgyzstan',
    city: 'Osh',
    established: 1993,
    type: 'Public / State',
    worldRanking: 'Premier State University in Kyrgyzstan',
    countryRanking: 'Top 2 in Kyrgyzstan',
    image: '/assets/images/hero_indian_med_students_1794401014765.jpg',
    totalCourseDuration: '5 Years + 1 Year Internship',
    medium: '100% English Medium',
    tuitionPerYearUSD: 3600,
    tuitionPerYearINR: 295000,
    hostelPerYearINR: 40000,
    recognition: ['WHO', 'NMC (India)', 'WDOMS', 'ECFMG', 'FAIMER'],
    hospitalBeds: 2000,
    intake: 'September / October 2026',
    officialWebsite: 'https://oshsu.kg',
    highlights: [
      'One of the largest Indian alumni bases in Central Asia with thousands of practicing doctors',
      'Most economical medical degree with total 5-year academic fees under ₹18-20 Lakhs',
      'Dedicated international medical faculty teaching in 100% English medium',
      'Active student union, Indian cultural events, Diwali, and Holi celebrations on campus'
    ],
    eligibilityCriteria: {
      min12thPCB: 50,
      neetMandatory: true,
      minAge: 17
    }
  },
  {
    id: 'kathmandu-university-kusms',
    name: 'Kathmandu University School of Medical Sciences (KUSMS)',
    nativeName: 'काठमाडौं विश्वविद्यालय मेडिकल साइन्सेज',
    country: 'Nepal',
    city: 'Dhulikhel / Kathmandu',
    established: 1994,
    type: 'Autonomous State',
    worldRanking: 'Leading Medical University in SAARC',
    countryRanking: 'Rank 1 in Nepal',
    image: '/assets/images/graduation_ceremony_doctors_1794401016581.jpg',
    totalCourseDuration: '4.5 Years + 1 Year Mandatory Rotatory Internship',
    medium: '100% English Medium',
    tuitionPerYearUSD: 14000,
    tuitionPerYearINR: 1150000,
    hostelPerYearINR: 90000,
    recognition: ['WHO', 'NMC (India)', 'Nepal Medical Council', 'ECFMG', 'GMC'],
    hospitalBeds: 1500,
    intake: 'November / December 2026',
    officialWebsite: 'https://kusms.edu.np',
    highlights: [
      'Curriculum, textbooks, and examination pattern identical to Indian Medical Colleges',
      'No visa or passport required for Indian students (Voter ID or Aadhaar valid)',
      'Clinical disease patterns are identical to Northern and Eastern India',
      'Consistently highest pass percentage in Indian FMGE/NExT screening examinations',
      'Renowned faculty trained at AIIMS, PGIMER, and leading institutes'
    ],
    eligibilityCriteria: {
      min12thPCB: 50,
      neetMandatory: true,
      minAge: 17
    }
  }
];
