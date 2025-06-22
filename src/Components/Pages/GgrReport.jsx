const GgrReport = () => {
  return (
    <div className="text-white   flex flex-col">
      <h2 className="text-center py-1 text-lg bg-bgSecondary">GGR-Report</h2>

      <div className="flex-grow my-36 flex justify-center">
        <p
          className="
            text-center text-2xl font-bold 
            
            drop-shadow-lg 
            border-2 border-pink-500 rounded-xl px-6 py-3 
            animate-pulse
          "
        >
          No Data Found! Please Connect API in your Domain
        </p>
      </div>
    </div>
  );
};

export default GgrReport;
