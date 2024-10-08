import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../redux/features/productsApi";
import ProductDisplay from "../../components/ProductDetails/ProductDisplay";
import Specification from "../../components/ProductDetails/Specification";
import { TProducts } from "../../types/product.types";
import YourReview from "../../components/ProductDetails/YourReview";
import CustomerReviews from "../../components/ProductDetails/CustomerReviews";
import RecommendedProducts from "../../components/ProductDetails/RecommendedProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetProductQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product details</div>;

  const productData = data?.data || {};

  return (
    <div>
      <div className="bg-base-200">
        <ProductDisplay productData={productData} />
      </div>
      <div className="bg-base-200">
        <Specification product={productData as TProducts} />
      </div>
      <div className="bg-base-200">
        <CustomerReviews id={productData._id as string} />
      </div>
      <div className="bg-base-200">
        <YourReview id={productData._id as string} />
      </div>
      <div className="bg-base-200">
        <RecommendedProducts />
      </div>
    </div>
  );
};

export default ProductDetails;
