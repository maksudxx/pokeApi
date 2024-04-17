import { useState } from "react";
import { PokeCard } from "../PokeCard/PokeCard";
import styles from "./GridPokemon.module.css";

export const GridPokemon = ({ pokemon }) => {
  const [startIndex, setStartIndex] = useState(0);
  const handleNextClick = () => {
    setStartIndex((prev) => prev + 30);
  };

  //dividimos los pokemon de 30 en 30 para poder mostrarlos por partes
  const pokemonToShow = pokemon.slice(0, startIndex + 30);

  return (
    <div className={styles.gridContainer}>
      {pokemonToShow?.map(
        ({ id, name, height, sprites, stats, weight, types }) => (
          <PokeCard
            id={id}
            name={name}
            height={height}
            sprites={sprites}
            stats={stats}
            weight={weight}
            types={types}
          />
        )
      )}
      <div></div>
      <button onClick={handleNextClick} className={styles.gridButtonPokemon}>Ver mas...</button>
    </div>
  );
};
