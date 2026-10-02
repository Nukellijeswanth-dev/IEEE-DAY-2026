import { RuleSection } from '../types';

export const RULES_DATA: RuleSection[] = [
  {
    id: 'ai-policies',
    title: 'Rules on Using AI Tools for Each Event',
    badge: 'Important Rules',
    summary: 'When you are allowed to use AI tools like ChatGPT or AI video makers, and when they are not allowed.',
    rules: [
      'Random Sprint (CS): You are WELCOME to use AI tools (ChatGPT, Gemini, Claude, v0, etc.) for brainstorming ideas, writing code, and making quick app designs.',
      'AI Video Spark (WIE): You must use generative AI video tools and voice generators (Runway, Sora, Midjourney, ElevenLabs, etc.) to make your short film. Just write down which AI tools you used.',
      'Idea to Impact Startup Challenge (AP-S): AI-generated presentations are NOT allowed. Your business idea and slides must be your own original team work. Copied or AI-made decks will be disqualified.',
      'Circuit Mania 2.0 (SPS): This is an offline hardware event in the electronics lab. Mobile phones and internet are not allowed during the practical test rounds.'
    ]
  },
  {
    id: 'rubrics',
    title: 'How Judges Will Score (100-Point System)',
    badge: 'Fair Scoring',
    summary: 'How marks are given for each competition so you know what to focus on.',
    rules: [
      'Random Sprint (100 Marks): Problem Understanding (15), Ideation & Innovation (20), Solution Quality (20), UI/Prototype (15), Technical Approach (10), Feasibility (10), Presentation & Q&A (10).',
      'Circuit Mania 2.0 (100 Marks): Components Identification (15), Circuit Analysis (20), Circuit Building (20), Troubleshooting Challenge (20), Rapid Fire (25).',
      'AI Video Spark (100 Marks): Creativity & Storytelling, Effective AI Tool Usage, Video Quality & Audio, Theme Alignment, and Presentation.',
      'Idea to Impact Startup Challenge: Clear problem definition, innovative value proposition, market plan, technical feasibility, and answering judges questions during your 30-minute presentation (bring at least 15 slides).'
    ]
  },
  {
    id: 'eligibility-fees',
    title: 'Who Can Join & Fee Discounts',
    badge: 'Student Discounts',
    summary: 'Who is eligible to participate and discounts for IEEE members.',
    rules: [
      'Open to all engineering and polytechnic diploma students from any college and branch (ECE, CSE, ECT, EEE, IT, Mechanical, etc.).',
      'Active IEEE members get lower fees on all events (e.g. ₹75 instead of ₹100 for Circuit Mania, ₹50 instead of ₹100 for the Chip Design Workshop).',
      'IEEE CS & IEEE WIE chapter members get a special rate of only ₹50 for Random Sprint and AI Video Spark.',
      'Every student who participates receives an official IEEE Certificate from Sasi Institute of Technology & Engineering.'
    ]
  },
  {
    id: 'venue-conduct',
    title: 'College Campus & Lab Safety Rules',
    badge: 'Campus Rules',
    summary: 'Helpful tips for arriving on campus and working in our labs.',
    rules: [
      'Please wear your college student ID card and report to the registration desk in the Main Auditorium lobby 15 minutes before your event begins.',
      'Handle lab components, breadboards, and power supplies carefully inside the ECE and ECT electronics labs.',
      'Students in Random Sprint and AI Video Spark should bring their personal laptops and chargers. Free campus Wi-Fi access will be provided at the help desk.'
    ]
  }
];
