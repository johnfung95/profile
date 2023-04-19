import { motion } from "framer-motion";

const SlideAnimate = ({ children }) => {
  return (
    <motion.div
      className="text-base mx-4 mb-2"
      layout
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        default: {
          ease: "easeOut",
          duration: 1.5,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideAnimate;
