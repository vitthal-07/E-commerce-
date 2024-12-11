import { motion } from "motion/react";
import { useContext, useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useParams } from "react-router-dom";
import RelatedProducts from "../components/RelatedProducts";
import { ShopContext } from "../context/ShopContext";
import { Product } from "../types";

const ProductPage = () => {
  const { productId } = useParams<string>();
  const { products, currency, phoneNumber } = useContext(ShopContext);
  const [productData, setProductData] = useState<Product>();
  const [image, setImage] = useState<string>("");

  const handleOrder = () => {
    const message = `Hello, I am interested in buying the ${productData?.name} priced at ${currency}${productData?.price}. Please provide further details.`;
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
          setImage(item.imageUrls[0]);
          return null;
        }
      });
    };

    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <motion.div
      className="pt-10 transition-opacity ease-in duration-500 opacity-100"
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
            {productData.imageUrls.map((item, index) => (
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
          <h1 className="text-2xl mt-2 font-bold">{productData.name}</h1>
          <motion.p
            className="text-secondary mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {productData.description}
          </motion.p>
          <motion.p
            className="text-2xl font-bold mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {currency}
            {productData.price}
          </motion.p>

          <motion.button
            className="bg-primary flex gap-2 text-text text-md py-2 px-4 active:bg-secondary cursor-pointer mt-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleOrder()}
          >
            <FaWhatsapp className="text-green-500 text-2xl" />
            <h2 className="text-md font-medium text-text">
              Contact for bulk order
            </h2>
          </motion.button>
          <hr className="mt-8 sm:w-4/5" />
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
            className="border px-5 py-3 text-sm"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Description
          </motion.b>
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
        <RelatedProducts category={productData.category} />
      </motion.div>
    </motion.div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default ProductPage;
