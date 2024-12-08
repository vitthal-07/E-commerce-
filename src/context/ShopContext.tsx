import { createContext, ReactNode, useState } from "react";
import { products } from "../assets/assets";
import { Product } from "../types";

export const ShopContext = createContext<ShopContextType>({
  products: [],
  currency: "",
  search: "",
  setSearch: () => {},
  showSearch: false,
  setShowSearch: () => {},
  phoneNumber: "",
});

type ShopContextType = {
  products: Product[];
  currency: string;
  search: string;
  setSearch: (value: string) => void;
  showSearch: boolean;
  setShowSearch: (value: boolean) => void;
  phoneNumber: string;
};

const ShopContextProvider = ({ children }: { children: ReactNode }) => {
  const currency = "₹";
  const phoneNumber = "+919356613671";
  const [search, setSearch] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const value: ShopContextType = {
    products,
    currency,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    phoneNumber,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
