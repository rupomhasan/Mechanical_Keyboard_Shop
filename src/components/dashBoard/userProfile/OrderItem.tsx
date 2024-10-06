import { TbCurrencyTaka } from "react-icons/tb";
import { useGetProductQuery } from "../../../redux/features/productsApi";

const OrderItem = ({ item, idx }) => {
  const { productId, quantity } = item || {};
  const { data, isLoading, isError } = useGetProductQuery(productId);
  const productData = data?.data || {};

  const { name, image, brand, price, specialPrice } = productData;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product details</div>;

  return (
    <div id={idx}>
      <div className="flex gap-1 justify-between">
        <img className="size-40 mx-auto" src={image} alt="keyboard" />
        <div className="space-y-1">
          <p className="text-xl font-semibold font-serif text-blue-500">
            {name}
          </p>
          <p className=" font-semibold">
            Brand : <span className="font-normal">{brand.brandName}</span>
          </p>
          <p className="font-semibold">
            Purchase Quantity : <span className="font-normal">{quantity}</span>
          </p>
          <p className="flex items-center font-semibold">
            price :
            <TbCurrencyTaka />
            <span className="font-normal">
              {specialPrice ? specialPrice : price}
            </span>
          </p>
          <p className="flex items-center font-semibold">
            total price :
            <TbCurrencyTaka />
            <span className="font-normal">
              {specialPrice ? specialPrice * quantity : price * quantity}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;