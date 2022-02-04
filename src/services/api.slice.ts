import { Page } from './../model/Page';
import { Restaurant } from './../model/Restaurant';
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
        }),
        getRestaurants: builder.query<Page<Restaurant>, { page: number, size: number, country: string, city: string }>({
            query: (arg) => `restaurants?page=${arg.page}&size=${arg.size}&city=${encodeURIComponent(arg.city)}&country=${encodeURIComponent(arg.country)}`
        })
    })
});


const encodeQueryParams = (params: Map<string, string>) => {
    const queryParams = ['?'];

    for (const [key, value] of params) {
        queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    }
    return queryParams.join('&');
}

export const { useGetPlacesSuggestionQuery, useGetCategoriesQuery, useGetRestaurantsQuery } = apiSlice;
