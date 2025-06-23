

const WhiteLabelList = () => {
  const rows = [
    {
      sl: "01",
      domain: "www.domain.com",
      ggr: "5000 USDT",
      leftDays: "365 days",
      createdBy: "Admin",
      dateTime: "20-05-2025 (10:15 AM)",
      status: "Active",
    },
    {
      sl: "02",
      domain: "www.domain.com",
      ggr: "5000 USD",
      leftDays: "365 days",
      createdBy: "Admin",
      dateTime: "20-05-2025 (10:15 AM)",
      status: "Rejected",
    },
    {
      sl: "03",
      domain: "www.domain.com",
      ggr: "5000 USD",
      leftDays: "365 days",
      createdBy: "Admin",
      dateTime: "20-05-2025 (10:15 AM)",
      status: "Pending",
    },
  ];

  return (
    <div className=" text-white">
      
      <h2 className="text-center text-lg bg-bgSecondary py-1 mb-4">
       White Label List
      </h2>
      <div className="overflow-auto p-3 pr-0 rounded-lg ">
        <table className="min-w-full text-sm border border-gray-600 rounded-lg font-bold overflow-hidden">
          <thead className="bg-[#6623d2] text-base">
            <tr>
              <th className="px-2 py-2 border-r border-gray-950">SL-NO</th>
              <th className="px-2 py-2 border-r border-gray-950">Domain</th>
              <th className="px-2 py-2 border-r border-gray-950">GGR Available</th>
              <th className="px-2 py-2 border-r border-gray-950">Left Days</th>
              <th className="px-2 py-2 border-r border-gray-950">Created BY</th>
              <th className="px-2 py-2 border-r border-gray-950">Date & Time</th>
              <th className="px-2 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white text-black divide-y divide-gray-600">
            {rows.map((row, index) => (
              <tr key={index} className="divide-x divide-gray-600">
                <td className="px-2 py-2 text-center">{row.sl}</td>
                <td className="px-2 py-2 text-center">{row.domain}</td>
                <td className="px-2 py-2 text-center">{row.ggr}</td>
                <td className="px-2 py-2 text-center">{row.leftDays}</td>
                <td className="px-2 py-2 text-center">{row.createdBy}</td>
                <td className="px-2 py-2 text-center">{row.dateTime}</td>
                <td className="px-2 py-2 text-center">
                  <button
                    type="button"
                    className={`px-3 py-1 text-white rounded-full font-semibold focus:outline-none
                      ${
                        row.status === "Active"
                          ? "bg-green-700 hover:bg-green-500"
                          : row.status === "Rejected"
                          ? "bg-red-700 hover:bg-red-600"
                          : "bg-yellow-600 hover:bg-yellow-400"
                      }
                    `}
                  >
                    {row.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WhiteLabelList;
