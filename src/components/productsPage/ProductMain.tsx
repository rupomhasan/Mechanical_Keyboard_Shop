import { useGetAllProductsQuery } from "../../redux/features/productsApi";

import { TProducts } from "../../types/product.types";
import ProductNav from "./ProductNav";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Pagination from "./Pagination";

const ProductMain = () => {
  const filters = useSelector((state: RootState) => state.products.filters);
  const { data } = useGetAllProductsQuery(filters);

  return (
    <div className="drawer-content ">
      <ProductNav />
      <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-4 px-2 py-5 bg-base-200 my-5 rounded">
        {data?.data?.map((product: TProducts, idx: string) => (
          <ProductCard product={product} key={idx} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default ProductMain;
