import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { EventsGrid } from './components/EventsGrid';
import { Timeline } from './components/Timeline';
import { TeamAndContact } from './components/TeamAndContact';
import { Footer } from './components/Footer';
import { EventModal } from './components/EventModal';

import { IEEE_DAY_EVENTS } from './data/events';
import { TIMELINE_DATA } from './data/timeline';
import { FAQS_DATA } from './data/faqs';
import { EventItem } from './types';

export default function App() {
  // Modal state for selected event
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-[#00629B] selection:text-white font-sans">
      {/* Fixed Taskbar Navigation Bar (contains all sections) */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Home & About IEEE Day 2026 */}
        <Hero />

        {/* About Section: 4 Chapters (CS, AP-S, SPS, WIE) */}
        <About />

        {/* Competitions & Events Grid */}
        <EventsGrid
          events={IEEE_DAY_EVENTS}
          onSelectEvent={(event) => setSelectedEvent(event)}
        />

        {/* Schedule Section for October 5 & 6 */}
        <Timeline timeline={TIMELINE_DATA} />

        {/* Student Coordinators & Help Desk */}
        <TeamAndContact faqs={FAQS_DATA} />
      </main>

      {/* Sasi IEEE Footer */}
      <Footer />

      {/* Event Details Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}
