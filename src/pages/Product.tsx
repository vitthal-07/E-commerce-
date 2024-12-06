import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { ShopContext } from "../context/ShopContext";
import { Product } from "../types";

const ProductPage = () => {
  const { productId } = useParams<string>();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState<Product>();
  const [image, setImage] = useState<string>("");
  const [size, setSize] = useState<string>("");

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
    fetchProductData();
  }, [productId]);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12flex-col sm:flex-row">
        {/* Product image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={productData.name}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-2xl mt-2 font-bold">{productData.name}</h1>
          <div className="flex items-center mt-2 gap-1">
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_icon} alt="" />
            <img src={assets.star_dull_icon} alt="" />
            <p className="pl-2">102</p>
          </div>
          <p className="text-gray-500 mt-3">{productData.description}</p>
          <p className="text-2xl font-bold mt-5">
            {currency}
            {productData.price}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  className={`border border-gray-100 px-4 py-2 ${
                    item === size ? "bg-gray-800 text-white" : ""
                  }`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white text-sm py-3 px-8 active:bg-gray-700"
          >
            Add to cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="textsm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* Descriptin and review section*/}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (102)</p>
        </div>
        <div className="flex flex-col gap-4 p-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae esse
            excepturi vero voluptatum fuga atque eum veritatis aperiam laborum
            dolore possimus numquam fugit, velit praesentium minus accusamus eos
            quod magnam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            sapiente rerum dolor, aut atque, aliquam tempore iste, harum in
            eveniet eum doloremque dolores rem voluptate labore odit veritatis.
            Tempora, quis!
          </p>
        </div>
      </div>
      {/* Display related products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default ProductPage;
