import { baseApi } from "../api/baseApi";
import { TReview } from '../../types/review.types';


const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllReview: builder.query({
      query: (arg) => ({
        url: "/reviews",
        method: "GET",
        params: arg
      })
    }),
    getProductReview: builder.query({
      query: (productId) => ({
        url: `/reviews/product_reviews/${productId}`,
        method: "GET",
      })
    }),
    getMyReview: builder.query({
      query: () => ({
        url: "/reviews/my-reviews",
        method: "GET",
      })
    }),
    postReview: builder.mutation({
      query: (review: TReview) => {

        return {
          url: "/reviews",
          method: "POST",
          body: review,
        };
      },
    }),
    updateReview: builder.mutation({
      query: ({ productInfo, reviewId }: { productInfo: Partial<TReview>, reviewId: string }) => {



        return {
          url: `/reviews/${reviewId}`,
          method: "PATCH",
          body: productInfo,
        };
      },
    }),
    deleteReview: builder.mutation({
      query: ({ reviewId }) => ({
        url: `/reviews/${reviewId}`,
        method: "DELETE",
      }),
    }),

  })
})


export const { useDeleteReviewMutation, useGetAllReviewQuery, useGetMyReviewQuery, useGetProductReviewQuery, useUpdateReviewMutation, usePostReviewMutation } = productsApi;