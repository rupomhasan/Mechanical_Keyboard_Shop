import { TProducts } from "../../../types/product.types";

const Card = ({ product }: { product: TProducts }) => {
  const { image, name } = product;
  return (
    <div className="card card-compact bg-slate-200 border shadow-xl">
      <figure className="p-3 bg-white">
        <img
          src={image}
          className="rounded size-60 object-contain  flex-grow"
          alt="keyboard"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p></p>
        <div className="card-actions justify-end">
          <button className="btn border-none bg-blue-500 text-white">
            Show details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
