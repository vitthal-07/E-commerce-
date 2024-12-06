import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { getCartAmount, currency, deliveryFee } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1="CART" text2="TOTAL" />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Fee</p>
          <p>
            {currency}
            {deliveryFee}.00
          </p>
        </div>
        <div className="flex justify-between">
          <b>Total</b>
          <p>
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + deliveryFee}.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
