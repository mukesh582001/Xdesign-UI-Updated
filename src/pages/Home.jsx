import { useState } from "react";
import TilePanel from "../components/TilePanel";

export default function Home() {
  const [showTiles, setShowTiles] = useState(false);

  return (
    <div className="relative w-full h-screen bg-white">
      <img
        src="https://www.neilkelly.com/wp-content/uploads/2019/10/Mcnown-Residence-22s.jpg"
        alt="Bathroom preview"
        className="w-full h-full object-cover"
      />
{showTiles && (
  <button
    onClick={() => setShowTiles(false)}
    className="absolute top-6 right-6 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 p-2 rounded-full shadow"
    title="Close Panel"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
)}
      {/* Edit button - triggers tile panel */}
      <button
        onClick={() => setShowTiles(true)}
        className="absolute bottom-6 left-6 bg-blue-600 text-white pt-[0.65rem] pr-[0.65rem] pb-[0.65rem] pl-[.55rem] rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:bg-blue-700 transition-colors duration-200"
        title="Edit Bathroom"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path
              fillRule="evenodd"
              d="M4 16a1 1 0 011-1h11a1 1 0 110 2H5a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
      </button>

      {/* Save button (unchanged) */}
      <button
        onClick={() => alert("Bathroom Saved!")}
        className="absolute bottom-6 left-20 bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg border-2 border-white hover:bg-blue-700 transition-colors duration-200"
      >
           <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg> Save Bathroom
      </button>

      {/* Conditional tile panel */}
      {showTiles && <TilePanel onClose={() => setShowTiles(false)} />}
    </div>
  );
}
