const pokemonList = document.querySelector("#pokemonList");

let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
  fetch(URL + i)
    .then((response) => response.json())
    .then((data) => showPokemon(data));
}

let showPokemon = function (poke) {
  const div = document.createElement("div");
  div.classList.add("pokemon");
  div.innerHTML = ` <p class="pokemon-id-back">#025</p>
  <div class="pokemon-image">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          alt="Pikachu">
  </div>
  <div class="pokemon-info">
      <div class="name-container">
          <p class="pokemon-id">#025</p>
          <h2 class="pokemon-name">${poke.name}</h2>
      </div>
      <div class="pokemon-types">
          <p class="eletric type">ELECTRIC</p>
          <p class="fighting type">FIGHTING</p>
      </div>
      <div class="pokemon-stats">
          <p class="stat">4m</p>
          <p class="stat">60kgs</p>
      </div>
  `;

  pokemonList.append(div);
};
