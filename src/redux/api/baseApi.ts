import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { addUser, logout } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set("authorization", token)
    }
  }
})


const customBaseQuery = async (args, api, extraOptions) => {
  // Perform the initial request
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    try {
      const refreshResponse = await fetch(`http://localhost:5000/api/auth/refresh-token`, {
        method: "POST",
        credentials: "include",
      });

      if (refreshResponse.ok) {
        const refreshData = await refreshResponse.json();
        console.log("Refresh Token Response:", refreshData);

        if (refreshData?.accessToken) {
          const user = (api.getState() as RootState).auth.user;


          api.dispatch(
            addUser({
              user,
              token: refreshData.accessToken,
            })
          );


          result = await baseQuery(args, api, extraOptions);
        } else {

          api.dispatch(logout());
        }
      } else {

        console.error('Failed to refresh token');
        api.dispatch(logout());
      }
    } catch (error) {
      console.error('Error refreshing token:', error);
      api.dispatch(logout());
    }
  }



  return result;
};



export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: customBaseQuery,
  endpoints: () => ({})
})

