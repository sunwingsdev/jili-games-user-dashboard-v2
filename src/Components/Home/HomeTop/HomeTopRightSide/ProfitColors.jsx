const ProfitColors = () => {
  const userRatios = [
    {
      title: "Live Casino User Ratios",
      segments: [
        {
          label: "Live Casino1",
          value: 40,
          color: "bg-gradientRed",
        },
        { label: "Live Casino2", value: 30, color: "bg-gradientBlue" },
        { label: "Live Casino3", value: 30, color: "bg-dashedBorderOne" },
      ],
    },
    {
      title: "Sports Api User Ratios",
      segments: [
        { label: "Sports Api1", value: 60, color: "bg-gradientRed" },
        { label: "Sports Api2", value: 25, color: "bg-gradientBlue" },
        {
          label: "Sports Api3",
          value: 15,
          color: "bg-dashedBorderOne",
        },
      ],
    },
    {
      title: "Online Game User Ratios",
      segments: [
        {
          label: "Online Game1",
          value: 50,
          color: "bg-gradientRed",
        },
        { label: "Online Game2", value: 30, color: "bg-gradientBlue" },
        { label: "Online Game3", value: 20, color: "bg-dashedBorderOne" },
      ],
    },
  ];

  return (
    <div className="flex flex-row gap-6   rounded-lg shadow">
      {/* Left Section */}
      <div className="flex-1 bg-bgSidebar border border-textPrimary shadow-2xl space-y-4 px-4 py-4 rounded-xl">
        <div className="text-lg text-textYellow leading-none">
          <h2 className=" font-semibold ">Profitability Ratios</h2>
          <h2 className="">Financial Analysis</h2>
        </div>
        <p className="text-sm text-textPurpleTwo italic">
          Onsectetuer aIdipiscing
        </p>
        <p className="text-textYellow font-semibold text-lg">81% ( Profit )</p>
        <p className="text-white text-xs">
          Profitability ratios are financial metrics used to evaluate a company
          ability to generate earnings relative to its revenue, assets,
          operating costs, and equity.
        </p>

        <p className="text-white text-xs">
          These ratios help assess how well a business can convert sales into
          profit and provide insights into its financial health and efficiency.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-bgSidebar border border-textPrimary shadow-2xl px-4 py-4 space-y-4 rounded-xl">
        <div className="text-lg text-textYellow leading-none">
          <h2 className=" font-semibold ">Game Win/Loss</h2>
          <h2 className="">Ratios Analysis</h2>
        </div>
        {userRatios.map((block) => {
          const total = block.segments.reduce((sum, seg) => sum + seg.value, 0);
          return (
            <div key={block.title} className="space-y-2">
              <h3 className="text-xs font-medium text-textPurpleTwo">
                {block.title}
              </h3>
              <div className="flex w-full h-2 rounded-full overflow-hidden ">
                {block.segments.map((seg) => {
                  const widthPercent =
                    ((seg.value / total) * 100).toFixed(2) + "%";
                  return (
                    <div
                      key={seg.label}
                      title={`${seg.label} - ${seg.value}`}
                      className={`${seg.color} h-full`}
                      style={{ width: widthPercent }}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfitColors;
