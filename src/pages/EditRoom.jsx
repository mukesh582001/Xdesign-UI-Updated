import { useNavigate } from "react-router-dom";

export default function EditRoom() {
  const navigate = useNavigate();

  // Option list
  const designOptions = [
    { label: "Cabinets", value: "Avalon Painted White" },
    { label: "Countertops", value: "Ethereal Haze" },
    { label: "Wall Tile", value: "Multitude Wave 12x25 Origami White" },
    { label: "Shower Pan", value: "Union 2x3 Platinum White" },
    { label: "Flooring", value: "Union 12x24 Platinum White" },
    { label: "Plumbing", value: "Hnt/Pitch Package Chrome" },
    { label: "Hardware", value: "Knobs – Madison Knob: Polished Chrome" },
  ];

  return (
    <div className="relative flex w-full h-screen bg-white overflow-hidden">
      {/* Sidebar - Left */}
      <div className="w-[300px] bg-white border-r p-4 space-y-3">
        {designOptions.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-sm p-3 cursor-pointer hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              {/* Placeholder tile */}
              <div className="w-14 h-14 bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-500">
                IMG
              </div>
              {/* Label and value */}
              <div>
                <h4 className="font-semibold text-sm">{item.label}</h4>
                <p className="text-xs text-gray-500">{item.value}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Save Button */}
        <button
          onClick={() => alert("Kitchen Saved!")}
          className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Save Kitchen
        </button>
      </div>

      {/* Preview Image - Right */}
      <div className="flex-1 relative">
        <img
          src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpegg"
          alt="Kitchen Preview"
          className="w-full h-full object-cover"
        />

        {/* Optional: Close Icon Top-Right */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 right-6 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-700 p-2 rounded-full shadow"
          title="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
