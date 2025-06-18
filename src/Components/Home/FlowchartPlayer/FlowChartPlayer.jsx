import FlowChart from "./FlowChart";
import Player from "./Player/Player";

const FlowChartPlayer = () => {
  return (
    <div className="py-4">
      
      <div className="flex gap-2">
        <FlowChart />
        <Player />
      </div>
    </div>
  );
};

export default FlowChartPlayer;
