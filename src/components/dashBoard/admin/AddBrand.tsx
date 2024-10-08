import Form from "../../form/Form";
import FormInput from "../../form/FormInput";
import { usePostBrandMutation } from "../../../redux/features/brandApi";
import { toast } from "sonner";
import { TBrand } from "../../../types/brand.types";

const AddBrand = () => {
  const [postBrand] = usePostBrandMutation();

  const handleSubmit = async (brandInfo: TBrand) => {
    try {
      const res = await postBrand({ brandInfo });
      if (res?.error) {
        toast.error("Something went wrong");
      } else {
        toast.success("Brand is created successfully");
      }
    } catch (error) {
      toast.error("Some thing went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6  font-serif text-blue-500">
        Add Brand
      </h2>
      <Form onSubmit={handleSubmit}>
        <FormInput type="text" name="brandName" label="BrandName" />

        <FormInput type="text" name="logo" label="BrandLogo" />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Add Brand
        </button>
      </Form>
    </div>
  );
};

export default AddBrand;
