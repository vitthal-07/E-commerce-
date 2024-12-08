import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { ShopContext } from "../context/ShopContext";
import { Product } from "../types";
import { motion } from "motion/react";

const ProductPage = () => {
  const { productId } = useParams<string>();
  const { products, currency, addToCart, phoneNumber } =
    useContext(ShopContext);
  const [productData, setProductData] = useState<Product>();
  const [image, setImage] = useState<string>("");
  const [size, setSize] = useState<string>("");

  const handleBuyNow = (productId: string, size: string) => {
    if (!size) {
      alert("Please select a size before proceeding!");
      return;
    }

    const message = `Hello, I am interested in buying the ${productData?.name} (Size: ${size}) priced at ${currency}${productData?.price}. Please provide further details.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  useEffect(() => {
    const fetchProductData = async () => {
      products.map((item) => {
        if (item._id === productId) {
          setProductData(item);
          setImage(item.image[0]);
          return null;
        }
      });
    };

    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <motion.div
      className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <motion.div
            className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {productData.image.map((item, index) => (
              <motion.img
                key={index}
                src={item}
                alt={productData.name}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setImage(item)}
              />
            ))}
          </motion.div>

          <motion.div
            className="w-full sm:w-[80%]"
            whileHover={{
              scale: 1.05,
              rotate: 2,
            }}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 400,
            }}
          >
            <motion.img
              className="w-full h-auto"
              src={image}
              alt={productData.name}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            />
          </motion.div>
        </div>

        {/* Product Info */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-2xl mt-2 font-bold text-text">
            {productData.name}
          </h1>
          <motion.div
            className="flex items-center mt-2 gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {Array(4)
              .fill("")
              .map((_, index) => (
                <motion.img
                  key={index}
                  src={assets.star_icon}
                  alt="star icon"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            <motion.img
              src={assets.star_dull_icon}
              alt="star dull icon"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
            <p className="pl-2 text-text">102</p>
          </motion.div>
          <motion.p
            className="text-secondary mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {productData.description}
          </motion.p>
          <motion.p
            className="text-2xl font-bold mt-5 text-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {currency}
            {productData.price}
          </motion.p>

          {/* Size Selection */}
          <motion.div
            className="flex flex-col gap-4 my-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <p className="text-text">Select size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <motion.button
                  key={index}
                  className={`border border-gray-100 px-4 py-2 ${
                    item === size ? "bg-primary text-text" : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSize(item)}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row sm:gap-4">
            <motion.button
              onClick={() => addToCart(productData._id, size)}
              className="bg-primary text-text text-sm py-3 px-8 active:bg-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Add to cart
            </motion.button>
            <motion.button
              onClick={() => handleBuyNow(productData._id, size)}
              className="bg-primary text-text text-sm py-3 px-8 active:bg-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Buy now
            </motion.button>
          </div>
          <hr className="mt-8 sm:w-4/5 border-secondary" />
          <div className="text-sm text-secondary mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </motion.div>
      </div>

      {/* Description and Review Section */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex">
          <motion.b
            className="border px-5 py-3 text-sm text-text"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Description
          </motion.b>
          <motion.p
            className="border px-5 py-3 text-sm text-text"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Reviews (102)
          </motion.p>
        </div>
        <motion.div
          className="flex flex-col gap-4 p-6 text-sm text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae esse
            excepturi vero voluptatum fuga atque eum veritatis aperiam laborum
            dolore possimus numquam fugit, velit praesentium minus accusamus eos
            quod magnam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            sapiente rerum dolor, aut atque, aliquam tempore iste, harum in
            eveniet eum doloremque dolores rem voluptate labore odit veritatis.
            Tempora, quis!
          </p>
        </motion.div>
      </motion.div>

      {/* Display Related Products */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <RelatedProducts
          category={productData.category}
          subCategory={productData.subCategory}
        />
      </motion.div>
    </motion.div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default ProductPage;
