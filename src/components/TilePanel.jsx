import { useEffect, useState } from "react";
import MaterialPanel from "./MaterialPanel";

export default function TilePanel({ showToast, onLayerConfirmed }) {
  const designOptions = [
    { label: "Cabinets", value: "Avalon Painted White" },
    { label: "Countertops", value: "Ethereal Haze" },
    { label: "Wall Tile", value: "Multitude Wave 12x25 Origami White" },
    { label: "Shower Pan", value: "Union 2x3 Platinum White" },
    { label: "Flooring", value: "Union 12x24 Platinum White" },
    { label: "Plumbing", value: "Hnt/Pitch Package Chrome" },
    { label: "Hardware", value: "Knobs – Madison Knob: Polished Chrome" },
  ];

  const [isMounted, setIsMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    // Staggered animation for items
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseMaterialPanel = () => {
    setActiveIndex(null);
  };

  return (
    <>
      <div
        className={`absolute top-[50px] left-0 z-50 w-[320px] p-5 space-y-4 pointer-events-auto transform transition-all duration-700 ease-out 
          ${isMounted ? "translate-x-4 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        {/* Enhanced Kitchen Title with gradient and glow */}
        <div 
          className={`relative bg-white text-slate-800 font-bold text-base rounded-xl px-3 py-2 text-center shadow-2xl border border-slate-200 backdrop-blur-sm transform transition-all duration-500 delay-100 ${
            isMounted ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-xl"></div>
          <div className="relative z-10 tracking-wide text-sm font-semibold">SOHO KITCHEN</div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-slate-100/30 to-transparent"></div>
        </div>

        {/* Enhanced Scrollable Tile Options */}
        <div className="max-h-[68vh] overflow-y-auto scrollbar-hide space-y-3 pr-2">
          {designOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative bg-white/95 backdrop-blur-sm border-2 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1 ${
                activeIndex === index 
                  ? "border-blue-500 bg-blue-50/80 shadow-blue-200/50" 
                  : hoveredIndex === index
                  ? "border-slate-300 shadow-slate-200/50"
                  : "border-slate-200 hover:border-slate-300"
              } ${
                isMounted 
                  ? `opacity-100 translate-y-0 delay-${(index + 2) * 100}` 
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isMounted ? `${(index + 2) * 100}ms` : '0ms'
              }}
            >
              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 p-4">
                <div className="flex items-center gap-4">
                  {/* Enhanced placeholder with gradient and animation */}
                  <div className={`relative w-16 h-16 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 rounded-xl flex items-center justify-center text-xs text-slate-500 font-medium shadow-inner border border-slate-200/50 transition-all duration-300 ${
                    hoveredIndex === index ? "shadow-md scale-105" : ""
                  }`}>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/50 to-transparent"></div>
                    <span className="relative z-10">IMG</span>
                    {/* Subtle animated border */}
                    <div className={`absolute inset-0 rounded-xl border-2 border-blue-400/0 transition-all duration-300 ${
                      hoveredIndex === index ? "border-blue-400/30" : ""
                    }`}></div>
                  </div>
                  
                  {/* Enhanced text content */}
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-bold text-base text-slate-800 mb-1 transition-colors duration-200 ${
                      activeIndex === index ? "text-blue-700" : "group-hover:text-slate-900"
                    }`}>
                      {item.label}
                    </h4>
                    <p className={`text-sm text-slate-600 leading-relaxed transition-colors duration-200 ${
                      activeIndex === index ? "text-blue-600" : "group-hover:text-slate-700"
                    }`}>
                      {item.value}
                    </p>
                  </div>

                  {/* Animated arrow indicator */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-all duration-300 ${
                    hoveredIndex === index 
                      ? "bg-blue-100 scale-110 shadow-md" 
                      : activeIndex === index 
                      ? "bg-blue-500 scale-110" 
                      : "group-hover:bg-slate-200"
                  }`}>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`w-4 h-4 transition-all duration-300 ${
                        activeIndex === index 
                          ? "text-white rotate-90" 
                          : hoveredIndex === index
                          ? "text-blue-600 translate-x-0.5"
                          : "text-slate-500 group-hover:text-slate-700"
                      }`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Selection indicator */}
                {activeIndex === index && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full shadow-lg animate-pulse">
                    <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                  </div>
                )}
              </div>

              {/* Bottom border accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-2xl transform origin-left transition-all duration-300 ${
                activeIndex === index 
                  ? "scale-x-100 opacity-100" 
                  : hoveredIndex === index
                  ? "scale-x-75 opacity-60"
                  : "scale-x-0 opacity-0"
              }`}></div>
            </div>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <MaterialPanel
          title={designOptions[activeIndex].label}
          showToast={showToast}
          onClose={handleCloseMaterialPanel}
          onConfirm={() => { onLayerConfirmed && onLayerConfirmed(); }}
        />
      )}
    </>
  );
}