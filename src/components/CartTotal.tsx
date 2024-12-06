import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { motion } from "motion/react"; // Importing framer-motion for animations

const CartTotal = () => {
  const { getCartAmount, currency, deliveryFee } = useContext(ShopContext);

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-2xl">
        <Title text1="CART" text2="TOTAL" />
      </div>

      {/* Total breakdown with animations */}
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <motion.div
          className="flex justify-between"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <p>Subtotal</p>
          <p>
            {currency}
            {getCartAmount()}.00
          </p>
        </motion.div>

        <motion.div
          className="flex justify-between"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <p>Delivery Fee</p>
          <p>
            {currency}
            {deliveryFee}.00
          </p>
        </motion.div>

        <motion.div
          className="flex justify-between"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <b>Total</b>
          <p>
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + deliveryFee}.00
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CartTotal;
