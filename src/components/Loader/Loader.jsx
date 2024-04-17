import { useState } from "react";
import { getGifPokemon } from "../../helpers/getPokemon";
import { useEffect } from "react";
import styles from './Loader.module.css'

export const Loader = () => {
  const [urlGifPokemon, setUrlGifPokemon] = useState(null);

  useEffect(() => {
    const obtenerGifPokemon = async () => {
      try {
        const urlGif = await getGifPokemon();
        setUrlGifPokemon(urlGif);
      } catch (error) {
        console.error("Error al obtener el GIF del Pokémon:", error);
      }
    };

    obtenerGifPokemon();
  }, []);

  return (
    <div className={styles.container}>
      <img src={urlGifPokemon}/>
      <div className={styles.loading}>
        <span>C</span>
        <span>A</span>
        <span>R</span>
        <span>G</span>
        <span>A</span>
        <span>N</span>
        <span>D</span>
        <span>O</span>
        <span>...</span>
      </div>
    </div>
  );
};
