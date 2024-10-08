import { useParams } from "react-router-dom";
import Form from "../../form/Form";
import FormInput from "../../form/FormInput";
import { useGetSingleBrandQuery } from "../../../redux/features/brandApi";

const UpdateBrand = () => {
  const { id } = useParams();
  const { data } = useGetSingleBrandQuery({ brandId: id });
const [updateBrand] = 
  const { logo, brandName, _id } = data?.data || {};


  const handleSubmit = (brandInfo) => {
    console.log(brandInfo);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6  font-serif text-gray-800">
        Add Brand
      </h2>
      <Form onSubmit={handleSubmit}>
        <FormInput defaultValue={_id} type="text" name="id" label="Id" />
        <FormInput
          defaultValue={brandName}
          type="text"
          name="brandName"
          label="BrandName"
        />

        <FormInput
          defaultValue={logo}
          type="text"
          name="logo"
          label="Brand Logo"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Add Brand
        </button>
      </Form>
    </div>
  );
};

export default UpdateBrand;
