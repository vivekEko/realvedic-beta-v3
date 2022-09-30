import React, { useEffect, useState } from "react";

// Icons

const ProductDetailsEditContents = (props) => {
  //  local variables
  const [selectedMetaField, setSelectedMetaField] = useState();
  const [metaData, setMetaData] = useState();
  const [nutritionalData, setNutritionalData] = useState();

  useEffect(() => {
    setSelectedMetaField(0);
    setMetaData(props?.apiData?.meta_field);
    setNutritionalData(props?.apiData?.nutritional_info);

    console.log(props?.apiData);
  }, [props?.apiData]);

  return (
    <div>
      {/* Nutritional info */}
      <div>
        <h1 className="text-gray-500 text-sm">Nutritional info per 100g</h1>
        <div className=" border-gray-300 border rounded-md p-5 mt-3 grid grid-cols-2 gap-x-20 gap-y-5">
          {props?.apiData?.nutritional_info?.map((data, index) => {
            return (
              <div key={index} className="flex items-center gap-5 ">
                <label className="w-full max-w-[100px]">{data?.label}</label>
                <div className="flex-1 flex  items-center gap-2 rounded-md  border-gray-400 border px-2">
                  <input
                    type="text"
                    className="p-2  w-full outline-none"
                    defaultValue={data?.value}
                    // onChange={
                    //   () => {
                    //     props?.setApiData(prevState => {
                    //       const newState = prevState.map(obj => {
                    //         // 👇️ if id equals 2, update country property
                    //         if (obj.id === 2) {
                    //           return {...obj, country: 'Denmark'};
                    //         }

                    //         // 👇️ otherwise return object as is
                    //         return obj;
                    //       });

                    //       return newState;
                    //     });
                    //   };
                    //   }
                    // }
                  />
                  <span>{data?.unit}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Metafields */}

      <h1 className="text-gray-500 text-sm mt-5">Metafields</h1>
      <div className="mt-3 border rounded-md flex items-start  gap-5">
        {/* Labels */}
        <div className="flex flex-col   border-r rounded-md">
          {props?.apiData?.meta_field?.map((data, index) => {
            return (
              <div
                key={index}
                className={` ${
                  selectedMetaField === index ? "bg-[#fcedd1]" : ""
                } w-full min-w-[200px]  flex justify-start items-center border-b p-5 rounded-b-md cursor-pointer`}
                onClick={() => setSelectedMetaField(index)}
              >
                <h1>{data?.label}</h1>
              </div>
            );
          })}
        </div>

        {/* desc */}
        <div className="py-5 pr-5 text-sm flex justify-center items-center">
          <textarea
            rows={8}
            cols={100}
            className="w-full h-full p-5 border rounded-md outline-none"
            value={metaData?.[selectedMetaField]?.desc}
            onChange={(e) =>
              setMetaData((metaData) =>
                metaData?.map((data, index) => {
                  if (index === selectedMetaField) {
                    return {
                      ...data,
                      desc: e?.target?.value,
                    };
                  }

                  return data;
                })
              )
            }
          />
        </div>
      </div>

      {/* Reviews */}

      <div className="border rounded-md mt-5 p-5 pr-0">
        <div>
          <h1>Reviews</h1>
        </div>

        <div className="mt-5 max-h-[352px] overflow-y-scroll pr-5">
          {props?.apiData?.reviews?.map((data, index) => {
            return (
              <div key={index} className="mb-5 border-b pb-5">
                <div className="flex items-start gap-5">
                  <div className="aspect-square min-w-[40px] max-w-[50px] w-[20%] text-sm bg-[#fcedd1] rounded-full flex justify-center items-center">
                    {data?.cust_name?.split(" ")[0]?.split("")[0]}
                    {data?.cust_name?.split(" ")[1]?.split("")[0]}
                  </div>

                  <div>
                    <h1> {data?.cust_name}</h1>
                    <h3 className="text-gray-500 text-xs mb-2">
                      21 Sep 2022 | 2:03 pm
                    </h3>
                    <p className="text-sm text-gray-800">{data?.review}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsEditContents;
