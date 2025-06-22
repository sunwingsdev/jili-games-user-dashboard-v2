
import VideoModal from "../ApiPlan/VideoModal";
import { useOutletContext } from "react-router-dom";

const plansData = [
  {
    type: "Postpaid",
    price: "20000 USDT / Yearly",
    features: [
      "All Gaming Access",
      "Casino Share - 0%",
      "Sports Share - 0%",
      "Slot Share - 0%",
      "Crash Share - 0%",
      "GCB Board Fee - 0%",
      "Upcoming Gaming Free",
    ],
    buttonText: "Recharge Now",
  },
  {
    type: "Prepaid",
    price: "20000 USDT / Yearly",
    features: [
      "All Gaming Access",
      "Casino Share - 10%",
      "Sports Share - 10%",
      "Slot Share - 10%",
      "Crash Share - 1%",
      "GCB Board Fee - 2%",
      "Upcoming Gaming Free",
    ],
    buttonText: "Recharge Now",
  },
];

const ApiPlan = () => {
  const { isModalOpen, setIsModalOpen } = useOutletContext();

  return (
    <div className="text-white relative">
      <h2 className="text-center text-lg bg-bgSecondary py-1 ">
        GGR-Plan Buy Now
      </h2>

      <div className="text-[23px] flex flex-col items-center leading-tight font-sans mt-4 space-y-1">
        <p>How To Buy This Api Plan -</p>
        <p>
          Click Here To See This{" "}
          <span className="text-blue-500 font-bold">Video Tutorial</span>
        </p>
        

        <button
          onClick={() => setIsModalOpen(true)}
          className="relative inline-flex items-center justify-center rounded-xl px-6 py-2.5
    bg-gradient-to-r from-purple-600 via-pink-600 to-red-600
    text-white font-bold text-lg shadow-2xl
    transition transform duration-300 ease-in-out
    hover:scale-105 hover:shadow-pink-500/60 active:scale-95 group"
        >
          <span className="relative z-10 flex items-center gap-3">
            <svg
              className="w-7 h-7 text-white
        animate-[pulse_2.5s_ease-in-out_infinite] drop-shadow-lg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M4 4l12 6-12 6V4z" />
            </svg>
            Play Tutorial
          </span>

          {/* Shine effect */}
          <span
            className="absolute inset-0 bg-white rounded-xl opacity-10 blur-sm
    transition-opacity duration-500 ease-in-out group-hover:opacity-25"
          ></span>
        </button>
      </div>

      <div className="mt-8 grid grid-cols-2 mx-auto justify-items-center w-[70%]">
        {plansData.map((plan, index) => (
          <div
            key={index}
            className="relative bg-bgSecondary w-fit rounded-2xl p-6 group transition-transform duration-300 ease-in-out hover:scale-105  shadow-[0_0_25px_5px_rgba(192,14,185,0.3)] border border-pink-500"
          >
            {/* Constant glow layer */}
            <div className="absolute inset-0 rounded-2xl border-2 border-purple-500 opacity-50 blur-sm pointer-events-none"></div>
            <div className="absolute inset-0 rounded-2xl border border-pink-500 opacity-30 blur-md pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-center text-textYellow text-xl font-mono mb-1">
                {plan.type}
              </h3>
              <p className="text-center text-black font-bold bg-bgYellow text-xl rounded-full p-1 px-2 mb-4">
                {plan.price}
              </p>

              <ul className="space-y-2 pl-2">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-white text-[15px] leading-snug"
                  >
                    <span className="w-3 h-3 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex justify-center">
                <button
                  className="relative bg-bgRed px-6 py-2 rounded-full border border-dashed font-semibold text-white
      shadow-lg shadow-blue-500/40
      transition duration-300 ease-in-out
      hover:scale-105 hover:shadow-blue-500 active:scale-95
      animate-bounce"
                >
                  {plan.buttonText}

                  {/* Subtle shine overlay */}
                  <span className="absolute inset-0 rounded-full bg-white opacity-5 blur-sm group-hover:opacity-10"></span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual video link
      />
    </div>
  );
};

export default ApiPlan;
