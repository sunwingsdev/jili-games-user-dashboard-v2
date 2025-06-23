import { useState } from "react";
import { FaCopy } from "react-icons/fa";

const ApiDataSections = ({
  data = [],
  headerButtons = [],
  onCopy = (label) => alert(`${label} copied!`),
}) => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, idx, label) => {
    navigator.clipboard.writeText(text);
    onCopy(label, text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div className="p-4 text-white">
      {/* Header buttons */}
      {headerButtons.length > 0 && (
        <div className="flex justify-center gap-4 mb-6">
          {headerButtons.map((btn, idx) => (
            <button
              key={idx}
              onClick={btn.onClick}
              className="bg-pink-500 text-lg text-white font-bold py-2 w-40 rounded-2xl 
                hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out"
            >
              {btn.label}
            </button>
          ))}
        </div>
      )}

      {/* Sections */}
      {data.map((sec, idx) => (
        <div
          key={idx}
          className="mb-4 mx-auto max-w-xl w-full transition-transform duration-300 hover:scale-105"
        >
          <h3 className="text-lg font-bold ml-12">{sec.title}</h3>
          <div className="flex gap-2 items-center">
            <div>
              <div className="w-12 h-12 rounded-full bg-pink-500 border-2 border-white hover:scale-105 transition"></div>
            </div>
            <div className="flex w-full items-center p-2 bg-pink-500 gap-2 rounded hover:ring-2 hover:ring-pink-300 transition">
              <input
                readOnly
                value={sec.value}
                className="w-full bg-transparent text-white text-sm font-bold outline-none"
              />
              <button
                onClick={() => handleCopy(sec.value, idx, sec.title)}
                className={`flex items-center gap-1 px-3 py-1 rounded-full font-bold text-xs ${
                  copiedIndex === idx
                    ? "bg-bgAqua text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                } animate-pulse hover:scale-105 active:scale-95 transition duration-200`}
                title="Click to copy"
              >
                <FaCopy className="text-sm" />
                <span className="transition-opacity duration-300 opacity-100">
                  {copiedIndex === idx ? "Copied!" : "Copy"}
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApiDataSections;
