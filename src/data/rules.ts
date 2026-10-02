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
      'Random Sprint (100 Marks): Understanding the problem (15), creative solution (20), quality of the solution (20), app prototype or UI design (15), technical plan (10), usefulness in real life (10), presentation & answers to judges (10).',
      'AI Video Spark (100 Marks): Creativity (25), how well AI tools were used (20), story flow (20), video quality and sound (15), matching the topic (10), answering judges questions (10).',
      'Circuit Mania 2.0: Correct component identification, correct circuit formulas, clean breadboard wiring, and stopwatch speed in fixing faults.',
      'Idea to Impact Startup Challenge: Clear problem, realistic market plan, technical feasibility, and answering judges questions during your 30-minute presentation (bring at least 15 slides).'
    ]
  },
  {
    id: 'eligibility-fees',
    title: 'Who Can Join & Fee Discounts',
    badge: 'Student Discounts',
    summary: 'Who is eligible to participate and discounts for IEEE members.',
    rules: [
      'Open to all engineering and polytechnic diploma students from any college and branch (ECE, CSE, ECT, EEE, IT, Mechanical, etc.).',
      'Active IEEE members get lower fees on all events (e.g. ₹100 instead of ₹150 for Circuit Mania, ₹50 instead of ₹100 for the Chip Design Workshop).',
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
