import { useState } from "react";
import { selectionOptions } from "../data/options";

export default function SelectionModal({ type, onClose }) {
  const [selected, setSelected] = useState(null);
const options = selectionOptions[type];
if (!options) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow">
        <p>No options found for "{type}"</p>
        <button onClick={onClose} className="mt-4 px-4 py-2 border rounded">
          Close
        </button>
      </div>
    </div>
  );
}
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-3/4 max-w-md">
        <h2 className="text-lg font-semibold mb-4">Select {type}</h2>
        <div className="grid grid-cols-2 gap-4">
          {selectionOptions[type].map((option) => (
            <div
              key={option}
              className={`border p-3 rounded cursor-pointer ${
                selected === option ? "bg-blue-100 border-blue-500" : ""
              }`}
              onClick={() => setSelected(option)}
            >
              {option}
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded text-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              console.log("Confirmed:", selected);
              onClose();
            }}
            disabled={!selected}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            Confirm Selection
          </button>
        </div>
      </div>
    </div>
  );
}
