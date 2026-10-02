import React, { useState } from 'react';
import { Clock, MapPin, Sparkles, User, CalendarPlus } from 'lucide-react';
import { TimelineItem } from '../types';

interface TimelineProps {
  timeline: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ timeline }) => {
  const [activeDay, setActiveDay] = useState<number>(1);

  const daysInfo = [
    {
      day: 1,
      label: 'Day 1',
      date: 'Monday, Oct 5, 2026',
      title: 'Workshops & Startup Pitching',
      description: 'Hands-on VLSI Chip Design (Day 1) and Student Startup Idea Challenge',
    },
    {
      day: 2,
      label: 'Day 2',
      date: 'Tuesday, Oct 6, 2026',
      title: 'Competitions & Prize Distribution',
      description: 'Circuit Mania, Random Sprint Hackathon, AI Video Spark, and Final Awards',
    },
  ];

  const currentItems = timeline.filter((item) => item.day === activeDay);

  const handleAddToCalendar = (item: TimelineItem) => {
    const title = encodeURIComponent(`IEEE Day 2026 (Sasi): ${item.title}`);
    const details = encodeURIComponent(`${item.description}\n\nTrack: ${item.trackOrChapter}\nVenue: ${item.venue}`);
    const location = encodeURIComponent(`${item.venue}, Sasi Institute of Technology & Engineering, Tadepalligudem`);
    
    const dateFormatted = activeDay === 1 ? '20261005' : '20261006';
    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dateFormatted}T090000Z/${dateFormatted}T170000Z`;
    window.open(gcalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="schedule" className="py-20 relative overflow-hidden bg-slate-50/60 border-t border-slate-200/80 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header in Simple English */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-[#00629B] mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Event Schedule</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2.5">
            October 5 & 6, 2026 Schedule
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Check the timings for workshops, competitions, lunch breaks, and final prize awards at Sasi College campus.
          </p>
        </div>

        {/* 2-Day Tab Selectors in Simple English */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
          {daysInfo.map((info) => (
            <button
              key={info.day}
              onClick={() => setActiveDay(info.day)}
              className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                activeDay === info.day
                  ? 'bg-white border-[#00629B] shadow-xs'
                  : 'bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-xs font-bold uppercase tracking-wider font-mono ${
                    activeDay === info.day ? 'text-[#00629B]' : 'text-slate-400'
                  }`}
                >
                  {info.label} · {info.date}
                </span>
                {activeDay === info.day && (
                  <span className="w-2 h-2 rounded-full bg-[#00629B]" />
                )}
              </div>
              
              <div className="text-sm sm:text-base font-bold text-slate-900 mb-0.5">
                {info.title}
              </div>
              
              <div className="text-xs text-slate-500 font-normal">
                {info.description}
              </div>
            </button>
          ))}
        </div>

        {/* Vertical Timeline Track in Simple English */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-200 space-y-5">
          {currentItems.map((item) => (
            <div key={item.id} className="relative group text-left">
              {/* Timeline Pin */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-2.5 w-3.5 h-3.5 rounded-full border-2 border-white transition-all ${
                  item.isHighlight
                    ? 'bg-[#00629B] ring-4 ring-sky-100 shadow-xs'
                    : 'bg-slate-300 group-hover:bg-[#00629B]'
                }`}
              />

              {/* Event Card */}
              <div
                className={`card-clean p-5 rounded-2xl ${
                  item.isHighlight
                    ? 'bg-white border-sky-200'
                    : 'bg-white'
                }`}
              >
                {/* Time and Track Info */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-mono text-[#00629B] font-semibold flex items-center gap-1.5 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                      <Clock className="w-3.5 h-3.5" />
                      {item.time}
                    </span>
                    <span className="text-slate-300" aria-hidden="true">·</span>
                    <span className="text-slate-800 font-semibold">{item.trackOrChapter}</span>
                  </div>

                  <button
                    onClick={() => handleAddToCalendar(item)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-[#00629B] transition-colors cursor-pointer"
                    title="Add to Google Calendar"
                  >
                    <CalendarPlus className="w-3.5 h-3.5 text-[#00629B]" />
                    <span className="hidden sm:inline">Add to Calendar</span>
                  </button>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>

                {/* Simple Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3.5 font-normal">
                  {item.description}
                </p>

                {/* Footer Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-y-2 pt-2.5 border-t border-slate-100 text-xs font-medium">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-[#00629B]" />
                    <span>{item.venue}</span>
                  </div>

                  {item.speakerOrLead && (
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <User className="w-3.5 h-3.5 text-[#00629B]" />
                      <span>{item.speakerOrLead}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
