import { useState } from "react";
import { slots } from "../../Data/Slots";


const FrontSlots = () => {
  const [activeReel, setActiveReel] = useState("All");
  const filters = ["Providers", "Features", "Themes", "Variances"];
  const reelTabs = [
    "5Reel",
    "6Reel",
    "3Reel",
    "1Reel",
    "7Reel",
    "4Reel",
    "8Reel",
    "9Reel",
    "Other",
    "10Reel",
  ];

  // const slots = [
  //   {
  //     key: "slots1",
  //     title: "Sugar Bang Bang",
  //     provider: "Fa Chai",
  //     reel: "5Reel",
  //     img: game1Image,
  //   },
  //   {
  //     key: "slots2",
  //     title: "Roll in Money",
  //     provider: "Dragoon Soft",
  //     reel: "6Reel",
  //     img: game2Image,
  //   },
  //   {
  //     key: "slots3",
  //     title: "Chinese New Year MOREWAYS",
  //     provider: "Fa Chai",
  //     reel: "3Reel",
  //     img: game3Image,
  //   },
  //   {
  //     key: "slots4",
  //     title: "Sugar Bang Bang 2",
  //     provider: "Fa Chai",
  //     reel: "7Reel",
  //     img: game4Image,
  //   },
  // ];

  const filteredSlots =
    activeReel === "All" ? slots : slots.filter((slot) => slot.reel === activeReel);

  return (
    <div className="p-4 pr-0 text-white">
      <div className="flex gap-3 mb-4 items-center">
        {/* Filter Header */}
        <div className="flex items-center gap-2 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-textYellow group-hover:animate-pulse"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="7" x2="21" y2="7" />
            <line x1="3" y1="12" x2="10" y2="12" />
            <line x1="14" y1="12" x2="21" y2="12" />
            <circle cx="12" cy="12" r="2" />
            <line x1="3" y1="17" x2="21" y2="17" />
          </svg>
          <span className="font-bold text-lg leading-none">Filter</span>
        </div>

        {/* Filter Options */}
        <div className="flex gap-3">
          {filters.map((item, idx) => (
            <button
              key={idx}
              className="bg-bgPink hover:bg-pink-600 px-3 py-1 rounded-full text-sm font-bold transition transform hover:scale-105"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Reel Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setActiveReel("All")}
          className={`px-3 py-1 rounded-full text-sm font-bold transition transform hover:scale-105 ${
            activeReel === "All"
              ? "bg-black text-textYellow"
              : "bg-bgPink hover:bg-pink-600"
          }`}
        >
          All
        </button>
        {reelTabs.map((reel, idx) => (
          <button
            key={idx}
            onClick={() => setActiveReel(reel)}
            className={`px-3 py-1 rounded-full text-sm font-bold transition transform hover:scale-105 ${
              activeReel === reel
                ? "bg-black text-textYellow"
                : "bg-bgPink hover:bg-pink-600"
            }`}
          >
            {reel}
          </button>
        ))}
      </div>

      {/* Info */}
      <div className="mb-4 font-semibold animate-fade-in">6602 games, Sorted by Popularity</div>

      {/* Slots Grid */}
      <div className="grid  grid-cols-4 gap-4">
        {filteredSlots.map((slot) => (
          <div
            key={slot.key}
            className="relative bg-gray-800 rounded-lg overflow-hidden group transform transition duration-300 hover:scale-[1.02]"
          >
            <img
              src={slot.img}
              alt={slot.title}
              className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-end items-center opacity-0 group-hover:opacity-100 transition duration-300">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-3 py-1 mr-2 text-sm rounded-full">
                Demo
              </button>
            </div>
            <div className="p-2 bg-black">
              <div className="font-bold text-sm">{slot.title}</div>
              <div className="text-xs">{slot.provider}</div>
              <div className="text-xs">{slot.reel}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontSlots;