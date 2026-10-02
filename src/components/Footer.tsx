import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Instagram, ShieldCheck } from 'lucide-react';
import { INSTITUTION_INFO } from '../data/coordinators';
import { SasiSbLogo } from './Logos';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-500 text-xs py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200">
          
          {/* College Info & IEEE Codes (5 Cols) */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="p-3 rounded-2xl bg-white border border-slate-200 inline-block shadow-2xs">
              <SasiSbLogo className="h-10" />
            </div>

            <p className="text-slate-600 leading-relaxed text-sm max-w-sm font-normal">
              Celebrating IEEE Day 2026 at Sasi College campus with student competitions 
              organized by CS, AP-S, SPS, and WIE chapters on October 5 & 6, 2026.
            </p>

            {/* Chapter Branch Codes */}
            <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1 max-w-md shadow-xs">
              <div className="flex items-center gap-1.5 text-slate-900 font-semibold mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00629B]" />
                <span>Official Chapter Codes:</span>
              </div>
              <div className="grid grid-cols-2 gap-1 text-slate-600 font-mono text-[11px]">
                <div>• CS Chapter: <strong className="text-slate-900">SASI SB</strong></div>
                <div>• AP-S Chapter: <strong className="text-slate-900">SBC64284D</strong></div>
                <div>• SPS Chapter: <strong className="text-slate-900">SBC642848</strong></div>
                <div>• WIE Affinity: <strong className="text-slate-900">SASI SB</strong></div>
              </div>
            </div>

            <div className="text-xs text-slate-500 font-normal">
              {INSTITUTION_INFO.address}
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Page Sections
            </h4>
            <ul className="space-y-2 text-slate-600 text-sm font-normal">
              <li>
                <a href="#home" className="hover:text-[#00629B] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#00629B] transition-colors">
                  About IEEE Day
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#00629B] transition-colors">
                  Events & Contests
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-[#00629B] transition-colors">
                  October 5 & 6 Schedule
                </a>
              </li>
              <li>
                <a href="#coordinators" className="hover:text-[#00629B] transition-colors">
                  Coordinators & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Chapters & Events (4 Cols) */}
          <div className="md:col-span-4 space-y-3 text-left">
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Our 4 Student Chapters
            </h4>
            
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                <span className="font-semibold block text-slate-900">1. Computer Society Chapter (CS)</span>
                <span className="text-slate-500 font-normal">Random Sprint Hackathon · CSE Department</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                <span className="font-semibold block text-slate-900">2. Antennas & Propagation Chapter (AP-S)</span>
                <span className="text-slate-500 font-normal">VLSI Chip Workshop & Startup Pitch · ECT Department</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                <span className="font-semibold block text-slate-900">3. Signal Processing Society (SPS)</span>
                <span className="text-slate-500 font-normal">Circuit Mania 2.0 Electronics · ECE Department</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                <span className="font-semibold block text-slate-900">4. Women in Engineering (WIE)</span>
                <span className="text-slate-500 font-normal">AI Video Spark · CSE Department</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-500 text-xs text-center sm:text-left font-normal">
            <span>© 2026 Sasi Institute of Technology & Engineering. STB64284.</span>
            <span>·</span>
            <span>IEEE Day October 5 & 6, 2026</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-slate-500">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-white border border-slate-200 hover:text-[#00629B] transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-white border border-slate-200 hover:text-[#00629B] transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-white border border-slate-200 hover:text-[#00629B] transition-colors cursor-pointer"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-white border border-slate-200 hover:text-[#00629B] transition-colors cursor-pointer"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="btn-secondary p-2 rounded-xl text-slate-700 cursor-pointer"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
