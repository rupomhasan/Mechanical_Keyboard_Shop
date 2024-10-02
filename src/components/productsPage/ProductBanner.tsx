import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { setFilter } from "../../redux/features/product/productSlice";

const ProductBanner = ({ route, title }: { route: string; title: string }) => {
  const dispatch = useDispatch();

  const location = useLocation();

  return (
    <div className="mb-20">
      <div className="relative">
        <img
          src="https://img.freepik.com/premium-photo/background-you-can-see-gaming-desk-headset-keyboard-computer-neon-lights-desktop-you-can-see-cyber-sport-equipment-laying-desktop-ready-online-video-gaming-it39s_1257429-61009.jpg"
          className="w-full h-[500px] object-cover rounded-md"
          alt="banner"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent opacity-90 rounded-md"></div>

        <div className="absolute md:left-10 top-1/2 transform -translate-y-1/2 text-white p-4 space-y-4">
          <div className="flex items-center space-x-3 ">
            <Link
              to="/"
              className="text-lg font-semibold text-gray-200 hover:text-gray-100 transition duration-300"
            >
              Home
            </Link>
            <span className="text-lg font-semibold">/</span>
            <p className="text-lg font-serif text-gray-100">{route}</p>
          </div>
          <h2 className="text-xl md:text-4xl font-bold ">{title}</h2>

          {location.pathname === "/products" && (
            <input
              onChange={(e) =>
                dispatch(setFilter({ searchTerm: e.target.value }))
              }
              className="bg-black text-white block  md:min-w-80 py-1 px-5 rounded-md shadow-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Search products..."
            />
          )}

          {location.pathname === "/products" && (
            <Link
              to="/products"
              className="btn btn-sm px-6 bg-blue-500 border-none text-lg text-white hover:bg-blue-600"
            >
              Shop Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
