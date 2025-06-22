
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';



import DashboardLayout from '../Layouts/DashboardLayout';
// import AllAgents from '../Pages/AllAgents';
import GgrReport from '../Pages/GgrReport';
import ApiPlan from '../Pages/ApiPlan';
import MySubscriptions from '../Pages/MySubscriptions';
import DepositNow from '../Pages/Recharge/DepositNow';
import RechargeHistory from '../Pages/Recharge/RechargeHistory';
const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      
      
      {
        path: '/',
        element: <Home />,
        // loader: async () => {
        //   await new Promise(resolve => setTimeout(resolve, 2000)); // delay for 2 sec
        //   return null;
        // }
      },
      {
        path: '/report',
        element: <GgrReport />,
        
      },
      {
        path: '/api',
        element: <ApiPlan />,
        
      },
      {
        path: '/subscriptions',
        element: <MySubscriptions />,
        
      },
      //recharge subMenu
      // {
      //   path: '/agents',
      //   element: <AllAgents />,
        
      // },
      {
        path: '/recharge/deposit',
        element: <DepositNow />,
        
      },
      {
        path: '/recharge/history',
        element: <RechargeHistory />,
        
      },
      

      
      
      
      
      
      


    ],
  },

  
  
]);

export default router;
