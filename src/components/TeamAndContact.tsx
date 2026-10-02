import React, { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle2, MessageSquare, ChevronDown, Sparkles, HelpCircle, UserCheck, ShieldCheck, Crown, MessageCircle, ExternalLink } from 'lucide-react';
import { CHAPTER_LEADS, STUDENT_COORDINATORS, INSTITUTION_INFO, SB_LEADERSHIP } from '../data/coordinators';
import { FaqItem } from '../types';

interface TeamAndContactProps {
  faqs: FaqItem[];
}

export const TeamAndContact: React.FC<TeamAndContactProps> = ({ faqs }) => {
  // Contact Form State (WhatsApp powered)
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [queryChapter, setQueryChapter] = useState('All Events');
  const [message, setMessage] = useState('');
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ State
  const [openFaq, setOpenFaq] = useState<string>(faqs[0]?.id || '');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    // Direct routing based on topic
    let targetPhone = '917989818341'; // Default: Ch. Jaswanth (CS Chapter)
    if (queryChapter.includes('SPS') || queryChapter.includes('Circuit')) {
      targetPhone = '917981631166'; // P. Keerthi (SPS)
    } else if (queryChapter.includes('AP-S') || queryChapter.includes('VLSI') || queryChapter.includes('Startup')) {
      targetPhone = '918096208668'; // G. Sriram (AP-S)
    } else if (queryChapter.includes('WIE') || queryChapter.includes('Video')) {
      targetPhone = '918688700367'; // B. Tejasree (WIE)
    } else if (queryChapter.includes('All')) {
      targetPhone = '917702640019'; // Aswin Nimmagadda (SB Chair)
    }

    const waText = 
      `*IEEE Day 2026 Inquiry - SASI Institute*\n\n` +
      `*Name:* ${name.trim()}\n` +
      (phone.trim() ? `*Contact Number:* ${phone.trim()}\n` : '') +
      `*Event/Topic:* ${queryChapter}\n` +
      `*Message:* ${message.trim()}`;

    const url = `https://wa.me/${targetPhone}?text=${encodeURIComponent(waText)}`;
    setLastWhatsAppUrl(url);
    setIsSubmitted(true);

    // Open WhatsApp directly
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setMessage('');
    setLastWhatsAppUrl('');
  };

  return (
    <section id="coordinators" className="py-20 relative overflow-hidden bg-slate-50/60 border-t border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-[#00629B] mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Student Branch Team & Contacts</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2.5">
            Student Branch Leadership & Coordinators
          </h2>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Reach out to our student coordinators via phone or WhatsApp for any assistance with event registration, 
            rules, or lab locations at Sasi College campus.
          </p>
        </div>

        {/* 1. SASI IEEE Student Branch Central Leadership (SB Chair & Vice Chair) */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-4">
            <Crown className="w-5 h-5 text-amber-600" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Sasi IEEE Student Branch Leadership (STB64284)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SB_LEADERSHIP.map((leader) => {
              const cleanNumber = leader.rawPhone || leader.phone.replace(/[^0-9]/g, '');
              const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(`Hello ${leader.name}, I have a query regarding SASI IEEE Day 2026.`)}`;
              return (
                <div
                  key={leader.name}
                  className="card-clean p-6 rounded-2xl bg-white border border-sky-100 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-200 text-[#00629B]">
                        {leader.badge}
                      </span>
                      <span className="text-xs font-semibold text-slate-400">
                        SASI IEEE STB64284
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 mb-1">
                      {leader.name}
                    </h4>
                    
                    <div className="text-xs font-semibold text-[#00629B] mb-1.5">
                      {leader.role}
                    </div>
                    
                    <div className="text-xs text-slate-500 mb-4 font-normal">
                      {leader.department}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <a
                      href={`tel:${leader.phone.replace(/\s+/g, '')}`}
                      className="btn-primary inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{leader.phone}</span>
                    </a>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-semibold transition-colors cursor-pointer"
                      title={`Chat with ${leader.name} on WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Chapter Chairs (Contact buttons removed as requested) */}
        <div className="mb-14">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-[#00629B]" />
            <span>Chapter Chairs</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CHAPTER_LEADS.map((lead) => (
              <div
                key={lead.chapter}
                className="card-clean p-5 rounded-2xl bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-sky-50 border border-sky-200 text-[#00629B]">
                      {lead.chapter}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      Chairperson
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-0.5">
                    {lead.chairName}
                  </h4>
                  
                  <div className="text-xs font-semibold text-[#00629B] mb-1">
                    {lead.title}
                  </div>
                  
                  <div className="text-xs text-slate-500 mb-3.5 leading-relaxed font-normal">
                    {lead.department}
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Event Track:</span>
                  <strong className="text-slate-900 font-medium">{lead.eventTitle}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Direct Student Coordinator Phone & WhatsApp Numbers */}
        <div className="mb-16">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Phone className="w-5 h-5 text-[#00629B]" />
            <span>Student Coordinators Contact Numbers</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STUDENT_COORDINATORS.map((coord) => {
              const cleanNumber = coord.phone.replace(/[^0-9]/g, '');
              const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(`Hello ${coord.name}, I have a query regarding ${coord.eventTitle || 'IEEE Day 2026'}.`)}`;

              return (
                <div
                  key={coord.id}
                  className="card-clean p-4 rounded-xl bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-mono font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                        {coord.chapter} · {coord.eventTitle}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 mb-0.5">
                      {coord.name}
                    </h4>
                    
                    <div className="text-xs text-slate-500 mb-3 font-normal">
                      {coord.role}
                    </div>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
                    <a
                      href={`tel:${coord.phone.replace(/\s+/g, '')}`}
                      className="btn-secondary inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg text-slate-900 hover:text-[#00629B]"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#00629B]" />
                      <span>{coord.phone}</span>
                    </a>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 transition-colors"
                      title={`Chat with ${coord.name} on WhatsApp`}
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Simple Help Desk & Form (Direct WhatsApp Redirect) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Campus Info & WhatsApp Contact Box */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 mb-2.5">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Instant WhatsApp Help Desk</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                Have a Question? Chat with Coordinators
              </h2>
              
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Type your question below and click send — your message will open directly in WhatsApp with our student coordinator.
              </p>
            </div>

            {/* Campus Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="card-clean p-4 rounded-xl bg-white flex items-start gap-3 text-xs">
                <div className="p-2 rounded-lg bg-sky-50 text-[#00629B] shrink-0 border border-sky-100">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 font-medium mb-0.5">College Campus</div>
                  <div className="text-slate-900 font-bold">{INSTITUTION_INFO.institutionName}</div>
                  <div className="text-slate-500 font-normal">{INSTITUTION_INFO.address}</div>
                </div>
              </div>

              <div className="card-clean p-4 rounded-xl bg-white flex items-start gap-3 text-xs">
                <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700 shrink-0 border border-indigo-100">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 font-medium mb-0.5">IEEE Branch Codes</div>
                  <div className="text-slate-900 font-bold">Student Branch: {INSTITUTION_INFO.branchCode}</div>
                  <div className="text-slate-500 font-normal">CS · AP-S · SPS · WIE</div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Message Box (No Mail) */}
            <div className="card-clean p-6 rounded-2xl bg-white">
              <div className="flex items-center gap-2 mb-3.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-tight">
                    Send a Message to Coordinators
                  </h3>
                  <span className="text-[11px] text-slate-500">Redirects straight to WhatsApp chat</span>
                </div>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleWhatsAppSubmit} className="space-y-3.5 text-xs font-normal">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-slate-700 font-medium mb-1">
                        Your Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Varma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-medium mb-1">
                        Your Contact Number <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-emerald-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-medium mb-1">
                      Choose Event / Topic
                    </label>
                    <select
                      value={queryChapter}
                      onChange={(e) => setQueryChapter(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:bg-white focus:border-emerald-600"
                    >
                      <option value="All Events">General Questions / All Events (Branch Chair)</option>
                      <option value="CS - Random Sprint">CS: Random Sprint Hackathon (Ch. Jaswanth)</option>
                      <option value="AP-S - VLSI Workshop">AP-S: VLSI Chip Design Masterclass (G. Sriram)</option>
                      <option value="AP-S - Startup Pitch">AP-S: Startup Idea Challenge (G. Sriram)</option>
                      <option value="SPS - Circuit Mania">SPS: Circuit Mania 2.0 (P. Keerthi)</option>
                      <option value="WIE - AI Video Spark">WIE: AI Video Spark (B. Tejasree)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-medium mb-1">
                      Your Message <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Type your question or query here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-emerald-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-xs cursor-pointer transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Message on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </button>
                </form>
              ) : (
                <div className="py-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Opening WhatsApp Chat...
                  </h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto font-normal">
                    Your message was prepared for <strong>{queryChapter}</strong>. If WhatsApp did not open automatically, click the button below:
                  </p>
                  
                  {lastWhatsAppUrl && (
                    <div className="pt-2">
                      <a
                        href={lastWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Open WhatsApp Now</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="text-xs font-semibold text-slate-600 hover:text-slate-900 hover:underline pt-1 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: FAQs Accordion in Simple English */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-semibold text-[#00629B] mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Common Questions</span>
              </div>
              
              <h2 className="text-2xl font-extrabold text-slate-900 mb-1">
                Frequently Asked Questions
              </h2>
              
              <p className="text-xs text-slate-500 font-normal">
                Answers to common questions about teams, fees, and rules.
              </p>
            </div>

            <div className="space-y-2.5">
              {faqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="card-clean rounded-xl overflow-hidden bg-white text-xs"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? '' : faq.id)}
                      className="w-full p-3.5 text-left flex items-center justify-between gap-3 cursor-pointer focus:outline-none"
                    >
                      <span className="font-semibold text-slate-900">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-[#00629B]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-3.5 pb-3.5 text-slate-600 text-xs leading-relaxed border-t border-slate-100 pt-2 font-normal bg-slate-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
