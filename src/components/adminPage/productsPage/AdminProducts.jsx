// react
import React from "react";

// State Management (Recoil JS)
import { useRecoilState } from "recoil";
import adminSidebarStatusAtom from "../../../recoil/adminPage/adminSidebar/adminSidebarStatusAtom";
// components
import AdminProductHeader from "../productsPage/AdminProductHeader";
import ProductList from "./ProductList";
import ProductSearchAndFilter from "./ProductSearchAndFilter";

const AdminProducts = () => {
  // Global variables
  const [adminSidebarIsOpen, setAdminSidebarIsOpen] = useRecoilState(
    adminSidebarStatusAtom
  );

  return (
    <div
      className={` p-5 w-full transition-all duration-500  h-screen overflow-hidden ${
        !adminSidebarIsOpen
          ? "pl-[90px] md:pl-[270px]"
          : "pl-[90px] md:pl-[270px]"
      } `}
    >
      <AdminProductHeader />
      <div>
        <ProductSearchAndFilter />
        <ProductList />
      </div>
    </div>
  );
};

export default AdminProducts;
