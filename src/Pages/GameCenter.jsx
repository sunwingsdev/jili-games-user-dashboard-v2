
import GameHeader from "../Components/GameCenter/GameHeader";
import GameTabs from "../Components/GameCenter/GameTabs";
const GameCenter = () => {
  return (
    <div className="text-white">
      <h2 className="text-center text-lg bg-bgSecondary py-1 ">
        Game Center
      </h2>
      <div>
        <GameHeader/>
        <GameTabs/>
      </div>
    </div>
  );
};

export default GameCenter;
