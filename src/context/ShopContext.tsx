import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";
import { products } from "../assets/assets";
import { Cart, Product } from "../types";

export const ShopContext = createContext<ShopContextType>({
  products: [],
  currency: "",
  deliveryFee: 0,
  search: "",
  setSearch: () => {},
  showSearch: false,
  setShowSearch: () => {},
  cartItems: {},
  addToCart: () => {},
  getCartCount: () => 0,
  updateQuantity: () => {},
  getCartAmount: () => 0,
  phoneNumber: "",
});

type ShopContextType = {
  products: Product[];
  currency: string;
  deliveryFee: number;
  search: string;
  setSearch: (value: string) => void;
  showSearch: boolean;
  setShowSearch: (value: boolean) => void;
  cartItems: Cart;
  addToCart: (itemId: string, size: string) => void;
  getCartCount: () => number;
  updateQuantity: (itemId: string, size: string, quantity: number) => void;
  getCartAmount: () => number;
  phoneNumber: string;
};

const ShopContextProvider = ({ children }: { children: ReactNode }) => {
  const currency = "$";
  const deliveryFee = 10;
  const phoneNumber = "+919356613671";
  const [search, setSearch] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Cart>({});

  const addToCart = (itemId: string, size: string) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }
    const cartData: Cart = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = { [size]: 1 };
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let count = 0;
    for (const item in cartItems) {
      for (const size in cartItems[item]) {
        try {
          if (cartItems[item][size] > 0) {
            count += cartItems[item][size];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return count;
  };

  const updateQuantity = (itemId: string, size: string, quantity: number) => {
    const cartData: Cart = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let amount = 0;
    for (const item in cartItems) {
      const product = products.find((p) => p._id === item);
      for (const size in cartItems[item]) {
        try {
          if (cartItems[item][size] > 0 && product) {
            amount += product.price * cartItems[item][size];
          }
        } catch (error) {
          console.log("error", error);
        }
      }
    }
    return amount;
  };

  const value: ShopContextType = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    phoneNumber,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
