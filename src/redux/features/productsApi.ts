import { baseApi } from "../api/baseApi";


const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (arg) => ({
        url: "/products",
        method: "GET",
        params: arg
      })
    }),
    getProduct: builder.query({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "GET",
      })
    }),
    createProduct: builder.mutation({
      query: ({ productInfo, file }) => {
        const formData = new FormData();

        formData.append("file", file);

        formData.append("data", JSON.stringify(productInfo));

        return {
          url: "/products",
          method: "POST",
          body: formData,
        };
      },
    }),
    updateProduct: builder.mutation({
      query: ({ productInfo, file, productId }) => {
        const formData = new FormData();

        formData.append("file", file);

        formData.append("data", JSON.stringify(productInfo));

        return {
          url: `/products/${productId}`,
          method: "PATCH",
          body: formData,
        };
      },
    }),
    deleteProduct: builder.mutation({
      query: ({ productId }) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
    }),

  })
})


export const { useGetAllProductsQuery, useGetProductQuery, useCreateProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productsApi;