type ProductImage = string;
export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: ProductImage[];
  category: string;
  subCategory: string;
  sizes: ("S" | "M" | "L" | "XL" | "XXL")[];
  date: number;
  bestseller: boolean;
}

export interface Cart {
  [itemId: string]: {
    [size: string]: number;
  };
}
