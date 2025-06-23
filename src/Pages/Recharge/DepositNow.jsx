import DepositTabs from "../../Components/Recharge/DepositNow/DepositTabs";


const DepositNow = () => {
  return (
    <div className=" p-3 text-white pr-0">
      <h2 className="text-center py-1 text-lg bg-bgSecondary">
        {" "}
        GGR Balance Recharge Payment Gateway
      </h2>
      <div className="flex justify-center my-4">
        <button className="rounded-full bg-gradient-to-r from-purple-700 to-blue-700  px-4 py-2 text-white border-2 font-semibold text-lg">
          Your Available Balance : 100 USDT
        </button>
      </div>
      <DepositTabs/>
    </div>
  );
};

export default DepositNow;
