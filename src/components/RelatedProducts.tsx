import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Product } from "../types";
import Title from "./Title";
import ProductItem from "./ProductItem";

type RelatedProductsProps = {
  category: string;
  subCategory: string;
};
const RelatedProducts = ({ category, subCategory }: RelatedProductsProps) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState<Product[]>([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = [...products];
      productsCopy = productsCopy.filter((product) => {
        return (
          product.category === category && product.subCategory === subCategory
        );
      });
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);
  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            Id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
