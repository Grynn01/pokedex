'use client' 

import Loading from "@/components/loading";
import PokemonGrid from "@/components/pokemonGrid";
import { PokemonName } from "@/constants/types";
import { useGetPokemonNamesQuery } from "@/services/pokemon/pokemon";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [allPokemonNames, setAllPokemonNames] = useState<PokemonName[]>([]);
  const itemsPerPage: number = 12;

  const { data: pokemonNamesData, isLoading: arePokemonNamesLoading } = useGetPokemonNamesQuery({ offset: (currentPage - 1) * itemsPerPage, limit: itemsPerPage })
  
  useEffect(() => {
    if (pokemonNamesData) {
      const newPokemonNames: PokemonName[] = pokemonNamesData.results;
      setAllPokemonNames(prevAllPokemonNames => {
        const uniqueNewPokemonNames = newPokemonNames.filter(newPokemon => !prevAllPokemonNames.some(oldPokemon => oldPokemon.name === newPokemon.name))
        return [...prevAllPokemonNames, ...uniqueNewPokemonNames]
      })
    }
  }, [pokemonNamesData]);

  if (arePokemonNamesLoading) return (<Loading/>);

  const uniquePokemonNames: PokemonName[] = Array.from(allPokemonNames);

  return (<PokemonGrid pokemonNames={uniquePokemonNames} getMorePokemon={setCurrentPage} pageNumber={currentPage} />);
}
