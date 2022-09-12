// react
import React from "react";

// media files
import image from "../../../assets/img/productPage/carousel/product1.svg";
import image2 from "../../../assets/img/productPage/carousel/product2.svg";

const ProductDetailsEditForm = () => {
  return (
    <div className="mt-10">
      <div className="w-[90%] mx-auto   flex flex-col gap-2">
        <div className="aspect-square  border border-dashed border-black">
          {/* <img src={image} alt="" /> */}
        </div>
        <div className="flex gap-2">
          <img src={image2} alt="" className="w-[80px] " />
          <img src={image} alt="" className="w-[80px] " />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsEditForm;
