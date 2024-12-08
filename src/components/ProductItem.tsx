import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { motion } from "motion/react"; 

type ProductItemProps = {
  Id: string;
  image: string[];
  name: string;
  price: number;
};

const ProductItem = ({ Id, image, name, price }: ProductItemProps) => {
  const { currency } = useContext(ShopContext);

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="rounded-lg shadow-md hover:shadow-lg"
    >
      <Link to={`/product/${Id}`} className="block">
        <Card className="overflow-hidden">
          <CardHeader className="p-0 relative">
            <motion.img
              src={image[0]}
              alt={name}
              className="w-full h-[350px] object-cover transition-transform duration-300 ease-in-out"
            />
          </CardHeader>
          <CardContent className="p-4 bg-background">
            <CardTitle className="text-lg font-semibold text-text truncate">
              {name}
            </CardTitle>
            <CardDescription className="text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptas?
            </CardDescription>
          </CardContent>
          <CardFooter className="flex items-center justify-between px-4 py-2 bg-background border-t">
            <p className="text-lg font-medium text-text">
              {currency}
              {price}
            </p>
            <button className="px-4 py-1 text-lg text-text bg-primary rounded-lg">
              View Details
            </button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProductItem;
