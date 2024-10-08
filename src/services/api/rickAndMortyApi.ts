import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse } from '../../types';

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    searchCharacters: builder.query<
      ApiResponse,
      { name: string; page: number }
    >({
      query: ({ name, page }) => `character/?name=${name}&page=${page}`,
    }),
  }),
});

export const { useSearchCharactersQuery } = rickAndMortyApi;
