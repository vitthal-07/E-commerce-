type ProductImage = string;
export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: ProductImage[];
  category: "Women" | "Men" | "Kids";
  subCategory: "Topwear";
  sizes: ("S" | "M" | "L" | "XL" | "XXL")[];
  date: number;
  bestseller: boolean;
}

export interface Cart  {
  [itemId: string]: {
    [size: string]: number;
  };
};