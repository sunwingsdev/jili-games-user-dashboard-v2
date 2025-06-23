import { FaSearch, FaUserCircle } from "react-icons/fa";
import bgImage from "../../assets/download.avif";
const GameHeader = () => {
  return (
    <div
      className="relative w-full h-52 mt-4 bg-cover bg-center flex items-start px-4"
       style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Discover Button */}
      <button className=" text-white font-bold py-2 px-4 rounded-full">
        Slot
      </button>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Search + Profile */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Games, Providers, Types and more..."
            className="pl-10 pr-4 py-2 rounded-full bg-black text-white w-64 focus:outline-none focus:ring-1 focus:ring-pink-400"
          />
        </div>
        <FaUserCircle className="text-3xl text-white cursor-pointer hover:text-pink-400 transition" />
      </div>
    </div>
  );
};

export default GameHeader;
