import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import { motion } from "motion/react"; // Import Framer Motion

type CartData = {
  _id: string;
  size: string;
  quantity: number;
};

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState<CartData[]>([]);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartData.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }
    navigate("/checkout");
  };

  // Memoize cart data for better performance
  useEffect(() => {
    const data = Object.entries(cartItems).reduce(
      (acc: CartData[], [itemId, sizes]) => {
        Object.entries(sizes).forEach(([size, quantity]) => {
          if (quantity > 0) {
            acc.push({
              _id: itemId,
              size,
              quantity,
            });
          }
        });
        return acc;
      },
      []
    );
    setCartData(data);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1="YOUR" text2="CART" />
      </div>
      <div>
        {cartData.length === 0 ? (
          <div className="text-center text-2xl font-medium">
            Your cart is empty.
          </div>
        ) : (
          cartData.map((item, index) => {
            const product = products.find((p) => p._id === item._id);
            if (!product) return null; // Handle missing product gracefully
            return (
              <motion.div
                className="py-4 border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-6">
                  <img
                    src={product.image[0]}
                    className="w-16 sm:w-20"
                    alt={product.name}
                  />
                  <div>
                    <p className="text-sm sm:text-lg font-medium">
                      {product.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {product.price}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1 border bg-slate-500 text-white">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    e.target.value &&
                    e.target.value !== "0" &&
                    updateQuantity(item._id, item.size, +e.target.value)
                  }
                />
                <motion.img
                  className="w-4 sm:w-5 mr-4 cursor-pointer"
                  src={assets.bin_icon}
                  alt="Remove item"
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            );
          })
        )}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              className="bg-black text-white text-sm my-8 py-3 px-8 active:bg-gray-700"
              onClick={handleCheckout}
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
