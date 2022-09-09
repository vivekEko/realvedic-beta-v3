// react
import React from "react";

// media assets
import search from "../../../assets/img/adminPage/productPage/searchIcon.svg";
import arrow from "../../../assets/img/adminPage/productPage/bottom_arrow.svg";

const ProductSearchAndFilter = () => {
  return (
    <div className="my-3 flex gap-5 items-center justify-between">
      <div className="bg-gray-50 flex items-center gap-2 p-2 px-4 rounded-lg overflow-x-hidden w-[70%]">
        <img src={search} alt="search for products" className="w-[25px]" />
        <input
          type="text"
          placeholder="Search products"
          className="bg-gray-50 py-2 outline-none border-0 placeholder-gray-300 text-sm w-full"
        />
      </div>

      <div className="w-[30%]">
        <div className="bg-gray-50 p-4 rounded-lg text-[#545454] text-sm w-full flex justify-between items-center cursor-pointer">
          <h1 className="text-center">Filters</h1>
          <img src={arrow} alt="filters" />
        </div>
      </div>
    </div>
  );
};

export default ProductSearchAndFilter;
