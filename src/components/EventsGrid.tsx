import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Calendar, MapPin, Users, Trophy, Sparkles, X, Info } from 'lucide-react';
import { EventItem } from '../types';

interface EventsGridProps {
  events: EventItem[];
  onSelectEvent: (event: EventItem) => void;
}

export const EventsGrid: React.FC<EventsGridProps> = ({
  events,
  onSelectEvent,
}) => {
  const [selectedChapter, setSelectedChapter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Requested order: CS, AP-S, SPS, WIE
  const chapterFilters = [
    { key: 'All', label: 'All Events (5)' },
    { key: 'CS', label: 'Computer Society (CS)' },
    { key: 'AP-S', label: 'Antennas & Propagation (AP-S)' },
    { key: 'SPS', label: 'Signal Processing (SPS)' },
    { key: 'WIE', label: 'Women in Engineering (WIE)' },
  ];

  const filteredEvents = useMemo(() => {
    return events.filter((ev) => {
      // Chapter filter
      if (selectedChapter !== 'All' && ev.chapter !== selectedChapter) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = ev.title.toLowerCase().includes(query);
        const matchesSummary = ev.summary.toLowerCase().includes(query);
        const matchesCategory = ev.category.toLowerCase().includes(query);
        const matchesChapter = ev.chapter.toLowerCase().includes(query) || ev.chapterFullName.toLowerCase().includes(query);
        const matchesVenue = ev.venue.toLowerCase().includes(query);
        const matchesCoordinator = ev.coordinators.some(c => c.name.toLowerCase().includes(query));
        return matchesTitle || matchesSummary || matchesCategory || matchesChapter || matchesVenue || matchesCoordinator;
      }
      return true;
    });
  }, [events, selectedChapter, searchQuery]);

  const getChapterBadge = (chapter: string) => {
    switch (chapter) {
      case 'CS':
        return 'bg-indigo-50 text-indigo-800 border-indigo-200';
      case 'AP-S':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'SPS':
        return 'bg-sky-50 text-sky-800 border-sky-200';
      case 'WIE':
        return 'bg-rose-50 text-rose-800 border-rose-200';
      default:
        return 'bg-slate-50 text-slate-800 border-slate-200';
    }
  };

  return (
    <section id="events" className="py-20 relative overflow-hidden bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-[#00629B] mb-2.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Competitions & Workshops</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2.5">
              5 Flagship Student Events
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Organized by our 4 student chapters. Check the event rounds, registration fees, 
              and click to register your team.
            </p>
          </div>
        </div>

        {/* Filter Controls (Order: CS, AP-S, SPS, WIE) */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Chapter Filter Tabs */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 border border-slate-200 overflow-x-auto scrollbar-none">
              {chapterFilters.map((ch) => (
                <button
                  key={ch.key}
                  onClick={() => setSelectedChapter(ch.key)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    selectedChapter === ch.key
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {ch.label}
                </button>
              ))}
            </div>

            {/* Simple Search Bar */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search events, topics, coordinators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-9 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#00629B] focus:ring-1 focus:ring-[#00629B]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Events Cards Grid */}
        {filteredEvents.length === 0 ? (
          <div className="py-16 text-center rounded-2xl bg-slate-50 border border-slate-200 p-8">
            <Info className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <h3 className="text-base font-bold text-slate-900 mb-1">No matching events found</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto mb-3">
              Try searching with different words or reset the filters.
            </p>
            <button
              onClick={() => {
                setSelectedChapter('All');
                setSearchQuery('');
              }}
              className="btn-secondary px-3.5 py-1.5 text-xs font-semibold rounded-lg cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {filteredEvents.map((event) => {
              return (
                <div
                  key={event.id}
                  id={`event-${event.id}`}
                  onClick={() => onSelectEvent(event)}
                  className="card-clean relative flex flex-col justify-between p-6 rounded-2xl bg-white cursor-pointer hover:border-[#00629B]/30"
                >
                  <div>
                    {/* Chapter & Type Header */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md border ${getChapterBadge(event.chapter)}`}>
                          {event.chapter}
                        </span>
                        <span className="text-xs text-slate-500 font-medium truncate max-w-[170px]">
                          {event.category}
                        </span>
                      </div>

                      <span className="text-[11px] text-[#00629B] font-semibold bg-sky-50 px-2 py-0.5 rounded">
                        Details &rarr;
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-1 hover:text-[#00629B] transition-colors line-clamp-2">
                      {event.title}
                    </h3>

                    {/* Chapter Name */}
                    <div className="text-xs text-slate-500 font-medium mb-3 truncate">
                      {event.chapterFullName}
                    </div>

                    {/* Simple Summary */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3 font-normal">
                      {event.summary}
                    </p>

                    {/* Prizes */}
                    <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 mb-4 text-xs">
                      <div className="flex items-center gap-1.5 text-amber-900 font-semibold mb-1">
                        <Trophy className="w-3.5 h-3.5 shrink-0 text-amber-700" />
                        <span className="uppercase text-[10px] tracking-wider">Cash & Prizes</span>
                      </div>
                      <div className="text-xs font-medium text-amber-950 leading-snug">
                        {event.prizeDetails}
                      </div>
                    </div>

                    {/* Registration Fees */}
                    <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                          Non-IEEE Students
                        </span>
                        <span className="text-xs font-bold text-slate-800">
                          {event.registrationFees.nonIeee}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                          IEEE Members
                        </span>
                        <span className="text-xs font-bold text-emerald-700">
                          {event.registrationFees.ieeeMember}
                        </span>
                      </div>
                    </div>

                    {/* Date, Venue, Team Info */}
                    <div className="space-y-1.5 text-xs text-slate-500 mb-5 font-normal">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{event.dates}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{event.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{event.teamSize}</span>
                      </div>
                    </div>
                  </div>

                  {/* Register and View Details Buttons */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => onSelectEvent(event)}
                      className="btn-secondary flex-1 py-2 text-xs font-semibold rounded-lg text-slate-700 hover:text-slate-900 cursor-pointer"
                    >
                      View Details
                    </button>

                    <a
                      href={event.registrationFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="btn-primary py-2 px-3 text-xs font-semibold rounded-lg flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                      <span>Register</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
