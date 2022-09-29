// react
import React, { useRef } from "react";

// media files
import image from "../../../assets/img/productPage/carousel/product1.svg";
import image2 from "../../../assets/img/productPage/carousel/product2.svg";
import NameAndStatus from "./form_components/NameAndStatus";

const ProductDetailsEditForm = () => {
  const statusRef = useRef();

  // Mock data
  const productDetails = [
    {
      name: "Angaya Podi",
      status: "Out of stock",
      category: "Spice blends",
      hsn: "21069099",
      statusList: ["Out of stock", "In stock"],
      categoryList: ["Spice Blends", "Flour packs"],
      variants: [
        {
          variantName: "500 g",
          price: 85,
          quantity: 48,
          sku: "RV040101",
        },
        {
          variantName: "1 kg",
          price: 150,
          quantity: 9,
          sku: "RV040102",
        },

        {
          variantName: "2 kg",
          price: 300,
          quantity: 5,
          sku: "RV040103",
        },
        {
          variantName: "3 kg",
          price: 400,
          quantity: 12,
          sku: "RV040104",
        },
        {
          variantName: "5 kg",
          price: 500,
          quantity: 2,
          sku: "RV040105",
        },
      ],

      sibling_product: [
        {
          product_name: "Nutri Curry Powder",
          price: 110,
          image: "image",
        },
      ],

      nutritional_info: [
        {
          label: "Total fat",
          value: 20,
          unit: "g",
        },

        {
          label: "Protien",
          value: 50,
          unit: "g",
        },

        {
          label: "Carbohydrates",
          value: 2,
          unit: "g",
        },

        {
          label: "Energy",
          value: 250,
          unit: "kcal",
        },
      ],
      meta_fields: [
        {
          title: "How we make it?",
          desc: "lorem ipsum",
        },

        {
          title: "How to use?",
          desc: "lorem ipsum",
        },

        {
          title: "Ingredients",
          desc: "lorem ipsum",
        },

        {
          title: "What's in it for you?",
          desc: "lorem ipsum",
        },
      ],
      reviews: [
        {
          cust_name: "John Doe",
          review: "Lorem ipsum",
        },

        {
          cust_name: "Alex Bing",
          review: "Lorem ipsum",
        },
        {
          cust_name: "Ross Gellar",
          review: "Lorem ipsum",
        },
      ],
    },
  ];
  return (
    <div className="mt-10 w-full mx-auto ">
      {/* Images */}
      <div className="  flex flex-col gap-5 sm:flex-row">
        <div className="aspect-square w-full sm:max-w-[300px] sm:min-w-[200px] border border-dashed border-black">
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
      {/* <NameAndStatus /> */}

      <div className="mt-10 grid grid-cols-2 gap-5">
        {/* Name */}
        <div className="">
          <label className="text-gray-700 text-sm">Name</label>
          <input
            type="text"
            className="p-2 rounded-md block  border-gray-400 border w-full outline-none"
            defaultValue={productDetails[0]?.name}
          />
        </div>

        {/* Status */}
        <div className="">
          <label className="text-gray-700 text-sm">Status</label>
          <select
            ref={statusRef}
            className="p-2 rounded-md block border-gray-400 border w-full outline-none "
            defaultValue={productDetails[0]?.status}
          >
            {productDetails[0]?.statusList?.map((data, index) => {
              return (
                <option key={data} value={data} className="p-3 ">
                  {data}
                </option>
              );
            })}
          </select>
        </div>

        {/* Category */}
        <div className="">
          <label className="text-gray-700 text-sm">Category</label>
          <select
            ref={statusRef}
            className="p-2 rounded-md block border-gray-400 border w-full outline-none "
            defaultValue={productDetails[0]?.category}
          >
            {productDetails[0]?.categoryList?.map((data, index) => {
              return (
                <option key={data} value={data} className="p-3 ">
                  {data}
                </option>
              );
            })}
          </select>
        </div>

        {/* hsn */}
        <div className="">
          <label htmlFor="hsn" className="text-gray-700 text-sm">
            HSN
          </label>
          <input
            type="number"
            className="p-2 rounded-md block  border-gray-400 border w-full outline-none"
            defaultValue={productDetails[0]?.hsn}
          />
        </div>
      </div>
      {/* variants */}
      <div className="border-gray-300 border rounded-md pt-5 pl-5 mt-5">
        <div className="mb-2 ">
          <h1>All Variants</h1>
        </div>
        <div className="grid grid-cols-4 gap-5  py-5">
          <h1 className="text-sm text-gray-500">Variant</h1>
          <h1 className="text-sm text-gray-500">Price</h1>
          <h1 className="text-sm text-gray-500">Quantity</h1>
          <h1 className="text-sm text-gray-500">SKU</h1>
        </div>

        <div className="h-[200px] overflow-y-scroll py-5 pr-5">
          {productDetails[0]?.variants?.map((data, index) => {
            return (
              <div key={index} className="grid grid-cols-4 gap-5 mb-5">
                <h1>{data?.variantName}</h1>
                <div className="flex gap-1 items-center rounded-md px-2 border-gray-400 border">
                  <span>₹</span>
                  <input
                    type="number"
                    defaultValue={data?.price}
                    className="p-2  block   w-full outline-none"
                  />
                </div>
                <input
                  type="number"
                  defaultValue={data?.quantity}
                  className="p-2 rounded-md block  border-gray-400 border w-full outline-none"
                />

                <input
                  type="text"
                  defaultValue={data?.sku}
                  className="p-2 rounded-md block  border-gray-400 border w-full outline-none"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Sibling products */}
      <div className="mt-5">
        <label className="text-gray-700 text-sm">Sibling product</label>
        <select
          ref={statusRef}
          className="p-2 rounded-md block border-gray-400 border w-full outline-none "
          defaultValue={productDetails[0]?.sibling_product[0]}
        >
          {productDetails[0]?.sibling_product?.map((data, index) => {
            return (
              <option
                key={data?.product_name}
                value={data?.product_name}
                className="p-3 "
              >
                {data?.product_name}
                {" | "}
                {data?.price}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ProductDetailsEditForm;
