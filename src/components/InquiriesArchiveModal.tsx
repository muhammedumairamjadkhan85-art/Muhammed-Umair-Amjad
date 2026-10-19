import React, { useState, useEffect } from 'react';
import { X, Archive, Trash2, Copy, Check } from 'lucide-react';

interface InquiriesArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiriesArchiveModal: React.FC<InquiriesArchiveModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      try {
        const stored = JSON.parse(localStorage.getItem('veltrix_inquiries_history') || '[]');
        setInquiries(stored);
      } catch {
        setInquiries([]);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClear = () => {
    if (confirm('Clear all logged inquiries from local storage?')) {
      localStorage.removeItem('veltrix_inquiries_history');
      setInquiries([]);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050507]/90 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-2xl bg-[#0C0C10] border border-[#2D2415] rounded-2xl shadow-2xl overflow-hidden my-auto z-10 max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2D2415] bg-[#050507]">
          <div className="flex items-center gap-2">
            <Archive className="w-4 h-4 text-[#D4AF37]" />
            <h3 className="text-sm font-bold text-[#F3E5C8]">
              Submitted Project Inquiries Archive ({inquiries.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#9E8E72] hover:text-[#F3E5C8]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* List */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {inquiries.length === 0 ? (
            <div className="text-center py-10 text-xs text-[#9E8E72]">
              No submitted inquiries found in local browser storage yet. Complete the 6-step project wizard to generate an inquiry brief.
            </div>
          ) : (
            inquiries.map((inq) => (
              <div
                key={inq.id}
                className="p-4 rounded-xl bg-[#121218] border border-[#2D2415] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#F3E5C8]">
                      {inq.data?.fullName || 'Anonymous'} · {inq.data?.businessName || 'Personal'}
                    </h4>
                    <span className="text-[11px] text-[#9E8E72] font-mono">
                      {new Date(inq.date).toLocaleString()} · {inq.data?.country}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(inq.id, inq.brief)}
                    className="p-1.5 rounded-lg border border-[#2D2415] text-xs text-[#D4AF37] flex items-center gap-1 hover:bg-[#1A1A22]"
                  >
                    {copiedId === inq.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === inq.id ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="p-3 rounded-lg bg-[#050507] font-mono text-[11px] text-[#F5D77F] whitespace-pre-wrap max-h-40 overflow-y-auto border border-[#201B12]">
                  {inq.brief}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#2D2415] bg-[#050507] flex items-center justify-between">
          {inquiries.length > 0 ? (
            <button
              onClick={handleClear}
              className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear History</span>
            </button>
          ) : <div />}
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-[#070604] gold-btn-gradient rounded-lg shadow-md"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
