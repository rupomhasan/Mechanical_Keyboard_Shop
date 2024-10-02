import { useGetProductReviewQuery } from "../../redux/features/reviewApi";
import { TReview } from "../../types/review.types";
import { FaRegStar, FaStar } from "react-icons/fa";
import RatingComponent from "../common/RatingComponent";
const CustomerReviews = ({ id }: { id: string }) => {
  const { data: reviews } = useGetProductReviewQuery(id);

  return (
    <div className="my-10 p-5">
      <h2 className="text-2xl font-bold text-blue-600 mb-2">
        Customer Reviews
      </h2>
      <ul className="space-y-4">
        {reviews?.data?.map((review: TReview) => (
          <div
            key={review._id}
            className="border border-blue-200 p-4 rounded-md bg-white shadow-md"
          >
            <div>
              <RatingComponent
                fullSymbol={<FaStar className="text-yellow-400 " />}
                emptySymbol={<FaRegStar />}
                initialRating={review?.rating}
              />
            </div>

            <h3 className="font-semibold">{review.customerName}</h3>

            <p
              className="mt-2 
            "
            >
              {review.comment}
              <span className="text-xs text-gray-400">
                (by {review.customerName})
              </span>
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CustomerReviews;
