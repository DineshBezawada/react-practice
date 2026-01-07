import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),

  tagTypes: ["Products"],

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
      keepUnusedDataFor: 60,
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
