import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, ArrowRight, Clock, Trophy, Globe, BookOpen, Sparkles, ExternalLink, FileText } from 'lucide-react';
import { LogosRibbon, SasiSbLogo } from './Logos';
import gsap from 'gsap';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Hero: React.FC = () => {
  // Target: Sasi IEEE Day 2026 Kickoff - October 5, 2026 09:00:00
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP entrance motion
    const el = heroRef.current;
    if (el) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.hero-fade-in',
          { opacity: 0, y: 28, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
          }
        );

        gsap.fromTo(
          '.hero-badge-float',
          { y: 0 },
          {
            y: -6,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          }
        );
      }, el);

      return () => ctx.revert();
    }
  }, []);

  useEffect(() => {
    const targetDate = new Date('2026-10-05T09:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-sky-50/40 via-white to-white overflow-hidden scroll-mt-20 text-center"
    >
      {/* Decorative ambient glowing spheres with floating movement */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-200/25 blur-3xl rounded-full pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-36 -left-20 w-72 h-72 bg-amber-200/20 blur-2xl rounded-full pointer-events-none -z-10 animate-float" />
      <div className="absolute top-44 -right-20 w-72 h-72 bg-purple-200/20 blur-2xl rounded-full pointer-events-none -z-10 animate-float-delayed" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Official Main Logo Emblem Highlight */}
        <div className="hero-fade-in flex justify-center mb-5">
          <div className="hero-badge-float inline-flex p-3 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
            <SasiSbLogo className="h-10 sm:h-12" />
          </div>
        </div>

        {/* Date & College Pill Tag */}
        <div className="hero-fade-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#00629B]" />
          <span>Sasi Institute of Technology & Engineering</span>
          <span className="text-slate-300" aria-hidden="true">•</span>
          <span className="text-[#00629B] font-bold">October 5 & 6, 2026</span>
        </div>

        {/* Main Event Title */}
        <h1 className="hero-fade-in text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-3 leading-[1.12]">
          Celebrate <span className="text-[#00629B] relative inline-block">
            IEEE Day 2026
            <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#00629B]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        {/* Official Theme */}
        <div className="hero-fade-in text-base sm:text-lg font-medium text-slate-700 mb-4">
          <span className="text-slate-500">Official Theme: </span>
          <span className="text-slate-900 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
            “Using Technology for a Better Future”
          </span>
        </div>

        {/* Plain English explanation */}
        <p className="hero-fade-in max-w-2xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-7">
          IEEE Day is celebrated across the world to remember when engineers first started working together in 1884. 
          Sasi Institute is hosting 5 exciting student events across <strong>CS, AP-S, SPS, and WIE</strong> chapters on October 5 & 6, 2026.
        </p>

        {/* Action Buttons */}
        <div className="hero-fade-in flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6">
          <a
            href="#events"
            className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-xl shadow-xs cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            <span>Explore All 5 Events</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#schedule"
            className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-xl cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            <Calendar className="w-4 h-4 text-[#00629B]" />
            <span>October 5 & 6 Schedule</span>
          </a>
        </div>

        {/* Quick Direct Registration Form Links */}
        <div className="hero-fade-in max-w-2xl mx-auto mb-8 p-3 rounded-2xl bg-white/95 border border-slate-200 shadow-xs text-left">
          <div className="flex items-center justify-between gap-2 px-1 pb-2 mb-2 border-b border-slate-100">
            <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#00629B]" />
              Official Event Registration Forms
            </span>
            <span className="text-[10px] text-slate-500 font-mono">Direct Google Forms</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <a
              href="https://forms.gle/WbcVgxy9tkuNf25X7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-amber-50 text-amber-900 border border-amber-200/80 hover:bg-amber-100 hover:border-amber-300 transition-colors"
            >
              <span>SPS: Circuit Mania 2.0</span>
              <ExternalLink className="w-3 h-3 text-amber-700" />
            </a>
            <a
              href="https://forms.gle/w2DhbNM1ZYTHh1fG8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-200/80 hover:bg-emerald-100 hover:border-emerald-300 transition-colors"
            >
              <span>CS: Random Sprint</span>
              <ExternalLink className="w-3 h-3 text-emerald-700" />
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScyUFstv9Wa2JpZB27Ku27JTz2kEdcVQF1ldp03pesyY0pIwg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-purple-50 text-purple-900 border border-purple-200/80 hover:bg-purple-100 hover:border-purple-300 transition-colors"
            >
              <span>WIE: AI Video Spark</span>
              <ExternalLink className="w-3 h-3 text-purple-700" />
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScdJc-mepLXZo2kQGddW2yFlIa79VXsjt8VC-H6nKDXdq5uPA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-sky-50 text-sky-900 border border-sky-200/80 hover:bg-sky-100 hover:border-sky-300 transition-colors"
            >
              <span>APS: RTL to Synthesis</span>
              <ExternalLink className="w-3 h-3 text-sky-700" />
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeZPAVb7hLB58QpVLPBcMcQimH8V3_n-l3al687fMUopk6CaA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-sky-50 text-sky-900 border border-sky-200/80 hover:bg-sky-100 hover:border-sky-300 transition-colors"
            >
              <span>APS: Idea to Impact</span>
              <ExternalLink className="w-3 h-3 text-sky-700" />
            </a>
          </div>
        </div>

        {/* Countdown Box */}
        <div className="hero-fade-in max-w-lg mx-auto p-4 sm:p-5 rounded-2xl bg-white/95 border border-slate-200/90 shadow-xs mb-8 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3 pb-2 border-b border-slate-100">
            <span className="flex items-center gap-1.5 text-[#00629B]">
              <Clock className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
              Events Kickoff Countdown
            </span>
            <span className="font-mono text-slate-600 font-medium">Oct 5, 2026 · 09:00 AM</span>
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            <div className="p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 tabular-nums block">
                {formatNumber(timeLeft.days)}
              </span>
              <span className="block text-[10px] text-slate-500 uppercase tracking-wide mt-0.5">Days</span>
            </div>

            <div className="p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-[#00629B] tabular-nums block">
                {formatNumber(timeLeft.hours)}
              </span>
              <span className="block text-[10px] text-slate-500 uppercase tracking-wide mt-0.5">Hours</span>
            </div>

            <div className="p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 tabular-nums block">
                {formatNumber(timeLeft.minutes)}
              </span>
              <span className="block text-[10px] text-slate-500 uppercase tracking-wide mt-0.5">Mins</span>
            </div>

            <div className="p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-emerald-600 tabular-nums block">
                {formatNumber(timeLeft.seconds)}
              </span>
              <span className="block text-[10px] text-slate-500 uppercase tracking-wide mt-0.5">Secs</span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="hero-fade-in flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-600 border-t border-slate-200/70 pt-4 mb-8">
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-[#00629B]" />
            <span><strong>4 Chapters:</strong> CS, AP-S, SPS & WIE</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Trophy className="w-4 h-4 text-amber-600" />
            <span><strong>₹10,000+</strong> Cash & Gadgets</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#00629B]" />
            <span>Sasi College Campus, Tadepalligudem</span>
          </div>
        </div>

      </div>

      {/* CONTINUOUS SCROLLING LOGO MARQUEE RIBBON */}
      <div className="mt-4">
        <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
          Participating IEEE Chapters & Affinity Group
        </div>
        <LogosRibbon />
      </div>
    </section>
  );
};
