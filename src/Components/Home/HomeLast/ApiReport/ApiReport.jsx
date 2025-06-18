import CircleProgress from "./CircleProgress";

 
 

const data = [
  { name: "API 1", value: 3500, max: 8000, color: "#FF85A2" },
  { name: "API 2", value: 6000, max: 8000, color: "#00ffb1" },
  { name: "API 3", value: 1500, max: 8000, color: "#00ffb1" },
  { name: "API 4", value: 7800, max: 8000, color: "#f0f326" },
  { name: "API 5", value: 4300, max: 8000, color: "#a78bfa" },
];

const ApiReport = () => {
  return (
    <div className=" bg-bgSidebar border border-textPrimary flex-1 rounded-xl p-4">
      <h2 className="text-xl text-textYellow font-bold mb-6 text-center">All Api useing Report ....
</h2>

      <div className="flex justify-between items-start gap-6 relative">

        {data.map(({ name, value, max, color }) => (
          <div key={name} className="flex flex-col items-center space-y-2 relative">
            {/* Circle */}
            <CircleProgress value={value} max={max} color={color} />

            {/* Vertical stem */}
            <div
              className="w-[2px] bg-gray-400"
              style={{ height: 40, position: "relative", zIndex: 1 }}
            />

            {/* The white circle at the bottom of vertical line */}
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-full border border-gray-400"
              style={{ width: 12, height: 12, zIndex: 10 }}
            />

            {/* Label */}
            {/* <span className="font-semibold text-gray-700 mt-3">{name}</span> */}
          </div>
        ))}

        {/* Horizontal line connecting all vertical stems */}
        <div
          className="absolute bottom-0 left-0 right-0 bg-gray-400"
          style={{ height: 2, zIndex: 0 }}
        />
      </div>
    </div>
  );
};

export default ApiReport;
