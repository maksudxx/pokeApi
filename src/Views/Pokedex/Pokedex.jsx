import { SearchBar } from "../../components/SearchBar/SearchBar";
import styles from "./Pokedex.module.css";
import { useFetchPokemon } from "../../hooks/useFetchPokemon";

export const Pokedex = () => {
  const { pokemon, isLoading } = useFetchPokemon();
  console.log(pokemon);

  return (
    <article className={styles.containerPokedex}>
      <SearchBar />
      {isLoading ? <h1>Cargando</h1> : null}
    </article>
  );
};
