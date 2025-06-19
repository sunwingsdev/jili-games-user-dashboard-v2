import DashedCircleVerticalBars from "./DashedCircle";
import ProfitColors from "./HomeTopRightSide/ProfitColors";

const balancePlans = [
  {
    type: "PREPAID PLAN",
    balance: 4000,
    note: "You are currently subscribed to our prepaid plan. Always keep your balance at $2000 and deposit it. This will not cause any disruption to your ability to play games.",
    color: "#00ffaa",
  },
  {
    type: "LAST BALENCE",
    balance: 4500,
    note: "Your balance will be deducted automatically after usage. Ensure you deposit funds regularly to avoid limits.",
    color: "#FF85A2",
  },
  {
    type: "USEING GGR",
    balance: 5000,
    note: "As a VIP user, keep your minimum balance at $5000 to continue enjoying premium services.",
    color: "#f0f326",
  },
];

const HomeTop = () => {
  return (
    <div className=" py-4 flex gap-6">
      {/* HomeTopLeftSide */}
      <div className="grid grid-cols-3  gap-6 w-full">
        {balancePlans.map((plan, index) => (
          <div
            key={index}
            className="bg-bgSidebar border border-textPrimary rounded-xl pb-2  shadow-2xl "
          >
            {/* Dashed Circular USD Display */}
            <DashedCircleVerticalBars
              amount={plan.balance}
              color={plan.color}
            />

            {/* Plan Title and Note */}
            <h3 className="text-center  font-bold text-textSecondary text-md   mb-2">
              {plan.type}
            </h3>
            <p className="text-xs px-2 text-justify leading-snug">{plan.note}</p>
          </div>
        ))}
      </div>
      {/* HomeTopRightSide */}
      <ProfitColors/>
    </div>
  );
};

export default HomeTop;
