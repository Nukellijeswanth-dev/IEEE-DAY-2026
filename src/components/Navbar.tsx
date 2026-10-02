import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ExternalLink, FileText } from 'lucide-react';

export const REGISTRATION_FORMS = [
  {
    id: 'sps',
    chapter: 'SPS',
    title: 'Circuit Mania 2.0 (Electronics Challenge)',
    url: 'https://forms.gle/WbcVgxy9tkuNf25X7',
    tag: 'SPS Form',
    tagColor: 'bg-amber-50 text-amber-800 border-amber-200',
  },
  {
    id: 'cs',
    chapter: 'CS',
    title: 'Random Sprint: Ideate, Prototype & Pitch',
    url: 'https://forms.gle/w2DhbNM1ZYTHh1fG8',
    tag: 'CS Form',
    tagColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  },
  {
    id: 'wie',
    chapter: 'WIE',
    title: 'AI Video Spark: Making of AI Generated Videos',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLScyUFstv9Wa2JpZB27Ku27JTz2kEdcVQF1ldp03pesyY0pIwg/viewform?usp=dialog',
    tag: 'WIE Form',
    tagColor: 'bg-purple-50 text-purple-800 border-purple-200',
  },
  {
    id: 'aps-rtl',
    chapter: 'AP-S',
    title: 'RTL to Synthesis: VLSI Chip Design Masterclass',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLScdJc-mepLXZo2kQGddW2yFlIa79VXsjt8VC-H6nKDXdq5uPA/viewform?usp=dialog',
    tag: 'AP-S Workshop',
    tagColor: 'bg-sky-50 text-sky-800 border-sky-200',
  },
  {
    id: 'aps-startup',
    chapter: 'AP-S',
    title: 'Idea to Impact: Student Startup Challenge',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSeZPAVb7hLB58QpVLPBcMcQimH8V3_n-l3al687fMUopk6CaA/viewform?usp=dialog',
    tag: 'AP-S Startup',
    tagColor: 'bg-sky-50 text-sky-800 border-sky-200',
  },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sections = ['home', 'about', 'events', 'schedule', 'coordinators'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setRegisterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navSections = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About IEEE Day', href: '#about', id: 'about' },
    { label: 'Events & Contests', href: '#events', id: 'events' },
    { label: 'Schedule', href: '#schedule', id: 'schedule' },
    { label: 'Contact Coordinators', href: '#coordinators', id: 'coordinators' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-2 sm:py-2.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* College & IEEE Logo */}
            <a
              href="#home"
              className="flex items-center gap-2 sm:gap-2.5 group text-left focus:outline-none min-w-0"
              aria-label="Sasi IEEE Home"
            >
              <div className="h-8 sm:h-9 px-1.5 sm:px-2 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <img
                  src="/SBLogo.png?v=3"
                  alt="SASI IEEE STB64284"
                  className="h-5 sm:h-7 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1 sm:gap-1.5 flex-nowrap">
                  <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#00629B] transition-colors leading-none shrink-0">
                    SASI IEEE
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-[#00629B] bg-sky-50 border border-sky-200 px-1 py-0.2 rounded shrink-0">
                    STB64284
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium truncate hidden xs:block">
                  IEEE Day 2026 · Sasi College
                </span>
              </div>
            </a>

            {/* Desktop Taskbar with Sections */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/80">
              {navSections.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      isActive
                        ? 'bg-white text-[#00629B] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Register Button & Menu Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 relative" ref={dropdownRef}>
              
              {/* Register Button */}
              <button
                type="button"
                onClick={() => {
                  setRegisterOpen(!registerOpen);
                  if (mobileMenuOpen) setMobileMenuOpen(false);
                }}
                className="btn-primary inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-bold rounded-lg shadow-xs cursor-pointer whitespace-nowrap shrink-0"
                aria-expanded={registerOpen}
                aria-haspopup="true"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Register</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${registerOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Desktop Dropdown Popover (anchored properly on sm and above) */}
              {registerOpen && (
                <div className="hidden sm:block absolute right-0 top-full mt-2 w-96 rounded-2xl bg-white border border-slate-200 shadow-2xl py-2 z-50 animate-in fade-in-50 zoom-in-95 duration-150">
                  <div className="px-4 py-2.5 border-b border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">Official Event Registration Forms</span>
                      <span className="text-[11px] text-slate-500">Select an event to open its Google Form</span>
                    </div>
                  </div>

                  <div className="py-1 max-h-[380px] overflow-y-auto">
                    {REGISTRATION_FORMS.map((form) => (
                      <a
                        key={form.id}
                        href={form.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setRegisterOpen(false)}
                        className="group flex items-start gap-2.5 px-4 py-2.5 hover:bg-sky-50/60 transition-colors border-b border-slate-50 last:border-b-0 text-left"
                      >
                        <div className="mt-0.5 shrink-0">
                          <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${form.tagColor}`}>
                            {form.chapter}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-slate-900 group-hover:text-[#00629B] transition-colors line-clamp-1">
                            {form.title}
                          </div>
                          <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                            <span>Open Google Form</span>
                            <ExternalLink className="w-3 h-3 text-[#00629B] opacity-70 group-hover:opacity-100" />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="p-2 border-t border-slate-100 bg-slate-50/60 rounded-b-2xl">
                    <a
                      href="#events"
                      onClick={() => setRegisterOpen(false)}
                      className="block text-center text-xs font-semibold text-[#00629B] hover:underline py-1"
                    >
                      View All Event Schedules & Rules →
                    </a>
                  </div>
                </div>
              )}

              {/* Mobile Hamburger Menu Button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                  if (registerOpen) setRegisterOpen(false);
                }}
                className="lg:hidden p-1.5 sm:p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none cursor-pointer shrink-0"
                aria-label="Open taskbar menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Taskbar */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white px-4 sm:px-5 pt-3 pb-5 space-y-3 text-left shadow-lg max-h-[85vh] overflow-y-auto">
            {/* Mobile Registration Form Links */}
            <div>
              <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block mb-2">
                Official Registration Forms:
              </span>
              <div className="space-y-1.5">
                {REGISTRATION_FORMS.map((form) => (
                  <a
                    key={form.id}
                    href={form.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-sky-50/70 hover:border-sky-300 transition-colors"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border shrink-0 ${form.tagColor}`}>
                        {form.chapter}
                      </span>
                      <span className="text-xs font-semibold text-slate-800 truncate">
                        {form.title}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#00629B] shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Jump to Section */}
            <div className="pt-2 border-t border-slate-100">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">
                Quick Jump to Section:
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {navSections.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 text-xs font-semibold rounded-lg border ${
                      activeSection === item.id
                        ? 'bg-sky-50 text-[#00629B] border-sky-200'
                        : 'text-slate-700 bg-slate-50 border-slate-100 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Registration Modal Dialog (Centered, perfectly visible with no cutoff) */}
      {registerOpen && (
        <div className="sm:hidden fixed inset-0 z-50 flex items-start justify-center pt-16 px-3 bg-slate-900/50 backdrop-blur-xs animate-in fade-in-50 duration-150">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0"
            onClick={() => setRegisterOpen(false)}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-sm rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden z-10 text-left animate-in zoom-in-95 duration-150">
            {/* Header */}
            <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <span className="text-xs font-bold text-slate-900 block">Official Registration Forms</span>
                <span className="text-[10px] text-slate-500">Tap an event to open Google Form</span>
              </div>
              <button
                onClick={() => setRegisterOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List of Registration Links */}
            <div className="p-2 space-y-1.5 max-h-[60vh] overflow-y-auto">
              {REGISTRATION_FORMS.map((form) => (
                <a
                  key={form.id}
                  href={form.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setRegisterOpen(false)}
                  className="group flex items-start gap-2.5 p-2.5 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-sky-50 hover:border-sky-300 transition-all text-left"
                >
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border shrink-0 mt-0.5 ${form.tagColor}`}>
                    {form.chapter}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-slate-900 group-hover:text-[#00629B] transition-colors leading-snug">
                      {form.title}
                    </div>
                    <div className="text-[11px] text-[#00629B] font-medium flex items-center gap-1 mt-1">
                      <span>Open Form</span>
                      <ExternalLink className="w-3 h-3 text-[#00629B]" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Footer link to events */}
            <div className="p-2.5 border-t border-slate-100 bg-slate-50 text-center">
              <a
                href="#events"
                onClick={() => setRegisterOpen(false)}
                className="text-xs font-semibold text-[#00629B] hover:underline"
              >
                View All Event Rules & Schedules →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
