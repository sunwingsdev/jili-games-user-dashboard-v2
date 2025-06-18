 

const plansData = [
  {
    type: "Postpaid",
    price: "20000 USDT / Yearly",
    features: [
      "All Gaming Access",
      "Casino Share - 0%",
      "Sports Share - 0%",
      "Slot Share - 0%",
      "Crash Share - 0%",
      "GCB Board Fee - 0%",
      "Upcoming Gaming Free",
    ],
    buttonText: "Recharge Now",
  },
  {
    type: "Prepaid",
    price: "20000 USDT / Yearly",
    features: [
      "All Gaming Access",
      "Casino Share - 10%",
      "Sports Share - 10%",
      "Slot Share - 10%",
      "Crash Share - 1%",
      "GCB Board Fee - 2%",
      "Upcoming Gaming Free",
    ],
    buttonText: "Recharge Now",
  },
];

const ApiPlan = () => {
  return (
    <div className="text-white px-4 ">
      <h2 className="text-center text-lg bg-bgSecondary py-1 rounded-md">
        GGR-Plan Buy Now
      </h2>

      <div className="text-[23px] flex flex-col items-center leading-tight font-sans mt-4 space-y-1">
        <p>How To Buy This Api Plan -</p>
        <p>
          Click Here To See This{" "}
          <span className="text-blue-500 font-bold">Video Tutorial</span>
        </p>
        <button className="bg-blue-700 hover:bg-opacity-60 px-3 py-1 rounded-lg mt-2">
          Video Tutorial !
        </button>
      </div>

      <div className="mt-8 grid grid-cols-2 mx-auto justify-items-center w-[70%] ">
        {plansData.map((plan, index) => (
          <div
            key={index}
            className="bg-bgSecondary w-fit rounded-2xl p-6 border-8 border-bgSecondary border-opacity-20 "
          >
            <h3 className="text-center text-textYellow text-xl font-mono mb-1">{plan.type}</h3>
            <p className="text-center text-black font-bold  bg-bgYellow text-xl rounded-full p-1 px-2  mb-4">{plan.price}</p>

            <ul className="space-y-2 pl-2">
  {plan.features.map((feature, i) => (
    <li
      key={i}
      className="flex items-center text-white text-[15px] leading-snug"
    >
      <span className="w-3 h-3 bg-white rounded-full mr-3 flex-shrink-0"></span>
      {feature}
    </li>
  ))}
</ul>




            <div className="mt-6 flex justify-center">
              <button className="bg-bgRed hover:bg-opacity-60 px-4 py-1 rounded-full border border-dashed font-semibold transition">
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiPlan;
