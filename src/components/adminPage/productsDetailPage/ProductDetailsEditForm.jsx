// react
import React from "react";

// media files
import image from "../../../assets/img/productPage/carousel/product1.svg";
import image2 from "../../../assets/img/productPage/carousel/product2.svg";
import NameAndStatus from "./form_components/NameAndStatus";

const ProductDetailsEditForm = () => {
  return (
    <div className="mt-10 w-full mx-auto ">
      {/* Images */}
      <div className="  flex flex-col gap-5 sm:flex-row">
        <div className="aspect-square w-full sm:max-w-[500px] sm:min-w-[400px] border border-dashed border-black">
          {/* <img src={image} alt="" /> */}
        </div>
        <div className="flex gap-5 sm:flex-col">
          <div className="aspect-square max-h-[80px] w-[80px] border border-dashed border-black">
            {/* <img src={image2} alt="" className="w-[80px] " /> */}
          </div>
          <div className="aspect-square max-h-[80px] w-[80px] border border-dashed border-black">
            {/* <img src={image2} alt="" className="w-[80px] " /> */}
          </div>
        </div>
      </div>
      <NameAndStatus />
    </div>
  );
};

export default ProductDetailsEditForm;
