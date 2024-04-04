import { paises } from "../../data/ListaPaises";
export const Footer = () => {
  return (
    <footer>
      <div>
        <h2>¡Regístrate para recibir correos electrónicos de Pokémon!</h2>
        <form action="">
          <div>
            <input type="email" />
            <select name="" id="">
              {paises.map(({ name }, key) => (
                <option value={name}>{name}</option>
              ))}
            </select>
            <input type="date" />
          </div>
          <div>
            <p>Me gustaria recibir correos electrónicos acerca de:</p>
            <div>
              <input type="checkbox" />
              <p>Videojuegos, aplicaiones y muchas más cosas de Pokémon</p>
            </div>
            <div>
              <input type="checkbox" />
              <p>
                Acepto los Terminos de uso y la Politica de privacidad de la
                pagina
              </p>
            </div>
          </div>
          <input type="submit" value="Registrate" />
        </form>
      </div>
      <div></div>
    </footer>
  );
};
