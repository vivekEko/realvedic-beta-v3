// react
import React, { useEffect, useState } from "react";

// media assets
import search from "../../../assets/img/adminPage/productPage/searchIcon.svg";
import arrow from "../../../assets/img/adminPage/productPage/bottom_arrow.svg";

const ProductSearchAndFilter = () => {
  // Local variables
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [selectedProductFilters, setSelectedProductFilters] = useState([]);

  // Function to remove selected item from an array
  function arrayRemove(arr, value) {
    return arr.filter(function (geek) {
      return geek != value;
    });
  }

  const filterData = [
    {
      filterName: "Stock",
      filterOptions: [
        "Less than 10",
        "Less than 20",
        "Less than 50",
        "Greater than 50",
      ],
    },
    {
      filterName: "Category",
      filterOptions: [
        "Spice Blends",
        "Flour Packs",
        "Dosa Mix",
        "Rasam & Soups",
        "Noodle & Pasta",
        "Beverage & Mixes",
        "Health Mix",
      ],
    },
    {
      filterName: "Status",
      filterOptions: ["Out of stock", "In stock"],
    },
  ];

  return (
    <div className="my-3 flex gap-5 items-center justify-between ">
      <div className="bg-gray-50 flex items-center gap-2 p-2 px-4 rounded-lg overflow-x-hidden w-[70%] max-w-[400px] ">
        <img src={search} alt="search for products" className="w-[25px]" />
        <input
          type="text"
          placeholder="Search products"
          className="bg-gray-50 py-2 outline-none border-0 placeholder-gray-300 text-sm w-full"
        />
      </div>

      <div className="w-[30%]  relative">
        <div
          onClick={() => {
            setFilterIsOpen(!filterIsOpen);
          }}
          className="bg-gray-50 p-4 max-w-[100px] ml-auto rounded-lg text-[#545454] text-sm w-full flex justify-between items-center cursor-pointer"
        >
          <h1 className="text-center">Filters</h1>
          <img
            src={arrow}
            alt="filters"
            className={`transition-all ${
              filterIsOpen ? "rotate-180" : "rotate-0"
            } `}
          />
        </div>
        <div
          className={` ${
            filterIsOpen ? "block" : "hidden"
          } absolute top-[100%] right-0  w-[300px] py-2 z-50`}
        >
          <div className=" border-gray-50 p-5 rounded-md bg-gray-50 shadow-xl">
            {filterData?.map((data, index) => {
              return (
                <div
                  key={index}
                  className={`flex gap-5 py-4  ${
                    index === 1 ? "border-y" : ""
                  } `}
                >
                  <div className="flex-[0.3]">
                    <h1 className="text-gray-600 text-base">
                      {data?.filterName}
                    </h1>
                  </div>
                  <div className="flex-[0.7]  ">
                    {data?.filterOptions?.map((filters, idx) => {
                      return (
                        <div
                          key={idx}
                          className="p-1  mb-1 w-fit cursor-pointer flex gap-2"
                          onClick={() => {
                            if (selectedProductFilters?.includes(filters)) {
                              setSelectedProductFilters(
                                (selectedProductFilters) =>
                                  arrayRemove(selectedProductFilters, filters)
                              );
                            } else {
                              setSelectedProductFilters(
                                (selectedProductFilters) => [
                                  ...selectedProductFilters,
                                  filters,
                                ]
                              );
                            }
                          }}
                        >
                          <input
                            type="checkbox"
                            name={filters}
                            value={filters}
                            checked={
                              selectedProductFilters?.includes(filters)
                                ? true
                                : false
                            }
                            onChange={() => {
                              if (selectedProductFilters?.includes(filters)) {
                                setSelectedProductFilters(
                                  (selectedProductFilters) =>
                                    arrayRemove(selectedProductFilters, filters)
                                );
                              } else {
                                setSelectedProductFilters(
                                  (selectedProductFilters) => [
                                    ...selectedProductFilters,
                                    filters,
                                  ]
                                );
                              }
                            }}
                          />
                          <h3 className={`text-sm  text-gray-500 `}>
                            {filters}
                          </h3>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            <div className=" flex justify-end mt-5">
              <button
                onClick={() => setFilterIsOpen(false)}
                className="text-center p-3 font-bold cursor-pointer bg-[#fcedd1] text-[#C57963] text-sm rounded-md active:scale-95 transition"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSearchAndFilter;
