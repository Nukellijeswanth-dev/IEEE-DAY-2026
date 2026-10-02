import { EventItem } from '../types';

export const IEEE_DAY_EVENTS: EventItem[] = [
  // 1. Computer Society (CS)
  {
    id: "random-sprint",
    chapter: "CS",
    chapterFullName: "Sasi IEEE Computer Society Chapter",
    title: "Random Sprint: Ideate, Prototype & Pitch",
    category: "Hackathon & Innovation",
    dates: "October 6, 2026",
    time: "9:00 AM – 4:30 PM",
    venue: "CSE Department Seminar Hall / Lab Complex, SITE",
    teamSize: "2 Members per Team",
    summary: "Teams randomly select one of ten predefined problem statements, ideate a technology-based solution, develop a basic UI/prototype, and present it before a jury for evaluation. AI tools permitted.",
    prizeDetails: "1st Prize: ₹1,500 worth Gadgets | 2nd Prize: ₹1,000 worth Gadgets | Mementos & Official IEEE Certificates",
    registrationFees: {
      nonIeee: "₹150 per team",
      ieeeMember: "₹100 per team",
      chapterMember: "₹50 (IEEE CS Members)"
    },
    eventFlowOrRounds: [
      "09:00 AM – 09:30 AM: Inaugural Ceremony",
      "09:30 AM – 09:45 AM: Event Briefing & Rules",
      "09:45 AM – 10:00 AM: Random Problem Selection (1 of 10 Statements)",
      "10:00 AM – 12:30 PM: Solution Development (AI Tools Permitted)",
      "12:30 PM – 01:00 PM: Prototype Link Submission",
      "01:00 PM – 01:45 PM: Lunch Break",
      "01:45 PM – 02:45 PM: PPT Preparation",
      "02:45 PM – 03:00 PM: Final Submission & Presentation Preparation",
      "03:00 PM – 04:05 PM: Team Presentations & Jury Evaluation",
      "04:05 PM – 04:30 PM: Valedictory & Prize Distribution"
    ],
    rulesAndRubric: [
      "Event Flow: Random Problem Selection → Ideation → Solution Development → UI/Prototype → Presentation → Jury Evaluation.",
      "Usage of AI Tools: Permitted for ideation, coding, and UI/prototype design.",
      "100-Mark Official Criteria: Problem Understanding (15 Marks), Ideation & Innovation (20 Marks), Solution Quality (20 Marks), UI/Prototype (15 Marks), Technical Approach (10 Marks), Feasibility (10 Marks), Presentation & Q&A (10 Marks)."
    ],
    coordinators: [
      { name: "D. Asresha vani", contact: "+91 82972 39836" },
      { name: "CH. Jaswanth", contact: "+91 79898 18341" }
    ],
    chapterLead: "Ms. Nagaboyina Jahnavi (Chair, Sasi IEEE CS Chapter)",
    registrationFormUrl: "https://forms.gle/w2DhbNM1ZYTHh1fG8"
  },

  // 2. Antennas & Propagation Society (AP-S) - Workshop
  {
    id: "rtl-to-synthesis",
    chapter: "AP-S",
    chapterFullName: "Sasi IEEE Antennas and Propagation Society Chapter (SBC64284D)",
    title: "RTL to Synthesis: Hands-on VLSI Chip Design",
    category: "Hands-on VLSI Workshop",
    dates: "October 5 & 6, 2026 (Two-Day Workshop)",
    time: "9:30 AM – 4:30 PM",
    venue: "Department of ECT Simulation Labs, SITE Tadepalligudem",
    teamSize: "Individual Participation",
    summary: "A practical masterclass on how computer chips are designed from Verilog code down to logic gates, taught by industry expert Mr. K. SVLD S Phanindra.",
    prizeDetails: "Official IEEE Workshop Certificate | Hands-on industry toolkits",
    registrationFees: {
      nonIeee: "₹100 per student",
      ieeeMember: "₹50 per student"
    },
    eventFlowOrRounds: [
      "09:30 AM - Welcome & Introduction",
      "10:00 AM - Part 1: How Modern Computer Chips are Designed",
      "01:00 PM - Lunch Break",
      "01:45 PM - Part 2: Hands-on Verilog Coding & Synthesis Practice",
      "04:15 PM - Certificates & Closing"
    ],
    rulesAndRubric: [
      "Individual student event.",
      "Students can bring their laptops; college computer lab workstations will also be provided."
    ],
    coordinators: [
      { name: "G. Sriram", contact: "+91 80962 08668" },
      { name: "V. Akshaya", contact: "+91 63023 25392" }
    ],
    chapterLead: "Ms. V. J. Akshaya (Chair, Sasi IEEE AP-S Chapter)",
    registrationFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLScdJc-mepLXZo2kQGddW2yFlIa79VXsjt8VC-H6nKDXdq5uPA/viewform?usp=dialog"
  },

  // 2b. Antennas & Propagation Society (AP-S) - Startup Challenge
  {
    id: "idea-to-impact",
    chapter: "AP-S",
    chapterFullName: "Sasi IEEE Antennas and Propagation Society Chapter (SBC64284D)",
    title: "Idea to Impact: Student Startup Challenge",
    category: "Startup Idea Pitch",
    dates: "October 5 & 6, 2026",
    time: "9:30 AM – 4:30 PM",
    venue: "Seminar Hall, Department of ECT, SITE",
    teamSize: "Up to 3 Members per Team",
    summary: "Pitch your original business or product idea to a panel of expert judges and compete for startup awards and mentorship.",
    prizeDetails: "Top Startup Pitch Awards | Incubation Mentorship & Certificates",
    registrationFees: {
      nonIeee: "₹200 per team",
      ieeeMember: "₹150 per team"
    },
    eventFlowOrRounds: [
      "09:30 AM - Opening Talk & Welcome",
      "10:00 AM - Startup Pitch Session 1",
      "01:00 PM - Lunch Break & Networking",
      "01:45 PM - Startup Pitch Session 2 & Judge Questions",
      "04:15 PM - Results & Award Ceremony"
    ],
    rulesAndRubric: [
      "Maximum 3 students in a team.",
      "Bring a presentation deck with at least 15 slides.",
      "Each team gets up to 30 minutes including questions from judges.",
      "Strict Rule: AI-generated decks or copied ideas are strictly not allowed."
    ],
    coordinators: [
      { name: "G. Sriram", contact: "+91 80962 08668" },
      { name: "V. Akshaya", contact: "+91 63023 25392" }
    ],
    chapterLead: "Ms. V. J. Akshaya (Chair, Sasi IEEE AP-S Chapter)",
    registrationFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeZPAVb7hLB58QpVLPBcMcQimH8V3_n-l3al687fMUopk6CaA/viewform?usp=dialog"
  },

  // 3. Signal Processing Society (SPS)
  {
    id: "circuit-mania-2",
    chapter: "SPS",
    chapterFullName: "Sasi IEEE Signal Processing Society Chapter (SBC642848)",
    title: "Circuit Mania 2.0 – The Ultimate Technical Circuits",
    category: "Electronics & Circuits",
    dates: "October 6, 2026",
    time: "10:00 AM – 4:30 PM",
    venue: "Department of ECE / Nikola Tesla Block, SITE Tadepalligudem",
    teamSize: "Arranged by organizing committee based on registrations",
    summary: "A technical event to test participants' knowledge of electronic components, circuit analysis, circuit building, and troubleshooting through interactive competitive rounds.",
    prizeDetails: "1st Prize: ₹2,000 | 2nd Prize: ₹1,000 | Official IEEE Certificates",
    registrationFees: {
      nonIeee: "₹100 (per participant)",
      ieeeMember: "₹75 (IEEE Members)"
    },
    eventFlowOrRounds: [
      "10:00 AM – 10:30 AM: Inaugural Ceremony",
      "10:30 AM – 11:00 AM: Attendance & Team Selection",
      "11:00 AM – 12:00 PM: Round 1 – Circuit & Component Identification (15 Marks)",
      "12:00 PM – 01:00 PM: Round 2 – Circuit Analysis & Parameters (20 Marks)",
      "01:00 PM – 02:00 PM: Lunch Break",
      "02:00 PM – 02:30 PM: Round 3 – Circuit Building (20 Marks)",
      "02:30 PM – 03:30 PM: Round 4 – Troubleshooting Challenge (20 Marks)",
      "03:00 PM – 04:00 PM: Round 5 – Rapid Fire (25 Marks)",
      "04:00 PM – 04:30 PM: Valedictory & Prize Distribution"
    ],
    rulesAndRubric: [
      "Organized by Sasi IEEE Signal Processing Society Chapter (SBC642848), Dept. of ECE.",
      "Venue: Department of Electronics and Communication Engineering, Nikola Tesla Block.",
      "100-Mark Official Criteria: Components Identification (15 Marks), Circuit Analysis (20 Marks), Circuit Building (20 Marks), Troubleshooting Challenge (20 Marks), Rapid Fire (25 Marks)."
    ],
    coordinators: [
      { name: "P. Keerthi", contact: "+91 79816 31166" },
      { name: "V. Mounika", contact: "+91 90320 17749" }
    ],
    chapterLead: "Ms. P.L.S.P. Manasa (Chair, Sasi IEEE SPS Chapter, Dept. of ECE)",
    registrationFormUrl: "https://forms.gle/WbcVgxy9tkuNf25X7"
  },

  // 4. Women in Engineering (WIE)
  {
    id: "ai-video-spark",
    chapter: "WIE",
    chapterFullName: "Sasi IEEE Women in Engineering Affinity Group",
    title: "AI Video Spark: Making of AI Generated Videos",
    category: "AI & Video Making",
    dates: "October 6, 2026",
    time: "9:00 AM – 4:30 PM (Video Duration: 5 Minutes)",
    venue: "WIE Media & Computing Lab, Department of CSE, SITE",
    teamSize: "Team of 2 Members",
    summary: "Making of AI generated videos using modern AI tools and voice generators. Video duration: 5 minutes. Showcase your story on the big screen.",
    prizeDetails: "1st Prize: ₹1,500 worth Gadgets | 2nd Prize: ₹1,000 worth Gadgets | Official IEEE Certificates",
    registrationFees: {
      nonIeee: "₹150 per team",
      ieeeMember: "₹100 per team",
      chapterMember: "₹50 (IEEE CS / WIE Members)"
    },
    eventFlowOrRounds: [
      "09:00 AM - Welcome & Theme Announcement",
      "09:30 AM - Theme Selection & Attendance",
      "10:00 AM - Video Generation Sprint using AI Tools",
      "12:00 PM - Preliminary Video Review",
      "01:00 PM - Lunch Break",
      "02:00 PM - Final Video Editing (5 Minutes Duration)",
      "03:00 PM - Big Screen Video Screening & Jury Evaluation",
      "04:15 PM - Prize Distribution & Closing"
    ],
    rulesAndRubric: [
      "Team Size: 2 Members; Video Duration: 5 Minutes; AI Tools Allowed.",
      "Registration Deadline: 5 October 2026.",
      "100-Point Scoring: Creativity & Storytelling, Effective AI Tool Usage, Video Quality & Audio, Theme Alignment, and Presentation."
    ],
    coordinators: [
      { name: "Jashwanth (WIE Treasurer)", contact: "+91 76619 70687" },
      { name: "B. Tejasree", contact: "+91 86887 00367" }
    ],
    chapterLead: "Ms. B. Teja Sree (Chair, Sasi IEEE WIE Affinity Group)",
    registrationFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLScyUFstv9Wa2JpZB27Ku27JTz2kEdcVQF1ldp03pesyY0pIwg/viewform?usp=dialog"
  }
];

export const EVENTS_DATA = IEEE_DAY_EVENTS;
