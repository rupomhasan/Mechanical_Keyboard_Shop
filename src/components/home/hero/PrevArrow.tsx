import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <motion.button
      whileTap={{ scale: 1.4 }}
      className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <IoIosArrowBack />
    </motion.button>
  );
};
export default PrevArrow;
