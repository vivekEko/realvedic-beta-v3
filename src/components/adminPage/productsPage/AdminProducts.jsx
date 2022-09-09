// react
import React from "react";
// media assets
import AdminHeader from "../adminHeader/AdminHeader";
import ProductSearchAndFilter from "./ProductSearchAndFilter";

const AdminProducts = () => {
  return (
    <div className="p-5 w-full ml-[70px] md:ml-0">
      <AdminHeader />
      <div>
        <ProductSearchAndFilter />
      </div>
    </div>
  );
};

export default AdminProducts;
