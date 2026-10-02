import { CoordinatorContact } from '../types';

// SASI IEEE Student Branch (STB64284) Central Leadership
export const SB_LEADERSHIP = [
  {
    name: 'Aswin Nimmagadda',
    role: 'Student Branch Chair (SB Chair)',
    department: 'Department of Electronics & Communication Engineering (ECE)',
    phone: '+91 7702 640 019',
    rawPhone: '917702640019',
    badge: 'SB Chair'
  },
  {
    name: 'Akash Perepu',
    role: 'Student Branch Vice Chair (SB Vice Chair)',
    department: 'Department of Computer Science & Engineering (CSE)',
    phone: '+91 80960 33660',
    rawPhone: '918096033660',
    badge: 'SB Vice Chair'
  }
];

// Chapter Chairs (Contact info removed as requested)
export const CHAPTER_LEADS = [
  // 1. Computer Society Chapter (CS)
  {
    chapter: 'CS',
    chapterName: 'Computer Society Chapter',
    chairName: 'Ms. Nagaboyina Jahnavi',
    title: 'Chair, Sasi IEEE CS Chapter',
    department: 'Dept. of Computer Science & Engineering',
    eventTitle: 'Random Sprint'
  },
  // 2. Antennas & Propagation Society Chapter (AP-S)
  {
    chapter: 'AP-S',
    chapterName: 'Antennas & Propagation Society (SBC64284D)',
    chairName: 'Ms. V. J. Akshaya',
    title: 'Chair, Sasi IEEE AP-S Chapter',
    department: 'Dept. of Electronics & Communication Technology',
    eventTitle: 'RTL to Synthesis & Idea to Impact'
  },
  // 3. Signal Processing Society Chapter (SPS)
  {
    chapter: 'SPS',
    chapterName: 'Signal Processing Society (SBC642848)',
    chairName: 'Ms. P.L.S.P. Manasa',
    title: 'Chair, Sasi IEEE SPS Chapter',
    department: 'Dept. of Electronics & Communication Engineering',
    eventTitle: 'Circuit Mania 2.0'
  },
  // 4. Women in Engineering Affinity Group (WIE)
  {
    chapter: 'WIE',
    chapterName: 'Women in Engineering Affinity Group',
    chairName: 'Ms. B. Teja Sree',
    title: 'Chair, Sasi IEEE WIE Affinity Group',
    department: 'Dept. of Computer Science & Engineering',
    eventTitle: 'AI Video Spark'
  }
];

// Student Coordinators with exact phone numbers
export const STUDENT_COORDINATORS: CoordinatorContact[] = [
  // 1. Student Branch Leadership (SB Chair & Vice Chair)
  {
    id: 'coord-sb-1',
    name: 'Aswin Nimmagadda',
    role: 'SASI IEEE SB Chair (ECE)',
    chapter: 'Student Branch',
    chapterName: 'Sasi IEEE Student Branch (STB64284)',
    phone: '+91 7702 640 019',
    eventTitle: 'Overall IEEE Day Lead'
  },
  {
    id: 'coord-sb-2',
    name: 'Akash Perepu',
    role: 'SASI IEEE SB Vice Chair (CSE)',
    chapter: 'Student Branch',
    chapterName: 'Sasi IEEE Student Branch (STB64284)',
    phone: '+91 80960 33660',
    eventTitle: 'Overall Operations Lead'
  },

  // 2. Computer Society (CS Chapter)
  {
    id: 'coord-cs-1',
    name: 'CH. Jaswanth',
    role: 'CS Chapter Coordinator',
    chapter: 'CS',
    chapterName: 'Sasi IEEE Computer Society Chapter',
    phone: '+91 79898 18341',
    eventTitle: 'Random Sprint'
  },
  {
    id: 'coord-cs-2',
    name: 'D. Asresha vani',
    role: 'CS Chapter Coordinator',
    chapter: 'CS',
    chapterName: 'Sasi IEEE Computer Society Chapter',
    phone: '+91 82972 39836',
    eventTitle: 'Random Sprint'
  },

  // 3. Antennas & Propagation Society (APS Chapter)
  {
    id: 'coord-aps-1',
    name: 'G. Sriram',
    role: 'APS Chapter Coordinator',
    chapter: 'AP-S',
    chapterName: 'Sasi IEEE AP-S Chapter (SBC64284D)',
    phone: '+91 80962 08668',
    eventTitle: 'RTL to Synthesis & Idea to Impact'
  },
  {
    id: 'coord-aps-2',
    name: 'V. Akshaya',
    role: 'APS Chapter Coordinator',
    chapter: 'AP-S',
    chapterName: 'Sasi IEEE AP-S Chapter (SBC64284D)',
    phone: '+91 63023 25392',
    eventTitle: 'RTL to Synthesis & Idea to Impact'
  },

  // 4. Signal Processing Society (SPS Chapter)
  {
    id: 'coord-sps-1',
    name: 'P. Keerthi',
    role: 'SPS Chapter Coordinator',
    chapter: 'SPS',
    chapterName: 'Sasi IEEE Signal Processing Society (SBC642848)',
    phone: '+91 79816 31166',
    eventTitle: 'Circuit Mania 2.0'
  },
  {
    id: 'coord-sps-2',
    name: 'V. Mounika',
    role: 'SPS Chapter Coordinator',
    chapter: 'SPS',
    chapterName: 'Sasi IEEE Signal Processing Society (SBC642848)',
    phone: '+91 90320 17749',
    eventTitle: 'Circuit Mania 2.0'
  },

  // 5. Women in Engineering (WIE Chapter)
  {
    id: 'coord-wie-1',
    name: 'Jashwanth',
    role: 'WIE Treasurer',
    chapter: 'WIE',
    chapterName: 'Sasi IEEE Women in Engineering Affinity Group',
    phone: '+91 76619 70687',
    eventTitle: 'AI Video Spark'
  },
  {
    id: 'coord-wie-2',
    name: 'B. Tejasree',
    role: 'WIE Chapter Coordinator',
    chapter: 'WIE',
    chapterName: 'Sasi IEEE Women in Engineering Affinity Group',
    phone: '+91 86887 00367',
    eventTitle: 'AI Video Spark'
  }
];

export const INSTITUTION_INFO = {
  institutionName: "Sasi Institute of Technology & Engineering",
  branchName: "SASI IEEE Student Branch",
  branchCode: "STB64284",
  sbLeadership: {
    chair: "Aswin Nimmagadda (ECE) · +91 7702 640 019",
    viceChair: "Akash Perepu (CSE) · +91 80960 33660"
  },
  chapters: [
    { code: "STB64284-CS", name: "Computer Society Chapter (CS)" },
    { code: "SBC64284D", name: "Antennas & Propagation Society Chapter (AP-S)" },
    { code: "SBC642848", name: "Signal Processing Society Chapter (SPS)" },
    { code: "STB64284-WIE", name: "Women in Engineering Affinity Group (WIE)" }
  ],
  address: "Near Aerodrome, Tadepalligudem, West Godavari District, Andhra Pradesh - 534101",
  phone: "+91 7702 640 019 / +91 80960 33660"
};
