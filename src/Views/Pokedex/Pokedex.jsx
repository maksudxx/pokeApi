import { useEffect, useState } from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import styles from "./Pokedex.module.css";

export const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const getPokemonAll = async () => {
    
    let limit = 25;
    let offset = 0;

    for (let i = 1; i <= 41; i++) {
      //Primera peticion de pokemon el cual solamente nos trae la url individual de cada pokemon
      const urlPokemon = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
      const pokemon = await fetch(urlPokemon);
      const { results } = await pokemon.json();

      await results.map(async ({ url }) => {
        const response = await fetch(url);
        const { id, name, weight, height, sprites, types, stats } =
          await response.json();
        pokemonList.push({ id, name, weight, height, sprites, types, stats });
      });

      setPokemonList(pokemonList);
      offset += 25;
      
    }
    
    console.table(pokemonList)
  };
  
  useEffect(() => {
    getPokemonAll();
  },[])
 

  return (
    <article className={styles.containerPokedex}>
      <SearchBar />
    </article>
  );
};
