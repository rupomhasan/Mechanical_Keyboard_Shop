import { HiShoppingCart } from "react-icons/hi";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { TProducts } from "../../types/product.types";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: TProducts }) => {
  const { price, name, features, image, status, brand, _id } = product;

  return (
    <div className="card rounded-xl card-compact bg-white  shadow-xl">
      <Link to={`/product/${_id}`}>
        <img
          src={image}
          className="size-60 object-contain mx-auto  "
          alt="keyboard"
        />
      </Link>
      <div className="card-body  bg-blue-50 rounded-b-xl">
        <Link to={`/product/${_id}`} className="card-title   text-gray-600">
          {name}
        </Link>
        <ul className="list-inside text-xs   text-gray-600">
          <li className="flex items-center">
            <VscDebugBreakpointData className="text-xs" />
            Keyboard size : {features?.size}
          </li>
          <li className="flex items-center">
            <VscDebugBreakpointData className="text-xs" />
            Switch : {features?.Switch}
          </li>
          <li className="flex items-center">
            <VscDebugBreakpointData className="text-xs" />
            Keys : {features?.keys}
          </li>
          <li className="flex items-center">
            <VscDebugBreakpointData className="text-xs" />
            Mode : {features?.mode}
          </li>
          <li className="flex items-center">
            <VscDebugBreakpointData className="text-xs" />
            Brand : {brand.brandName}
          </li>
        </ul>
        <div className=" bg-gray-300 my-2 h-[1px] "></div>
        <p className="flex  justify-center items-center text-xl text-red-600 font-semibold font-serif  ">
          {price}
          <TbCurrencyTaka />
        </p>
        {status === "outofstock" ? (
          <button className="btn btn-sm text-[16px]  disabled  text-gray-500">
            <HiShoppingCart />
            {status}
          </button>
        ) : (
          ""
        )}{" "}
        {status === "instock" ? (
          <button className="btn btn-sm text-[16px] text-blue-500 hover:bg-blue-500 hover:text-white">
            <HiShoppingCart />
            Buy Now
          </button>
        ) : (
          ""
        )}
        {status === "upcoming" ? (
          <button className="btn btn-sm text-[16px]  ">
            <HiShoppingCart />
            up coming
          </button>
        ) : (
          ""
        )}
        {status === "preorder" ? (
          <button className="btn btn-sm text-[16px] text-green-600">
            <HiShoppingCart />
            Pre Order
          </button>
        ) : (
          ""
        )}
        <button className="btn btn-sm btn-ghost font-medium ">
          <MdOutlineAddToPhotos />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
