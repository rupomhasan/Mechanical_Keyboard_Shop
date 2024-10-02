import React from "react";
import { TFeatures } from "../../types/product.types";

const Features = ({ features }: { features: TFeatures }) => {
  const { size, keys, battery, weight } =
    features;
  return (
    <div>
      <div>
        <p className="text-xl underline underline-offset-2 font-serif font-semibold text-gray-600">
          Features :
        </p>
        <ul className="my-2  text-gray-500">
          {keys && <li> keys : {keys}</li>}{" "}
          {size && <li> Keyboard Size : {size}</li>}{" "}
          {weight && <li> weight : {weight}</li>}
          {battery && <li> Battery : {battery}</li>}
        </ul>
      </div>
    </div>
  );
};

export default Features;
