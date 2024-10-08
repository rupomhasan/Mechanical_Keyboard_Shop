
import { TProducts } from "../../types/product.types";
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
      query: ({ productInfo }: { productInfo: TProducts }) => {



        return {
          url: "/products",
          method: "POST",
          body: productInfo,
        };
      },
    }),
    updateProduct: builder.mutation({
      query: ({ productInfo, productId }) => {
        console.log(productId, productInfo)
        return {
          url: `/products/${productId}`,
          method: "PATCH",
          body: productInfo,
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