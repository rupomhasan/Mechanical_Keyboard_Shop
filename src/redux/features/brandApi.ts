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
    getSingleBrand: builder.mutation({
      query: ({ brandId }) => ({
        url: `/brand/${brandId}`,
        method: "GET",
      }),
    }),
    postBrand: builder.mutation({
      query: ({ brandInfo, file }: { brandInfo: TBrand; file: File }) => {
        const formData = new FormData();

        formData.append("file", file);

        formData.append("data", JSON.stringify(brandInfo));

        return {
          url: "/brand",
          method: "POST",
          body: formData,
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


export const { useDeleteBrandMutation, useGetAllBrandQuery, useGetSingleBrandMutation, usePostBrandMutation } = brandApi;