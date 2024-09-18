import { useGetAllProductsQuery } from "../../redux/features/productsApi";

const Products = () => {
  const { data, isLoading } = useGetAllProductsQuery(null);
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>All products are retrieved here</>
      )}
    </div>
  );
};

export default Products;
