// react
import React from "react";

// media assets
import exportIcon from "../../../assets/img/adminPage/header/export_icon.svg";
import deleteIcon from "../../../assets/img/adminPage/header/delete_icon.svg";
import addIcon from "../../../assets/img/adminPage/header/add_icon.svg";

const AdminHeader = () => {
  return (
    <header className="border-b pb-5">
      <div className="flex justify-between items-center w-full">
        <div>
          <h1 className="text-xl">Products</h1>
          <p className="text-[#8a8a8a] text-sm">Total: 16 </p>
        </div>

        <div className="flex justify-between items-center gap-4 ">
          <img src={exportIcon} alt="export" className="w-5 lg:w-6" />
          <img src={deleteIcon} alt="delete" className="w-5 lg:w-6" />
          <img src={addIcon} alt="add" className="w-5 lg:w-6" />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
