import { Inicio } from "./Views/Inicio/Inicio";
import { PokeNavbar } from "./components/PokeNavbar/PokeNavbar";
import styles from "./App.module.css";
export const App = () => {
  return (
    <>
      <PokeNavbar />
      <div className={styles.containerRoot}>
        <div className={styles.containerWhite}>
          <Inicio />
        </div>
      </div>
    </>
  );
};
