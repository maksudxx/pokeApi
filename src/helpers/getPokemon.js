export const getPokemonAll = async (listPokemon) => {
  let limit = 25;
  let offset = 0;
  for (let i = 1; i <= 41; i++) {
    //Primera peticion de pokemon el cual solamente nos trae la url individual de cada pokemon
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    const pokemon = await fetch(urlPokemon);
    const { results } = await pokemon.json();

    for (const { url } of results) {
      const response = await fetch(url);
      const { id, name, weight, height, sprites, types, stats } =
        await response.json();
      listPokemon.push({ id, name, weight, height, sprites, types, stats });
    }

    offset += 25;
  }

  return listPokemon;
};

export const getGifPokemon = async () => {
  const pokemonNumber = Math.floor(Math.random() * 150) + 1;
  const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;
  const response = await fetch(urlPokemon);
  const { sprites } = await response.json();
  const {
    other: {
      showdown: { front_default },
    },
  } = sprites;
  return front_default;
};