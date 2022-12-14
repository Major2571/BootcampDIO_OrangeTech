const pokemonList = document.getElementById("pokemonList");

function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`);
}

function convertPokemonToLi(pokemon) {
  return `<div class="pokemon-card-container">
            <div class="pokemon-card">

                <div class="pokemon-card-bg">
                    <div class="bg-pokeball"></div>
                </div>

                <span class="number">#0${pokemon.order}</span>

                <h2 class="name">${pokemon.name}</h2>

                <div class="details">

                    <ol class="types">
                        ${convertPokemonTypesToLi(pokemon.types).join('')}
                    </ol>

                    <img src="${pokemon.sprites.other.home.front_default}" alt="${pokemon.name}">

                </div>

            </div>
         </div> `;
}

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("");
});
