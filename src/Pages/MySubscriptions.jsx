const postpaidPlan = {
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
  buttonText: "Subscribed",
};

const MySubscriptions = () => {
  return (
    <div className="text-white ">
      <div className="text-lg font-bold flex justify-between bg-bgSecondary py-1 px-2 shadow-2xl ">
        <h2 className="w-[58%] text-right">MY Subscriptions</h2>
        <h2>Left - 358 Days</h2>
      </div>

      <div className="text-[23px] flex flex-col items-center leading-tight font-sans text-[#f778ee] mt-4 space-y-1">
        <p>Dear Abir Hasan</p>
        <p>Congratulations !</p>
        <p className="text-white">
          You have Already Subscribed to the{" "}
          <span className="text-textYellow font-bold">Postpaid Package</span>
        </p>
      </div>

      {/* <div className="mt-8 flex bg-[#2a003f] justify-center">
        <div className=" w-fit rounded-2xl p-6 border-8 border-black ">
          <h3 className="text-center text-textYellow text-xl font-mono mb-1">
            {postpaidPlan.type}
          </h3>
          <p className="text-center text-black font-bold bg-bgYellow text-xl rounded-full p-1 px-2 mb-4">
            {postpaidPlan.price}
          </p>

          <ul className="space-y-2 pl-2">
            {postpaidPlan.features.map((feature, i) => (
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
            <button className="bg-bgGreen hover:bg-opacity-60 px-4 py-1 rounded-full border border-dashed font-semibold transition">
              {postpaidPlan.buttonText}
            </button>
          </div>
        </div>
      </div> */}

      <div className="mt-8 flex justify-center">
        <div
          className="relative w-fit rounded-2xl p-6 group 
    border border-pink-500 
    shadow-[0_0_30px_5px_rgba(236,72,153,0.4)] 
    bg-gradient-to-br from-black via-bgSecondary to-black 
    transition-transform duration-300 ease-in-out 
    hover:scale-105 hover:rotate-1"
        >
          
          <div className="absolute inset-0 rounded-2xl border-2 border-purple-500 opacity-50 blur-sm pointer-events-none"></div>
          <div className="absolute inset-0 rounded-2xl border border-pink-500 opacity-30 blur-md pointer-events-none"></div>

          <div className="relative z-10">
            <h3 className="text-center text-textYellow text-xl font-mono mb-1">
              {postpaidPlan.type}
            </h3>
            <p className="text-center text-black font-bold bg-bgYellow text-xl rounded-full p-1 px-2 mb-4">
              {postpaidPlan.price}
            </p>

            <ul className="space-y-2 pl-2">
              {postpaidPlan.features.map((feature, i) => (
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
              <button className="bg-bgGreen hover:bg-opacity-60 px-4 py-1 rounded-full border border-dashed font-semibold transition">
                {postpaidPlan.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
     


      
    </div>
  );
};

export default MySubscriptions;
