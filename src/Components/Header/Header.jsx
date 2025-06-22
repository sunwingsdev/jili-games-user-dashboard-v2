import { FaSearch, FaEnvelope, FaCog, FaUserCircle } from "react-icons/fa";
import { BiMessage } from "react-icons/bi";

const Header = ({open}) => {
  return (
    <header className={`fixed top-0  ${
          !open ? "w-[94%] " : "w-[80%]"
        }   bg-bgSidebar z-30 shadow-sm px-4  py-[14px]  flex items-center justify-between`}>
      {/* Left: Search Bar */}
      <div className="flex items-center w-full max-w-sm">
        <div className="w-full flex">
          {/* Input field */}
          <input
            type="text"
            placeholder="SEARCH"
            className="w-full pl-4 pr-10 rounded-l-full bg-bgPrimary text-white placeholder-white focus:outline-none h-7"
          />

          {/* Search Icon Button */}
          <span className="bg-bgSubMenu px-4 flex items-center justify-center rounded-r-full h-7">
            <FaSearch className="text-white" />
          </span>
        </div>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center text-white gap-4 ml-4">
        {/* Message icon with red dot */}
        <div className="relative">
          <BiMessage className="cursor-pointer text-xl" />
          <span className="absolute bottom-0 left-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Settings icon (no dot) */}
        <FaCog className="cursor-pointer text-xl" />

        {/* Envelope icon with green dot */}
        <div className="relative">
          <FaEnvelope className="cursor-pointer text-xl" />
          <span className="absolute bottom-0 left-0 w-2 h-2 bg-green-500 rounded-full"></span>
        </div>
      </div>

      {/* Profile icon with green dot */}
      <div className="flex items-center gap-2">
  {/* User icon with online indicator */}
  <div className="relative">
    <FaUserCircle className="cursor-pointer text-white text-3xl" />
    <span className="absolute bottom-0 left-0 w-2 h-2 bg-green-500 rounded-full border border-white"></span>
  </div>

  {/* Logout button */}
  <button
    onClick={() => console.log("Logging out...")}
    className="px-3 py-1 text-sm rounded-full bg-bgRed hover:bg-red-700 text-white font-semibold shadow transition duration-300"
  >
    Log Out
  </button>
</div>

    </header>
  );
};

export default Header;
