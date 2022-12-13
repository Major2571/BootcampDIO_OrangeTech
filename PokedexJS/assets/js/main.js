const pokemonList = document.getElementById("pokemonList");

function convertPokemonToLi(pokemon) {
  return `<li class="pokemon">  
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
        
            <div class="details">
                <ol class="types">
                    <li class="type">Grass</li>
                    <li class="type">Poison</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png" alt="${pokemon.name}">
            </div>
          </li>`;
}

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
});
