// PlayerRow.jsx
const PlayerRow = ({ label, count, maxCount = 1000, color = "#10b981" }) => {
  const barCount = 30;
  const filledBars = Math.round((count / maxCount) * barCount);
  const bars = Array.from({ length: barCount });

  return (
    <div className="flex items-center space-x-4 mb-2">
      {/* Bars */}
      <div className="flex">
        {bars.map((_, i) => (
          <div
            key={i}
            className="w-[4px] h-[20px] mx-[1px] rounded-sm"
            style={{
              backgroundColor: i < filledBars ? color : "#2e0e4f",
            }}
          />
        ))}
      </div>

      {/* Label */}
      <div className="text-textYellow flex gap-2 font-bold text-sm">
        <span className="text-left w-20 ">{label}</span>

        <span className="text-right  ">{count} player</span>
      </div>
    </div>
  );
};

export default PlayerRow;
