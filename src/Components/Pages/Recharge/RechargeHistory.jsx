import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { SiBinance, SiPayoneer } from "react-icons/si";
import { RiPaypalFill } from "react-icons/ri";

const RechargeHistory = () => {
  const [visibleScreenshots, setVisibleScreenshots] = useState({});

  const rows = [
    {
      sl: "01",
      gateway: "binance",
      amount: "5000",
      sender: "demosoa@gmail.com",
      dateTime: "20-05-2025 (10:15 AM)",
      status: "Approved",
    },
    {
      sl: "02",
      gateway: "paypal",
      amount: "5000",
      sender: "demosoa@gmail.com",
      dateTime: "20-05-2025 (10:15 AM)",
      status: "Rejected",
    },
    {
      sl: "03",
      gateway: "payoneer",
      amount: "5000",
      sender: "demosoa@gmail.com",
      dateTime: "20-05-2025 (10:15 AM)",
      status: "Pending",
    },
    // {
    //   sl: "04",
    //   gateway: "visa",
    //   amount: "5000",
    //   sender: "demosoa@gmail.com",
    //   dateTime: "20-05-2025 (10:15 AM)",
    //   status: "Approved",
    // },
  ];

  const dummyScreenshotUrl =
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=80&q=80";

  const handleToggleScreenshot = (index) => {
    setVisibleScreenshots((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const gatewayIconText = {
    binance: (
      <div className="flex items-center gap-2 justify-center">
        <SiBinance className="text-textBinance text-2xl" />
        <span className="text-textBinance font-semibold">Binance</span>
      </div>
    ),
    paypal: (
      <div className="flex items-center gap-1 justify-center">
        <RiPaypalFill className="text-textPaypal text-2xl" />
        <span className="flex items-center">
          <span className="text-textPaypal font-bold">Pay</span>
          <span className="text-textPaypalAqua font-bold">Pal</span>
        </span>
      </div>
    ),
    payoneer: (
      <div className="flex items-center gap-1 justify-center">
        <span className="text-textPayoneer font-semibold">Pay</span>
        <SiPayoneer className="text-textPayoneer text-2xl" />
        <span className="text-textPayoneer font-semibold">oneer</span>
      </div>
    ),
    visa: (
      <div className="flex items-center gap-2 justify-center">
        <div className="flex">
          <div className="w-4 h-4 bg-bgRed rounded-full"></div>
          <div className="w-4 h-4 bg-bgYellowVisa rounded-full ml-1"></div>
        </div>
        <span className="text-textVisa font-extrabold tracking-widest">
          VISA
        </span>
      </div>
    ),
  };

  return (
    <div className="p-3 pr-0 text-white">
      <h2 className="text-xl font-bold mb-4">Recharge History</h2>
      <div className="overflow-auto rounded-lg border border-gray-700">
        <table className="min-w-full text-sm border border-gray-600 rounded-lg font-bold overflow-hidden">
          <thead className="bg-[#6623d2] text-base ">
            <tr className="">
              <th className="px-2 py-2 border-r border-gray-950">SL-NO</th>
              <th className="px-2 py-2 border-r border-gray-950">Gateway</th>
              <th className="px-2 py-2 border-r border-gray-950">Amount</th>
              <th className="px-2 py-2 border-r border-gray-950">Sender A/C</th>
              <th className="px-2 py-2 border-r border-gray-950">Screenshot</th>
              <th className="px-2 py-2 border-r border-gray-950">
                Date & Time
              </th>
              <th className="px-2 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white text-black divide-y divide-gray-600">
            {rows.map((row, index) => (
              <tr key={index} className="divide-x divide-gray-600">
                <td className="px-2 py-2 text-center">{row.sl}</td>
                <td className="px-2 py-2">{gatewayIconText[row.gateway]}</td>
                <td className="px-2 py-2 text-center">{row.amount}</td>
                <td className="px-2 py-2 text-center">{row.sender}</td>
                <td className="px-2 py-2 text-center ">
                  {visibleScreenshots[index] ? (
                    <div className="flex justify-center">
    <img
      src={dummyScreenshotUrl}
      alt="Screenshot"
      className="w-24 h-16 rounded-lg border-2 border-purple-500 shadow-lg object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={() => handleToggleScreenshot(index)}
    />
  </div>

                  ) : (
                    <button
                      onClick={() => handleToggleScreenshot(index)}
                      className={`
    relative p-2 rounded-full shadow-md
    bg-purple-600 text-white
    ring-1 ring-purple-400 ring-opacity-40
    transition duration-300 ease-in-out
    hover:bg-purple-700 hover:ring-purple-600 hover:ring-opacity-80 hover:scale-110
    active:bg-purple-800 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75
    cursor-pointer
    animate-pulse-slow
    group
  `}
                      aria-label="Toggle screenshot"
                    >
                      <FaEye className="text-white" />
                      {/* Tooltip */}
                      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black bg-opacity-80 px-2 py-1 text-xs text-white opacity-0 pointer-events-none transition-opacity group-hover:opacity-100">
                        Click to view
                      </span>
                    </button>
                  )}
                </td>
                <td className="px-2 py-2 text-center">{row.dateTime}</td>
                <td className="px-2 py-2 text-center">
                  <button
                    type="button"
                    className={`px-3 py-1 text-white rounded-full font-semibold focus:outline-none
      ${
        row.status === "Approved"
          ? "bg-green-700  hover:bg-green-500"
          : row.status === "Rejected"
          ? "bg-red-700  hover:bg-red-600"
          : "bg-yellow-600  hover:bg-yellow-400"
      }
    `}
                  >
                    {row.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RechargeHistory;
