import { paises } from "../../data/ListaPaises";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import ImgPrivacidad from "../../assets/Images/politica-de-privacidad.png";

import styles from "./Footer.module.css";
export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContainerForm}>
        <h2>¡Regístrate para recibir correos electrónicos de Pokémon!</h2>
        <form action="" className={styles.formResponsive}>
          <div className={styles.footerContainerInputForm}>
            <input type="email" placeholder="Correo electronico" />
            <select name="" id="">
              <option value="">Selecciona tu país</option>
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
            <p>Novedades</p>
            <p>Guía para padres y tutores</p>
            <p>Servicio de atencion al cliente</p>
            <p>Sobre nuestra compañía</p>
            <p>Seleccionar país o región</p>
            <p>Sitio de prensa</p>
          </div>
        </div>
        <div className={styles.containerSocial}>
          <div className={styles.containerIcons}>
            <FaSquareFacebook className={styles.facebookLogo} />
            <FaSquareYoutube className={styles.youtubeLogo} />
            <FaTwitterSquare className={styles.twitterLogo} />
          </div>
        </div>
        <div className={styles.containerInfoPrivacity}>
          <img src={ImgPrivacidad} alt="imagen-politica-privacidad" />
          <p>Términos de uso</p>
          <p>Aviso sobre la provacidad</p>
          <p>Página de Cookies</p>
          <p>Información legal</p>
          <div>
            <p>©2024 Pokémon. ©1995-2024</p>
            <p>Nintendo/Creatures Inc./GAME FREAK Inc. TM,</p>
            <p>®Nintendo.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
