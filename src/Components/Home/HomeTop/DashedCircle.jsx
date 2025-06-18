import  { useEffect, useState } from "react";

const DashedCircleVerticalBars = ({
  amount,
  color = "red",
  maxAmount = 8000,
}) => {
  const barCount = 40;
  const bars = Array.from({ length: barCount });
  const radius = 35;

  const filledBars = Math.round((amount / maxAmount) * barCount);

  const [visibleBars, setVisibleBars] = useState(0);

  // Animate bar visibility on mount
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisibleBars(i);
      if (i >= filledBars) {
        clearInterval(interval);
      }
    }, 30); // 30ms delay between bars

    return () => clearInterval(interval);
  }, [filledBars]);

  return (
    <div className="relative w-28 h-28 mx-auto mb-4 rounded-full">
      <div className="absolute inset-0 flex items-center justify-center">
        {bars.map((_, index) => {
          const angle = (360 / barCount) * index;
          const translateY = -radius;

          return (
            <div
              key={index}
              className="absolute w-[4px] h-4 rounded-sm transition-all duration-200"
              style={{
                backgroundColor:
                  index < visibleBars ? color : "#410b5b",
                transform: `rotate(${angle}deg) translate(0, ${translateY}px)`,
                transformOrigin: "bottom center",
                opacity: index < visibleBars ? 1 : 0.3,
              }}
            />
          );
        })}
      </div>

      {/* Center Amount */}
      <div className="absolute mt-2 inset-0 flex flex-col items-center justify-center select-none pointer-events-none text-textYellow font-extrabold">
        <span className="leading-none">${amount}</span>
        <span className="leading-none">USDT</span>
      </div>
    </div>
  );
};

export default DashedCircleVerticalBars;
