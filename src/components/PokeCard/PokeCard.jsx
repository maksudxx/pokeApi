import styles from "./PokeCard.module.css";
export const PokeCard = ({
  id,
  name,
  height,
  sprites,
  stats,
  weight,
  types,
}) => {
  //destructuracion para traer la imagen para renderizar en la card
  const {
    other: {
      "official-artwork": { front_default: officialArtworkFrontDefault },
    },
  } = sprites;
  const traduccionTipos = {
    normal: "normal",
    fighting: "lucha",
    flying: "volador",
    poison: "veneno",
    ground: "tierra",
    rock: "roca",
    bug: "bicho",
    ghost: "fantasma",
    steel: "acero",
    fire: "fuego",
    water: "agua",
    grass: "planta",
    electric: "electrico",
    psychic: "psiquico",
    ice: "hielo",
    dragon: "dragon",
    dark: "siniestro",
    fairy: "hada",
    unknown: "desconocido",
    shadow: "sombra",
  };

  // Función para traducir los tipos de Pokémon al español
  function traducirTipo(tipoIngles) {
    return traduccionTipos[tipoIngles.toLowerCase()] || tipoIngles;
  }

  return (
    <div className={styles.cardContainer}>
      <img src={officialArtworkFrontDefault} alt={name} width={150} />
      <h3>
        #{id} {name}
      </h3>
      <div className={styles.cardContainerInfo}>
        <h5>Altura: {height}0cm</h5>
        <h5>peso: {weight}kg</h5>
      </div>
      <div className={styles.cardContainerTypes}>
        {types.map(({ type }) => (
          <p className={`${styles[traducirTipo(type.name)]}`}>
            {traducirTipo(type.name)}
          </p>
        ))}
      </div>
    </div>
  );
};
