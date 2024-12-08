import { useContext, useEffect, useState, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { Product } from "../types";
import ProductItem from "./ProductItem";
import { motion, useInView } from "motion/react";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState<Product[]>();
  const sectionRef = useRef(null); // Reference for the section
  const isInView = useInView(sectionRef, { once: true }); // Trigger animation once when in view

  useEffect(() => {
    setLatestProducts(products.slice(0, 8));
  }, []);

  return (
    <motion.div
      className="my-10"
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="py-8 text-3xl">
        <Title text1="LATEST" text2="COLLECTION" />
        <motion.p
          className="w-3/4 text-xs sm:text-base text-text"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet autem
          voluptatum aut iste, facilis aperiam cumque?
        </motion.p>
      </div>
      {/* Rendering Products */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-6"
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
        {latestProducts?.map((product, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ProductItem
              Id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LatestCollection;
