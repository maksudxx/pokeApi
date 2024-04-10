import { Inicio } from "./Views/Inicio/Inicio";
import { PokeNavbar } from "./components/PokeNavbar/PokeNavbar";
import { Footer } from "./components/Footer/Footer";
import styles from "./App.module.css";
import { Pokedex } from "./Views/Pokedex/Pokedex";
export const App = () => {
  return (
    <main>
      <PokeNavbar />
      <div className={styles.containerRoot}>
        <div className={styles.containerWhite}>
          {/* <Inicio /> */}
          <Pokedex />
        </div>
      </div>
      <Footer />
    </main>
  );
};
