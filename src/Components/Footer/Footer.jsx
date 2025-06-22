import { FaRegCopyright } from "react-icons/fa";

const Footer = ({open}) => {
  return (
    <footer className={`  bg-bgSidebar text-white py-[17px]   fixed bottom-0 ${
          !open ? "w-[94%] " : "w-[80%]"
        }   z-20 border-textPrimary shadow-inner overflow-hidden `}>
      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-72 h-72 bg-gradient-to-tr from-bgYellow via-bgRedGradient to-bgSecondary rounded-full blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-sm tracking-wide font-light">
        <FaRegCopyright className="text-base text-gray-400" />
        <p className="text-center">
          Copy Right @ 2025 by{" "}
          <span className="font-bold text-white cursor-pointer hover:text-textYellow hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.35)] transition duration-300">
            Oracle Technology LLC
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
