import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetAllProductsQuery,
  useGetProductQuery,
  useUpdateProductMutation,
} from "../../redux/features/productsApi";

const Products = () => {
  const { data, isLoading } = useGetAllProductsQuery(null);

  // const { data, isLoading } = useGetProductQuery("66cdbfe734191c4000dcc370");
  // console.log(data);

  /* const [createProduct, { isLoading, isSuccess, isError }] =
    useCreateProductMutation();
  const [updateProduct, data] = useUpdateProductMutation();

  const [deletedProduct, hello] =  */ useDeleteProductMutation();
  // console.log("isSuccess => ", isSuccess);
  // console.log("isError => ", isError);
  // console.log("updated data => ", data);
  // console.log("updated => ", updateProduct);

  /*   const handleSubmit = async () => {
    const productInfo = {
      name: "Keychron K6 Wireless Mechanical Keyboard with Gateron Red Switch",
      description:
        "The Keychron K6 Wireless Mechanical Keyboard with Gateron Red Switch is a compact 65% layout keyboard that offers seamless connectivity via Bluetooth or USB-C. The Gateron Red switches provide a smooth and linear typing experience, perfect for both gaming and productivity. It features customizable RGB lighting, durable ABS keycaps, and an aluminum frame for a sturdy build. The K6 supports up to 3 devices simultaneously via Bluetooth and has a long-lasting 4000mAh battery. This keyboard is compatible with macOS, Windows, and Android, making it a versatile option for multi-device users. The Keychron K6 comes with keycap pullers and extra keycaps for both Windows and Mac users, ensuring flexibility in setup. With an ergonomic incline, the K6 is designed to reduce wrist fatigue, making it suitable for extended typing sessions.",
      brand: "66cca524e2eee759f3f6a153",
      productsQuantity: 15,
      price: 5999,
      reviews: [],
      isFeatured: true,
      size: "65%",
    };

    const file =
      "https://keygem.com/cdn/shop/files/neon_5979c0a0-70bc-4ee8-b503-acf907a30510.webp?v=1721035639&width=300";

    try {
      const response = await createProduct({ productInfo, file });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    const productInfo = {
      name: "Keychron K6 Wireless Mechanical Keyboard with Gateron Red Switch",
      description:
        "The Keychron K6 Wireless Mechanical Keyboard with Gateron Red Switch is a compact 65% layout keyboard that offers seamless connectivity via Bluetooth or USB-C. The Gateron Red switches provide a smooth and linear typing experience, perfect for both gaming and productivity. It features customizable RGB lighting, durable ABS keycaps, and an aluminum frame for a sturdy build. The K6 supports up to 3 devices simultaneously via Bluetooth and has a long-lasting 4000mAh battery. This keyboard is compatible with macOS, Windows, and Android, making it a versatile option for multi-device users. The Keychron K6 comes with keycap pullers and extra keycaps for both Windows and Mac users, ensuring flexibility in setup. With an ergonomic incline, the K6 is designed to reduce wrist fatigue, making it suitable for extended typing sessions.",
      brand: "66cca524e2eee759f3f6a153",
      productsQuantity: 15,
      price: 15999,
      reviews: [],
      isFeatured: true,
      size: "65%",
    };

    const file =
      "https://keygem.com/cdn/shop/files/neon_5979c0a0-70bc-4ee8-b503-acf907a30510.webp?v=1721035639&width=300";
    const productId = "66eb4f28eec5224cba368b73";

    try {
      const response = await updateProduct({ productInfo, file, productId });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }; */

  /*   const deleteProduct = async () => {
    const productId = "66eb4f28eec5224cba368b73";
    const result = await deletedProduct({ productId });
    console.log(result);
  }; */
  console.log(data);
  return (
    <div>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>All products are retrieved here : {data.data.length}</>
      )}
      {/*       <button className="btn bg-[#1e88e5]" onClick={handleSubmit}>
        Submit
      </button>
      <button className="btn bg-[#1e88e5]" onClick={handleUpdate}>
        Update
      </button>
      <button className="btn bg-[#1e88e5]" onClick={deleteProduct}>
        delete
      </button> */}
    </div>
  );
};

export default Products;
