import Slider from "react-slick";
import { useGetAllProductsQuery } from "../../redux/features/productsApi";
import { TProducts } from "../../types/product.types";
import ProductCard from "../productsPage/ProductCard";

const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const RecommendedProducts = () => {
  const { data } = useGetAllProductsQuery({ limit: 6 });

  return (
    <div className="my-10 p-5">
      <p className="text-2xl font-bold text-blue-600 mb-2">Recommended</p>
      <div className="overflow-hidden">
        <Slider {...settings} className="">
          {" "}
          {/* Apply gap between slides */}
          {data?.data?.map((product: TProducts, idx: string) => (
            <div key={idx} className="px-2">
              <ProductCard product={product}></ProductCard>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecommendedProducts;
