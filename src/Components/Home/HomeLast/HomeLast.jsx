 
import ApiReport from "./ApiReport/ApiReport";
import ApiVideoTutorial from "./ApiVideoTutorial";
import Calender from "./Calender";

 

const HomeLast = () => {
    return (
        <div className="flex gap-2"> 
        <ApiVideoTutorial/>
        <Calender/>
        <ApiReport/>
        </div>
    );
};

export default HomeLast;