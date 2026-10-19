import React, { useState } from 'react';
import { 
  Mail, MessageSquare, ArrowRight, Video, Copy, 
  Check, Settings, ExternalLink, ShieldCheck, Phone 
} from 'lucide-react';
import { StudioConfig } from '../types';

interface ContactSectionProps {
  studioConfig: StudioConfig;
  onOpenWizard: () => void;
  onOpenBooking: () => void;
  onOpenSettings: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  studioConfig,
  onOpenWizard,
  onOpenBooking,
  onOpenSettings,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(studioConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const rawWhatsApp = studioConfig.whatsapp.replace(/[^0-9]/g, '');

  return (
    <section id="contact" className="py-24 border-t border-[#2D2415] bg-[#050507] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-3">
            Initiate Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F3E5C8]">
            Let’s Build Something <span className="gold-gradient-text">Beyond Ordinary.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9E8E72] mt-4 leading-relaxed">
            Whether you are launching a new digital venture, elevating a luxury e-commerce brand, or redesigning an established platform, we are ready to discuss your goals.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Inquiry Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#0C0C10] rounded-2xl border border-[#2D2415] p-8 sm:p-10 shadow-xl relative overflow-hidden">
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -z-0" />

            <div className="relative z-10">
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block mb-2">
                Primary Pathway
              </span>
              <h3 className="text-2xl font-bold text-[#F3E5C8] mb-3">
                Structured Project Inquiry Wizard
              </h3>
              <p className="text-sm text-[#9E8E72] leading-relaxed mb-8">
                The fastest way to receive an itemized proposal. Our 6-step questionnaire collects your scope, required technical features, and timeline in under 3 minutes.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2.5 text-xs text-[#9E8E72]">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Itemized pricing breakdown tailored to your specific scope</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#9E8E72]">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>24–48 business hour review guarantee with direct founder oversight</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#9E8E72]">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>Instant draft generation for WhatsApp or direct email handoff</span>
                </div>
              </div>

              <button
                onClick={onOpenWizard}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold text-[#070604] gold-btn-gradient rounded-xl shadow-lg shadow-[#D4AF37]/25 hover:scale-[1.02] active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <span>Start Your Project Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Secondary Direct Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-[#0C0C10] border border-[#2D2415] shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5 text-xs font-semibold uppercase text-[#D4AF37]">
                  <Mail className="w-4 h-4" />
                  <span>Direct Studio Email</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs text-[#9E8E72] hover:text-[#F3E5C8] flex items-center gap-1"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <p className="text-sm font-semibold text-[#F3E5C8] mb-2 font-mono">
                {studioConfig.email}
              </p>
              <a
                href={`mailto:${studioConfig.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:underline"
              >
                <span>Compose Email In Client</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Direct Phone / Call Card */}
            <div className="p-6 rounded-2xl bg-[#0C0C10] border border-[#2D2415] shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5 text-xs font-semibold uppercase text-[#D4AF37]">
                  <Phone className="w-4 h-4" />
                  <span>Direct Contact / Call</span>
                </div>
                <a
                  href={`tel:${studioConfig.phone}`}
                  className="text-xs text-[#D4AF37] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Call Now</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-base font-bold text-[#F3E5C8] mb-2 font-mono">
                {studioConfig.phone}
              </p>
              <a
                href={`tel:${studioConfig.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#070604] gold-btn-gradient rounded-lg shadow-sm transition-transform hover:scale-[1.02]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Directly: {studioConfig.phone}</span>
              </a>
            </div>

            {/* Direct WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-[#0C0C10] border border-[#2D2415] shadow-md">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase text-[#25D366] mb-3">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Business Channel</span>
              </div>
              <p className="text-xs text-[#9E8E72] mb-3 leading-relaxed">
                Prefer rapid text messaging? Initiate a chat with our studio team on WhatsApp.
              </p>
              <a
                href={`https://wa.me/${rawWhatsApp}?text=${encodeURIComponent('Hello VELTRIX Studio, I would like to discuss a custom digital project.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-lg transition-colors"
              >
                <span>Chat on WhatsApp ({studioConfig.phone})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Video Discovery Call Card */}
            <div className="p-6 rounded-2xl bg-[#0C0C10] border border-[#2D2415] shadow-md">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase text-[#D4AF37] mb-3">
                <Video className="w-4 h-4" />
                <span>Discovery Call</span>
              </div>
              <p className="text-xs text-[#9E8E72] mb-4 leading-relaxed">
                Schedule an introductory 20-minute video session to assess your project requirements and determine mutual fit.
              </p>
              <button
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-[#F3E5C8] bg-[#121218] hover:bg-[#1A1A22] border border-[#2D2415] rounded-lg transition-colors"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Studio Endpoints Config Trigger */}
            <div className="text-right pt-2">
              <button
                onClick={onOpenSettings}
                className="inline-flex items-center gap-1.5 text-[11px] text-[#9E8E72] hover:text-[#D4AF37] transition-colors"
                title="Edit studio contact endpoints"
              >
                <Settings className="w-3 h-3" />
                <span>Configure Contact Endpoints</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
