import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { sliderData } from "./SliderData";
import { motion } from "framer-motion";
import { useState } from "react";
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2500,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <Slider {...settings} className="overflow-hidden mx-1">
      {sliderData.map((item, index) => (
        <div key={index} className="relative overflow-hidden group">
          <img
            src={item.image}
            alt={item.name}
            className="w-full rounded-md h-[50vh] object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start px-16 bg-opacity-50 text-white space-y-3">
            {/* Only animate when this slide is active */}
            {index === currentSlide && (
              <>
                <motion.h2
                  initial={{ opacity: 0, y: 34 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className=" text-2xl md:text-4xl font-bold font-mono bg-[#3335] px-2 md:px-5 w-fit md:py-2 rounded-sm md:rounded-xl"
                >
                  {item.name}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 34 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="mb-2 hidden md:block bg-[#3335] px-2 text-lg max-w-md rounded"
                >
                  {item.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 34 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <motion.button
                    whileTap={{ scale: 1.1 }}
                    className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-700  md:btn-sm"
                  >
                    {item.button}
                  </motion.button>
                </motion.div>
              </>
            )}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Hero;
