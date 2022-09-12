import React from "react";

const AdminProductsDetailHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-xl">
          Product <span className="text-[#c57963] ">#05231</span>
        </h1>
        <div className="mt-1 text-xs font-extralight text-gray-400">
          <h4>Last edited:</h4>
          <h4>Jul 17,2022 at 10:25am</h4>
        </div>
      </div>

      <div>
        <button className="px-5 py-3 bg-[#C57963] text-[#fcedd1]  rounded-lg active:scale-95 transition ">
          SAVE CHANGES
        </button>
      </div>
    </div>
  );
};

export default AdminProductsDetailHeader;
