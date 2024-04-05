import { paises } from "../../data/ListaPaises";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";

import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContainerForm}>
        <h2>¡Regístrate para recibir correos electrónicos de Pokémon!</h2>
        <form action="">
          <div className={styles.footerContainerInputForm}>
            <input type="email" placeholder="Correo electronico" />
            <select name="" id="">
              {paises.map(({ name }, key) => (
                <option value={name}>{name}</option>
              ))}
            </select>
            <input type="date" placeholder="Fecha de Nacimiento" />
          </div>
          <div className={styles.footerContainerCheckbox}>
            <input type="checkbox" />
            <p>Acepto los Términos de uso y la Política de privacidad</p>
          </div>
          <input
            type="submit"
            value="Registrate"
            className={styles.footerFormSubmit}
          />
        </form>
      </div>
      <div className={styles.footerContainerContact}>
        <div className={styles.columnInfo}>
          <h3>The Pokémon company</h3>
          <div className={styles.containerLinks}>
            <a>Novedades</a>
            <a>Guía para padres y tutores</a>
            <a>Servicio de atencion al cliente</a>
            <a>Sobre nuestra compañía</a>
            <a>Seleccionar país o región</a>
            <a>Sitio de prensa</a>
          </div>
        </div>
        <div className={styles.containerSocial}>
          <div>
            <FaSquareFacebook />
            <FaTwitterSquare />
            <FaSquareYoutube />
          </div>
        </div>
        <div className={styles.containerInfoPrivacity}><p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p></div>
      </div>
    </footer>
  );
};
