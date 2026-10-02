export interface EventItem {
  id: string;
  chapter: 'SPS' | 'CS' | 'AP-S' | 'WIE';
  chapterFullName: string;
  title: string;
  category: string;
  dates: string;
  time: string;
  venue: string;
  teamSize: string;
  summary: string;
  prizeDetails: string;
  registrationFees: {
    nonIeee: string;
    ieeeMember: string;
    chapterMember?: string;
  };
  eventFlowOrRounds: string[];
  rulesAndRubric: string[];
  coordinators: { name: string; contact: string }[];
  chapterLead: string;
  registrationFormUrl: string;
}

export interface TimelineItem {
  id: string;
  day: number;
  dateStr: string;
  time: string;
  title: string;
  trackOrChapter: string;
  venue: string;
  speakerOrLead?: string;
  description: string;
  isHighlight?: boolean;
}

export interface CoordinatorContact {
  id: string;
  name: string;
  role: string;
  chapter: 'SPS' | 'CS' | 'AP-S' | 'WIE' | 'Student Branch';
  chapterName: string;
  phone: string;
  email?: string;
  eventTitle?: string;
}

export interface RuleSection {
  id: string;
  title: string;
  summary: string;
  badge?: string;
  rules: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
