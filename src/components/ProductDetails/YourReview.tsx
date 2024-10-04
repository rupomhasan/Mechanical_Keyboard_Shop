/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { usePostReviewMutation } from "../../redux/features/reviewApi";
import RatingComponent from "../common/RatingComponent";

const YourReview = ({ id }: { id: string }) => {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const [postReview,] = usePostReviewMutation();


  const handelSubmit = async () => {
    const reviewData = {
      product: id,
      rating,
      comment,
      customerName: name,
    };
    console.log(reviewData);

    try {
   await postReview(reviewData).unwrap();

      setName("");
      setRating(0);
      setComment("");
    } catch (error) {
      console.log("Please fill all fields correctly.");
    }
  };

  return (
    <div className="  my-10 p-5">
      <p className="text-2xl font-bold text-blue-600 mb-2">Your Review</p>

      <div className="border bg-white space-y-2 p-5 ">
        <p className="text-2xl ">
          <RatingComponent
            initialRating={rating}
            fractions={10}
            onChange={(e : any) => setRating(Number(e))}
            fullSymbol={<FaStar className="text-yellow-400 mx-1" />}
            emptySymbol={<FaRegStar className="text-blue-500 mx-1" />}
          />
        </p>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="border border-blue-200 block w-full py-2 px-5"
          placeholder="Name..."
        />
        <textarea
          className="w-full border-blue-200 border py-2 px-5"
          onChange={(e) => setComment(e.target.value)}
          rows={5}
          placeholder="Review..."
          name=""
          id=""
        />

        <button
          onClick={handelSubmit}
          className="btn btn-sm border-blue-300 text-blue-500 px-8  hover:bg-blue-500 hover:text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default YourReview;
