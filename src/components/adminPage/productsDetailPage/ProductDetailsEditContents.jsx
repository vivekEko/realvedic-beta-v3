import React from "react";

const ProductDetailsEditContents = () => {
  const apiData = [
    {
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
    <div>
      {/* Nutritional info */}
      <div>
        <h1 className="text-gray-500 text-sm">Nutritional info per 100g</h1>
        <div className=" border-gray-300 border rounded-md p-5 mt-3 grid grid-cols-2 gap-x-20 gap-y-5">
          {apiData[0]?.nutritional_info?.map((data, index) => {
            return (
              <div key={index} className="flex items-center gap-5 ">
                <label className="w-full max-w-[100px]">{data?.label}</label>
                <div className="flex-1 flex  items-center gap-2 rounded-md  border-gray-400 border px-2">
                  <input
                    type="text"
                    className="p-2  w-full outline-none"
                    defaultValue={data?.value}
                  />
                  <span>{data?.unit}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Metafields */}

      {/* Benefits */}
      <label className=""></label>
    </div>
  );
};

export default ProductDetailsEditContents;
