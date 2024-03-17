'use client'

import Loading from "@/components/loading"
import PokemonProfile from "@/components/pokemonProfile"
import { useGetPokemonByNameOrIDQuery, useGetPokemonSpecieByNameOrIDQuery } from "@/services/pokemon/pokemon"


export default function Profile({ params }: { params: { pokemonID: string } }) {
    const {data: pokemon, isLoading: isPokemonLoading} = useGetPokemonByNameOrIDQuery(params.pokemonID)
    const {data: pokemonSpecie, isLoading: isPokemonSpecieLoading} = useGetPokemonSpecieByNameOrIDQuery(params.pokemonID)
    if(isPokemonLoading || isPokemonSpecieLoading) return (<Loading />)
    return(
        <PokemonProfile pokemon={pokemon} pokemonSpecie={pokemonSpecie}/>
    )
}