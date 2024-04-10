import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { LuFileSearch } from "react-icons/lu";

export const SearchBar = () => {
  return (
    <nav className={styles.searchBarContainer}>
      <p className={styles.searchBarContainerTitle}>Pokédex</p>
      <div className={styles.searchContainer}>
        <div className={styles.searchColumnOne}>
          <h2>Nombre o número</h2>
          <div className={styles.inputsContainer}>
            <input type="text" />
            <div className={styles.searchButton}>
              <FaSearch />
            </div>
          </div>
          <p>
            ¡Usa la busqueda avanzada para buscar Pokémon por su tipo,
            debilidad, habilidad y demás datos!
          </p>
        </div>
        <div className={styles.searchColumnTwo}>
          <p>
            Busca un Pokémon por su nombre o usando su número de la Pokedex.
          </p>
        </div>
      </div>
      <div className={styles.advancedSearch}>
        <div>
        <p>Mostrar busqueda Avanzada</p>
        <LuFileSearch />
        </div>
      </div>
    </nav>
  );
};
