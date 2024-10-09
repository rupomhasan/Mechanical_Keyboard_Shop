import { TProducts } from "../../types/product.types";

const Specification = ({ product }: { product: TProducts }) => {
  const {
    name,
    description,
    brand,
    price,
    discount,
    category,
    connectivity,
    dimensions,
    features,
  } = product;

  const { size, keys, Switch, SwitchColor, mode, battery, lighting, weight } =
    features || {};

  return (
    <div className="p-5">
      <div className="mb-5">
        <h4 className="bg-white py-2 px-5 my-5 text-2xl font-bold text-blue-600">
          Keyboard Specifications
        </h4>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h5 className="font-semibold text-xl mb-3">{name}</h5>
        <p className="mb-3">{description}</p>
        <p className="font-medium text-gray-700">
          Brand: <span className="text-black">{brand.brandName}</span>
        </p>
        <p className="font-medium text-gray-700">
          Category: <span className="text-black">{category}</span>
        </p>
        <p className="font-medium text-gray-700">
          Price: <span className="text-black">${price}</span>
        </p>
        {discount && (
          <p className="font-medium text-red-500">
            Discount: <span className="text-black">{discount}%</span>
          </p>
        )}
      </div>

      <div className="mt-6">
        <h4 className="text-2xl font-semibold mb-4">Key Features</h4>
        <ul className="list-disc list-inside space-y-2">
          {size ? (
            <li>
              <span className="font-semibold">Size:</span> {size}
            </li>
          ) : (
            <></>
          )}
          <li>
            <span className="font-semibold">Keys:</span> {keys}
          </li>
          <li>
            <span className="font-semibold">Switch Type:</span> {Switch}
          </li>
          <li>
            <span className="font-semibold">Switch Color:</span> {SwitchColor}
          </li>
          <li>
            <span className="font-semibold">Mode:</span> {mode}
          </li>
          <li>
            <span className="font-semibold">Battery:</span> {battery}
          </li>
          <li>
            <span className="font-semibold">Lighting:</span> {lighting}
          </li>
          <li>
            <span className="font-semibold">Weight:</span> {weight}g
          </li>
          <li>
            <span className="font-semibold">Connectivity:</span> {connectivity}
          </li>
          <li>
            <span className="font-semibold">Dimensions:</span>{" "}
            {dimensions?.height}x{dimensions?.length}x{dimensions?.width}mm
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Specification;
