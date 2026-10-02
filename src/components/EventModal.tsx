import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Users, Trophy, ExternalLink, Check, Share2, Phone, Shield, UserCheck } from 'lucide-react';
import { EventItem } from '../types';

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({
  event,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!event) return null;

  const handleShare = () => {
    const url = `${window.location.origin}${window.location.pathname}#event-${event.id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden z-10 my-8 text-left max-h-[90vh] flex flex-col">
        {/* Top Header Label */}
        <div className="bg-slate-50 border-b border-slate-100 px-6 py-3 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold text-[#00629B] bg-sky-50 border border-sky-200 px-2 py-0.5 rounded">
              {event.chapter}
            </span>
            <span className="text-xs font-medium text-slate-600">
              {event.category}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              title="Copy event link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-7 overflow-y-auto pr-4">
          {/* Title */}
          <h2 className="text-2xl font-bold text-slate-900 mb-1">
            {event.title}
          </h2>

          <div className="text-xs text-[#00629B] font-semibold mb-3.5">
            {event.chapterFullName}
          </div>

          <p className="text-sm text-slate-600 leading-relaxed mb-5 font-normal">
            {event.summary}
          </p>

          {/* Core Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 mb-5 text-xs">
            <div>
              <div className="text-slate-400 mb-0.5 flex items-center gap-1 font-semibold">
                <Calendar className="w-3.5 h-3.5 text-[#00629B]" /> Date
              </div>
              <div className="text-slate-900 font-bold">{event.dates}</div>
            </div>

            <div>
              <div className="text-slate-400 mb-0.5 flex items-center gap-1 font-semibold">
                <Clock className="w-3.5 h-3.5 text-[#00629B]" /> Timing
              </div>
              <div className="text-slate-900 font-bold">{event.time}</div>
            </div>

            <div>
              <div className="text-slate-400 mb-0.5 flex items-center gap-1 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#00629B]" /> Venue
              </div>
              <div className="text-slate-900 font-bold truncate" title={event.venue}>
                {event.venue.split(',')[0]}
              </div>
            </div>

            <div>
              <div className="text-slate-400 mb-0.5 flex items-center gap-1 font-semibold">
                <Users className="w-3.5 h-3.5 text-[#00629B]" /> Team Size
              </div>
              <div className="text-slate-900 font-bold">{event.teamSize}</div>
            </div>
          </div>

          {/* Registration Fees in Simple English */}
          <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-100 mb-5">
            <h3 className="text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">
              Registration Fee Details
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-white border border-sky-100">
                <span className="text-[10px] text-slate-400 block font-semibold uppercase">Non-IEEE Students</span>
                <span className="text-sm font-extrabold text-slate-900">{event.registrationFees.nonIeee}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-sky-100">
                <span className="text-[10px] text-slate-400 block font-semibold uppercase">IEEE Members</span>
                <span className="text-sm font-extrabold text-emerald-700">{event.registrationFees.ieeeMember}</span>
              </div>
              {event.registrationFees.chapterMember && (
                <div className="p-2.5 rounded-lg bg-white border border-sky-100 col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-slate-400 block font-semibold uppercase">Chapter Members</span>
                  <span className="text-sm font-extrabold text-[#00629B]">{event.registrationFees.chapterMember}</span>
                </div>
              )}
            </div>
          </div>

          {/* Prizes Section */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 mb-5 text-xs">
            <div className="flex items-center gap-2 text-amber-900 font-bold mb-1.5">
              <Trophy className="w-4 h-4 text-amber-700" />
              <span className="uppercase text-[11px] tracking-wider">Prizes & Awards</span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-amber-950">
              {event.prizeDetails}
            </div>
          </div>

          {/* Event Rounds / Schedule Breakdown */}
          {event.eventFlowOrRounds && event.eventFlowOrRounds.length > 0 && (
            <div className="mb-5">
              <h3 className="text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">
                Event Schedule & Rounds
              </h3>
              <div className="space-y-1.5">
                {event.eventFlowOrRounds.map((round, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 flex items-start gap-2"
                  >
                    <span className="w-5 h-5 rounded-full bg-white border border-slate-200 text-[#00629B] font-bold flex items-center justify-center shrink-0 text-[10px]">
                      {idx + 1}
                    </span>
                    <span className="pt-0.5">{round}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Important Rules */}
          {event.rulesAndRubric && event.rulesAndRubric.length > 0 && (
            <div className="mb-5">
              <h3 className="text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-slate-500" />
                <span>Important Rules</span>
              </h3>
              <ul className="space-y-1 text-xs text-slate-600 list-disc list-inside">
                {event.rulesAndRubric.map((rule, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Leadership & Direct Coordinators */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-2 mb-6">
            <div className="flex items-center gap-1.5 text-slate-700">
              <UserCheck className="w-4 h-4 text-[#00629B] shrink-0" />
              <span>
                <strong className="text-slate-900">Chapter Chair:</strong> {event.chapterLead}
              </span>
            </div>

            <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center gap-2">
              <span className="text-slate-500 font-medium">Student Coordinators:</span>
              {event.coordinators.map((c, i) => (
                <a
                  key={i}
                  href={`tel:${c.contact.replace(/\s+/g, '')}`}
                  className="btn-secondary inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-slate-800 font-medium text-xs"
                >
                  <Phone className="w-3 h-3 text-[#00629B]" />
                  <span>{c.name}: {c.contact}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
            <a
              href={event.registrationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-2.5 px-4 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Register for this Event (Google Form)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="btn-secondary py-2.5 px-4 text-xs font-semibold rounded-xl cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
