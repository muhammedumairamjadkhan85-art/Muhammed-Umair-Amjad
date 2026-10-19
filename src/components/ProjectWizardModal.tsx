import React, { useState, useEffect } from 'react';
import { 
  X, ArrowRight, ArrowLeft, Check, AlertCircle, 
  Send, MessageSquare, Mail, RefreshCw, CheckCircle2, Copy 
} from 'lucide-react';
import { InquiryFormData, StudioConfig } from '../types';

interface ProjectWizardModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  studioConfig: StudioConfig;
}

const DEFAULT_FORM_DATA: InquiryFormData = {
  fullName: '',
  businessName: '',
  email: '',
  country: '',
  preferredContact: 'email',
  whatsappNumber: '',
  projectTypes: [],
  primaryGoals: [],
  additionalGoalContext: '',
  approxPages: '1-5 pages',
  requiredFeatures: [],
  existingWebsiteUrl: '',
  hasBrandingAndContent: 'in-progress',
  referenceWebsites: '',
  budgetRange: 'Not sure yet',
  targetTimeline: '1-2 months',
  consentGiven: false,
};

export const ProjectWizardModal: React.FC<ProjectWizardModalProps> = ({
  isOpen,
  onClose,
  initialService,
  studioConfig,
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<InquiryFormData>(() => {
    try {
      const saved = localStorage.getItem('veltrix_inquiry_draft');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return DEFAULT_FORM_DATA;
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedBrief, setSubmittedBrief] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService && !formData.projectTypes.includes(initialService)) {
      setFormData((prev) => ({
        ...prev,
        projectTypes: [...prev.projectTypes, initialService],
      }));
    }
  }, [initialService]);

  useEffect(() => {
    try {
      localStorage.setItem('veltrix_inquiry_draft', JSON.stringify(formData));
    } catch {
      // ignore
    }
  }, [formData]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const totalSteps = 6;

  const validateStep = (currentStep: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (currentStep === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
      if (!formData.email.trim()) {
        newErrors.email = 'Email address is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address.';
      }
      if (!formData.country.trim()) newErrors.country = 'Country or region is required.';
      if (formData.preferredContact === 'whatsapp' && !formData.whatsappNumber?.trim()) {
        newErrors.whatsappNumber = 'WhatsApp number is required when selected as preferred contact.';
      }
    }

    if (currentStep === 2) {
      if (formData.projectTypes.length === 0) {
        newErrors.projectTypes = 'Please select at least one project type.';
      }
    }

    if (currentStep === 3) {
      if (formData.primaryGoals.length === 0) {
        newErrors.primaryGoals = 'Please select at least one primary objective.';
      }
    }

    if (currentStep === 6) {
      if (!formData.consentGiven) {
        newErrors.consentGiven = 'Consent to process your project details is required.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handleBack = () => {
    setErrors({});
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const toggleArrayItem = (field: 'projectTypes' | 'primaryGoals' | 'requiredFeatures', item: string) => {
    setFormData((prev) => {
      const exists = prev[field].includes(item);
      return {
        ...prev,
        [field]: exists ? prev[field].filter((x) => x !== item) : [...prev[field], item],
      };
    });
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(6)) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    const brief = `*VELTRIX Studio Project Inquiry*\n` +
      `----------------------------------------\n` +
      `*Client:* ${formData.fullName} (${formData.businessName || 'Personal Brand'})\n` +
      `*Email:* ${formData.email}\n` +
      `*Country:* ${formData.country}\n` +
      `*Preferred Contact:* ${formData.preferredContact} ${formData.whatsappNumber ? `(${formData.whatsappNumber})` : ''}\n\n` +
      `*Project Type:* ${formData.projectTypes.join(', ')}\n` +
      `*Primary Goals:* ${formData.primaryGoals.join(', ')}\n` +
      `*Additional Context:* ${formData.additionalGoalContext || 'None provided'}\n\n` +
      `*Approx Pages:* ${formData.approxPages}\n` +
      `*Required Features:* ${formData.requiredFeatures.length ? formData.requiredFeatures.join(', ') : 'Standard scope'}\n` +
      `*Existing URL:* ${formData.existingWebsiteUrl || 'None / Fresh build'}\n` +
      `*Branding & Assets:* ${formData.hasBrandingAndContent}\n` +
      `*Reference Links:* ${formData.referenceWebsites || 'None'}\n\n` +
      `*Indicative Budget:* ${formData.budgetRange}\n` +
      `*Target Timeline:* ${formData.targetTimeline}\n` +
      `----------------------------------------\n` +
      `Generated: ${new Date().toISOString()}`;

    setSubmittedBrief(brief);

    try {
      const existing = JSON.parse(localStorage.getItem('veltrix_inquiries_history') || '[]');
      existing.push({
        id: 'inq_' + Date.now(),
        date: new Date().toISOString(),
        data: formData,
        brief,
      });
      localStorage.setItem('veltrix_inquiries_history', JSON.stringify(existing));
      localStorage.removeItem('veltrix_inquiry_draft');
    } catch {
      // ignore
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(submittedBrief);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getWhatsAppHandoffUrl = () => {
    const rawNumber = studioConfig.whatsapp.replace(/[^0-9]/g, '');
    const encodedText = encodeURIComponent(submittedBrief);
    return `https://wa.me/${rawNumber}?text=${encodedText}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.fullName} - ${formData.projectTypes[0] || 'Custom Project'}`);
    const body = encodeURIComponent(submittedBrief);
    return `mailto:${studioConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#050507]/90 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wizard-modal-title"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-3xl bg-[#0C0C10] border border-[#2D2415] rounded-2xl shadow-2xl overflow-hidden my-auto z-10 max-h-[92vh] flex flex-col">
        
        {/* Wizard Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2D2415] bg-[#050507]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full p-[1px] bg-gradient-to-tr from-[#D4AF37] to-[#8C6D1F]">
              <img
                src="/src/assets/images/veltrix_gold_badge_logo_1792337957224.jpg"
                alt="Logo"
                className="w-full h-full rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 id="wizard-modal-title" className="text-sm font-bold text-[#F3E5C8]">
                Client Onboarding & Custom Quote Wizard
              </h2>
              <span className="text-xs text-[#9E8E72]">
                Step {step} of {totalSteps}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#9E8E72] hover:text-[#F3E5C8] hover:bg-[#121218] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            aria-label="Close project wizard"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Gold Progress bar */}
        {!isSubmitted && (
          <div className="w-full bg-[#121218] h-1.5">
            <div
              className="bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#C59B27] h-1.5 transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        )}

        {/* Wizard Body */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1 bg-[#0C0C10]">
          {isSubmitted ? (
            /* SUBMISSION SUCCESS VIEW */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#F3E5C8]">
                  Project Brief Received
                </h3>
                <p className="text-sm text-[#9E8E72] mt-2 max-w-lg mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#D4AF37]">{formData.fullName}</strong>. Your project brief has been logged into our studio system. We review every brief carefully and respond within 24–48 business hours with clarifying questions or a custom proposal.
                </p>
              </div>

              {/* Instant Communication Channels */}
              <div className="p-5 rounded-xl bg-[#121218] border border-[#2D2415] text-left max-w-xl mx-auto space-y-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                  Send Directly or Expedite via Direct Channel:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={getWhatsAppHandoffUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 text-xs font-semibold rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                  </a>

                  <a
                    href={getMailtoUrl()}
                    className="flex items-center justify-center gap-2 p-3 text-xs font-semibold rounded-lg bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 text-[#D4AF37] border border-[#D4AF37]/30 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email Client</span>
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleCopyBrief}
                    className="w-full flex items-center justify-center gap-2 py-2 text-xs text-[#9E8E72] hover:text-[#F3E5C8] border border-[#201B12] rounded-lg transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied Brief to Clipboard!' : 'Copy Formatted Brief to Clipboard'}</span>
                  </button>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                    onClose();
                  }}
                  className="px-6 py-2.5 text-xs font-bold text-[#070604] gold-btn-gradient rounded-lg shadow-md transition-transform hover:scale-105"
                >
                  Return to Studio
                </button>
              </div>
            </div>
          ) : (
            /* ACTIVE STEP FORMS */
            <div className="space-y-6">
              
              {/* STEP 1: Basic Information */}
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-[#F3E5C8]">
                      Step 1 — Basic Information
                    </h3>
                    <p className="text-xs text-[#9E8E72] mt-1">
                      Tell us who you are and how you prefer to be reached.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#F3E5C8] mb-1.5">
                        Full Name <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050507] border border-[#2D2415] text-sm text-[#F3E5C8] focus:outline-none focus:border-[#D4AF37]"
                      />
                      {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#F3E5C8] mb-1.5">
                        Business or Brand Name <span className="text-[#9E8E72] font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Vance Architectural Lab"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050507] border border-[#2D2415] text-sm text-[#F3E5C8] focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#F3E5C8] mb-1.5">
                        Work Email Address <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="eleanor@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050507] border border-[#2D2415] text-sm text-[#F3E5C8] focus:outline-none focus:border-[#D4AF37]"
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#F3E5C8] mb-1.5">
                        Country or Region <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. United States, United Kingdom, Pakistan"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050507] border border-[#2D2415] text-sm text-[#F3E5C8] focus:outline-none focus:border-[#D4AF37]"
                      />
                      {errors.country && <p className="text-xs text-red-400 mt-1">{errors.country}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#F3E5C8] mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {(['email', 'whatsapp', 'video-call'] as const).map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredContact: method })}
                          className={`p-3 rounded-xl border text-xs font-semibold capitalize transition-all ${
                            formData.preferredContact === method
                              ? 'gold-btn-gradient text-[#070604] font-bold border-[#D4AF37]'
                              : 'bg-[#050507] border-[#2D2415] text-[#9E8E72]'
                          }`}
                        >
                          {method === 'video-call' ? 'Video Discovery Call' : method}
                        </button>
                      ))}
                    </div>
                  </div>

                  {formData.preferredContact === 'whatsapp' && (
                    <div>
                      <label className="block text-xs font-medium text-[#F3E5C8] mb-1.5">
                        Your WhatsApp Number (with country code) <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.whatsappNumber || ''}
                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                        placeholder="+1 555 019 2834"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050507] border border-[#2D2415] text-sm text-[#F3E5C8] focus:outline-none focus:border-[#D4AF37]"
                      />
                      {errors.whatsappNumber && <p className="text-xs text-red-400 mt-1">{errors.whatsappNumber}</p>}
                    </div>
                  )}
                </div>
              )}

              {/* STEP 2: Project Type */}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-[#F3E5C8]">
                      Step 2 — Project Type
                    </h3>
                    <p className="text-xs text-[#9E8E72] mt-1">
                      Select all service disciplines relevant to your engagement.
                    </p>
                  </div>

                  {errors.projectTypes && (
                    <div className="p-3 rounded-lg bg-red-950/40 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errors.projectTypes}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Website Design',
                      'Website Development',
                      'Website Redesign',
                      'E-commerce Website',
                      'Landing Page',
                      'UI/UX Design',
                      'Custom Web Application',
                      'Other Specialized Work',
                    ].map((type) => {
                      const isSelected = formData.projectTypes.includes(type);
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => toggleArrayItem('projectTypes', type)}
                          className={`p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
                            isSelected
                              ? 'bg-[#121218] border-[#D4AF37] shadow-sm'
                              : 'bg-[#050507] border-[#2D2415] hover:border-[#D4AF37]/50'
                          }`}
                        >
                          <span className="text-sm font-semibold text-[#F3E5C8]">
                            {type}
                          </span>
                          <span
                            className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                              isSelected
                                ? 'bg-[#D4AF37] border-[#D4AF37] text-[#070604]'
                                : 'border-[#2D2415] text-transparent'
                            }`}
                          >
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 3: Business and Goals */}
              {step === 3 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-[#F3E5C8]">
                      Step 3 — Business & Project Goals
                    </h3>
                    <p className="text-xs text-[#9E8E72] mt-1">
                      What does commercial success look like for this initiative?
                    </p>
                  </div>

                  {errors.primaryGoals && (
                    <div className="p-3 rounded-lg bg-red-950/40 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errors.primaryGoals}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Establish a high-credibility brand presence',
                      'Generate inbound qualified business leads',
                      'Sell physical or digital products online',
                      'Modernize an outdated, low-converting website',
                      'Showcase a personal brand or creator portfolio',
                      'Elevate user experience & software onboarding',
                      'Expand into international markets (US/EU/UK/CA)',
                      'Prepare for a venture capital or angel funding round',
                    ].map((goal) => {
                      const isSelected = formData.primaryGoals.includes(goal);
                      return (
                        <button
                          key={goal}
                          type="button"
                          onClick={() => toggleArrayItem('primaryGoals', goal)}
                          className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                            isSelected
                              ? 'bg-[#121218] border-[#D4AF37]'
                              : 'bg-[#050507] border-[#2D2415]'
                          }`}
                        >
                          <span className="text-xs font-medium text-[#F3E5C8]">
                            {goal}
                          </span>
                          <span
                            className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 ml-2 ${
                              isSelected
                                ? 'bg-[#D4AF37] border-[#D4AF37] text-[#070604]'
                                : 'border-[#2D2415] text-transparent'
                            }`}
                          >
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#F3E5C8] mb-1.5">
                      Additional Context or Strategic Nuances <span className="text-[#9E8E72] font-normal">(optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.additionalGoalContext}
                      onChange={(e) => setFormData({ ...formData, additionalGoalContext: e.target.value })}
                      placeholder="Share any key challenges, current conversion bottlenecks, or target deadlines..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#050507] border border-[#2D2415] text-xs text-[#F3E5C8] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              )}

              {/* STEP 4: Project Scope */}
              {step === 4 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-[#F3E5C8]">
                      Step 4 — Scope & Technical Materials
                    </h3>
                    <p className="text-xs text-[#9E8E72] mt-1">
                      Approximate volume, required features, and current asset readiness.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#F3E5C8] mb-1.5">
                        Approximate Page Count
                      </label>
                      <select
                        value={formData.approxPages}
                        onChange={(e) => setFormData({ ...formData, approxPages: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050507] border border-[#2D2415] text-xs text-[#F3E5C8] focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="1-3 pages (Focused Landing / Single Page)">1–3 pages (Focused Landing / Single Page)</option>
                        <option value="4-7 pages (Standard Business Platform)">4–7 pages (Standard Business Platform)</option>
                        <option value="8-15 pages (Comprehensive Corporate / Studio)">8–15 pages (Comprehensive Corporate / Studio)</option>
                        <option value="16+ pages / Custom Dynamic Application">16+ pages / Custom Dynamic Application</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#F3E5C8] mb-1.5">
                        Branding & Content Readiness
                      </label>
                      <select
                        value={formData.hasBrandingAndContent}
                        onChange={(e) => setFormData({ ...formData, hasBrandingAndContent: e.target.value as any })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050507] border border-[#2D2415] text-xs text-[#F3E5C8] focus:outline-none focus:border-[#D4AF37]"
                      >
                        <option value="complete">Complete (Brand guidelines & copy are ready)</option>
                        <option value="in-progress">In Progress (Rough copy / logo exist, need polishing)</option>
                        <option value="need-assistance">Need Assistance (Require studio direction & visual identity)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#F3E5C8] mb-2">
                      Required Functional Capabilities
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {[
                        'Custom Animations',
                        'CMS / Blog System',
                        'E-commerce & Checkout',
                        'Multi-step Inquiries',
                        'API Integrations',
                        'Multi-language Support',
                        'Customer Portal / Auth',
                        'High-speed SEO Setup',
                      ].map((feat) => {
                        const isSelected = formData.requiredFeatures.includes(feat);
                        return (
                          <button
                            key={feat}
                            type="button"
                            onClick={() => toggleArrayItem('requiredFeatures', feat)}
                            className={`p-2.5 rounded-lg border text-left text-xs transition-colors flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]'
                                : 'bg-[#050507] border-[#2D2415] text-[#9E8E72]'
                            }`}
                          >
                            <span>{feat}</span>
                            {isSelected && <Check className="w-3 h-3 text-[#D4AF37]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#F3E5C8] mb-1.5">
                        Current Website URL <span className="text-[#9E8E72] font-normal">(if redesign)</span>
                      </label>
                      <input
                        type="url"
                        value={formData.existingWebsiteUrl || ''}
                        onChange={(e) => setFormData({ ...formData, existingWebsiteUrl: e.target.value })}
                        placeholder="https://example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050507] border border-[#2D2415] text-xs text-[#F3E5C8] focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#F3E5C8] mb-1.5">
                        Inspiration or Reference Links <span className="text-[#9E8E72] font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.referenceWebsites || ''}
                        onChange={(e) => setFormData({ ...formData, referenceWebsites: e.target.value })}
                        placeholder="e.g. apple.com, stripe.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050507] border border-[#2D2415] text-xs text-[#F3E5C8] focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Budget and Timeline */}
              {step === 5 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-[#F3E5C8]">
                      Step 5 — Indicative Budget & Target Timeline
                    </h3>
                    <p className="text-xs text-[#9E8E72] mt-1">
                      Helps us recommend an appropriate scope without fixed package restrictions.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#F3E5C8] mb-2">
                      Indicative Project Budget Range
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        '$2,500 – $5,000 (Focused Landing / Single Page)',
                        '$5,000 – $10,000 (Complete Brand Website)',
                        '$10,000 – $20,000 (Custom E-commerce / Web App)',
                        '$20,000+ (Comprehensive Enterprise Platform)',
                        'Not sure yet (Help me evaluate scope)',
                      ].map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormData({ ...formData, budgetRange: range })}
                          className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                            formData.budgetRange === range
                              ? 'bg-[#121218] border-[#D4AF37] text-[#D4AF37]'
                              : 'bg-[#050507] border-[#2D2415] text-[#9E8E72]'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#F3E5C8] mb-2">
                      Target Timeframe
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        'Within 1 month',
                        '1–2 months',
                        '2–3 months',
                        'Flexible / Quality First',
                      ].map((tl) => (
                        <button
                          key={tl}
                          type="button"
                          onClick={() => setFormData({ ...formData, targetTimeline: tl })}
                          className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                            formData.targetTimeline === tl
                              ? 'gold-btn-gradient text-[#070604] font-bold border-[#D4AF37]'
                              : 'bg-[#050507] border-[#2D2415] text-[#9E8E72]'
                          }`}
                        >
                          {tl}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#121218] border border-[#2D2415] text-xs text-[#9E8E72]">
                    * VELTRIX prepares tailored, line-itemed proposals. Selecting a budget range does not bind you; it guides our recommendation for architecture and phase prioritization.
                  </div>
                </div>
              )}

              {/* STEP 6: Review and Submit */}
              {step === 6 && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-[#F3E5C8]">
                      Step 6 — Review & Submit Project Brief
                    </h3>
                    <p className="text-xs text-[#9E8E72] mt-1">
                      Confirm your answers before transmitting to VELTRIX. You can jump back to edit any section.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="p-5 rounded-xl bg-[#121218] border border-[#2D2415] space-y-4 text-xs">
                    
                    <div className="flex items-center justify-between pb-3 border-b border-[#201B12]">
                      <div>
                        <span className="text-[#9E8E72] block">Contact</span>
                        <span className="font-semibold text-[#F3E5C8]">
                          {formData.fullName} ({formData.email}) · {formData.country}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-[#D4AF37] hover:underline font-semibold"
                      >
                        Edit
                      </button>
                    </div>

                    <div className="flex items-center justify-between pb-3 border-b border-[#201B12]">
                      <div>
                        <span className="text-[#9E8E72] block">Disciplines</span>
                        <span className="font-semibold text-[#F3E5C8]">
                          {formData.projectTypes.join(', ') || 'None selected'}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="text-[#D4AF37] hover:underline font-semibold"
                      >
                        Edit
                      </button>
                    </div>

                    <div className="flex items-center justify-between pb-3 border-b border-[#201B12]">
                      <div>
                        <span className="text-[#9E8E72] block">Scope & Volume</span>
                        <span className="font-semibold text-[#F3E5C8]">
                          {formData.approxPages} · {formData.requiredFeatures.length} custom features selected
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep(4)}
                        className="text-[#D4AF37] hover:underline font-semibold"
                      >
                        Edit
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[#9E8E72] block">Budget & Target Timeframe</span>
                        <span className="font-semibold text-[#F3E5C8]">
                          {formData.budgetRange} · {formData.targetTimeline}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep(5)}
                        className="text-[#D4AF37] hover:underline font-semibold"
                      >
                        Edit
                      </button>
                    </div>

                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consentGiven}
                        onChange={(e) => {
                          setFormData({ ...formData, consentGiven: e.target.checked });
                          if (errors.consentGiven) setErrors({ ...errors, consentGiven: '' });
                        }}
                        className="w-4 h-4 mt-0.5 rounded border-[#2D2415] bg-[#050507] text-[#D4AF37] focus:ring-[#D4AF37]"
                      />
                      <span className="text-xs text-[#9E8E72] leading-relaxed">
                        I confirm that the submitted project details are accurate and authorize VELTRIX to review these specifications to prepare a bespoke project proposal and quotation.
                      </span>
                    </label>
                    {errors.consentGiven && (
                      <p className="text-xs text-red-400 mt-1 pl-7">{errors.consentGiven}</p>
                    )}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

        {/* Wizard Footer Controls */}
        {!isSubmitted && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-[#2D2415] bg-[#050507]">
            <button
              onClick={handleBack}
              disabled={step === 1 || isSubmitting}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg transition-colors ${
                step === 1
                  ? 'opacity-0 pointer-events-none'
                  : 'text-[#9E8E72] hover:text-[#F3E5C8] border border-[#2D2415]'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>

            <div className="flex items-center gap-3">
              <span className="text-xs text-[#9E8E72] hidden sm:inline">
                Step {step} of {totalSteps}
              </span>

              {step < totalSteps ? (
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-[#070604] gold-btn-gradient rounded-lg transition-all shadow-md hover:scale-[1.02] active:scale-95"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-[#070604] gold-btn-gradient rounded-lg transition-all shadow-md hover:scale-[1.02] active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Transmitting Brief...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Project Brief</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
