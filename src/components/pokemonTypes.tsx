'use client'

import { PokemonName } from "@/constants/types"
import { FC } from "react"
import PokemonCard from "./pokemonCard"
import { Badge } from "flowbite-react"
import { capitalizeFirstLetter } from "@/utils"

export interface PokemonTypesProps {
  types: string[]
  id: number
  size: string
}

const PokemonTypes: FC<PokemonTypesProps> = ({types, id, size}: PokemonTypesProps): JSX.Element => {

    const colorSelector = (type: string): string => {
        switch(type) {
            case 'normal':
                return ('bg-normal text-black');
            case 'fire':
                return ('bg-fire text-white');
            case 'water':
                return ('bg-water text-white');
            case 'electric':
                return ('bg-electric text-black');
            case 'grass':
                return ('bg-grass text-black');
            case 'ice':
                return ('bg-ice text-black');
            case 'fighting':
                return ('bg-fighting text-white');
            case 'poison':
                return ('bg-poison text-white');
            case 'ground':
                return ('bg-ground text-black');
            case 'flying':
                return ('bg-flying text-black');
            case 'psychic':
                return ('bg-psychic text-white');
            case 'bug':
                return ('bg-bug text-white');
            case 'rock':
                return ('bg-rock text-white');
            case 'ghost':
                return ('bg-ghost text-white');
            case 'dragon':
                return ('bg-dragon text-white');
            case 'dark':
                return ('bg-dark text-white');
            case 'steel':
                return ('bg-steel text-black');
            case 'fairy':
                return ('bg-fairy text-black');
            default:
                return ('bg-normal text-black');
        }
    }

    return (
        <div className="flex flex-wrap gap-2">
            {types.map((type: string) => {
                return(<Badge className={colorSelector(type)} key={`${id}-${type}`} size={size}>{capitalizeFirstLetter(type)}</Badge>)
            })}
        </div>
    )
}

export default PokemonTypes