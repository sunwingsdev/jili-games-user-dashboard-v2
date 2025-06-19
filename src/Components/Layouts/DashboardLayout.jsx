import { useEffect, useState } from "react";
import { AiFillCustomerService } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { PiGraphBold } from "react-icons/pi";
import { FiPackage } from "react-icons/fi";
// import { HiOutlineClipboardList } from "react-icons/hi";
import { MdApi, MdWeb } from "react-icons/md";
import { RiVipDiamondLine } from "react-icons/ri";
import { GiGamepad } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Outlet } from "react-router";
import DashboardSidebar from "../Dashboard/DashboardSidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const DashboardLayout = () => {
  useEffect(() => {
    const metaViewport = document.querySelector("meta[name='viewport']");
    if (metaViewport) {
      const originalContent = metaViewport.getAttribute("content");
      metaViewport.setAttribute("content", "width=1239");
      return () => {
        metaViewport.setAttribute("content", originalContent);
      };
    }
  }, []);

  const [open, setOpen] = useState(true);

  const menuItems = [
    { label: "Dashboard", icon: <BiSolidDashboard />, to: "/" },
    { label: "GGR Report", icon: <PiGraphBold />, to: "/report" },
    { label: "API Plan", icon: <MdOutlineIntegrationInstructions />, to: "/api" },
    { label: "My Subscriptions", icon: <FiPackage />, to: "/subscriptions" },
    // {
    //   label: "GGR Plan",
    //   icon: <HiOutlineClipboardList />,
    //   submenu: [
    //     { label: "All Agents", to: "/agents" },
    //     { label: "All Affiliate Links", to: "/dashboard/allaffiliatelinks" },
    //   ],
    // },
    {
      label: "Api Center",
      icon: <MdApi />,
      submenu: [
        { label: "All Agents", to: "/agents" },
        { label: "Active Games" },
        { label: "Inactive Games" },
      ],
    },
    {
      label: "White Lebel",
      icon: <RiVipDiamondLine />,
      submenu: [
        { label: "Add Games", to: "/dashboard/addGames" },
        { label: "Sprots Live TV", to: "/dashboard/gamesApi/sports-live-tv" },
      ],
    },
    {
      label: "game Center",
      icon: <GiGamepad />,
      submenu: [
        { label: "Happy Hours" },
        { label: "Deposit Bonuses" },
      ],
    },
    {
      label: "Notice & Update",
      icon: <IoIosNotificationsOutline />,
      submenu: [
        { label: "Play Stats" },
        { label: "Win Game Stats" },
      ],
    },
    {
      label: "Settings",
      icon: <IoSettingsSharp />,
      submenu: [
        { label: "Commission", to: "/dashboard/commissionsetting" },
      ],
    },
    { label: "Support", icon: <AiFillCustomerService /> },
    {
      label: "version-2.0",
      icon: <MdWeb />,
      submenu: [
        { label: "Home control", to: "/dashboard/home-controls" },
        { label: "Promotions", to: "/dashboard/promotion-offer" },
      ],
    },
  ];

  const submenus = [
    {
      label: "Sprots Live TV",
      value: "sprots_live_tv",
      to: "/dashboard/gamesApi/sports-live-tv",
    },
    { label: "BetFair API", value: "betfair", to: "/dashboard/gamesApi/betfair-api" },
    { label: "Sports Radar API", value: "sports_radar", to: "/dashboard/gamesApi/sports-radar-api" },
    { label: "Odds Jam API", value: "odds_jam", to: "/dashboard/gamesApi/odds-jam-api" },
    { label: "Bet Construct API", value: "bet_construct", to: "/dashboard/gamesApi/bet-construct-api" },
    { label: "Kambi API", value: "kambi", to: "/dashboard/gamesApi/kambi-api" },
    { label: "Pinnacle API", value: "pinnacle", to: "/dashboard/gamesApi/pinnacle-api" },
    { label: "SoftSwiss API", value: "softswiss", to: "/dashboard/gamesApi/softswiss-api" },
    { label: "Betradar API", value: "betradar", to: "/dashboard/gamesApi/betradar-api" },
    { label: "Evolution API", value: "evolution", to: "/dashboard/gamesApi/evolution-api" },
    { label: "Pragmatic Play API", value: "pragmatic_play", to: "/dashboard/gamesApi/pragmatic-play-api" },
    { label: "Playtech API", value: "playtech", to: "/dashboard/gamesApi/playtech-api" },
    { label: "NetEnt API", value: "netent", to: "/dashboard/gamesApi/netent-api" },
    { label: "Betsoft Gaming API", value: "betsoft", to: "/dashboard/gamesApi/betsoft-gaming-api" },
  ];

  return (
    <div className="flex  bg-bgPrimary">
      <DashboardSidebar open={open} setOpen={setOpen} menuItems={menuItems} />
      <div
        className={`flex-1 h-screen  overflow-y-auto flex flex-col duration-300 ${
          !open ? "md:pl-16 pr-6" : "md:pl-64 pr-6"
        }`}
      >
        <Header />
        <div className={` ${
          !open ? "ml-2 pr-0 pt-0 p-3" : "pt-0 pb-3 "
        }`}>
          <Outlet context={{ submenus }} />
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default DashboardLayout;
