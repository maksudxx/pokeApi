import { getPokemonAll } from "../helpers/getPokemon";
import { useState, useEffect } from "react";

export const useFetchPokemon = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    const newPokemon = await getPokemonAll(pokemon);
    setPokemon(newPokemon);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemon();
  }, [pokemon]);

  return { pokemon, isLoading };
};
