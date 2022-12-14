const pokemonList = document.getElementById("pokemonList");

function convertPokemonToLi(pokemon) {
  return `<div class="pokemon-card-container">
            <div class="pokemon-card">

                <div class="pokemon-card-bg">
                    <div class="bg-pokeball"></div>
                </div>

                <span class="number">#001</span>

                <h2 class="name">${pokemon.name}</h2>

                <div class="details">

                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png" alt="${pokemon.name}">

                </div>

            </div>
         </div> `;
}

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("");
});
