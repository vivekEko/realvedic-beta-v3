// react
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// State Management (Recoil JS)
import { useRecoilState } from "recoil";
import adminSidebarStatusAtom from "../../../recoil/adminPage/adminSidebar/adminSidebarStatusAtom";
import AdminProductsDetailHeader from "./AdminProductsDetailHeader";
import ProductDetailsEditContents from "./ProductDetailsEditContents";
import ProductDetailsEditForm from "./ProductDetailsEditForm";

const ProductDetails = () => {
  // Global variables
  const [adminSidebarIsOpen, setAdminSidebarIsOpen] = useRecoilState(
    adminSidebarStatusAtom
  );

  // Local variables
  const [apiData, setApiData] = useState({});

  // Detecting parameters
  const parameters = useParams();

  // Api call for product page
  useEffect(() => {
    if (parameters?.product_id) {
      axios
        .post(process.env.REACT_APP_BASE_LINK + "/" + "adminProductDetail", {
          product: parameters?.product_id,
        })
        .then((resp) => {
          setApiData(resp?.data);
        });
    }
  }, [parameters?.product_id]);

  useEffect(() => {
    console.log("apiData:");
    console.log(apiData);
  }, [apiData]);

  return (
    <div
      className={` p-5 pb-10 w-full transition-all duration-500  overflow-hidden ${
        !adminSidebarIsOpen
          ? "pl-[90px] md:pl-[270px]"
          : "pl-[90px] md:pl-[270px]"
      } `}
    >
      <AdminProductsDetailHeader />
      <div className="flex flex-col 2xl:flex-row gap-5 ">
        <div className="flex-1">
          <ProductDetailsEditForm apiData={apiData} setApiData={setApiData} />
        </div>
        <div className="flex-1 ">
          <ProductDetailsEditContents
            apiData={apiData}
            setApiData={setApiData}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
