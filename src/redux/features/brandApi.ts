import { baseApi } from "../api/baseApi";
import { TBrand } from '../../types/brand.types';


const brandApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBrand: builder.query({
      query: () => ({
        url: "/brand",
        method: "GET",
      })
    }),
    getSingleBrand: builder.query({
      query: ({ brandId }) => ({
        url: `/brand/${brandId}`,
        method: "GET",
      }),
    }),
    postBrand: builder.mutation({
      query: ({ brandInfo }: { brandInfo: TBrand }) => {
        console.log("brandInfo => ", brandInfo)
        return {
          url: "/brand",
          method: "POST",
          body: brandInfo,
        };
      },
    }),

    deleteBrand: builder.mutation({
      query: ({ brandId }) => ({
        url: `/brand/${brandId}`,
        method: "DELETE",
      }),
    }),

  })
})


export const { useDeleteBrandMutation, useGetAllBrandQuery, useGetSingleBrandQuery, usePostBrandMutation } = brandApi;