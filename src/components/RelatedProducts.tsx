import { useContext, useEffect, useState, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import { Product } from "../types";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { motion, useInView } from "framer-motion";

type RelatedProductsProps = {
  category: string;
  subCategory: string;
};

const RelatedProducts = ({ category, subCategory }: RelatedProductsProps) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState<Product[]>([]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

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
    <motion.div
      className="my-24"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="text-3xl py-2">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {related.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ProductItem
              Id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
              description={item.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default RelatedProducts;
