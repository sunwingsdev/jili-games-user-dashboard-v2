import ApiTabs from "../Components/ApiCenter/ApiTabs";


const ApiCenter = () => {
  return (
    <div className="text-white ">
      <h2 className="text-center text-lg font-bold bg-bgSecondary py-1 ">
        Api Center & Game Integrations
      </h2>
      <div className="ml-2 p-3 pr-0 scrollbar-hide">
        <ApiTabs />
      </div>
    </div>
  );
};

export default ApiCenter;
