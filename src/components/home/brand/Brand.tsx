import Slider from "react-slick";
import { useGetAllBrandQuery } from "../../../redux/features/brandApi";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  autoplay: true,
  autoplaySpeed: 2000,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const Brand = () => {
  const { data } = useGetAllBrandQuery({});

  return (
    <div className="slider-container overflow-hidden">
      <Slider {...settings}>
        {data?.data?.map(
          (
            item: { logo: string; _id: string; brandName: string },
            idx: string
          ) => (
            <div key={idx}>
              <figure className="flex justify-center">
                <img
                  src={item.logo}
                  className=" size-32 text-center  object-contain hover:cursor-pointer"
                  alt={item.brandName}
                />
              </figure>
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default Brand;
