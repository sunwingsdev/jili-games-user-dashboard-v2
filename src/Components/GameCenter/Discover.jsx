
import { slots } from "../../Data/Slots";
import HorizontalCarousel from "../HorizontalCarousel/HorizontalCarousel";
// import crashGames from "../../Data/CrashGames"; // crashGames data thakle
// import instantWins from "../../Data/InstantWins"; // instantWins data thakle

const Discover = () => {
  return (
    <div className="p-4 pr-0 space-y-10">
      {/* Slots */}
      <div>
        <h2 className="uppercase mb-2 font-semibold">Slots</h2>
        <HorizontalCarousel
          items={slots}
          renderItem={(slot) => (
            <div
              className="relative bg-gray-800 rounded-lg overflow-hidden group transform transition duration-300 hover:scale-[1.02]"
              key={slot.key}
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
          )}
        />
      </div>

      {/* Crash Games */}
      <div>
        <h2 className="uppercase mb-2 font-semibold">Crash Games</h2>
        {/* Crash games data o similar vabe pass korben */}
        {/* <HorizontalCarousel items={crashGames} renderItem={renderCrashGameItem} /> */}
      </div>

      {/* Instant Wins */}
      <div>
        <h2 className="uppercase mb-2 font-semibold">Instant Wins</h2>
        {/* Instant wins data o similar vabe pass korben */}
        {/* <HorizontalCarousel items={instantWins} renderItem={renderInstantWinItem} /> */}
      </div>
    </div>
  );
};

export default Discover;
