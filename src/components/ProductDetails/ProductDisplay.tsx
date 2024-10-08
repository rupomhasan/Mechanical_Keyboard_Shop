import { TFeatures, TProducts } from "../../types/product.types";
import { FaRegStar, FaStar } from "react-icons/fa";
import Features from "./Features";
import Quantity from "./Quantity";
import RatingComponent from "../common/RatingComponent";

const ProductDisplay = ({ productData }: { productData: TProducts }) => {
  const {
    image,
    name,
    brand,
    status,
    availableQuantity,
    price,
    discount,
    numberOfReviews,
    features,
    specialPrice,
    averageRating,
  } = productData;

  const handleModal = () => {
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;

    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className="my-10 py-10 px-4">
      <div className="md:flex items-start gap-8">
        <figure className="relative flex-1">
          {discount ? (
            <p className="absolute top-5 left-10 text-xl text-red-500 font-semibold bg-white border border-red-500 shadow-md px-2 py-1 rounded transform -rotate-12">
              {discount}% <span className="text-blue-600">Off</span>
            </p>
          ) : (
            <></>
          )}
          <img
            onClick={handleModal}
            src={image}
            className="w-full max-w-xs mx-auto object-cover rounded-lg shadow-lg cursor-pointer"
            alt="Product"
          />
          <dialog
            id="my_modal_1"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <img
                src={image}
                alt="Product zoom"
                className="rounded-md mx-auto"
              />
              <form method="dialog">
                <button className="btn btn-sm px-5 text-white bg-blue-500 hover:bg-blue-700 mt-4">
                  Close
                </button>
              </form>
            </div>
          </dialog>
        </figure>

        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-semibold text-blue-800 font-serif">
            {name}
          </h3>

          <div>
            <div className="flex gap-2 items-center">
              <RatingComponent
                className="text-orange-300 text-xl"
                initialRating={averageRating}
                emptySymbol={<FaRegStar className="text-blue-500" />}
                fullSymbol={<FaStar />}
                readonly
              />
              <span className="text-xs text-gray-500">
                ({numberOfReviews} Reviews)
              </span>
            </div>
            <h3 className="flex gap-1 items-center">
              Brand :
              <span className="text-gray-500 font-semibold">
                {brand?.brandName}
              </span>
            </h3>
            <h3>
              Status :
              <span className="badge border-blue-500 text-blue-500 ">
                {status}
              </span>
            </h3>

            <h3>
              Available :
              <span className="text-lg font-semibold">{availableQuantity}</span>
              left
            </h3>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <span className="text-lg font-semibold">Price:</span>
              {specialPrice ? (
                <span className="text-lg font-bold text-gray-500 line-through">
                  {price} Taka
                </span>
              ) : (
                <span className="text-lg font-bold">{price} Taka</span>
              )}
            </div>
            {specialPrice && (
              <div className="flex gap-2 items-center">
                <span className="text-lg font-bold text-blue-600">
                  Special Price: {specialPrice} Taka
                </span>
              </div>
            )}
          </div>
          <Features features={features as TFeatures} />
          <Quantity product={productData}  />
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
