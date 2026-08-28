import React from 'react';
import { useShop } from '../context/ShopContext';
import { X, CheckCircle, Info, AlertCircle } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useShop();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-[#141414] text-[#FAF8F5] p-3.5 rounded-xs shadow-2xl border border-[#2D2B28] flex items-center gap-3 animate-in slide-in-from-bottom-3 duration-200"
        >
          {toast.image ? (
            <img
              src={toast.image}
              alt=""
              className="w-11 h-13 object-cover object-center rounded-xs bg-[#2B2926] flex-shrink-0"
            />
          ) : (
            <div className="p-1.5 rounded-full bg-[#2A2825] text-[#9C7B4F] flex-shrink-0">
              {toast.type === 'error' ? (
                <AlertCircle size={16} />
              ) : toast.type === 'info' ? (
                <Info size={16} />
              ) : (
                <CheckCircle size={16} />
              )}
            </div>
          )}

          <div className="flex-1 min-w-0">
            <div className="text-xs uppercase tracking-wider font-semibold text-white truncate">
              {toast.title}
            </div>
            <div className="text-[11px] text-[#B8B0A3] font-light leading-snug truncate">
              {toast.message}
            </div>
          </div>

          <button
            onClick={() => removeToast(toast.id)}
            aria-label="Dismiss notification"
            className="text-[#8C8477] hover:text-white p-1 transition-colors cursor-pointer"
          >
            <X size={15} />
          </button>
        </div>
      ))}
    </div>
  );
};
