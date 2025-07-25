import { useEffect } from "react";

export default function Toast({ title, description, message, onClose, duration = 3000, type = 'success' }) {
  useEffect(() => {
    if (!(title || message)) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [title, message, duration, onClose]);

  if (!(title || message)) return null;

  const icon = type === 'error' ? (
    <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ) : (
    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  const borderColor = type === 'error' ? 'border-red-500' : 'border-green-500';

  return (
    <div className={`fixed bottom-10 right-8 z-50 flex items-start min-w-[280px] max-w-xs bg-white border-l-4 ${borderColor} shadow-xl rounded-lg px-5 py-4 animate-slide-in`}>
      {icon}
      <div className="flex-1">
        <div className="text-base font-bold text-gray-900 mb-1">{title || message}</div>
        {description && <div className="text-sm text-gray-700">{description}</div>}
      </div>
      <button
        onClick={onClose}
        className="ml-4 text-gray-400 hover:text-gray-700 focus:outline-none mt-1"
        title="Close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <style jsx>{`
        .animate-slide-in {
          animation: slideInRight 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes slideInRight {
          0% { transform: translateX(120%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
} 