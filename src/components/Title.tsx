import { motion } from "motion/react";

type TitleProps = {
  text1: string;
  text2: string;
};

const Title = ({ text1, text2 }: TitleProps) => {
  return (
    <div className="inline-flex gap-2 items-center mb-6">
      {/* Animated text with hover effect */}
      <motion.p
        className="text-text font-semibold text-lg md:text-2xl transition-all duration-300 hover:text-secondary hover:scale-105"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {text1} <span className="text-primary">{text2}</span>
      </motion.p>

      {/* Animated underline with a sleek effect */}
      <motion.div
        className="h-[2px] bg-gradient-to-r from-primary to-secondary mt-1"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      />
    </div>
  );
};

export default Title;
