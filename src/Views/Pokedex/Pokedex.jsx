import { SearchBar } from "../../components/SearchBar/SearchBar";
import { useFetchPokemon } from "../../hooks/useFetchPokemon";
import { GridPokemon } from "../../components/GridPokemon/GridPokemon";
import { Loader } from "../../components/Loader/Loader";
import styles from "./Pokedex.module.css";

export const Pokedex = () => {
  const { pokemon, isLoading } = useFetchPokemon();
  
  return (
    <article className={styles.containerPokedex}>
      <SearchBar />
      {isLoading ? <Loader /> : <GridPokemon pokemon={pokemon} />}
    </article>
  );
};
