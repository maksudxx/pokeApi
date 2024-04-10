import { SearchBar } from "../../components/SearchBar/SearchBar";
import styles from "./Pokedex.module.css";

export const Pokedex = () => {
  return (
    <article className={styles.containerPokedex}>
      <SearchBar />
    </article>
  );
};
