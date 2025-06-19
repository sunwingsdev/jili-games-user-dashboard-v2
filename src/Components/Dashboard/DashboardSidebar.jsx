import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
// import { FaRegCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
// import Modal from "@/components/betjili/shared/Modal";
// import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";

const DashboardSidebar = ({ open, setOpen, menuItems }) => {

  const location = useLocation();

    
  //   const { data: homeControls } = useGetHomeControlsQuery();
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({
    GamesControl: false,
    GamesApikey: false,
    OracleTechnology: false, // Track submenu state for Games Control
    Bonuses: false, // Track submenu state for Games Control
    gameHistory: false, // Track submenu state for Games Control
    Fontend: false, // Track submenu state for Games Control
    BankingDeposit: false, // Track submenu state for Games Control
    BankingWithdrow: false, // Track submenu state for Games Control
    Settings: false, // Track submenu state for Games Control
  });
  const sidebarRef = useRef(null);


  //   const logoHomeControl = homeControls?.find(
  //     (control) => control.category === "logo" && control.isSelected === true
  //   );

  // Toggle submenu visibility
  const toggleSubmenu = (menu) => {
    setSubmenuOpen((prevMenu) => (prevMenu === menu ? "" : menu));
  };
  // Handle toggle sidebar visibility
  const handleToggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  // Open modal
  //   const handleModalOpen = () => {
  //     setIsModalOpen(true);
  //   };

  // Close modal
  //   const handleModalClose = () => {
  //     setIsModalOpen(false);
  //   };

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSubmenuOpen(""); // close submenu
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div ref={sidebarRef} className="">
      <div
        className={`${
          open ? "w-64" : "w-16"
        }   duration-300 fixed  bg-primary-primaryColor `}
        
      >
        {/* Start Top collapse */}
        <div className={`bg-black h-[58px]  ${!open && ""}`}>
          <div className={`flex  items-center ${!open ? " mr-2 justify-center gap-x-3" : ""}`}>
            <div className={`flex gap-1 ${!open && "hidden"}`}>
              <Link
                to={"/"}
                className="flex items-center gap-1 px-2 py-0.5 rounded-lg"
              >
                {/* {logoHomeControl?.image ? (
                  <img
                    className="w-20"
                    src={`${import.meta.env.VITE_BASE_API_URL}${
                      logoHomeControl?.image
                    }`}
                    alt="Logo"
                  /> */}
                {/* ) : (
                  <div className="h-10"></div>
                )} */}
              </Link>
            </div>
            <div className={` py-3`}>
              <div className="flex items-center gap-2 text-white font-semibold mt-1">
                {/* Menu Icon */}
                <IoMdMenu
                  className="w-6 h-6 cursor-pointer"
                  onClick={handleToggleSidebar}
                />

                {/* Dashboard text (only show when open) */}
                {open && <span>Dashboard</span>}
              </div>
            </div>
          </div>
        </div>
        {/* End Top collapse */}
      </div>

      {/* Start Menu bar */}
      <div
        className={` bg-bgSidebar overflow-y-auto fixed mt-[57px] hidden h-full md:block pb-16 ${
          open ? "w-64" : "w-16"
        } text-sm text-white duration-300 font-semibold  scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900`}
      >
        {/* Dynamic Menu Rendering */}
       {menuItems.map((item, index) => (
  <div key={index}>
    <Link onClick={!item.to && !item.submenu} to={item.to || "#"}>
      <div
        className={`px-4 py-3 flex items-center justify-between border-b border-gray-700 duration-300
          ${location.pathname === item.to ? "text-textActiveMenu  " : "text-white"}
          hover:bg-bottomNavBgColor hover:border-l-4 hover:border-l-textPrimary 
          ${!open && "justify-center"}`}
        onClick={() => item.submenu && toggleSubmenu(item.label)}
      >
        <div className={`flex items-center gap-2 ${!open && "justify-center w-full"}`}>
          <span className={`text-lg ${open ? "mr-0" : "mr-2"}`}>{item.icon}</span>

          <p className={`${!open && "hidden"}`}>{item.label}</p>
        </div>

        {item.submenu && open && (
          <div className="min-w-[20px] ml-auto text-right">
            <FaAngleDown className="w-4 h-4" />
          </div>
        )}
      </div>
    </Link>

    {/* Submenu block */}
    {item.submenu && submenuOpen === item.label && open && (
      <div className="text-sm font-semibold duration-300">
        {item.submenu.map((subItem, subIndex) => (
          <Link
            onClick={!subItem.to && !subItem.submenu}
            key={subIndex}
            to={subItem.to || "#"}
            className={`py-2.5 border-b border-gray-700 pl-8 flex gap-2
              ${
                location.pathname === subItem.to
                  ? "text-textActiveMenu underline  bg-bgHoverSubMenu"
                  : "text-white hover:underline bg-bgSubMenu hover:bg-bgHoverSubMenuTwo"
              }
              `}
          >
            {subItem.label}
          </Link>
        ))}
      </div>
    )}
  </div>
))}


      </div>

      {/* Modal */}
      {/* <Modal
        title={"Oops!!!"}
        isOpen={isModalOpen}
        onOpenChange={handleModalClose}
      >
        <p>Please contact your developer team to connect API!!!</p>
      </Modal> */}
    </div>
  );
};

export default DashboardSidebar;
