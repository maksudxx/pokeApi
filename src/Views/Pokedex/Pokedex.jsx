import { SearchBar } from "../../components/SearchBar/SearchBar";
import styles from "./Pokedex.module.css";
import { useFetchPokemon } from "../../hooks/useFetchPokemon";
import { GridPokemon } from "../../components/GridPokemon/GridPokemon";

export const Pokedex = () => {
  const { pokemon, isLoading } = useFetchPokemon();
  

  return (
    <article className={styles.containerPokedex}>
      <SearchBar />
      {isLoading ? <h1>Cargando</h1> : <GridPokemon pokemon={pokemon}/>}
    </article>
  );
};
