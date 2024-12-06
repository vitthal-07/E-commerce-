import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { motion } from "motion/react"; // Make sure to use framer-motion instead of 'motion/react'

type ProductItemProps = {
  Id: string;
  image: string[];
  name: string;
  price: number;
};

const ProductItem = ({ Id, image, name, price }: ProductItemProps) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${Id}`} className="text-gray-600 cursor-pointer">
      <motion.div
        className="overflow-hidden relative group"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-xl"
          src={image[0]}
          alt={name}
        />
        <motion.div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>

      <p className="pt-3 pb-1 text-sm font-semibold">{name}</p>

      <motion.p
        className="text-sm font-medium text-gray-800"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        {currency}
        {price}
      </motion.p>
    </Link>
  );
};

export default ProductItem;
