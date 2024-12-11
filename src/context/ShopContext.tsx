import { getAllProducts } from "@/api/products";
import { Product } from "@/types";
import { createContext, ReactNode, useEffect, useState } from "react";

export const ShopContext = createContext<ShopContextType>({
  products: [],
  currency: "",
  search: "",
  setSearch: () => {},
  showSearch: false,
  setShowSearch: () => {},
  phoneNumber: "",
  loading: true,
});

type ShopContextType = {
  products: Product[];
  currency: string;
  search: string;
  setSearch: (value: string) => void;
  showSearch: boolean;
  setShowSearch: (value: boolean) => void;
  phoneNumber: string;
  loading: boolean;
};

const ShopContextProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const currency = "₹";
  const phoneNumber = "+919356613671";
  const [search, setSearch] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await getAllProducts();
      setProducts(response);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const value: ShopContextType = {
    products,
    currency,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    phoneNumber,
    loading,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
