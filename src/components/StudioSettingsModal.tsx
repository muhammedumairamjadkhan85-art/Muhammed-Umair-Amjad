import React, { useState } from 'react';
import { X, Settings, Check } from 'lucide-react';
import { StudioConfig } from '../types';

interface StudioSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: StudioConfig;
  onSave: (newConfig: StudioConfig) => void;
}

export const StudioSettingsModal: React.FC<StudioSettingsModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
}) => {
  const [email, setEmail] = useState(config.email);
  const [phone, setPhone] = useState(config.phone);
  const [whatsapp, setWhatsapp] = useState(config.whatsapp);
  const [domain, setDomain] = useState(config.domain || 'veltrix.com.pk');
  const [calLink, setCalLink] = useState(config.calLink || '');
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...config,
      email,
      phone,
      whatsapp,
      domain,
      calLink,
    });
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050507]/90 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-md bg-[#0C0C10] border border-[#2D2415] rounded-2xl shadow-2xl overflow-hidden my-auto z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2D2415] bg-[#050507]">
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-[#D4AF37]" />
            <h3 className="text-sm font-bold text-[#F3E5C8]">
              Studio Channels Configuration
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#9E8E72] hover:text-[#F3E5C8]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSave} className="p-6 space-y-4">
          <p className="text-xs text-[#9E8E72] leading-relaxed">
            Configure your studio contact endpoints. The site’s WhatsApp buttons, phone call triggers, mailto links, and domain references automatically sync.
          </p>

          <div>
            <label className="block text-xs font-medium text-[#F3E5C8] mb-1">
              Studio Contact Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="muhammedumairamjadkhan85@gmail.com"
              className="w-full px-3.5 py-2 rounded-xl bg-[#050507] border border-[#2D2415] text-xs text-[#F3E5C8] focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#F3E5C8] mb-1">
              Direct Contact Number / Call
            </label>
            <input
              type="text"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="03166097993"
              className="w-full px-3.5 py-2 rounded-xl bg-[#050507] border border-[#2D2415] text-xs text-[#F3E5C8] focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#F3E5C8] mb-1">
              WhatsApp Number (with country code, e.g. +923166097993)
            </label>
            <input
              type="text"
              required
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="+923166097993"
              className="w-full px-3.5 py-2 rounded-xl bg-[#050507] border border-[#2D2415] text-xs text-[#F3E5C8] focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#F3E5C8] mb-1">
              Website Domain
            </label>
            <input
              type="text"
              required
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder="veltrix.com.pk"
              className="w-full px-3.5 py-2 rounded-xl bg-[#050507] border border-[#2D2415] text-xs text-[#F3E5C8] focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#F3E5C8] mb-1">
              Cal.com or Calendly URL <span className="text-[#9E8E72] font-normal">(optional)</span>
            </label>
            <input
              type="url"
              value={calLink}
              onChange={(e) => setCalLink(e.target.value)}
              placeholder="https://cal.com/your-studio"
              className="w-full px-3.5 py-2 rounded-xl bg-[#050507] border border-[#2D2415] text-xs text-[#F3E5C8] focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div className="pt-2 flex items-center justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#9E8E72] border border-[#2D2415] rounded-lg hover:text-[#F3E5C8]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-[#070604] gold-btn-gradient rounded-lg shadow-md"
            >
              {savedNotice ? (
                <>
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Save Channels</span>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
