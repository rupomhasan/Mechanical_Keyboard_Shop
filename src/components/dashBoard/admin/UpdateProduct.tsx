import { useState } from "react";
import { useGetAllBrandQuery } from "../../../redux/features/brandApi";
import {
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../../redux/features/productsApi";
import { TFeatures, TProducts } from "../../../types/product.types";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import { TBrand } from "../../../types/brand.types";
import FormInput from "../../form/FormInput";
import Form from "../../form/Form";
type TProductData = {
  name: string;
  image: string;
  quantity: number;
  price: number;
  discount?: number;
  width: number;
  height: number;
  length: number;
  weight: number;
  keys?: number;
  battery?: string;
  mode?: string;
  connectivity?: string;
  lighting?: boolean;
  Switch?: string;
  SwitchLifecycle?: string;
  size?: string;
};
const UpdateProduct = () => {
  const { id } = useParams();

  const { data: product, isLoading } = useGetProductQuery(id);
  console.log(product?.data);
  const [updateProduct] = useUpdateProductMutation();
  const { data: brands } = useGetAllBrandQuery({});
  const [description, setDescription] = useState(product?.data?.description);
  const [brand, setBrand] = useState(product?.data?._id);
  const [type, setType] = useState(product?.data?.type);
  const [status, setStatus] = useState(product?.data?.status);

  const handleSubmit = async (data: TProductData) => {
    const {
      name,
      image,
      quantity,
      price,
      discount,
      width,
      height,
      length,
      weight,
      keys,
      battery,
      mode,
      connectivity,
      lighting,
      Switch,
      SwitchLifecycle,
      size,
    } = data;

    const dimensions = {
      length: Number(length),
      width: Number(width),
      height: Number(height),
    };

    const features: TFeatures = {
      size,
      keys: Number(keys),
      SwitchLifecycle,
      Switch,
      mode,
      battery,
      lighting: String(lighting),
      weight: String(weight),
    };

    const productInfo: TProducts = {
      name,
      description,
      image,
      brand,
      status: status,
      type,
      productsQuantity: Number(quantity),
      price: Number(price),
      discount: Number(discount),
      dimensions,
      features,
      connectivity,
    };

    try {
      const res = await updateProduct({ productInfo, productId: id });
      console.log("res => ", res);
      if (res.data) {
        toast.success(" Successfully Add keyboard", { duration: 2000 });
      }
      if (res.error) {
        toast.error("Something went wrong", { duration: 2000 });
      }
    } catch (error) {
      toast.error("Something went wrong", { duration: 2000 });
    }
  };
  return (
    <div className="">
      <div>
        <h3 className="text-2xl font-bold font-serif text-blue-500  mt-10">
          Update product
        </h3>
      </div>
      {isLoading ? (
        <span className="" />
      ) : (
        <div className="px-2 md:px-5 py-10 shadow-xl m-2 md:m-5 ">
          <Form onSubmit={handleSubmit}>
            <div className="grid  md:grid-cols-2 gap-4">
              <FormInput
                defaultValue={product?.data?.name}
                type="text"
                name="name"
                label="Product Name"
              />
              <FormInput
                defaultValue={product?.data?.productsQuantity}
                type="number"
                name="quantity"
                label="Quantity"
              />
              <FormInput
                defaultValue={product?.data?.price}
                type="number"
                name="price"
                label="Price"
              />
              <FormInput
                defaultValue={product?.data?.discount}
                type="number"
                name="discount"
                label="Discount"
              />
              <FormInput
                defaultValue={product?.data?.weight}
                label="Weight"
                type="text"
                name="weight"
              />
              <FormInput
                defaultValue={product?.data?.features?.size}
                label="Size"
                type="text"
                name="size"
              />
              <FormInput
                defaultValue={product?.data?.features?.keys}
                label="keys"
                type="text"
                name="keys"
              />
              <FormInput
                defaultValue={product?.data?.features?.lighting}
                label="Lighting"
                type="text"
                name="lighting"
              />
              <FormInput
                defaultValue={product?.data?.connectivity}
                label="Connectivity"
                type="text"
                name="connectivity"
              />
              <FormInput
                defaultValue={product?.data?.features?.mode}
                label="Mode"
                type="text"
                name="mode"
              />
              <FormInput
                defaultValue={product?.data?.features?.battery}
                label="Battery"
                type="text"
                name="battery"
              />
              <FormInput
                defaultValue={product?.data?.features?.SwitchLifecycle}
                label="SwitchLifecycle"
                type="text"
                name="SwitchLifecycle"
              />
              <FormInput
                defaultValue={product?.data?.features?.Switch}
                label="Switch"
                type="text"
                name="Switch"
              />
            </div>
            <div className="grid md:grid-cols-2 mb-4 gap-5">
              <div className="space-y-4">
                <div>
                  <label className="font-bold block mb-2">Brand:</label>
                  <select
                    defaultValue={product?.data?.brand?._id}
                    className="text-center py-1 rounded border-none"
                    onChange={(e) => setBrand(e.target.value)}
                  >
                    {brands?.data?.map((brand: TBrand, idx: number) => (
                      <option key={idx} value={brand._id}>
                        {brand.brandName}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-bold block mb-2">Status:</label>
                  <select
                    defaultValue={product?.data?.status}
                    className="text-center py-1 rounded border-none"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="instock">InStock</option>
                    <option value="preorder">PreOrder</option>
                    <option value="outofstock">Out of stock</option>
                    <option value="upcoming">UpComing</option>
                  </select>
                </div>
                <div className="">
                  <label className="font-bold mb-2 block">Type:</label>
                  <select
                    defaultValue={product?.data?.type}
                    className="text-center py-1 rounded border-none px-2"
                    name="type"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="standard">Standard</option>
                    <option value="gaming">Gaming</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="font-bold">Dimensions (L, W , H)cm:</label>
                <FormInput
                  defaultValue={product?.data?.dimensions?.length}
                  type="number"
                  name="length"
                  label="Length"
                />
                <FormInput
                  defaultValue={product?.data?.dimensions?.width}
                  type="number"
                  name="width"
                  label="Width"
                />
                <FormInput
                  defaultValue={product?.data?.dimensions?.height}
                  type="number"
                  name="height"
                  label="Height"
                />
              </div>
            </div>
            <FormInput
              defaultValue={product?.data?.image}
              label="Product Image"
              type="text"
              name="image"
            />

            <div>
              <div>
                <label className="block font-bold">Description:</label>
                <textarea
                  defaultValue={product.data.description}
                  className="border w-full p-3 py-4  mt-2 rounded"
                  name="description "
                  rows={7}
                  placeholder="Write..."
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600 w-full "
              type="submit"
            >
              Update
            </button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default UpdateProduct;
