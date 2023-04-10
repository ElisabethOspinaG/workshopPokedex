
//  NOTA...... dataPokemon.id es la forma de usar el ID de el pokemon que vamos a USAR como Pokemon por defecto


//----------------------------------------  POKEMON PRINCIPAL Y NOMBRE ALEATORIO DIEGO  -------------------------------------------

const randomId = Math.floor(Math.random() * 21);

let pokemones = [];

const URL_API = "https://pokeapi.co/api/v2/pokemon";

const getPokemonsfromapi = async (url) => {
    const {data} = await axios.get(url);
    console.log("Este es el log 1",data);
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

  

  /*----------------- SINCRONIZAR LA INFORMACION DEL POKEMON CARGADO ALEATORIAMENTE LIZ -------------------*/

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

  const imagenesPokemonesElemento = document.querySelector(".imagenes-pokemones-todos");

// -----------------------------------MOSTRAR IMAGENES DEL OTHERS / ELISA ------------------------------

for (let i = 0; i < pokemones.length; i++) {
  const responsePokemon = await fetch(pokemones[i].url);
  const dataPokemon = await responsePokemon.json();
  const imagenPokemon = dataPokemon.sprites.other["official-artwork"].front_default;

  const imagenPokemonElemento = document.createElement("img");
  imagenPokemonElemento.src = imagenPokemon;
  imagenPokemonElemento.style.width = "100px"; // Agregar un ancho fijo para evitar superposición de imágenes
  imagenesPokemonesElemento.appendChild(imagenPokemonElemento);

  imagenPokemonElemento.addEventListener("click", async () => {
    const responsePokemonDetail = await fetch(pokemones[i].url);
    const pokemonDetail = await responsePokemonDetail.json();
    const imagenPokemon =
      pokemonDetail.sprites.other["official-artwork"].front_default;


// ----------------------------------- APLICAR FUNCIONALIDAD / DIEGO ------------------------------


  
    // Reemplazar la imagen principal con la del Pokemon seleccionado
    const imagenPokemonPrincipal = document.getElementById("imagen-pokemon");
    imagenPokemonPrincipal.src = imagenPokemon;

    // Actualizar el nombre del Pokemon en el elemento h6
  const nombrePokemon = pokemonDetail.name;
  const nombrePokemonElemento = document.getElementById("nombre-pokemon");
  nombrePokemonElemento.innerHTML = `${nombrePokemon.toUpperCase()}`;
  
    // Reemplazar la información de la tabla con la del Pokemon seleccionado
    const idPokemonElement = document.getElementById("No-Pokemon-Random");
    idPokemonElement.innerHTML = `${pokemonDetail.id}`;
  
    const levelPokemonElement = document.getElementById("level-pokemon-random");
    levelPokemonElement.innerHTML = `${pokemonDetail.base_experience}`;
  
    const typePokemonElement = document.getElementById("type-pokemon-random");
    typePokemonElement.innerHTML = `${pokemonDetail.types[0].type.name}`;
  
    let abilityName = "";
    pokemonDetail.abilities.forEach((ability) => {
      abilityName += ability.ability.name + " , ";
    });
    const abilitiesPokemonElement = document.getElementById(
      "hability-pokemon-random"
    );
    abilitiesPokemonElement.innerHTML = `${abilityName}`;
  
    const heightPokemonElement = document.getElementById("height-pokemon-random");
    heightPokemonElement.innerHTML = `${pokemonDetail.height}`;
  
    const weightPokemonElement = document.getElementById("weight-pokemon-random");
    weightPokemonElement.innerHTML = `${pokemonDetail.weight}`;



  });
  
}
});
