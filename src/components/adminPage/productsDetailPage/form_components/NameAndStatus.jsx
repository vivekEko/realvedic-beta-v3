import React, { useState } from "react";

// media assets
import arrow from "../../../../assets/img/adminPage/productPage/bottom_arrow.svg";

const NameAndStatus = () => {
  const [apiData, setApiData] = useState([
    {
      data: {
        label: "name",
        lt_value: "Angaya Podi",
        lt_type: "type",
      },
    },
    {
      data: {
        label: "status",
        lt_value: "#00ac69",
        lt_type: "color",
        rt_value: "In Stock",
        rt_type: "text",
        dropdwon_contents: [
          {
            lt_value: "#00ac69",
            lt_type: "color",
            rt_value: "In Stock",
            rt_type: "text",
          },
          {
            lt_value: "red",
            lt_type: "color",
            rt_value: "Out of Stock",
            rt_type: "text",
          },
        ],
      },
    },
  ]);

  return (
    <div className="mt-10  ">
      {/* Name and status */}
      <div className="flex gap-5 mb-4 ">
        {apiData?.map((data, index) => {
          return (
            <div>
              <div className="w-full ">
                <label
                  htmlFor={data?.data?.label}
                  className="text-gray-700 text-sm capitalize"
                >
                  {data?.data?.label}
                </label>
                <div className="flex  border ">
                  <input
                    type={data?.data?.lt_type}
                    name={data?.data?.label}
                    className="outline-none w-full p-2  block mt-1"
                  />
                  {data?.data?.dropdwon_contents && (
                    <div className=" px-1  flex justify-center items-center">
                      <img src={arrow} alt="select status" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NameAndStatus;
