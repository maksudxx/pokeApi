import iconAplicaciones from "../assets/Icons/phone_play_icon.png";
import iconPikachu from "../assets/Icons/pikachu_pokemon_icon.png";
import iconPokeball from "../assets/Icons/pokeball_pokemon_icon.png";
import iconPlayer from "../assets/Icons/play_pokemon_icon.png";
import iconNoticias from "../assets/Icons/pokedex_pokemon_icon.png";
import styles from "./PokeNavbar.module.css";

export const PokeNavbar = () => {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navContainer}>
        <div>
          <p>Inicio</p>
          <img src={iconPikachu} alt="pikachu-icon" width={40} />
        </div>
        <div>
          <p>Pokédex</p>
          <img src={iconPokeball} alt="pokeball-icon" width={40} />
        </div>
        <div>
          <p>Aplicaciones</p>
          <img src={iconAplicaciones} alt="phone-icon" width={40} />
        </div>
        <div>
          <p>Eventos</p>
          <img src={iconPlayer} alt="play-icon" width={40}></img>
        </div>
        <div>
          <p>Noticias</p>
          <img src={iconNoticias} alt="pokedex-icon" width={40} />
        </div>
      </nav>
    </header>
  );
};
