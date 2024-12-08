import React, { useContext } from "react";
import ProductItem from "@/components/ProductItem";
import { ShopContext } from "@/context/ShopContext";
import { motion } from "motion/react";
import { Product } from "@/types";

const Collection: React.FC = () => {
  const { products, search } = useContext(ShopContext);

  // Function to create a case-insensitive search regex with word boundaries
  const createSearchRegex = (term: string) => {
    return new RegExp(`\\b${term}\\b`, "i");
  };

  // Filter products based on the search query
  const filteredProducts: Product[] = search
    ? products.filter((product) => {
        const searchRegex = createSearchRegex(search);
        return (
          searchRegex.test(product.name) ||
          searchRegex.test(product.category) ||
          searchRegex.test(product.description)
        );
      })
    : products;

  // Group products by category
  const groupedProducts = filteredProducts.reduce<Record<string, Product[]>>(
    (acc, product) => {
      if (!acc[product.category]) acc[product.category] = [];
      acc[product.category].push(product);
      return acc;
    },
    {}
  );

  return (
    <div className="py-10 px-20">
      {Object.keys(groupedProducts).length > 0 ? (
        Object.entries(groupedProducts).map(([category, categoryProducts]) => (
          <motion.div
            key={category}
            className="mb-10"
            initial="hidden"
            animate="visible"
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
            {/* Category Heading */}
            <h2 className="text-2xl font-bold mb-6">{category}</h2>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-6">
              {categoryProducts.map((product) => (
                <motion.div
                  key={product._id}
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
                    description={product.description}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))
      ) : (
        <p className="text-center text-xl text-gray-500">
          No products found for your search.
        </p>
      )}
    </div>
  );
};

export default Collection;
