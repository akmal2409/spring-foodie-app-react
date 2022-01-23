import { Category } from './../model/Category';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PlaceSearchResults } from '../model/PlaceSearchResults';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:8080/api/`, headers: { Accept: 'application/json' } }),
    endpoints: (builder) => ({
        getPlacesSuggestion: builder.query<PlaceSearchResults, string>({
            query: (query) => `locations/search?query=${encodeURIComponent(query)}&limit=10`,
        }),
        getCategories: builder.query<Category[], void>({
            query: () => `categories`
        })
    })
});


export const { useGetPlacesSuggestionQuery, useGetCategoriesQuery } = apiSlice;
