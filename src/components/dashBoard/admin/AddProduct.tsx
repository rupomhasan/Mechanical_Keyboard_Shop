import { useState } from "react";
import Form from "../../form/Form";
import FormInput from "../../form/FormInput";
import { useGetAllBrandQuery } from "../../../redux/features/brandApi";
import { toast } from "sonner";
import { useCreateProductMutation } from "../../../redux/features/productsApi";
import { TProducts } from "../../../types/product.types";
import { TBrand } from "../../../types/brand.types";

const AddProduct = () => {
  const { data: brands } = useGetAllBrandQuery({});
  const [addProduct] = useCreateProductMutation();
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("66cca524e2eee759f3f6a153");
  const [type, setType] = useState("standard");
  const [status, setStatus] = useState("instock");

  const handleSubmit = async (data) => {
    console.log({status , type});

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
    console.log("data => ", data);

    const dimensions = {
      length: Number(length),
      width: Number(width),
      height: Number(height),
    };

    const features = {
      size,
      keys: Number(keys),
      SwitchLifecycle,
      Switch,
      mode,
      battery,
      lighting,
      weight,
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
      const res = await addProduct({ productInfo });
      console.log("res => ", res);
      if (res?.data.success) {
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
          Add new product
        </h3>
      </div>
      <div className="px-2 md:px-5 py-10 shadow-xl m-2 md:m-5 ">
        <Form onSubmit={handleSubmit}>
          <div className="grid  md:grid-cols-2 gap-4">
            <FormInput type="text" name="name" label="Product Name" />
            <FormInput type="number" name="quantity" label="Quantity" />
            <FormInput type="number" name="price" label="Price" />
            <FormInput type="number" name="discount" label="Discount" />
            <FormInput label="Weight" type="text" name="weight" />
            <FormInput label="Size" type="text" name="size" />
            <FormInput label="keys" type="text" name="keys" />
            <FormInput label="Lighting" type="text" name="lighting" />
            <FormInput label="Connectivity" type="text" name="connectivity" />
            <FormInput label="Mode" type="text" name="mode" />
            <FormInput label="Battery" type="text" name="battery" />
            <FormInput
              label="SwitchLifecycle"
              type="text"
              name="SwitchLifecycle"
            />
            <FormInput label="Switch" type="text" name="Switch" />
          </div>
          <div className="grid md:grid-cols-2 mb-4 gap-5">
            <div className="space-y-4">
              <div>
                <label className="font-bold block mb-2">Brand:</label>
                <select
                  className="text-center py-1 rounded border-none"
                  name="status"
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
                  name="status"
                  className="text-center py-1 rounded border-none"
                  // value={product.status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="instock">InStock</option>
                  <option value="preorder">PireOrder</option>
                  <option value="outofstock">Out of stock</option>
                  <option value="upcoming">UpComing</option>
                </select>
              </div>
              <div className="">
                <label className="font-bold mb-2 block">Type:</label>
                <select
                  className="text-center py-1 rounded border-none px-2"
                  name="type"
                  // value={product.type}
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
                type="number"
                name="length"
                label="Length"
                // value={product.dimensions.length}
                // onChange={handleDimensionChange}
              />
              <FormInput
                type="number"
                name="width"
                label="Width"
                // value={product.dimensions.width}
                // onChange={handleDimensionChange}
              />
              <FormInput
                type="number"
                name="height"
                label="Height"
                // value={product.dimensions.height}
                // onChange={handleDimensionChange}
              />
            </div>
          </div>
          <FormInput label="Product Image" type="text" name="image" />

          <div>
            <div>
              <label className="block font-bold">Description:</label>
              <textarea
                className="border w-full p-3 py-4  mt-2 rounded"
                name="description "
                rows={7}
                // value={product.description}
                placeholder="Write..."
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </div>
          {/* Add more fields for features, reviews, slug, etc. */}
          <button
            className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600 w-full "
            type="submit"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default AddProduct;
