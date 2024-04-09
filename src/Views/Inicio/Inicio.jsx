import styles from "./Inicio.module.css";
import imgInicio from "../../assets/Images/Imagen-Inicio.png";
import imgEncuestaDragon from "../../assets/Images/imagen-encuesta-dragon.png";
import imgEscarlataPurpura from "../../assets/Images/Escarlata-y-purpura.png";
import imgJcc from "../../assets/Images/JCC.gif";
export const Inicio = () => {
  return (
    <article className={styles.containerInicio}>
      <section className={styles.cardInicio}>
        <img src={imgInicio} alt="Imagen-Inicio" />
        <div className={styles.textCardInicio}>
          <h3>
            Nuevos Pokémon Paradoja distorsionan el espacio-tiempo en Escarlata
            y Púrpura-Fuerzas Temporales
          </h3>
          <p>
            Descubre nuevos Pokémon del pasado y del futuro, el regreso de las
            poderosas cartas de AS TÁCTICO y mucho más en la proxima expansión
            de JCC Pokémon.
          </p>
        </div>
      </section>
      <section className={styles.containerCardsInicio}>
        <div className={styles.cardInfo}>
          <img src={imgEncuestaDragon} alt="" />
          <p className={styles.yellow}> Nueva trivia de Pokémon por el año nuevo del Dragón 2024</p>
        </div>
        <div className={styles.cardInfo}>
          <img src={imgEscarlataPurpura} alt="" />
          <p className={styles.blue}>
            Escarlata y Púrpura-Fuerzas Temporales en JCC Pokémon live
          </p>
        </div>
      </section>
    </article>
  );
};
