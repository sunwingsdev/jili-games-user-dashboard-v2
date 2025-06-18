import { useState } from "react";
import { FaYoutube } from "react-icons/fa";

const ApiVideoTutorial = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoId = "dQw4w9WgXcQ"; // Replace with your actual YouTube video ID

  return (
    <div className="flex flex-col items-center justify-center text-center p-6 bg-bgSidebar border border-textPrimary rounded-xl w-fit    shadow-xl">
      {/* Heading */}
      <h2 className="text-textSecondary  font-bold mb-4 uppercase tracking-wide">
        HOW TO USE API <br />
CONTROL PANEL
      </h2>

      {/* Icon or Video */}
      <div className="w-[200px] h-[200px]  flex items-center justify-center">
        {!showVideo ? (
          <button
            onClick={() => setShowVideo(true)}
            className="text-textRed  transition-transform transform hover:scale-110"
          >
            <FaYoutube size={200} />
          </button>
        ) : (
          <iframe
            className="w-full h-full rounded"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="API Video Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default ApiVideoTutorial;
