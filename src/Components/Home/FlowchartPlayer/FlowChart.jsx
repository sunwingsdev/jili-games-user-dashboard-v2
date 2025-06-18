const ggrData = [
  { x: 0, y1: 0, y2: 0 },
  { x: 10, y1: 30, y2: 25 },
  { x: 20, y1: 40, y2: 35 },
  { x: 30, y1: 60, y2: 50 },
  { x: 40, y1: 70, y2: 65 },
  { x: 50, y1: 50, y2: 60 },
  { x: 60, y1: 30, y2: 40 },
  { x: 70, y1: 10, y2: 20 },
];

const WIDTH = 800, HEIGHT = 300, chartX = 50, chartY = 250;
const scaleX = (x) => chartX + (x / 70) * (WIDTH - 100);
const scaleY = (y) => chartY - y * 2;

const FlowChart = () => {
  const path = (key) =>
    ggrData.map((d, i) => `${i ? "L" : "M"} ${scaleX(d.x)},${scaleY(d[key])}`).join(" ");

  return (
    <div className="w-[50%] border border-textPrimary rounded-xl flex bg-bgSidebar flex-col items-center p-6">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full max-w-5xl h-auto">
        {/* Axes */}
        <line x1={chartX} y1={chartY} x2={WIDTH - chartX} y2={chartY} stroke="white" strokeWidth={2} />
        <line x1={chartX} y1={50} y2={chartY} x2={chartX} stroke="#ffffff33" strokeWidth={1} />

        {/* Y Ticks + horizontal grid */}
        {[0, 20, 40, 60, 80, 100].map((val) => {
          const y = scaleY(val);
          return (
            <g key={val}>
              <line x1={chartX - 5} x2={chartX + 5} y1={y} y2={y} stroke="#f0f326" />
              <text x={chartX - 10} y={y + 4} fontSize={10} textAnchor="end" fill="#f0f326">{val}</text>
              <line x1={chartX} y1={y} x2={WIDTH - chartX} y2={y} stroke="#4B5563" strokeWidth={1} opacity={0.6} />
            </g>
          );
        })}

        {/* X Ticks */}
        {ggrData.map(({ x }, i) => {
          const xPos = scaleX(x);
          return (
            <g key={i}>
              <line x1={xPos} x2={xPos} y1={chartY - 5} y2={chartY + 5} stroke="#f0f326" />
              <text x={xPos} y={chartY + 20} fontSize={10} textAnchor="middle" fill="#f0f326">{x}</text>
            </g>
          );
        })}

        {/* Vertical Lines for y1 & y2 */}
        {ggrData.map(({ x, y1, y2 }, i) => {
          const xPos = scaleX(x), y1Pos = scaleY(y1), y2Pos = scaleY(y2);
          return (
            <g key={i}>
              <line x1={xPos} y1={chartY} x2={xPos} y2={y1Pos} stroke="#ffffff" strokeWidth={2} />
              <text x={xPos - 4} y={y1Pos - 8} fontSize={9} fill="#f97316" textAnchor="end"></text>
              <line x1={xPos} y1={chartY} x2={xPos} y2={y2Pos} stroke="#ffffff" strokeWidth={1} />
              <text x={xPos + 4} y={y2Pos - 8} fontSize={9} fill="#4f46e5" textAnchor="start"></text>
            </g>
          );
        })}

        {/* Flow Path 1 (filled) */}
        <path d={path("y1")} fill="white" opacity={0.1} />
        <text
          x={scaleX(50)}
          y={scaleY(ggrData[ggrData.length - 1].y1) - 120}
          fontSize={12}
          fill="#0abab4"
          textAnchor="end"
        >
          GGR - DATA-01
        </text>

        {/* Flow Path 2 (stroke) */}
        <path d={path("y2")} fill="none" stroke="#FF85A2" strokeWidth={2} />
        <text
          x={scaleX(30)}
          y={scaleY(ggrData[ggrData.length - 1].y2) - 80}
          fontSize={12}
          fill="#0abab4"
          textAnchor="end"
        >
          GGR - DATA-02
        </text>
      </svg>
    </div>
  );
};

export default FlowChart;
