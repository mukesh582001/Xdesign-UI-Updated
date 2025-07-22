import { useState } from "react";
import TilePanel from "../components/TilePanel";
import Toast from "../components/Toast";

export default function Home() {
  const [showTiles, setShowTiles] = useState(false);
  const [toast, setToast] = useState({ title: '', description: '', type: 'success' });
  const [showFAQ, setShowFAQ] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showInquiry, setShowInquiry] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [showUnsavedModal, setShowUnsavedModal] = useState(false);

  const showToast = (title, description = '', type = 'success') => setToast({ title, description, type });

  // Download image logic
  const handleDownloadImage = () => {
    const imgURL = "https://www.neilkelly.com/wp-content/uploads/2019/10/Mcnown-Residence-22s.jpg";
    const link = document.createElement("a");
    link.href = imgURL;
    link.download = "bathroom-design.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Image downloaded!", "Image downloaded successfully!");
  };

  // Download PDF logic (simple, just downloads the image as PDF)
  const handleDownloadPDF = () => {
    showToast("PDF download started (demo only)", "PDF download initiated for demonstration.");
    // In real app, use html2pdf or jsPDF to export the preview as PDF
  };

  // When a layer is confirmed in MaterialPanel
  const handleLayerConfirmed = () => {
    setUnsavedChanges(true);
    showToast('Changes Applied!', '1 tile(s) have been applied to your design.');
  };

  // Home screen close button logic
  const handleHomeClose = () => {
    if (unsavedChanges) {
      setShowUnsavedModal(true);
    } else {
      // Close all panels (simulate navigation or reset state)
      setShowTiles(false);
      // ...add any other close logic if needed
    }
  };

  // Save and close from modal
  const handleSaveAndClose = () => {
    setShowUnsavedModal(false);
    setUnsavedChanges(false);
    setShowTiles(false);
    showToast('Saved', 'Your changes have been saved.');
  };

  // Discard changes from modal
  const handleDiscard = () => {
    setShowUnsavedModal(false);
    setUnsavedChanges(false);
    setShowTiles(false);
    showToast('Layers are not applied to the design.', '', 'error');
  };

  // Save Bathroom button logic
  const handleSaveBathroom = () => {
    setUnsavedChanges(false);
    setShowTiles(false);
    showToast('Layers are updated to your SOHO bathroom.');
  };

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
      {/* Edit/back button logic */}
      <button
        onClick={() => setShowTiles(showTiles ? false : true)}
        className="absolute bottom-6 left-8 bg-blue-600 text-white pt-[0.65rem] pr-[0.65rem] pb-[0.65rem] pl-[.55rem] rounded-full flex items-center justify-center shadow-lg border-2 border-white hover:bg-blue-700 transition-colors duration-200"
        title={showTiles ? "Back" : "Edit Bathroom"}
      >
        {showTiles ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        ) : (
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
        )}
      </button>
      {/* Home screen close button (top right) */}
      <button
        onClick={handleHomeClose}
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      {/* Save button */}
      <button
        onClick={handleSaveBathroom}
        className="absolute bottom-6 left-[6rem] bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg border-2 border-white hover:bg-blue-700 transition-colors duration-200"
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
            /> </svg> Save Bathroom
      </button>

      {/* Floating action buttons (right) */}
      <div className="absolute top-1/2 right-8 flex flex-col gap-4 z-40 -translate-y-1/2">
        <button onClick={() => setShowFAQ(true)} className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-xl rounded-xl px-4 py-2 font-semibold text-base hover:scale-105 transition-transform duration-150 border-2 border-white/80" title="FAQ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>
          FAQ
        </button>
        <button onClick={() => setShowHelp(true)} className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-xl rounded-xl px-4 py-2 font-semibold text-base hover:scale-105 transition-transform duration-150 border-2 border-white/80" title="Help">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" /></svg>
          Help
        </button>
        <button onClick={() => setShowInquiry(true)} className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-700 text-white shadow-xl rounded-xl px-4 py-2 font-semibold text-base hover:scale-105 transition-transform duration-150 border-2 border-white/80" title="Send Inquiry">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m0 0l4-4m-4 4l4 4" /></svg>
          Inquiry
        </button>
        <button onClick={handleDownloadImage} className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-xl rounded-xl px-4 py-2 font-semibold text-base hover:scale-105 transition-transform duration-150 border-2 border-white/80" title="Download Image">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12" /></svg>
          Image
        </button>
        <button onClick={handleDownloadPDF} className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-700 text-white shadow-xl rounded-xl px-4 py-2 font-semibold text-base hover:scale-105 transition-transform duration-150 border-2 border-white/80" title="Download as PDF">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          PDF
        </button>
      </div>

      {/* Conditional tile panel */}
      {showTiles && <TilePanel onClose={() => setShowTiles(false)} showToast={showToast} onLayerConfirmed={handleLayerConfirmed} />}
      {/* Toast notification */}
      <Toast title={toast.title} description={toast.description} type={toast.type} onClose={() => setToast({ title: '', description: '', type: 'success' })} />

      {/* FAQ Modal */}
      {showFAQ && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-2">Frequently Asked Questions</h2>
            <ul className="text-sm mb-4 list-disc pl-5">
              <li>How do I edit the bathroom? Click the blue edit button.</li>
              <li>How do I save my design? Click the green save button.</li>
              <li>How do I download my design? Use the download buttons on the right.</li>
            </ul>
            <button onClick={() => setShowFAQ(false)} className="w-full py-2 rounded bg-blue-600 text-white">Close</button>
          </div>
        </div>
      )}
      {/* Help Modal */}
      {showHelp && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-2">Help</h2>
            <p className="text-sm mb-4">For assistance, please contact support@example.com or use the inquiry form.</p>
            <button onClick={() => setShowHelp(false)} className="w-full py-2 rounded bg-blue-600 text-white">Close</button>
          </div>
        </div>
      )}
      {/* Inquiry Modal */}
      {showInquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-2">Send Inquiry</h2>
            <form onSubmit={e => { e.preventDefault(); setShowInquiry(false); }}>
              <input type="text" placeholder="Your Name" className="w-full mb-2 px-3 py-2 border rounded" required />
              <input type="email" placeholder="Your Email" className="w-full mb-2 px-3 py-2 border rounded" required />
              <textarea placeholder="Message" className="w-full mb-2 px-3 py-2 border rounded" required />
              <button type="submit" className="w-full py-2 rounded bg-blue-600 text-white">Send</button>
            </form>
            <button onClick={() => setShowInquiry(false)} className="w-full mt-2 py-2 rounded bg-gray-200 text-gray-700">Cancel</button>
          </div>
        </div>
      )}
      {/* Unsaved changes modal */}
      {showUnsavedModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-4">Do you want to save your changes?</h2>
            <div className="flex gap-4 mt-6">
              <button onClick={handleDiscard} className="flex-1 py-2 rounded bg-gray-200 text-gray-700 font-semibold">Discard</button>
              <button onClick={handleSaveAndClose} className="flex-1 py-2 rounded bg-blue-600 text-white font-semibold">Save and Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
