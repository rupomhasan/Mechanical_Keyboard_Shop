import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <motion.div
      whileTap={{ scale: 1.4 }}
      className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <IoIosArrowForward />
    </motion.div>
  );
};

export default NextArrow;
