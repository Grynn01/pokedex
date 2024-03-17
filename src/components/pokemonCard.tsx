'use client'

import { useGetPokemonByNameOrIDQuery } from "@/services/pokemon/pokemon"
import { FC } from "react"
import { Card } from 'flowbite-react';
import Image from 'next/image';
import { Pokemon } from "@/constants/types";
import PokemonTypes from "./pokemonTypes";
import { capitalizeFirstLetter, formatNumber } from "@/utils";
import PokemonCardLoading from "./pokemonCardLoading";
import Link from "next/link";

export interface PokemonCardProps {
    name: string
}

const PokemonCard: FC<PokemonCardProps> = ({name}: PokemonCardProps): JSX.Element => {
    const {data: pokemonData, isLoading: isPokemonDataLoading} = useGetPokemonByNameOrIDQuery(name)
    if(isPokemonDataLoading) return (<PokemonCardLoading />)
    const pokemon: Pokemon = pokemonData
    const pokemonImageSrc: string = pokemon.sprites.other["official-artwork"].front_default

    const pokemonTypes: string[] = pokemon.types.map((type) => {
        return(type.type.name)
    })

    return (
        <Link href={`/${pokemon.id}`}>
            <Card className="max-w-sm" renderImage={() => <Image width={500} height={500} src={pokemonImageSrc} alt={name} />}>
                <h5 className="text-sm font-bold tracking-tight text-gray-400 dark:text-white">
                    N.º&nbsp;{formatNumber(pokemon.id)}
                </h5>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {capitalizeFirstLetter(name)}
                </h5>
                <PokemonTypes types={pokemonTypes} id={pokemon.id} size='xl'/>
            </Card>
        </Link>
    )
}

export default PokemonCard