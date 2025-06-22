const localCache1 = {};
const localCache2 = {};
const localCache3 = {};

export const getPokemonAll = async (listPokemon) => {
  let limit = 25;
  let offset = 0;
  for (let i = 1; i <= 41; i++) {
    //Primera peticion de pokemon el cual solamente nos trae la url individual de cada pokemon
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    const pokemon = await fetch(urlPokemon);
    const { results } = await pokemon.json();

    console.log(results);
    for (const { url } of results) {
      const response = await fetch(url);
      const { id, name, weight, height, sprites, types, stats } =
        await response.json();
      listPokemon.push({ id, name, weight, height, sprites, types, stats });
      localCache1[url] = response;
    }

    offset += 25;
    //manejo del Caché
    localCache2[urlPokemon] = pokemon;
  }

  return listPokemon;
};

export const getGifPokemon = async () => {
  const pokemonNumber = Math.floor(Math.random() * 500) + 1;
  const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;
  const response = await fetch(urlPokemon);
  const { sprites } = await response.json();
  const gifPokemon =
    sprites.other["showdown"].front_default || sprites.front_default;
  localCache3[urlPokemon] = response;
  return gifPokemon;
};
