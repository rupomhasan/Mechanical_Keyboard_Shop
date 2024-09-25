import { TProduct } from "../../../types/product.types";

const Card = ({ product }: { product: TProduct }) => {
  console.log(product);
  const { image, size, name } = product;
  return (
    <div className="card card-compact bg-slate-200 shadow-xl">
      <figure className="p-3">
        <img src={image} className="rounded" alt="keyboard" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{size} Keyboard!</h2>
        <p>{name}</p>
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
