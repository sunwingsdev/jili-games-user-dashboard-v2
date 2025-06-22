import { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import VideoModal from "../../ApiPlan/VideoModal";
import { useOutletContext } from "react-router-dom";

const CommonDepositForm = ({
  title = "Payment",
  titleColor = "#000",
  bgColor = "bg-gray-200",
  idLabel = "PAY ID",
  idValue = "123456",
  noteText = "Make this payment and upload the screenshot below.",
  inputIdLabel = "Your ID",
  inputIdPlaceholder = "Type your ID",
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ",
}) => {
  const { isModalOpen, setIsModalOpen } = useOutletContext();
  const [userId, setUserId] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const [screenshot, setScreenshot] = useState(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(idValue);
    alert(`${idLabel} copied!`);
  };

  const handleSubmit = () => {
    console.log("Deposit Amount:", depositAmount);
    console.log(`${inputIdLabel}:`, userId);
    console.log("Screenshot File:", screenshot);
    alert("Check console for submitted data.");
  };

  return (
    <div className="text-black space-y-2">
      {/* Title with YouTube icon */}
      <div className={`flex justify-between rounded-lg ${bgColor} items-center py-1 pr-2`}>
        <h2 className="text-2xl w-[60%] text-right font-bold uppercase " >
          {title}
        </h2>
        {/* style={{ color: titleColor }} */}
        <div
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer animate-bounce shadow border"
          onClick={() => setIsModalOpen(true)}
        >
          <FaYoutube className="text-textRed w-5 h-5" />
        </div>
      </div>

      {/* ID + Note */}
      <div className="flex flex-col items-center p-3 rounded-lg space-y-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-xl text-white">
            {idLabel}: <span style={{ color: titleColor }}>{idValue}</span>
          </span>
          <button
  onClick={handleCopy}
  className={`
    relative px-3 py-1 font-bold text-xs text-white ${bgColor}
    rounded-full shadow-md
    hover:bg-opacity-80 hover:scale-105 transition-transform duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400
    animate-pulse
    group
  `}
>
  Copy

  {/* Tooltip on hover */}
  <span className="
    absolute bottom-full mb-1 left-1/2 -translate-x-1/2
    bg-black bg-opacity-80 text-white text-[10px] px-2 py-0.5 rounded
    opacity-0 group-hover:opacity-100 transition-opacity duration-200
    whitespace-nowrap
  ">
    Click to copy
  </span>
</button>

        </div>
        <p className="text-sm text-textRed text-center">{noteText}</p>
      </div>

      {/* Form */}
      <div className="flex justify-center text-white">
        <div className="w-full max-w-md space-y-4">
          <div className="flex flex-col">
            <label className="block text-sm mb-1 font-semibold" style={{ color: titleColor }}>
              * Deposit Amount
            </label>
            <input
              type="number"
              placeholder="Type your Deposit Amount"
              className="w-full p-2 py-1 rounded-full bg-bgHoverSubMenuTwo border border-gray-700 focus:outline-none"
              style={{ borderColor: titleColor }}
              value={depositAmount}
              onChange={(e) => {
                setDepositAmount(e.target.value);
                console.log("Deposit Amount:", e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-sm mb-1 font-semibold" style={{ color: titleColor }}>
              * {inputIdLabel}
            </label>
            <input
              type="text"
              placeholder={inputIdPlaceholder}
              className="w-full p-2 py-1 rounded-full border border-gray-700 bg-bgHoverSubMenuTwo focus:outline-none"
              style={{ borderColor: titleColor }}
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
                console.log(`${inputIdLabel}:`, e.target.value);
              }}
            />
          </div>

          <div className="flex flex-col">
            <label className="block text-sm mb-1 font-semibold" style={{ color: titleColor }}>
              * Upload Payment Confirm Screenshot
            </label>
            <div className="relative w-full max-w-md">
              <input
                type="file"
                accept="image/*"
                className="w-full text-sm bg-bgHoverSubMenuTwo text-gray-400 rounded-full border border-gray-600 py-1 pl-3 pr-14 cursor-pointer"
                style={{ borderColor: titleColor }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  setScreenshot(file);
                  console.log("Screenshot File:", file);
                }}
              />
              {screenshot && (
                <div className="absolute top-1/2 right-2 transform -translate-y-1/2 w-6 h-6">
                  <img
                    src={URL.createObjectURL(screenshot)}
                    alt="Preview"
                    className="w-full h-full object-cover border border-white shadow"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="w-[25%] py-2 bg-gradient-to-r from-purple-700 to-blue-700 rounded-full font-bold text-white text-lg hover:scale-105 transition"
        >
          Deposit Confirm
        </button>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={videoUrl}
      />
    </div>
  );
};

export default CommonDepositForm;
