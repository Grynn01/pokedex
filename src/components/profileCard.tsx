'use client'

import { Category, Pokemon, PokemonName, PokemonSpecie } from "@/constants/types"
import { FC } from "react"
import { Card } from "flowbite-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons"
import { capitalizeFirstLetter } from "@/utils"

export interface ProfileCardProps {
  pokemon: Pokemon
  pokemonSpecie: PokemonSpecie
}

const ProfileCard: FC<ProfileCardProps> = ({pokemon, pokemonSpecie}: ProfileCardProps): JSX.Element => {
    const pokemonCategory: Category | undefined = pokemonSpecie.genera.find((category: Category) => category.language.name === "en")
    return (
        <Card className="bg-cardProfile">
            <div className="flex flex-row">
                <div className="flex flex-col ml-12 mr-16">
                    <h3 className="text-lg text-white my-2 dark:text-white">Height</h3>
                    <h3 className="text-lg text-black my-2 dark:text-white">{pokemon.height /10}m</h3>
                    <h3 className="text-lg text-white my-2 dark:text-white">Weight</h3>
                    <h3 className="text-lg text-black my-2 dark:text-white">{pokemon.weight /10}kg</h3>
                    <h3 className="text-lg text-white my-2 dark:text-white">Sex</h3>
                    <span><FontAwesomeIcon icon={faMars} size='xl'/> <FontAwesomeIcon icon={faVenus} size='xl'/></span>
                </div>
                <div className="flex flex-col ml-16">
                    <h3 className="text-lg text-white my-2 dark:text-white">Category</h3>
                    <h3 className="text-lg text-black my-2 dark:text-white">{pokemonCategory?.genus}</h3>
                    <h3 className="text-lg text-white my-2 dark:text-white">Ability</h3>
                    <h3 className="text-lg text-black my-2 dark:text-white">{capitalizeFirstLetter(pokemon.abilities[0].ability.name)}</h3>
                </div>
            </div>
        </Card>
  )
}

export default ProfileCard