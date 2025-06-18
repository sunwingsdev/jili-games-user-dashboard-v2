// Player.jsx

import PlayerRow from "./PlayerRow";


const Player = () => {
  return (
    <div className="bg-bgSidebar border border-textPrimary px-6 rounded-xl w-[50%] mx-auto ">
      <h3 className="mb-3 text-center mr-32 text-textYellow font-sans py-2">All Game Player Visitor Report ....
</h3>
      <PlayerRow label="Live Casino" count={365} color="#FF85A2" />
      <PlayerRow label="Live Sports" count={695} color="#10b981" />
      <PlayerRow label="Live TV" count={695} color="#f0f326" />
      <PlayerRow label="Jili Offline" count={60} color="#FF85A2" />
      <div className="flex justify-center ml-32">
        <p className="text-black rounded-md text-sm font-bold px-1 bg-bgYellow">All Game Report</p>
      </div>
    </div>
  );
};

export default Player;
