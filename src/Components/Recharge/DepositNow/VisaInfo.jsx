import { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import VideoModal from "../../ApiPlan/VideoModal";
import { useOutletContext } from "react-router-dom";

const VisaInfo = ({
  title = " Visa - MasterCard Online Pay",
  titleColor = "#ffffff",
  bgColor = "bg-bgYellowVisa",

  inputIdLabel = "Billing Address",
  inputIdPlaceholder = " Type Billing Addres",
  inputAddress = " Card Holder Name",
  inputAddressPlaceholder = "  Card Holder Name",
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ",
}) => {
  const { isModalOpen, setIsModalOpen } = useOutletContext();
  const [userId, setUserId] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [depositAmount, setDepositAmount] = useState("");

  const handleSubmit = () => {
    console.log("Deposit Amount:", depositAmount);
    console.log(`${inputIdLabel}:`, userId);
    console.log(`${inputIdLabel}:`, userAddress);

    alert("Check console for submitted data.");
  };

  return (
    <div className="text-black space-y-2">
      {/* Title with YouTube icon */}
      <div
        className={`flex justify-between rounded-lg ${bgColor} items-center py-1 pr-2`}
      >
        <h2 className="text-2xl w-[75%] text-right font-bold uppercase ">
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

      {/* Form */}
      <div className="flex justify-center text-white">
        <div className="w-full max-w-md space-y-4">
          <div className="flex flex-col">
            <label
              className="block text-sm mb-1 font-semibold"
              style={{ color: titleColor }}
            >
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
            <label
              className="block text-sm mb-1 font-semibold"
              style={{ color: titleColor }}
            >
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
            <label
              className="block text-sm mb-1 font-semibold"
              style={{ color: titleColor }}
            >
              * {inputAddress}
            </label>
            <input
              type="text"
              placeholder={inputAddressPlaceholder}
              className="w-full p-2 py-1 rounded-full border border-gray-700 bg-bgHoverSubMenuTwo focus:outline-none"
              style={{ borderColor: titleColor }}
              value={userAddress}
              onChange={(e) => {
                setUserAddress(e.target.value);
                console.log(`${inputAddress}:`, e.target.value);
              }}
            />
          </div>
         <div className="space-y-2">
  <h2
    className="block text-sm font-semibold mb-1"
    style={{ color: titleColor }}
  >
    Card Info
  </h2>

  <div className="bg-white p-3 rounded-lg border border-gray-700 shadow-inner space-y-3">
    {/* Card Number */}
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="1234 1234 1234 1234"
        className="flex-1 p-2 rounded-full bg-bgHoverSubMenuTwo border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500  font-semibold"
      />
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 bg-bgRed rounded-full"></div>
        <div className="w-4 h-4 bg-bgYellowVisa rounded-full"></div>
        <span className="text-textVisa font-extrabold tracking-wide ml-1">
          VISA
        </span>
      </div>
    </div>

    {/* MM/YY + CVC */}
    <div className="flex gap-2 flex-wrap">
  <input
    type="text"
    placeholder="MM/YY"
    className="min-w-[90px] flex-1 p-2 rounded-full bg-bgHoverSubMenuTwo border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 font-semibold"
  />
  <input
    type="text"
    placeholder="CVC"
    className="min-w-[90px] flex-1 p-2 rounded-full bg-bgHoverSubMenuTwo border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 font-semibold"
  />
</div>

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

export default VisaInfo;
