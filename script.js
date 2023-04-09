//  NOTA...... dataPokemon.id es la forma de usar el ID de el pokemon que vamos a USAR como Pokemon por defecto

// Obtener nombre de los Primerpokemon a mostrar

const randomId = Math.floor(Math.random() * 21);

let pokemones = [];
//Elisabeth Agregue estas dos constantes para realizar el footer
const imgsFooter = [];
const imageWrapper = document.querySelector(".image-wrapper");

const URL_API = "https://pokeapi.co/api/v2/pokemon";

const getPokemonsfromapi = async (url) => {
    const {data} = await axios.get(url);
    return data;
};


document.addEventListener("DOMContentLoaded", async () => {
  const infoapiname = await getPokemonsfromapi(URL_API);
  
  pokemones = infoapiname.results;
  const numeroAleatorio = Math.floor(Math.random() * pokemones.length);
  const pokemonAleatorio = pokemones[numeroAleatorio];
  const responsePokemon = await fetch(pokemonAleatorio.url);
  const dataPokemon = await responsePokemon.json();
  const nombrePokemon = dataPokemon.name;
  const nombrePokemonElemento = document.getElementById("nombre-pokemon");
  nombrePokemonElemento.innerHTML = `${nombrePokemon.toUpperCase()}`;

  const responsePokemonDetail = await fetch(pokemonAleatorio.url);
  const pokemonDetail = await responsePokemonDetail.json();
  const imagenPokemon =
    pokemonDetail.sprites.other["official-artwork"].front_default;

  const imagenPokemonElemento = document.getElementById("imagen-pokemon");
  imagenPokemonElemento.src = imagenPokemon;

  console.log(
    `El nombre del Pokémon aleatorio es: ${dataPokemon.name.toUpperCase()}`
  );
  console.log(`El ID del Pokémon aleatorio es: ${dataPokemon.id}`);

  /*----------------- SINCRONIZAR LA INFORMACION DEL POKEMON CARGADO ALEATORIAMENTE -------------------*/
  // NO DATA

  // Para pintra la tabla voy a usar la constante dataPokemon construida en la linea 24
  const idPokemonElement = document.getElementById("No-Pokemon-Random");
  idPokemonElement.innerHTML = `${dataPokemon.id}`;

  // PINTAR EL LEVEl
  const levelPokemon = dataPokemon.base_experience;
  //console.log("nivel del pokemon ", levelPokemon);
  const levelPokemonElement = document.getElementById("level-pokemon-random");
  levelPokemonElement.innerHTML = `${levelPokemon}`;

  // PINTAR EL TYPE
  const typePokemon = dataPokemon.types[0].type.name;
  //console.log("tipo de pokemon ", typePokemon);
  const typePokemonElement = document.getElementById("type-pokemon-random");
  typePokemonElement.innerHTML = `${typePokemon}`;

  // PINTAR EL HABILITY (ES MAS DE UNA HABILIDAD , MOSTRAR 4 MAx)
  let abilityName = "";
  dataPokemon.abilities.forEach((ability) => {
    abilityName += ability.ability.name + " , ";
  });
  //console.log("habilidades del pokemon", abilityName);
  const abilitiesPokemonElement = document.getElementById(
    "hability-pokemon-random"
  );
  abilitiesPokemonElement.innerHTML = `${abilityName}`;

  // PINTAR EL HIGHT
  const heightPokemon = dataPokemon.height;
  //console.log("la altura del pokemon es ", heightPokemon);
  const heightPokemonElement = document.getElementById("height-pokemon-random");
  heightPokemonElement.innerHTML = `${heightPokemon}`;

  // PINTAR EL WEIGGHT
  const weightPokemon = dataPokemon.weight;
  //console.log("el peso del pokemon es ", weight);
  const weightPokemonElement = document.getElementById("weight-pokemon-random");
  weightPokemonElement.innerHTML = `${weightPokemon}`;

  // ELISABETH OSPINA PINTAR LOS POKEMONES EN EL FOOTER
  
  const container3 = "";
  const OnlyImgPekemon = [];
  for (const element of pokemones) {
    const urlPokemons = element.url;
    const infoPokemon = await axios.get(urlPokemons);
    const list20Pokemons = {
        id: infoPokemon.data.id,
        name:infoPokemon.data.name,
        imagen: infoPokemon.data.sprites.other['official-artwork'].front_default,
    }
    imgsFooter.push(list20Pokemons);
    const container3 =  document.getElementById("container_footer");
    container3.innerHTML += `
    <img id = "image-wrapper" class="div_footer_imagin mx-1 img-fluid" src=${list20Pokemons.imagen} >
    `;
    const OnlyImgPekemon = list20Pokemons[list20Pokemons.imagen];
};

});

