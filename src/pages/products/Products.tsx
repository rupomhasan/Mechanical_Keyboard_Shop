import Aside from "../../components/productsPage/aside/Aside";
import ProductBanner from "../../components/productsPage/ProductBanner";
import ProductMain from "../../components/productsPage/ProductMain";

const Products = () => {
  return (
    <div>
      <ProductBanner />
      <div className="md:mx-2">
        <div className="drawer lg:drawer-open lg:gap-6">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <ProductMain />
          <Aside />
        </div>
      </div>
    </div>
  );
};

export default Products;
