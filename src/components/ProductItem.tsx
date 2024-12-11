import { motion } from "motion/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type ProductItemProps = {
  Id: string;
  image: string[];
  name: string;
  price: number;
  description: string;
};

const ProductItem = ({
  Id,
  image,
  name,
  price,
  description,
}: ProductItemProps) => {
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
            <CardTitle className="text-lg font-semibold text-text truncate line-clamp-1">
              {name}
            </CardTitle>
            <CardDescription className="text-secondary line-clamp-3">
              {description}
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
