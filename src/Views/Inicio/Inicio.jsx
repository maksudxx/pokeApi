import styles from './Inicio.module.css'
import imgInicio from '../../assets/Images/Imagen-Inicio.png'
export const Inicio = () => {
  return (
    <article className={styles.containerInicio}>
      <section className={styles.cardInicio}>
        <img src={imgInicio} alt="Imagen-Inicio" />
        <div className={styles.textCardInicio}>
          <h3>Nuevos Pokémon Paradoja distorsionan el espacio-tiempo en Escarlata y Púrpura-Fuerzas Temporales</h3>
          <p>Descubre nuevos Pokémon del pasado y del futuro, el regreso de las poderosas cartas de AS TÁCTICO y mucho más en la proxima expansión de JCC Pokémon.</p>
        </div>
      </section>
    </article>
  );
};
