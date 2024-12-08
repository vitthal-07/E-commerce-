import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Contact = () => {
  const [message, setMessage] = useState("");
  const { phoneNumber } = useContext(ShopContext);
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(
      `Hello, here is my message:\n\n${message}`
    );
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="transition-opacity ease-in duration-500 opacity-100"
    >
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-text">Contact Us</h1>
        <p className="text-secondary mt-2">
          Get in touch with us through WhatsApp or explore our products!
        </p>
      </motion.div>

      {/* Contact Section */}
      <div className="max-w-4xl bg-primary mx-auto p-6 shadow-md rounded-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <FaWhatsapp className="text-green-500 text-6xl mb-4" />
          <h2 className="text-2xl font-semibold text-text">
            Contact via WhatsApp
          </h2>
          <p className="text-secondary mt-2">
            Have questions? Reach out to us directly via WhatsApp. We're here to
            help!
          </p>
          <textarea
            className="border border-secondary bg-background text-text py-1.5 px-3.5 w-full mt-4"
            placeholder="Type your message here..."
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            className="bg-primary text-text text-sm my-8 py-3 px-8 active:bg-gray-700"
            onClick={handleWhatsAppClick}
          >
            Send Message
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
