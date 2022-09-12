// react
import React from "react";

// State Management (Recoil JS)
import { useRecoilState } from "recoil";
import adminSidebarStatusAtom from "../../../recoil/adminPage/adminSidebar/adminSidebarStatusAtom";
import AdminProductsDetailHeader from "./AdminProductsDetailHeader";
import ProductDetailsEditForm from "./ProductDetailsEditForm";

const ProductDetails = () => {
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
      <AdminProductsDetailHeader />
      <ProductDetailsEditForm />
    </div>
  );
};

export default ProductDetails;
