import { useGetAllProductsQuery } from "../../redux/features/productsApi";

import { TProducts } from "../../types/product.types";
import ProductNav from "./ProductNav";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Pagination from "./Pagination";

const ProductMain = () => {
  const filters = useSelector((state: RootState) => state.products.filters);
  const { data, isLoading } = useGetAllProductsQuery(filters);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-screen fixed top-0 left-0">
          <p className="loading loading-spinner loading-md text-blue-500"></p>
        </div>
      ) : (
        <div className="drawer-content ">
          <ProductNav />
          <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-4 px-2 py-5 bg-base-200 my-5 rounded">
            {data?.data?.map((product: TProducts, idx: string) => (
              <ProductCard product={product} key={idx} />
            ))}
          </div>
          <Pagination />
        </div>
      )}
    </>
  );
};

export default ProductMain;
