// react
import React from "react";

// State Management (Recoil JS)
import { useRecoilState } from "recoil";
import adminSidebarStatusAtom from "../../../recoil/adminPage/adminSidebar/adminSidebarStatusAtom";
import AdminProductsDetailHeader from "./AdminProductsDetailHeader";
import ProductDetailsEditContents from "./ProductDetailsEditContents";
import ProductDetailsEditForm from "./ProductDetailsEditForm";

const ProductDetails = () => {
  // Global variables
  const [adminSidebarIsOpen, setAdminSidebarIsOpen] = useRecoilState(
    adminSidebarStatusAtom
  );
  return (
    <div
      className={` p-5 w-full transition-all duration-500  overflow-hidden ${
        !adminSidebarIsOpen
          ? "pl-[90px] md:pl-[270px]"
          : "pl-[90px] md:pl-[270px]"
      } `}
    >
      <AdminProductsDetailHeader />
      <div className="flex flex-col 2xl:flex-row gap-5 ">
        <div className="flex-1">
          <ProductDetailsEditForm />
        </div>
        <div className="flex-1 ">
          <ProductDetailsEditContents />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
