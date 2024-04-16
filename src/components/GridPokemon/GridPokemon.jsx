import { PokeCard } from "../PokeCard/PokeCard";
import styles from "./GridPokemon.module.css";

export const GridPokemon = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div className={styles.gridContainer}>
      {pokemon?.map(({ id, name, height, sprites, stats, weight, types }) => (
        <PokeCard
          id={id}
          name={name}
          height={height}
          sprites={sprites}
          stats={stats}
          weight={weight}
          types={types}
        />
      ))}
    </div>
  );
};
