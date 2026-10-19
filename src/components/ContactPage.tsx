import React, { useState } from 'react';
import { 
  Mail, MessageSquare, Phone, ArrowRight, Video, Copy, 
  Check, ExternalLink, ShieldCheck, MapPin, Clock 
} from 'lucide-react';
import { StudioConfig } from '../types';

interface ContactPageProps {
  studioConfig: StudioConfig;
  onOpenWizard: () => void;
  onOpenBooking: () => void;
  onOpenSettings: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  studioConfig,
  onOpenWizard,
  onOpenBooking,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(studioConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(studioConfig.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const rawWhatsApp = studioConfig.whatsapp.replace(/[^0-9]/g, '');

  return (
    <div className="pt-28 pb-24 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121218] border border-[#2D2415] text-xs font-mono text-[#D4AF37] mb-4">
            <span>Direct Collaboration Channels</span>
            <span aria-hidden="true">·</span>
            <span>VELTRIX ({studioConfig.domain})</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F3E5C8] leading-[1.1] mb-6">
            Get in Touch & <span className="gold-gradient-text">Start Your Project</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#9E8E72] leading-relaxed">
            Ready to design or develop your digital platform? Reach out directly via email, phone, WhatsApp, or launch our structured 6-step project brief.
          </p>
        </div>

        {/* 3 Main Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Direct Phone / Call Card */}
          <div className="p-7 rounded-2xl bg-[#0C0C10] border border-[#2D2415] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#121218] border border-[#2D2415] flex items-center justify-center text-[#D4AF37]">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="text-xs text-[#9E8E72] hover:text-[#F3E5C8] flex items-center gap-1"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <span className="text-xs font-semibold uppercase text-[#D4AF37] block mb-1">
                Direct Contact & Call
              </span>
              <p className="text-lg font-bold text-[#F3E5C8] font-mono mb-2">
                {studioConfig.phone}
              </p>
              <p className="text-xs text-[#9E8E72] leading-relaxed mb-6">
                Available for direct project inquiries, technical scoping calls, and client support.
              </p>
            </div>

            <a
              href={`tel:${studioConfig.phone}`}
              className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-bold text-[#070604] gold-btn-gradient rounded-xl shadow-md transition-all hover:scale-[1.02]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now ({studioConfig.phone})</span>
            </a>
          </div>

          {/* Direct Email Card */}
          <div className="p-7 rounded-2xl bg-[#0C0C10] border border-[#2D2415] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#121218] border border-[#2D2415] flex items-center justify-center text-[#D4AF37]">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs text-[#9E8E72] hover:text-[#F3E5C8] flex items-center gap-1"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <span className="text-xs font-semibold uppercase text-[#D4AF37] block mb-1">
                Official Studio Email
              </span>
              <p className="text-xs sm:text-sm font-bold text-[#F3E5C8] font-mono mb-2 break-all">
                {studioConfig.email}
              </p>
              <p className="text-xs text-[#9E8E72] leading-relaxed mb-6">
                Send RFP documents, project specifications, and detailed requirements directly to our inbox.
              </p>
            </div>

            <a
              href={`mailto:${studioConfig.email}?subject=${encodeURIComponent(`Project Inquiry - veltrix.com.pk`)}`}
              className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-semibold text-[#F3E5C8] bg-[#121218] hover:bg-[#1A1A22] border border-[#2D2415] rounded-xl transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Compose Email</span>
            </a>
          </div>

          {/* WhatsApp Direct Chat Card */}
          <div className="p-7 rounded-2xl bg-[#0C0C10] border border-[#2D2415] shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-[#25D366] font-semibold">Active</span>
              </div>

              <span className="text-xs font-semibold uppercase text-[#25D366] block mb-1">
                WhatsApp Business Chat
              </span>
              <p className="text-lg font-bold text-[#F3E5C8] font-mono mb-2">
                {studioConfig.phone}
              </p>
              <p className="text-xs text-[#9E8E72] leading-relaxed mb-6">
                Fast communication on WhatsApp for quick questions, quote estimates, and feedback.
              </p>
            </div>

            <a
              href={`https://wa.me/${rawWhatsApp}?text=${encodeURIComponent('Hello VELTRIX Studio, I would like to discuss a custom digital project.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-bold text-[#25D366] bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 rounded-xl transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Project Wizard Launch Panel */}
        <div className="bg-[#0C0C10] rounded-2xl border border-[#2D2415] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block mb-2">
                Structured Proposal Pathway
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F3E5C8] mb-4">
                6-Step Client Onboarding & Custom Quote Wizard
              </h2>
              <p className="text-sm text-[#9E8E72] leading-relaxed mb-6 max-w-2xl">
                The fastest way to receive an itemized proposal. Answer 6 short questions about your project scope, required features, and timeline in under 3 minutes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#9E8E72]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Itemized quotes tailored to your scope</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>24–48 business hour review guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Sub-3-minute questionnaire</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Serving Pakistan & Global Clients</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={onOpenWizard}
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold text-[#070604] gold-btn-gradient rounded-xl shadow-lg shadow-[#D4AF37]/25 hover:scale-[1.02] transition-transform"
              >
                <span>Launch Project Wizard</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold text-[#F3E5C8] bg-[#121218] hover:bg-[#1A1A22] border border-[#2D2415] rounded-xl transition-colors"
              >
                <Video className="w-4 h-4 text-[#D4AF37]" />
                <span>Book 20-Min Discovery Video Call</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
