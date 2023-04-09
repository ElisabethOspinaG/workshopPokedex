//  NOTA...... dataPokemon.id es la forma de usar el ID de el pokemon que vamos a USAR como Pokemon por defecto

// Obtener nombre de los Primerpokemon a mostrar

const randomId = Math.floor(Math.random() * 21);

let pokemones = [];
const URL_API = "https://pokeapi.co/api/v2/pokemon";


const getPokemonsfromapi = async (url) => {
    const {data} = await axios.get(url);
    return data;
};
let allInfoPokemons = [];
const getPokemonApi = async(url)=>{
  try {
      const {data} = await axios.get(url);
      
      for (const element of data.results){
          const urlPokemons = element.url;
          const infoPokemon = await axios.get(urlPokemons);
          const  pokemon= {
            id: infoPokemon.data.id,
            name: infoPokemon.data.name,
            type: infoPokemon.data.types.map(item=> item.type.name),
            height:infoPokemon.data.height,
            weight:infoPokemon.data.weight,
            level:infoPokemon.data.base_experience,
            imagen: infoPokemon.data.sprites.other['official-artwork'].front_default,
            abilities: infoPokemon.data.abilities.map(item=> item.ability.name),
          }
          allInfoPokemons.push(pokemon); console.log(pokemon);
      };
     
      console.log("estoy hay en data: ", allInfoPokemons);
      return allInfoPokemons;
      
  } catch (error) {
      console.log("usuario, hay un error");
      return[];
  }
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
});

//  NOTA...... dataPokemon.id es la forma de usar el ID de el pokemon que vamos a USAR como Pokemon por defecto

/*------------------------ Imagen de tipo de pokemon apartir del random ID ---------------------------------------------------------------*/

// Seleccionar imagenes de los tipos de pokemon un otra api para relacion el
// tipo de pokemon que muestra la API y su respectiva imagen

/*----------------- SELECTED POKEMON - MAIN POK Funcion para obtener la imagen del imagen principal a partir del random ID-------------------*/

/*----------------- SELECTED POKEMON - Funcion para obtener el contenido de la tabla del pokemon principal -------------------*/

/*----------------- Funcion para obtener 10 pokemones random -------------------*/

/*----------------- -------------------*/

/*----------------- -------------------*/

/*----------------- -------------------*/

/*----------------- -------------------*/
const input = document.querySelector(".header__input");
const searchButton = document.querySelector(".buscar");

// Escuchar el evento click del botón buscar
searchButton.addEventListener("click", async (event) => {
  event.preventDefault();
  // Obtener el valor del input
  const inputValue = input.value;
  console.log(inputValue);
  // Llamar a la función para obtener el array de pokemones
  allInfoPokemons = await getPokemonApi(URL_API);

 // Filtrar el array de pokemones por nombre
  const result = allInfoPokemons.find((pokemon) =>
    pokemon.name.toLowerCase() === inputValue.toLowerCase()
  );
  //toLowerCase es una función de JavaScript que convierte una cadena de texto en minúsculas. 
  if(result){   
    const nombrePokemonElemento = document.getElementById("nombre-pokemon");
    nombrePokemonElemento.innerHTML = `${result.name.toUpperCase()}`;
    
    const imagenPokemonElemento = document.getElementById("imagen-pokemon");
    imagenPokemonElemento.src = result.imagen;
    
    // Para pintar la tabla voy a usar la constante pokemonAleatorio construida en la línea 5
    const idPokemonElement = document.getElementById("No-Pokemon-Random");
    idPokemonElement.innerHTML = result.id
  
    const levelPokemonElement = document.getElementById("level-pokemon-random");
    levelPokemonElement.innerHTML = result.level
 
    

    const typePokemonElement = document.getElementById("type-pokemon-random");
    typePokemonElement.innerHTML = result.type
    
    const abilitiesPokemonElement = document.getElementById(
      "hability-pokemon-random"
    );
    const abilityNames = result.abilities.slice(0, 4).map((ability) => ability);
    const abilityString = abilityNames.join(", ");
    abilitiesPokemonElement.innerHTML = abilityString;
    console.log(abilityString);
//utilizar map() para crear un nuevo array de strings con los nombres de las habilidades y luego unirlos con join(). en este punto abilities es un array de strings, abilityString contendrá una cadena con los nombres de las habilidades separados por comas y espacios.    
    
    // PINTAR EL HEIGHT
    const heightPokemon = result.height;
    //console.log("la altura del pokemon es ", heightPokemon);
    const heightPokemonElement = document.getElementById("height-pokemon-random");
    heightPokemonElement.innerHTML = `${heightPokemon}`;
    
    // PINTAR EL WEIGHT
    const weightPokemon = result.weight;
    //console.log("el peso del pokemon es ", weight);
    const weightPokemonElement = document.getElementById("weight-pokemon-random");
    weightPokemonElement.innerHTML = `${weightPokemon}`;
console.log(result);
  }else {
     console.log(`No se ha encontrado ningún pokemon con el nombre ${inputValue}.`);
     swal(`No se ha encontrado ningún pokemon con el nombre ${inputValue}.`) 
  }
  
}); 


// const pokemonInfo = {
//   "nombre-pokemon": pokemonAleatorio.name.toUpperCase(),
//   "imagen-pokemon": pokemonAleatorio.imagen,
//   "No-Pokemon-Random": pokemonAleatorio.id,
//   "level-pokemon-random": pokemonAleatorio.base_experience,
//   "type-pokemon-random": pokemonAleatorio.type[0],
//   "hability-pokemon-random": pokemonAleatorio.abilities.slice(0, 4).join(", "),
//   "height-pokemon-random": pokemonAleatorio.height,
//   "weight-pokemon-random": pokemonAleatorio.weight
// };


