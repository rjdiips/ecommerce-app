import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    // Start loading transition
    setIsLoading(true);

    // Clear previous size selection
    setSize("");

    // Fetch new product data
    fetchProductData();

    // End loading transition after content loads
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [productId, products]);

  return productData ? (
    <div
      className={`border-t border-gray-200 pt-10 transition-all duration-500 ease-in-out transform ${
        isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
      }`}
    >
      {/* ---------- Product Data --------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ---------- Product Images ---------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer transition-all duration-200 hover:opacity-80"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img
              className="w-full h-auto transition-all duration-300 ease-in-out"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* --------- Product Info --------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border border-gray-200 py-2 px-4 cursor-pointer transition-all duration-200 ${
                    item === size
                      ? "bg-black text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 transition-colors duration-200 hover:bg-gray-800">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 border-gray-200" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on delivery is availabe in this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* --------- Description and Review Section --------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border border-gray-200 px-5 py-3 text-sm">
            Description
          </b>
          <p className="border border-gray-200 px-5 py-3 text-sm">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border border-gray-200 px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            aliquam ut odio ac posuere. Donec eu dolor tincidunt nibh dictum
            eleifend ac sed quam. Integer neque nisi, mollis vitae venenatis in,
            pulvinar efficitur urna. Vestibulum quis ipsum sit amet magna
            tincidunt luctus. Nam hendrerit ultrices velit nec viverra. Integer
            ut condimentum sem, quis egestas mauris. Donec quis dignissim nisi.
            Cras ex mi, tempus et eros eget, condimentum luctus lorem. Donec
            turpis dui, mattis non sodales id, venenatis vitae velit. In
            imperdiet elit non ex tempor, eu ullamcorper dui scelerisque.{" "}
          </p>
          <p>
            Maecenas tristique at urna eu feugiat. Duis ut est a metus semper
            tempor id in magna. Nam hendrerit bibendum risus eu sollicitudin.
            Cras tempor efficitur orci, quis tincidunt justo congue vitae. Duis
            condimentum dui ac nisi mattis, ac varius felis malesuada. Etiam
            imperdiet justo ac nulla dapibus consectetur. Mauris condimentum
            odio massa, quis pulvinar erat iaculis et. Sed eu risus metus.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Praesent luctus nisl eu nulla semper facilisis. Aenean a arcu tempor
            turpis tincidunt ultrices ut sagittis urna.{" "}
          </p>
        </div>
      </div>

      {/* ----------- Display Related Products ----------- */}

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
        id={productData._id}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
