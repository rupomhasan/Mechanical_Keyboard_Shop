import { useGetAllProductsQuery } from "../../../redux/features/productsApi";
import { TProducts } from "../../../types/product.types";

import Card from "./Card";

const Features = () => {
  const { data } = useGetAllProductsQuery({ limit: 4 });

  return (
    <div className=" mx-1">
      <div className="my-5">
        <h2 className="text-4xl mb-2 font-bold text-slate-600">
          Our features Products
        </h2>
        <p className="max-w-md text-gray-600">
          Our featured product offers top-tier performance, durability, and
          sleek design.
        </p>
      </div>

      <div className="grid  md:grid-cols-3 l xl:grid-cols-4 gap-3">
        {data?.data?.map((item: TProducts, idx: number) => (
          <Card product={item} key={idx} />
        ))}
      </div>
      <div className="text-center">
        <button className="btn bg-blue-500 hover:bg-blue-700 text-white my-10 px-10 ">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Features;
