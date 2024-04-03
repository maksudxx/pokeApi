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
        <div>
          <img src={imgEncuestaDragon} alt="" />
          <p>Trivia de Pokémon de tipo dragón</p>
        </div>
        <div>
          {" "}
          <img src={imgEscarlataPurpura} alt="" />
          <p>Escarlata y Púrpura-Fuerzas Temporales en JCC Pokémon live</p>
        </div>
        <div>
          {" "}
          <img src={imgJcc} alt="" />
          <p>Ogerpon y sus máscaras llegan a JCC Pokémon</p>
        </div>
      </section>
    </article>
  );
};
