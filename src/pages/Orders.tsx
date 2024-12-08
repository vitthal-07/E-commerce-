import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { motion } from "motion/react"; // Importing motion from framer-motion

const Orders = () => {
  const { currency, products } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1="MY" text2="ORDERS" />
      </div>

      <div className="mt-8">
        {products.slice(2, 5).map((product, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row text-text md:justify-between md:items-center py-6 gap-6 border-t border-secondary"
            initial={{ opacity: 0, y: 20 }} // Initial state for animation
            animate={{ opacity: 1, y: 0 }} // Final state for animation
            transition={{ duration: 0.6, delay: index * 0.2 }} // Delay based on index for staggered animation
          >
            {/* Product Info */}
            <div className="flex items-start gap-6 text-sm md:text-base">
              <motion.img
                src={product.image[0]}
                alt={product.name}
                className="w-16 sm:w-20 object-cover rounded-md shadow-md"
                initial={{ x: -20, opacity: 0 }} // Initial state for the image
                animate={{ x: 0, opacity: 1 }} // Final state for the image
                transition={{ duration: 0.5, delay: index * 0.3 }} // Delay for staggered animation
              />
              <div>
                <p className="font-medium text-text">{product.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg font-semibold">
                    {currency}
                    {product.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="mt-2 text-sm text-text">
                  Date: <span className="text-secondary">25, Jul, 2024</span>
                </p>
              </div>
            </div>

            {/* Order Status and Button */}
            <div className="md:w-1/2 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <motion.p
                  className="min-w-2 h-2 rounded-full bg-green-500"
                  initial={{ scale: 0 }} // Initial scale of the status indicator
                  animate={{ scale: 1 }} // Final scale (full size)
                  transition={{ duration: 0.4 }}
                />
                <p className="text-sm md:text-base text-green-500">
                  Ready to Ship
                </p>
              </div>
              <motion.button
                className="border border-secondary px-4 py-2 text-sm font-medium text-text rounded-md hover:bg-primary hover:text-text transition-all duration-200"
                whileHover={{ scale: 1.1 }} // Button hover effect with scaling
                whileTap={{ scale: 0.95 }} // Button tap effect with smaller scale
                transition={{ duration: 0.2 }}
              >
                Track Order
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
