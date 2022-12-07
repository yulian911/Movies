import {
  createSelector,
  createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../api/api/apiSlice";


export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMovies: builder.query({
      query:({page}) =>`/trending/all/day?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`,
      providesTags: ['Movies'],
    }),
    getDetailMovies: builder.query({
      query:({id}) =>`/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`,
      providesTags: ['Movies'],
    }),
  })
})

export const {
  useGetMoviesQuery,
  useGetDetailMoviesQuery

} = productsApiSlice