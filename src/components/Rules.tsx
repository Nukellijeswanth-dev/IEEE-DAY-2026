import React, { useState } from 'react';
import { ChevronDown, Shield, CheckCircle2, Download, AlertTriangle, Bot, Scale, Award } from 'lucide-react';
import { RuleSection } from '../types';

interface RulesProps {
  rules: RuleSection[];
}

export const Rules: React.FC<RulesProps> = ({ rules }) => {
  const [openSection, setOpenSection] = useState<string>(rules[0]?.id || 'ai-policies');

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? '' : id);
  };

  const handleDownloadRulebook = () => {
    let content = "SASI INSTITUTE OF TECHNOLOGY & ENGINEERING (TADEPALLIGUDEM)\n";
    content += "SASI IEEE STUDENT BRANCH (STB64284) - IEEE DAY 2026\n";
    content += "EVENT RULES, AI TOOL GUIDELINES & 100-POINT SCORING SYSTEM\n";
    content += "Dates: October 5 & 6, 2026\n";
    content += "=================================================================\n\n";

    rules.forEach((sec, idx) => {
      content += `${idx + 1}. ${sec.title.toUpperCase()} [${sec.badge || 'Official'}]\n`;
      content += `Summary: ${sec.summary}\n`;
      sec.rules.forEach((r, rIdx) => {
        content += `   [${idx + 1}.${rIdx + 1}] ${r}\n`;
      });
      content += "\n";
    });

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = "Sasi_IEEE_Day_2026_Rules.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getSectionIcon = (id: string) => {
    switch (id) {
      case 'ai-policies':
        return Bot;
      case 'rubrics':
        return Scale;
      case 'eligibility-fees':
        return Award;
      default:
        return Shield;
    }
  };

  return (
    <section id="rules" className="py-20 relative overflow-hidden bg-white border-t border-slate-200/80 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Header in Simple English */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-[#00629B] mb-2.5">
            <Shield className="w-3.5 h-3.5" />
            <span>Rules & Scoring</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2.5">
            Event Rules & How You Are Scored
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Simple rules for all competitions, including when AI tools are allowed and how judges will give marks.
          </p>

          <div className="mt-5 flex justify-center">
            <button
              onClick={handleDownloadRulebook}
              className="btn-secondary inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#00629B]" />
              <span>Download Rules File (.txt)</span>
            </button>
          </div>
        </div>

        {/* Accordion Component */}
        <div className="space-y-3.5">
          {rules.map((section, idx) => {
            const isOpen = openSection === section.id;
            const SectionIcon = getSectionIcon(section.id);
            return (
              <div
                key={section.id}
                className="card-clean rounded-2xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#00629B] shrink-0 mt-0.5">
                      <SectionIcon className="w-4 h-4" />
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-mono text-xs font-bold text-[#00629B]">
                          0{idx + 1}.
                        </span>
                        <h3 className="text-base font-bold text-slate-900">
                          {section.title}
                        </h3>
                        {section.badge && (
                          <span className="text-[10px] font-mono font-medium px-2 py-0.2 rounded bg-slate-100 text-slate-700">
                            {section.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 font-normal">
                        {section.summary}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-sky-50 text-[#00629B]' : ''
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 space-y-2.5 bg-slate-50/50">
                    {section.rules.map((rule, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#00629B] shrink-0 mt-0.5" />
                        <span>{rule}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* AI Rule Notice in Simple Everyday English */}
        <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-900 font-medium">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Important Note on AI Tools:</strong> You are allowed and encouraged to use AI tools 
            for <em>Random Sprint (CS)</em> and <em>AI Video Spark (WIE)</em>. 
            However, for the <em>Idea to Impact Startup Challenge (AP-S)</em>, AI-generated presentations 
            are strictly not allowed so students share their own genuine business ideas.
          </p>
        </div>
      </div>
    </section>
  );
};
