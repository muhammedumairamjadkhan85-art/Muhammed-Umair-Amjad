import React, { useState } from 'react';
import { X, Video, CheckCircle2, ArrowRight } from 'lucide-react';
import { StudioConfig } from '../types';

interface MeetingBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  studioConfig: StudioConfig;
}

export const MeetingBookingModal: React.FC<MeetingBookingModalProps> = ({
  isOpen,
  onClose,
  studioConfig
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [timezone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'
  );
  const [notes, setNotes] = useState('');
  const [requested, setRequested] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setRequested(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050507]/90 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-lg bg-[#0C0C10] border border-[#2D2415] rounded-2xl shadow-2xl overflow-hidden my-auto z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2D2415] bg-[#050507]">
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-[#D4AF37]" />
            <h3 className="text-sm font-bold text-[#F3E5C8]">
              Request a 20-Min Discovery Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#9E8E72] hover:text-[#F3E5C8]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6">
          {requested ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-[#F3E5C8]">
                Consultation Request Received
              </h4>
              <p className="text-xs text-[#9E8E72] leading-relaxed max-w-sm mx-auto">
                We will email <strong className="text-[#D4AF37]">{email}</strong> within 24 hours with calendar availability invitations matched to your timezone ({timezone}).
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-5 py-2 text-xs font-bold text-[#070604] gold-btn-gradient rounded-lg shadow-md"
              >
                Done
              </button>
            </div>
          ) : (
            <div>
              {studioConfig.calLink ? (
                <div className="mb-6 p-4 rounded-xl bg-[#121218] border border-[#2D2415] text-center">
                  <p className="text-xs text-[#D4AF37] mb-3">Live scheduling provider connected</p>
                  <a
                    href={studioConfig.calLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#070604] gold-btn-gradient rounded-lg shadow-md"
                  >
                    <span>Open Live Booking Calendar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                <div className="mb-4 text-xs text-[#9E8E72]">
                  Direct consultation booking fallback. Provide your details and preferred timing to coordinate our introductory session.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#F3E5C8] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Eleanor Vance"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#050507] border border-[#2D2415] text-xs text-[#F3E5C8] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#F3E5C8] mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="eleanor@company.com"
                    className="w-full px-3.5 py-2 rounded-xl bg-[#050507] border border-[#2D2415] text-xs text-[#F3E5C8] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#F3E5C8] mb-1">
                    Your Timezone
                  </label>
                  <input
                    type="text"
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#050507] border border-[#2D2415] text-xs text-[#F3E5C8] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#F3E5C8] mb-1">
                    Brief Topic / Project Summary <span className="text-[#9E8E72] font-normal">(optional)</span>
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="We are preparing an e-commerce redesign..."
                    className="w-full px-3.5 py-2 rounded-xl bg-[#050507] border border-[#2D2415] text-xs text-[#F3E5C8] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 text-xs font-bold text-[#070604] gold-btn-gradient rounded-xl hover:scale-[1.02] transition-all shadow-md"
                  >
                    Request Consultation
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
