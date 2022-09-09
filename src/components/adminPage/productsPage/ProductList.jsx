// react
import React, { useEffect, useState } from "react";

// Media assets
import image from "../../../assets/img/productPage/carousel/product1.svg";

// State Management (Recoil JS)
import { useRecoilState } from "recoil";
import adminSidebarStatusAtom from "../../../recoil/adminPage/adminSidebar/adminSidebarStatusAtom";
import { Link } from "react-router-dom";

const ProductList = () => {
  // variables
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Global variables
  const [adminSidebarIsOpen, setAdminSidebarIsOpen] = useRecoilState(
    adminSidebarStatusAtom
  );

  // Function to remove selected item from an array
  function arrayRemove(arr, value) {
    return arr.filter(function (geek) {
      return geek != value;
    });
  }

  //   testing
  useEffect(() => {
    console.log("selectedProducts:");
    console.log(selectedProducts);
    // productListData?.map((data) => {
    //   return selectedProducts?.push(data?.product_name);
    // });
  }, [selectedProducts]);

  const productListData = [
    {
      product_name: "Rasam Powder",
      category: "Spice Blends",
      variants: "500 gm",
      unit_price: 300,
      stock: 25,
      status: "In stock",
      status_color: "yellow",
    },
    {
      product_name: "Multigrain Atta",
      category: "Flour Packs",
      variants: "1kg",
      unit_price: 200,
      stock: 1,
      status: "Out of stock",
      status_color: "orange",
    },
    {
      product_name: "Finger Millets Noodles",
      category: "Noodle & Pasta",
      variants: "200 gm",
      unit_price: 70,
      stock: 15,
      status: "In stock",
      status_color: "red",
    },
    {
      product_name: "Immumilk",
      category: "Beverage & Mixes",
      variants: "100 gm",
      unit_price: 70,
      stock: 167,
      status: "In stock",
      status_color: "green",
    },
    {
      product_name: "Kokum Rasam Powder",
      category: "Spice Blends",
      variants: "50 gm",
      unit_price: 100,
      stock: 0,
      status: "Out of stock",
    },
    {
      product_name: "Rasam Powder",
      category: "Spice Blends",
      variants: "500 gm",
      unit_price: 300,
      stock: 25,
      status: "In stock",
      status_color: "yellow",
    },
    {
      product_name: "Multigrain Atta",
      category: "Flour Packs",
      variants: "1kg",
      unit_price: 200,
      stock: 1,
      status: "Out of stock",
      status_color: "orange",
    },
    {
      product_name: "Finger Millets Noodles",
      category: "Noodle & Pasta",
      variants: "200 gm",
      unit_price: 70,
      stock: 15,
      status: "In stock",
      status_color: "red",
    },
    {
      product_name: "Immumilk",
      category: "Beverage & Mixes",
      variants: "100 gm",
      unit_price: 70,
      stock: 167,
      status: "In stock",
      status_color: "green",
    },
    {
      product_name: "Kokum Rasam Powder",
      category: "Spice Blends",
      variants: "50 gm",
      unit_price: 100,
      stock: 0,
      status: "Out of stock",
    },
    {
      product_name: "Rasam Powder",
      category: "Spice Blends",
      variants: "500 gm",
      unit_price: 300,
      stock: 25,
      status: "In stock",
      status_color: "yellow",
    },
    {
      product_name: "Multigrain Atta",
      category: "Flour Packs",
      variants: "1kg",
      unit_price: 200,
      stock: 1,
      status: "Out of stock",
      status_color: "orange",
    },
    {
      product_name: "Finger Millets Noodles",
      category: "Noodle & Pasta",
      variants: "200 gm",
      unit_price: 70,
      stock: 15,
      status: "In stock",
      status_color: "red",
    },
    {
      product_name: "Immumilk",
      category: "Beverage & Mixes",
      variants: "100 gm",
      unit_price: 70,
      stock: 167,
      status: "In stock",
      status_color: "green",
    },
    {
      product_name: "Kokum Rasam Powder",
      category: "Spice Blends",
      variants: "50 gm",
      unit_price: 100,
      stock: 0,
      status: "Out of stock",
    },
    {
      product_name: "Rasam Powder",
      category: "Spice Blends",
      variants: "500 gm",
      unit_price: 300,
      stock: 25,
      status: "In stock",
      status_color: "yellow",
    },
    {
      product_name: "Multigrain Atta",
      category: "Flour Packs",
      variants: "1kg",
      unit_price: 200,
      stock: 1,
      status: "Out of stock",
      status_color: "orange",
    },
    {
      product_name: "Finger Millets Noodles",
      category: "Noodle & Pasta",
      variants: "200 gm",
      unit_price: 70,
      stock: 15,
      status: "In stock",
      status_color: "red",
    },
    {
      product_name: "Immumilk",
      category: "Beverage & Mixes",
      variants: "100 gm",
      unit_price: 70,
      stock: 167,
      status: "In stock",
      status_color: "green",
    },
    {
      product_name: "Kokum Rasam Powder",
      category: "Spice Blends",
      variants: "50 gm",
      unit_price: 100,
      stock: 0,
      status: "Out of stock",
    },
  ];
  return (
    <div>
      {/* Heading */}
      <div
        className={`relative overflow-x-scroll w-[80vw] h-[80vh]  overflow-y-scroll   mx-auto  py-5 ${
          !adminSidebarIsOpen ? "sm:w-[85vw]" : "sm:w-[85vw]"
        } `}
      >
        <div className="transition-all sticky  -top-5 bg-white grid justify-between grid-cols-[30px_minmax(300px,1fr)_minmax(150px,200px)_minmax(150px,200px)_minmax(150px,200px)_minmax(150px,200px)_minmax(150px,200px)]     ">
          <div className="  flex justify-center items-center border-b">
            <input type="checkbox" />
          </div>
          <div className=" p-3 border-b bg-white">
            <h1 className="text-gray-500">Product Name</h1>
          </div>
          <div className="  p-3 border-b bg-white">
            <h1 className="text-gray-500">Category</h1>
          </div>
          <div className="  p-3 border-b bg-white">
            <h1 className="text-gray-500">Variant</h1>
          </div>
          <div className="  p-3 border-b bg-white">
            <h1 className="text-gray-500">Unit Price</h1>
          </div>
          <div className="  p-3 border-b bg-white">
            <h1 className="text-gray-500">Stock</h1>
          </div>
          <div className="  p-3 border-b bg-white">
            <h1 className="text-gray-500">Status</h1>
          </div>
        </div>

        <div className="">
          {productListData?.map((data, index) => {
            return (
              <div
                key={index}
                className=" grid justify-between grid-cols-[30px_minmax(300px,1fr)_minmax(150px,200px)_minmax(150px,200px)_minmax(150px,200px)_minmax(150px,200px)_minmax(150px,200px)]  "
              >
                <div className="  flex justify-center items-center border-b">
                  <input
                    type="checkbox"
                    onClick={() => {
                      if (selectedProducts?.includes(data?.product_name)) {
                        setSelectedProducts((selectedProducts) =>
                          arrayRemove(selectedProducts, data?.product_name)
                        );
                      } else {
                        setSelectedProducts((selectedProducts) => [
                          ...selectedProducts,
                          data?.product_name,
                        ]);
                      }
                    }}
                  />
                </div>
                <Link to="/admin/products/productDetails">
                  <div className=" p-3 py-5 flex items-center gap-3 border-b group">
                    <img
                      src={image}
                      alt=""
                      className="w-[50px] aspect-square"
                    />
                    <h1 className="group-hover:underline underline-offset-4 transition-all">
                      {data?.product_name}
                    </h1>
                  </div>
                </Link>
                <div className="  p-3 py-5 flex items-center border-b">
                  <h1>{data?.category}</h1>
                </div>
                <div className="  p-3 py-5 flex items-center border-b">
                  <h1>{data?.variants}</h1>
                </div>
                <div className="  p-3 py-5 flex items-center border-b">
                  <h1>{data?.unit_price}</h1>
                </div>
                <div className="  p-3 py-5 flex items-center border-b">
                  <h1>{data?.stock}</h1>
                </div>
                <div className={` py-5 flex items-center  border-b `}>
                  <div
                    className={`p-2 rounded-full flex gap-2 items-center w-[120px]   ${
                      data?.status === "Out of stock"
                        ? "bg-[#a7090913] text-[#a70909]"
                        : "bg-[#1dff1517] text-[#00ac69]"
                    } `}
                  >
                    <div
                      className={` ${
                        data?.status === "Out of stock"
                          ? "bg-[#a70909]"
                          : "bg-[#00ac69] "
                      }  h-[8px] w-[8px] rounded-full`}
                    ></div>{" "}
                    <h1 className=""> {data?.status}</h1>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="p-10 w-full text-center text-gray-500">
            No more products
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
