import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from '../baseQuery'

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getPokemonNames: builder.query({
        query: ({offset, limit}) => ({
            url: `/v2/pokemon/`,
            method: 'GET',
            params: {offset, limit}
        })
    }),
    getPokemonByNameOrID: builder.query({
        query: (pokemonNameOrID) => ({
            url: `/v2/pokemon/${pokemonNameOrID}`,
            method: 'GET',
        })
    }),
    getPokemonSpecieByNameOrID: builder.query({
        query: (pokemonNameOrID) => ({
            url: `/v2/pokemon-species/${pokemonNameOrID}`,
            method: 'GET',
        })
    })
  }),
});

export const { 
    useGetPokemonNamesQuery,
    useGetPokemonByNameOrIDQuery,
    useGetPokemonSpecieByNameOrIDQuery
} = pokemonApi;