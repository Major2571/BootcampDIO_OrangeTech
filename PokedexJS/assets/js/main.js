
function convertPokemonToLi(pokemon) {
  return `<div class="pokemon-card-container">
            <div class="pokemon-card ${pokemon.type}">

                <div class="pokemon-card-bg">
                    <div class="bg-pokeball"></div>
                </div>

                <span class="number">#0${pokemon.number}</span>
                <h2 class="name">${pokemon.name}</h2>

                <div class="details">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>

            </div>
         </div> `;
}

const pokemonList = document.getElementById("pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("");
});
