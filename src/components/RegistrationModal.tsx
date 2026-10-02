import React, { useState } from 'react';
import { X, CheckCircle2, QrCode, Download, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { EventItem } from '../types';
import confetti from 'canvas-confetti';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedEvent?: EventItem | null;
  allEvents: EventItem[];
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  selectedEvent,
  allEvents
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [college, setCollege] = useState('Sasi Institute of Technology & Engineering');
  const [department, setDepartment] = useState('ECE');
  const [eventId, setEventId] = useState(selectedEvent ? selectedEvent.id : (allEvents[0]?.id || ''));
  const [isIeeeMember, setIsIeeeMember] = useState(false);
  const [ieeeNumber, setIeeeNumber] = useState('');
  const [passData, setPassData] = useState<{
    passId: string;
    name: string;
    eventTitle: string;
    chapter: string;
    college: string;
    department: string;
    isMember: boolean;
    registrationFormUrl: string;
  } | null>(null);

  if (!isOpen) return null;

  const chosenEvent = allEvents.find((ev) => ev.id === eventId) || selectedEvent || allEvents[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const generatedId = `SASI-IEEE26-${Math.floor(100000 + Math.random() * 900000)}`;

    setPassData({
      passId: generatedId,
      name,
      eventTitle: chosenEvent ? chosenEvent.title : 'All Access Pass',
      chapter: chosenEvent ? chosenEvent.chapter : 'SB',
      college,
      department,
      isMember: isIeeeMember,
      registrationFormUrl: chosenEvent ? chosenEvent.registrationFormUrl : 'https://forms.google.com',
    });

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleReset = () => {
    setPassData(null);
    setName('');
    setEmail('');
    setPhone('');
    setIeeeNumber('');
    setIsIeeeMember(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden z-10 my-8 text-left">
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {passData ? 'Delegate Pass Issued' : 'Delegate Pass & Pre-Registration'}
              </h3>
              <p className="text-xs text-slate-500 font-normal">
                Sasi IEEE Student Branch STB64284 · Oct 5–6, 2026
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!passData ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-normal">
              <div>
                <label className="block text-slate-700 font-medium mb-1.5">
                  Select Flagship Chapter Track
                </label>
                <select
                  value={eventId}
                  onChange={(e) => setEventId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:bg-white focus:border-[#00629B] focus:ring-1 focus:ring-[#00629B]"
                >
                  {allEvents.map((ev) => (
                    <option key={ev.id} value={ev.id}>
                      [{ev.chapter}] {ev.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">
                    Full Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jaswanth Kumar"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#00629B] focus:ring-1 focus:ring-[#00629B]"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">
                    Email Address <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jaswanth@sasi.ac.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#00629B] focus:ring-1 focus:ring-[#00629B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">
                    College / Institute
                  </label>
                  <input
                    type="text"
                    required
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#00629B] focus:ring-1 focus:ring-[#00629B]"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-1.5">
                    Branch / Dept
                  </label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:bg-white focus:border-[#00629B] focus:ring-1 focus:ring-[#00629B]"
                  >
                    <option value="ECE">ECE</option>
                    <option value="CSE">CSE</option>
                    <option value="ECT">ECT</option>
                    <option value="EEE">EEE</option>
                    <option value="IT">IT</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Other">Other Branch</option>
                  </select>
                </div>
              </div>

              {/* IEEE Membership Checkbox */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isIeeeMember}
                    onChange={(e) => setIsIeeeMember(e.target.checked)}
                    className="w-4 h-4 rounded text-[#00629B] focus:ring-[#00629B] border-slate-300"
                  />
                  <span className="text-slate-800 font-medium">
                    I am an active IEEE / Chapter Member (Subsidized Fee)
                  </span>
                </label>

                {isIeeeMember && (
                  <div>
                    <label className="block text-[11px] text-slate-500 mb-1 font-medium">
                      IEEE Member Number
                    </label>
                    <input
                      type="text"
                      maxLength={10}
                      placeholder="e.g. 98452104"
                      value={ieeeNumber}
                      onChange={(e) => setIeeeNumber(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-900 text-xs font-mono focus:border-[#00629B]"
                    />
                  </div>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary w-full py-3 px-4 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Delegate Pass</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-6">
              {/* Virtual Badge Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#00629B] text-white flex items-center justify-center font-bold text-xs">
                      IEEE
                    </div>
                    <div>
                      <span className="font-bold text-sm text-slate-900 block leading-none">
                        SASI IEEE STB64284
                      </span>
                      <span className="text-[11px] text-slate-400">SITE Campus, Tadepalligudem</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#00629B] bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                    {passData.passId}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Attendee Name</div>
                    <div className="text-xl font-bold text-slate-900">{passData.name}</div>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Registered Track</div>
                    <div className="text-xs font-semibold text-[#00629B]">
                      [{passData.chapter}] {passData.eventTitle}
                    </div>
                  </div>

                  <div className="flex justify-between items-end pt-2">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Institution & Dept</div>
                      <div className="text-xs text-slate-700 font-medium truncate max-w-[210px]">
                        {passData.college} ({passData.department})
                      </div>
                    </div>
                    {passData.isMember && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                        <ShieldCheck className="w-3 h-3" /> Member Rate
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>OCTOBER 5–6, 2026</span>
                  <span className="text-slate-600 font-medium">ALL LABS ACCESS</span>
                </div>
              </div>

              {/* Confirmation Note & Google Form Link */}
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1 font-medium">
                <div className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Pass Issued! Please complete team registration on Google Form.</span>
                </div>
                <p className="text-[11px] text-emerald-800 font-normal">
                  Present this digital pass at the registration desk on October 5th or 6th for verification.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={passData.registrationFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 py-2.5 px-4 text-xs font-semibold rounded-xl flex items-center justify-center gap-2"
                >
                  <span>Complete Chapter Google Form</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => window.print()}
                  className="btn-secondary py-2.5 px-4 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Print Pass</span>
                </button>
              </div>

              <div className="text-center">
                <button
                  onClick={handleReset}
                  className="text-xs font-medium text-[#00629B] hover:underline cursor-pointer"
                >
                  Register another attendee or track
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
