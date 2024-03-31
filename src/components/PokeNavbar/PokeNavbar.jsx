import iconAplicaciones from "../../assets/Icons/phone_play_icon.png";
import iconPikachu from "../../assets/Icons/pikachu_pokemon_icon.png";
import iconPokeball from "../../assets/Icons/pokeball_pokemon_icon.png";
import iconPlayer from "../../assets/Icons/play_pokemon_icon.png";
import iconNoticias from "../../assets/Icons/pokedex_pokemon_icon.png";
import styles from "./PokeNavbar.module.css";
import { useState } from "react";

export const PokeNavbar = () => {
  const [click, setClick] = useState("Inicio");
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (item) => {
    setClick(item);
  };
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navContainer}>
        <div
          className={
            click === "Inicio"
              ? `${styles.navOptions} ${styles.optionInicio} ${styles.isActiveInicio}`
              : `${styles.navOptions} ${styles.optionInicio}`
          }
          onClick={() => {
            isActive("Inicio");
          }}
        >
          <img src={iconPikachu} alt="pikachu-icon" />
          <p>Inicio</p>
        </div>
        <div
          className={
            click === "Pokedex"
              ? `${styles.navOptions} ${styles.optionPokedex} ${styles.isActivePokedex}`
              : `${styles.navOptions} ${styles.optionPokedex}`
          }
          onClick={() => {
            isActive("Pokedex");
          }}
        >
          <img src={iconPokeball} alt="pokeball-icon" />
          <p>Pokédex</p>
        </div>
        <div
          className={
            click === "Aplicaciones"
              ? `${styles.navOptions} ${styles.optionAplicaciones} ${styles.isActiveAplicaciones}`
              : `${styles.navOptions} ${styles.optionAplicaciones}`
          }
          onClick={() => {
            isActive("Aplicaciones");
          }}
        >
          <img src={iconAplicaciones} alt="phone-icon" />
          <p>Aplicaciones</p>
        </div>
        <div
          className={
            click === "Eventos"
              ? `${styles.navOptions} ${styles.optionEventos} ${styles.isActiveEventos}`
              : `${styles.navOptions} ${styles.optionEventos}`
          }
          onClick={() => {
            isActive("Eventos");
          }}
        >
          <img src={iconPlayer} alt="play-icon"></img>
          <p>Eventos</p>
        </div>
        <div
          className={
            click === "Noticias"
              ? `${styles.navOptions} ${styles.optionNoticias} ${styles.isActiveNoticias}`
              : `${styles.navOptions} ${styles.optionNoticias}`
          }
          onClick={() => {
            isActive("Noticias");
          }}
        >
          <img src={iconNoticias} alt="pokedex-icon" />
          <p>Noticias</p>
        </div>
      </nav>
    </header>
  );
};
