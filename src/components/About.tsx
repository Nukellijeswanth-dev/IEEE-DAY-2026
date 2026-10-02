import React, { useEffect, useRef } from 'react';
import { Sparkles, Award } from 'lucide-react';
import { ComputerSocietyLogo, ApsLogo, SpsLogo, WieLogo } from './Logos';
import gsap from 'gsap';

export const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;

    let hasAnimated = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          const cards = el.querySelectorAll('.about-card');
          gsap.fromTo(
            cards,
            { opacity: 0, y: 35 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: 'power3.out',
            }
          );
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Ordered as CS, AP-S, SPS, WIE
  const chapters = [
    {
      code: 'CS',
      name: 'Computer Society Chapter',
      logo: <ComputerSocietyLogo className="h-11" />,
      department: 'Department of CSE',
      flagship: 'Random Sprint: Ideate, Prototype & Pitch',
      description:
        'Software problem-solving, UI prototyping, and live idea pitches. Pick one random statement from 10 challenges with AI tools allowed.',
      metrics: '₹2,500+ Prizes · 4-Phase Event Flow',
    },
    {
      code: 'AP-S',
      name: 'Antennas and Propagation Society Chapter',
      logo: <ApsLogo className="h-11" />,
      department: 'Department of ECT',
      flagship: 'RTL to Synthesis & Idea to Impact',
      description:
        'Practical masterclass on digital IC design with industry toolkits, plus a startup innovation pitch with incubation guidance.',
      metrics: 'Industry Toolkits & Incubation Mentorship',
    },
    {
      code: 'SPS',
      name: 'Signal Processing Society Chapter',
      logo: <SpsLogo className="h-11" />,
      department: 'Department of ECE',
      flagship: 'Circuit Mania 2.0 – Technical Circuits',
      description:
        'Hands-on electronics competition testing component identification, circuit analysis, breadboard assembly, troubleshooting, and rapid-fire.',
      metrics: '₹3,000 Cash Gifts · 5 Rounds (100 Marks)',
    },
    {
      code: 'WIE',
      name: 'Women in Engineering Affinity Group',
      logo: <WieLogo className="h-11" />,
      department: 'CSE & Allied Departments',
      flagship: 'AI Video Spark: Generative Storytelling',
      description:
        'Create 5-minute AI-generated videos and digital narratives using modern generative AI tools and voice synthesizers before an expert jury.',
      metrics: '₹2,500+ Gadgets · 5 Min AI Short Films',
    }
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 relative overflow-hidden bg-slate-50/60 border-y border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-[#00629B] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Student Chapters</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Four Student Chapters, Two Days of Events
          </h2>
          
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            The <strong className="text-slate-900 font-semibold">Sasi IEEE Student Branch (STB64284)</strong> is 
            hosting technical competitions and workshops across computer science, electronics, chip design, 
            and creative AI video making on October 5 & 6, 2026.
          </p>
        </div>

        {/* 4-Chapter Clean Cards Grid with Official Logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
          {chapters.map((ch) => {
            return (
              <div
                key={ch.code}
                className="about-card card-clean p-7 rounded-2xl bg-white flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Official Chapter Logo Card Header */}
                  <div className="p-3.5 rounded-xl bg-slate-50/90 border border-slate-100 flex items-center justify-between mb-4">
                    <div className="scale-95 sm:scale-100 origin-left">
                      {ch.logo}
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-lg shrink-0">
                      {ch.department}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {ch.name}
                  </h3>

                  <div className="text-xs font-semibold text-[#00629B] mb-2.5">
                    Flagship Event: {ch.flagship}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                    {ch.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="inline-flex items-center gap-1.5 font-medium text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    <span>{ch.metrics}</span>
                  </div>

                  <a
                    href="#events"
                    className="font-semibold text-[#00629B] hover:text-[#00507D] transition-colors"
                  >
                    View Events →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* College Location in Plain English */}
        <div className="about-card card-clean p-6 sm:p-7 rounded-2xl bg-white flex flex-col md:flex-row items-center justify-between gap-5 text-left">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              College Location: Sasi Institute of Technology & Engineering
            </h4>
            <p className="text-sm text-slate-600 max-w-xl font-normal">
              Tadepalligudem, West Godavari District, Andhra Pradesh. Modern computer labs, 
              hardware test benches, and seminar halls ready for all participants.
            </p>
          </div>
          
          <div className="shrink-0">
            <a
              href="#schedule"
              className="btn-secondary px-4 py-2.5 text-xs font-semibold rounded-xl inline-block cursor-pointer hover:bg-slate-100 transition-colors"
            >
              See Event Schedule
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
