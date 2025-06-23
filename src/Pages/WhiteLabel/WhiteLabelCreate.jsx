// import { FaYoutube } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import VideoModal from "../../Components/ApiPlan/VideoModal";

const WhiteLabelCreate = () => {
  const { isModalOpen, setIsModalOpen } = useOutletContext();

  // Field definitions with appropriate types
  const fields = [
    { label: "Select Design Template", type: "text" },
    { label: "Add Domain", type: "url" },
    { label: "GGR Transfer Amount", type: "number" },
    { label: "GGR Package Selected", type: "text" },
  ];

  const buttons = [
    { label: "White Level" },
    { label: "Video Tutorial", hasIcon: true },
  ];

  const [formData, setFormData] = useState(
    fields.reduce((acc, curr) => ({ ...acc, [curr.label]: "" }), {})
  );

  const handleChange = (title, value) => {
    setFormData((prev) => ({ ...prev, [title]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="text-white">
      <h2 className="text-center text-lg font-bold bg-bgSecondary py-1">
        White Level Site Connected
      </h2>

      <div className="mt-4">
        {/* Header buttons */}
        <div className="flex justify-center gap-4 mb-6">
          {buttons.map((btn, idx) => (
            <button
              key={idx}
              onClick={() => btn.hasIcon && setIsModalOpen(true)}
              className="bg-bgPink text-lg text-white font-bold py-2 w-48 rounded-2xl flex justify-center items-center gap-2 
                 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              {btn.label}
              {btn.hasIcon && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-textRed animate-bounce hover:text-red-500 transition cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Red rounded rectangle */}
                  <rect
                    width="24"
                    height="16"
                    x="0"
                    y="4"
                    rx="4"
                    ry="4"
                    fill="currentColor"
                  />
                  {/* White play triangle */}
                  <polygon points="10,7 16,12 10,17" fill="white" />
                </svg>
              )}
            </button>
          ))}
        </div>

        {/* Video Modal */}
        <VideoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        />

        {/* Dynamic input form */}
        <div className="p-4 max-w-xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 transition-opacity duration-500 opacity-100"
          >
            {fields.map((field, idx) => (
              <div key={idx} className="transition-transform duration-200">
                <label className="block font-bold mb-1">* {field.label}</label>
                <input
                  type={field.type}
                  value={formData[field.label]}
                  onChange={(e) => handleChange(field.label, e.target.value)}
                  className="
    w-full rounded-full bg-bgPink text-textYellow font-bold
    placeholder-white placeholder:font-normal placeholder:italic
    p-2
    focus:outline-none focus:ring-2 focus:ring-pink-400
    focus:scale-105
    shadow shadow-pink-400/50
    animate-pulse
    transition duration-300 ease-in-out
  "
                  placeholder={`Enter ${field.label}`}
                />
              </div>
            ))}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-bgPink hover:bg-pink-600 transition duration-300 ease-in-out text-white font-bold py-2 px-8 rounded-full 
                 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Create Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WhiteLabelCreate;
