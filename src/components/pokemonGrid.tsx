'use client'

import { PokemonName } from "@/constants/types"
import { FC } from "react"
import PokemonCard from "./pokemonCard"
import { Button } from "flowbite-react"

export interface PokemonGridProps {
  pokemonNames: PokemonName[]
  getMorePokemon: (value: number) => void
  pageNumber: number
}

const PokemonGrid: FC<PokemonGridProps> = ({pokemonNames, getMorePokemon, pageNumber}: PokemonGridProps): JSX.Element => {
  const morePokemonHandler = () => {
    getMorePokemon(pageNumber + 1)
  }
  return (
    <div className="flex flex-col my-8">
      <div className="flex flex-wrap gap-4 ml-16 pl-12 my-8">
      {pokemonNames.map((pokemonName) => {
          return (<PokemonCard name={pokemonName.name} key={pokemonName.name}/>)
      })}
      </div>
      <div className="flex flex-col items-center">
        <Button onClick={() => morePokemonHandler()}>Cargar más Pokémon</Button>
      </div>
    </div>
  )
}

export default PokemonGrid