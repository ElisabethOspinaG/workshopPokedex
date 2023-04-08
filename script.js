//  NOTA...... dataPokemon.id es la forma de usar el ID de el pokemon que vamos a USAR como Pokemon por defecto

// Obtener nombre de los Primerpokemon a mostrar

const randomId = Math.floor(Math.random() * 21)

let pokemones = []

const URL_API = "https://pokeapi.co/api/v2/pokemon";

const getPokemonsfromapi = async (url) => {
    const {data} = await axios.get(url);
    return data;
    
};

document.addEventListener ('DOMContentLoaded' , async () => {
    const infoapiname = await getPokemonsfromapi(URL_API);
    pokemones = infoapiname.results;
    const numeroAleatorio = Math.floor(Math.random() * pokemones.length);
    const pokemonAleatorio = pokemones[numeroAleatorio];
    const responsePokemon = await fetch(pokemonAleatorio.url);
    const dataPokemon = await responsePokemon.json();
    const nombrePokemon = dataPokemon.name;
    const nombrePokemonElemento = document.getElementById('nombre-pokemon');
    nombrePokemonElemento.innerHTML = `${nombrePokemon.toUpperCase()}`;

    const responsePokemonDetail = await fetch(pokemonAleatorio.url);
    const pokemonDetail = await responsePokemonDetail.json();
    const imagenPokemon = pokemonDetail.sprites.other['official-artwork'].front_default;
    const imagenPokemonElemento = document.getElementById('imagen-pokemon');
    imagenPokemonElemento.src = imagenPokemon;

    console.log(`El nombre del Pokémon aleatorio es: ${dataPokemon.name.toUpperCase()}`);
    console.log(`El ID del Pokémon aleatorio es: ${dataPokemon.id}`);

    /*----------------- SINCRONIZAR LA INFORMACION DEL POKEMON CARGADO ALEATORIAMENTE -------------------*/
    // NO DATA
    const idPokemonElemento = document.getElementById('No-Pokemon-Random');
    idPokemonElemento.innerHTML = `${dataPokemon.id}`;
    // LEVEL

  const responseLevel = await fetch(`${URL_API}/${dataPokemon.id}`);
  const dataLevel = await responseLevel.json();
  const levelPokemon = dataLevel.base_experience;
  const levelPokemonElemento = document.getElementById("level-pokemon-random");
  levelPokemonElemento.innerHTML = `${levelPokemon}`;
  
    // TYPE
    // HABILITY (ES MAS DE UNA HABILIDAD , MOSTRAR 4 MAx)
    // HIGHT
    // WEIGGHT 
  })  


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




