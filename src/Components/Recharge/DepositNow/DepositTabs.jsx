import { useState } from "react";
import { SiBinance, SiPayoneer } from "react-icons/si";
import { RiPaypalFill } from "react-icons/ri";
import BinanceInfo from "./BinanceInfo";
import PaypalInfo from "./PaypalInfo";
import PayoneerInfo from "./PayoneerInfo";
import VisaInfo from "./VisaInfo";

const tabs = [
  {
    key: "binance",
    icon: (
      <div className="flex items-center gap-2">
        <SiBinance className="text-textBinance text-4xl" />
        <span className="text-textBinance font-semibold">Binance</span>
      </div>
    ),
  },
  {
    key: "paypal",
    icon: (
      <div className="flex items-center gap-1">
        <RiPaypalFill className="text-textPaypal text-4xl" />
        <span className="flex items-center">
          <span className="text-textPaypal font-bold">Pay</span>
          <span className="text-textPaypalAqua font-bold">Pal</span>
        </span>
      </div>
    ),
  },
  {
    key: "payoneer",
    icon: (
      <div className="flex items-center gap-1">
        <span className="text-textPayoneer font-semibold">Pay</span>
        <SiPayoneer className="text-textPayoneer text-4xl" />
        <span className="text-textPayoneer font-semibold">oneer</span>
      </div>
    ),
  },
  {
    key: "visa",
    icon: (
      <div className="flex items-center gap-2">
        {/* Circles larger & slightly elongated */}
        <div className="flex ">
          <div className="w-8 h-8 bg-bgRed rounded-full flex items-center justify-center text-white text-sm font-bold"></div>
          <div className="w-8 h-8 bg-bgYellowVisa rounded-full flex items-center justify-center text-white text-sm font-bold"></div>
        </div>

        {/* VISA text styled to look prominent */}
        <span className="text-textVisa font-extrabold tracking-widest ">
          VISA
        </span>
      </div>
    ),
  },
];

const DepositTabs = () => {
  const [activeTab, setActiveTab] = useState("binance");

  const renderContent = () => {
    switch (activeTab) {
      case "binance":
        return <BinanceInfo />;
      case "paypal":
        return <PaypalInfo />;
      case "payoneer":
        return <PayoneerInfo />;
      case "visa":
        return <VisaInfo />;
      default:
        return null;
    }
  };

  return (
    <div className="p-3 text-white">
      <h2 className="text-center py-1 text-lg bg-bgSecondary mb-4">
        GGR Balance Recharge Payment Gateway
      </h2>

      <div className="flex">
        {/* Vertical Tabs */}
        <div className="flex flex-col rounded-lg space-y-4 bg-bgPink border-2 py-4 px-4">
          {tabs.map((tab) => (
    <button
      key={tab.key}
      onClick={() => setActiveTab(tab.key)}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg text-left text-2xl transition-all duration-300 ease-in-out flex-1
        ${
          activeTab === tab.key
            ? "bg-white font-bold scale-105 border-4 border-transparent animate-activeBorder"
            : "bg-white hover:bg-gray-100"
        }
      `}
    >
      {tab.icon}
    </button>
  ))}
        </div>

        {/* Content */}
        <div className="ml-4 flex-1 border-2 rounded-lg p-3 px-1 pt-1 bg-black">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default DepositTabs;
