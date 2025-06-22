import { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  const modalRef = useRef();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center px-4 animate-fadeIn">
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl border border-textPrimary bg-bgSecondary rounded-xl shadow-lg overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-cente justify-between px-5 py-3 bg-bgSidebar border-b border-gray-700">
          <h2 className="text-lg font-semibold text-white tracking-wide">
            🎬 Video Tutorial
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-textRed text-2xl transition transform hover:scale-110"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Video Body */}
        <div className="w-full h-[500px] bg-black">
          <iframe
            className="w-full h-full"
            src={videoUrl}
            title="Video Tutorial"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
