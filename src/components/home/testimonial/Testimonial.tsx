import Slider from "react-slick";
import { useGetAllReviewQuery } from "../../../redux/features/reviewApi";
import { TReview } from "./review.type";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerPadding: "20px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "10px",
      },
    },
  ],
};

const TestimonialCard = () => {
  const { data } = useGetAllReviewQuery({});
  return (
    <div className="mx-1">
      <h2 className="text-3xl text-slate-600 font-bold text-center mb-8">
        What Our Customers Say
      </h2>
      <div className="overflow-hidden">
        <Slider {...settings}>
          {data?.data?.map((review: TReview, idx: string) => (
            <div key={idx} className="px-4">
              <div className="slider-item bg-blue-50 p-6 rounded-lg">
                <figure className="flex items-center gap-4 mb-4">
                  <img
                    className="w-16 h-16 rounded-full object-cover"
                    src={
                      review.user.photoUrl
                        ? review.user.photoUrl
                        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    }
                    alt={review.user.name}
                  />
                  <div>
                    <p className="text-lg font-semibold">{review.user.name}</p>
                    <p className="text-sm text-gray-500">{review.user.email}</p>
                  </div>
                </figure>

                <div className="mb-4">
                  <p className="text-gray-700">{review.comment}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-500 text-xl font-semibold">
                      {review.rating} ★
                    </span>
                  </div>

                  <div className="text-sm text-gray-500">
                    <p>{review.product.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCard;
