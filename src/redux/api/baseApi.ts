import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api", credentials: "include", prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set("authorization", token)
    }
  }
})


// const customBaseQuery = async (args, api, extraOptions) => {
//   let result;
//   // eslint-disable-next-line prefer-const
//   result = await baseQuery(args, api, extraOptions);
//   console.log("customBaseQuery => ", result)

//   return result;
// }

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  endpoints: () => ({})
})

