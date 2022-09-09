// React
import React from "react";
import { useState } from "react";

// Assets
import mini_logo from "../../../assets/img/adminPage/sidebar/realvedic_mini_logo.svg";
import logo_text from "../../../assets/img/adminPage/sidebar/realvedic_text.svg";
import dashboard_icon from "../../../assets/img/adminPage/sidebar/dashboard_icon.svg";
import order_icon from "../../../assets/img/adminPage/sidebar/order_icon.svg";
import product_icon from "../../../assets/img/adminPage/sidebar/product_icon.svg";
import account_icon from "../../../assets/img/adminPage/sidebar/account_icon.svg";
import content_icon from "../../../assets/img/adminPage/sidebar/content_icon.svg";
import analytics_icon from "../../../assets/img/adminPage/sidebar/analytics_icon.svg";

const AdminSidebar = () => {
  // local variables
  const [adminSidebarIsOpen, setAdminSidebarIsOpen] = useState(true);

  // Sidebar link Names
  const sidebarLinkNames = [
    {
      linkName: "Dashboard",
      iconName: dashboard_icon,
    },
    {
      linkName: "Orders",
      iconName: order_icon,
    },
    {
      linkName: "Products",
      iconName: product_icon,
    },
    {
      linkName: "Accounts",
      iconName: account_icon,
    },
    {
      linkName: "Contents",
      iconName: content_icon,
    },
    {
      linkName: "Analytics",
      iconName: analytics_icon,
    },
  ];

  return (
    <div
      className={`bg-[#fcedd1] h-screen  overflow-x-hidden fixed top-0 bottom-0 left-0 md:static ${
        adminSidebarIsOpen
          ? " transition-all duration-500 max-w-[250px] w-[50%] "
          : " min-w-[70px] max-w-[70px] transition-all duration-500 w-[10%]"
      } `}
    >
      <div className="py-5 ">
        {/* Logo */}
        <div
          className="cursor-pointer min-h-[80px] w-[80%] mx-auto"
          onClick={() => setAdminSidebarIsOpen(!adminSidebarIsOpen)}
        >
          <img src={mini_logo} alt="Realvedic" className="mx-auto" />
          <img src={logo_text} alt="Realvedic" className="mx-auto " />
        </div>

        {/* Sidebar Links */}
        <ul className="mt-14 ">
          {sidebarLinkNames?.map((data, index) => {
            return (
              <li key={index} className="relative group mb-5">
                <div className="h-[35px] w-[5px] rounded-lg bg-[#c57963] absolute right-0 top-0 bottom-0 group-hover:visible invisible transition"></div>

                <div
                  className={`flex  py-1 items-center w-[80%] mx-auto  gap-5 justify-between min-w-[150px] cursor-pointer`}
                >
                  <img
                    src={data?.iconName}
                    alt="dashboard"
                    className={`max-w-[25px] transition-all duration-500 ${
                      adminSidebarIsOpen ? "ml-0" : "ml-5"
                    } `}
                  />
                  <div
                    className={` transition-all duration-500 text-[#545454] group-hover:text-black`}
                  >
                    {data?.linkName}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
