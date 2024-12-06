import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { Product } from "../types";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState<Product[]>();

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTION" />
        <p className="w-3/4 m-auto text-xs sm:text-base text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet autem
          voluptatum aut iste, facilis aperiam cumque?
        </p>
      </div>
      {/* rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts?.map((product,index) => (
        <ProductItem key={index} Id={product._id} image={product.image} name={product.name} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
