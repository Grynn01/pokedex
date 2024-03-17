'use client'

import { DescriptionText, Pokemon, PokemonSpecie } from "@/constants/types"
import { capitalizeFirstLetter, formatNumber, weaknessByType } from "@/utils"
import { FC } from "react"
import Image from 'next/image';
import { Card } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
import ProfileCard from "./profileCard";
import PokemonTypes from "./pokemonTypes";
import StatsChart from "./statChart";

export interface PokemonProfileProps {
    pokemon: Pokemon
    pokemonSpecie: PokemonSpecie
}

const PokemonProfile: FC<PokemonProfileProps> = ({pokemon, pokemonSpecie}: PokemonProfileProps): JSX.Element => {
    const pokemonImageSrc: string = pokemon.sprites.other["official-artwork"].front_default
    const pokemonTypes: string[] = pokemon.types.map((type) => {
        return(type.type.name)
    })
    const pokemonWeaknesses = pokemonTypes.map((type: string) => {
        return(weaknessByType[type])
    })
    const pokemonDescription = pokemonSpecie.flavor_text_entries.find((description: DescriptionText) => description.language.name === "en")
    return(
        <div className="flex flex-row">
            <div className="w-1/5"></div>
            <div className="w-3/5 flex flex-col">
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-2xl font-bold text-gray-900 my-6 dark:text-white">{capitalizeFirstLetter(pokemon.name)} N.º&nbsp;{formatNumber(pokemon.id)}</h3>
                </div>
                <div className='flex'>
                    <div className="flex flex-col w-1/2 mr-4">
                        <Image width={500} height={500} src={pokemonImageSrc} alt={pokemon.name} />
                        <StatsChart pokemon={pokemon}/>
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <h3 className="text-xl text-gray-900 my-6 dark:text-white">{pokemonDescription?.flavor_text}</h3>
                        <ProfileCard pokemon={pokemon} pokemonSpecie={pokemonSpecie}/>
                        <h3 className="text-2xl text-gray-900 my-6 dark:text-white">Type</h3>
                        <PokemonTypes types={pokemonTypes} id={pokemon.id} size='md'/>
                        <h3 className="text-2xl text-gray-900 my-6 dark:text-white">Weaknesses</h3>
                        <PokemonTypes types={pokemonWeaknesses.flat()} id={pokemon.id} size='md'/>
                    </div>
                </div>
            </div>
            <div className="w-1/5"></div>
        </div>
    )
}

export default PokemonProfile