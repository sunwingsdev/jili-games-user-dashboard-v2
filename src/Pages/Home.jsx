


import FlowChartPlayer from "../Components/Home/FlowchartPlayer/FlowChartPlayer";
import HomeBars from "../Components/Home/HomeBars/HomeBars";
import HomeLast from "../Components/Home/HomeLast/HomeLast";
import HomeTop from "../Components/Home/HomeTop/HomeTop";



const Home = () => {
    return (
        <div className="text-white ml-2 p-3 pr-0 scrollbar-hide ">
           <h2> Welcome Back , Abir Hassan</h2>
           <HomeTop/>
           <HomeBars/>
           <FlowChartPlayer/>
           <HomeLast/>
            
        </div>
    );
};

export default Home;