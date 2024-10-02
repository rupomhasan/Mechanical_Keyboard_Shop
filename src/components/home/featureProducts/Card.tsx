import { Link } from "react-router-dom";
import { TProducts } from "../../../types/product.types";
import { TbCurrencyTaka } from "react-icons/tb";

const Card = ({ product }: { product: TProducts }) => {
  const { _id, image, name, description, price } = product;
  return (
    <div className="card card-compact bg-base-200 border shadow-xl">
      <Link to={`/product/${_id}`} className="p-3 bg-white">
        <img
          src={image}
          className="rounded size-60 object-contain  flex-grow"
          alt="keyboard"
        />
      </Link>
      <div className="card-body">
        <Link to={`/product/${_id}`}>
          <h2 className="card-title hover:link-info">{name}</h2>
        </Link>
        <p>{description}</p>
        <p className="text-[16px] text-blue-500 flex items-center font-semibold">
          Special Price:
          <span className="flex items-center">
            {price}
            <TbCurrencyTaka className="text-lg" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
