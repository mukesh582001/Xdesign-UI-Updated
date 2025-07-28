import { useState, useEffect } from "react";

export default function MaterialPanel({ title = "Cabinets", onCancel, onConfirm, onBack, onClose, showToast }) {
  const cabinetOptions = [
    { name: "Avalon Painted White", color: "#f3f4f6" },
    { name: "Avalon Painted Blue", color: "#3b82f6" },
    { name: "Avalon Painted Gray", color: "#9ca3af" },
    { name: "Avalon Maple Sand", color: "#d6b88d" },
    { name: "Avalon Maple Walnut", color: "#5d3a1a" },
    { name: "Avalon Painted Arctic", color: "#e0f7fa" },
    { name: "Avalon Painted Black Mocha", color: "#1f2937" },
    { name: "Avalon Painted Verde", color: "#2e7d32" },
    { name: "Avalon Painted Willow", color: "#a1887f" },
    { name: "Capri Hi-Gloss White", color: "#ffffff" },
    { name: "Milan Maple Pewter", color: "#607d8b" },
    { name: "Milan Maple Sand", color: "#ffcc80" },
    { name: "Milan Painted Arctic", color: "#e0f2f1" },
    { name: "Milan Painted Verde", color: "#4caf50" },
    { name: "Milan Painted Graphite", color: "#424242" },
  ];

  const [selected, setSelected] = useState(cabinetOptions[0]);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsMounted(true);
    });
  }, []);

  const filteredOptions = cabinetOptions
    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

  return (
    <div
      className={`absolute top-0 left-0 z-50 h-full w-[350px] bg-white shadow-2xl flex flex-col transform transition-all duration-700 ease-out 
      ${isMounted ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
    >
      <div className="flex-1 overflow-y-auto p-4 pb-24 scrollbar-hide">
        {/* Enhanced Selection Header */}
        <div 
          className={`mb-6 flex items-center gap-4 relative p-4 border-2 rounded-2xl shadow-lg bg-gradient-to-r from-slate-50 to-white border-slate-200 transform transition-all duration-500 delay-200 ${
            isMounted ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-95"
          }`}
        >
          <div
            className="relative w-20 h-20 rounded-xl border-2 group overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: selected.color }}
          >
            {/* Gradient overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10"></div>
            
            <button
              onClick={() => { onBack && onBack(); onClose && onClose(); }}
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm bg-white/30 text-slate-700 rounded-xl hover:bg-white/50"
              title="Go Back"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 transition-transform duration-200 group-hover:scale-110">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col text-sm space-y-1">
            <p className="text-slate-500 font-bold tracking-wider text-xs uppercase">Confirmed Selection</p>
            <p className="font-bold text-slate-800 truncate max-w-[180px] text-base">{selected.name}</p>
            <p className="font-semibold text-slate-600 truncate max-w-[180px]">Manufacturer: Servin</p>
            <p className="font-semibold text-slate-600 truncate max-w-[180px]">ID: Chirag123</p>
          </div>
        </div>

        {/* Enhanced Header with Controls */}
        <div 
          className={`flex items-center justify-between mb-4 transform transition-all duration-500 delay-300 ${
            isMounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h2 className="font-bold text-lg text-slate-800">All {title}</h2>
          <div className="flex gap-3">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="flex items-center text-sm text-slate-600 border-2 border-slate-200 rounded-full px-4 py-2 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </button>
            <button
              onClick={() => setSortAsc(!sortAsc)}
              className="text-sm text-slate-600 border-2 border-slate-200 rounded-full px-4 py-2 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transition-transform duration-300 ${sortAsc ? "" : "rotate-180"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7 7 7-7" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7-7-7 7" />
              </svg>
              <span className="font-medium">{sortAsc ? "A-Z" : "Z-A"}</span>
            </button>
          </div>
        </div>

        {/* Enhanced Search Input */}
        <div 
          className={`transition-all duration-500 overflow-hidden ${
            showSearch ? "max-h-20 mb-6 opacity-100" : "max-h-0 opacity-0"
          } ${isMounted ? "delay-400" : ""}`}
        >
          <div className="relative">
            <input
              type="text"
              placeholder={`Search ${title}...`}
              className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-slate-50 focus:bg-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Enhanced Options Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {filteredOptions.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl border-2 p-3 cursor-pointer transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 ${
                selected.name === item.name 
                  ? "border-blue-500 bg-blue-50 shadow-lg shadow-blue-200/50" 
                  : "border-slate-200 hover:border-slate-300 hover:shadow-lg"
              } ${
                isMounted 
                  ? `opacity-100 translate-y-0 delay-${500 + (index * 50)}` 
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isMounted ? `${500 + (index * 50)}ms` : '0ms'
              }}
              onClick={() => setSelected(item)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Selection indicator */}
              {selected.name === item.name && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}

              {/* Color swatch with enhanced styling */}
              <div
                className={`w-full h-16 rounded-xl shadow-inner border border-slate-200/50 transition-all duration-300 ${
                  hoveredIndex === index ? "shadow-md scale-105" : ""
                } ${selected.name === item.name ? "ring-2 ring-blue-400 ring-offset-2" : ""}`}
                style={{ backgroundColor: item.color }}
              >
                {/* Gradient overlay for depth */}
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-white/20 via-transparent to-black/10"></div>
              </div>

              {/* Enhanced text with better typography */}
              <p className={`text-xs mt-3 font-medium leading-tight transition-colors duration-200 ${
                selected.name === item.name 
                  ? "text-blue-700" 
                  : hoveredIndex === index 
                  ? "text-slate-800" 
                  : "text-slate-600"
              }`}>
                {item.name}
              </p>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Bottom Action Bar */}
      <div 
        className={`absolute bottom-0 left-0 w-full p-4 bg-white border-t-4 border-slate-100 backdrop-blur-sm transform transition-all duration-500 delay-700 ${
          isMounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <div className="flex justify-between items-center gap-3">
          <button
            className="flex-1 py-3 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold transition-all duration-200 border-2 border-slate-200 hover:border-slate-300 hover:scale-105 active:scale-95"
            onClick={() => {
              onCancel && onCancel();
              onClose && onClose();
            }}
          >
            Cancel
          </button>
          <button
            className="flex-1 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-blue-600 hover:border-blue-700 hover:scale-105 active:scale-95"
            onClick={() => {
              onConfirm && onConfirm(selected);
              showToast &&
                showToast(
                  'Changes Applied!',
                  '1 tile(s) have been applied to your design.'
                );
              onClose && onClose();
            }}
          >
            Confirm Selection
          </button>
        </div>
      </div>
    </div>
  );
}