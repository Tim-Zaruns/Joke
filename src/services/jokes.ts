import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type AllJokesCategory = {
  error: boolean
  categories: string[]
}

type JokesCategory = {
  error: boolean
  jokes: [{
    category: string,
    joke: string,
    id: number,
  }]
  message: string,
}

type AboutJoke = {
  error: string,
  category: string,
  joke: string,
  id: number,
  lang: string
  safe: boolean
  type: string
}

export const JokesApi = createApi({
  reducerPath: 'jokes',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://v2.jokeapi.dev/',
  }),
  endpoints: (builder) => ({
    getAllJokeCategory: builder.query<AllJokesCategory, undefined>({
      query: () => '/categories',
    }),
    getJokeCategory: builder.query<JokesCategory, string>({
      query: (category) => `/joke/${category}?type=single&amount=10`,
    }),
    getAboutJoke: builder.query<AboutJoke, string>({
      query: (id) => `/joke/Any?type=single&idRange=${id}`,
    }),
  }),
});

export const { reducer } = JokesApi;

export const { useGetAllJokeCategoryQuery, useGetJokeCategoryQuery, useGetAboutJokeQuery } = JokesApi;
