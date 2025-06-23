import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";

import DashboardLayout from "../Layouts/DashboardLayout";
// import AllAgents from '../Pages/AllAgents';
import GgrReport from "../Pages/GgrReport";
import ApiPlan from "../Pages/ApiPlan";
import MySubscriptions from "../Pages/MySubscriptions";
import DepositNow from "../Pages/Recharge/DepositNow";
import RechargeHistory from "../Pages/Recharge/RechargeHistory";
import ApiCenter from "../Pages/ApiCenter";
import WhiteLabelCreate from "../Pages/WhiteLabel/WhiteLabelCreate";
import WhiteLabelList from "../Pages/WhiteLabel/WhiteLabelList";
import GameCenter from "../Pages/GameCenter";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: async () => {
        //   await new Promise(resolve => setTimeout(resolve, 2000)); // delay for 2 sec
        //   return null;
        // }
      },
      {
        path: "/report",
        element: <GgrReport />,
      },
      {
        path: "/api",
        element: <ApiPlan />,
      },
      {
        path: "/subscriptions",
        element: <MySubscriptions />,
      },
      //recharge subMenu {

      {
        path: "/recharge/deposit",
        element: <DepositNow />,
      },
      {
        path: "/recharge/history",
        element: <RechargeHistory />,
      },
      //recharge subMenu }
      {
        path: "/api-center",
        element: <ApiCenter />,
      },

      //whiteLabel subMenu {
      {
        path: "/white/create",
        element: <WhiteLabelCreate />,
      },
      {
        path: "/white/list",
        element: <WhiteLabelList />,
      },

      //whiteLabel subMenu }
      {
        path: "/game",
        element: <GameCenter />,
      },
    ],
  },
]);

export default router;
