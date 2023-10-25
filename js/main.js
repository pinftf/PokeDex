const pokemonList = document.querySelector("#pokemonList");

let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
  fetch(URL + i)
    .then((response) => response.json())
    .then((data) => showPokemon(data));
}

let showPokemon = function (poke) {
  let types = poke.types.map(
    (type) => `<p class="${type.type.name} type">${type.type.name}</p>`
  );
  types = types.join(" ");

  let pokeId = poke.id.toString();
  if (pokeId.length === 1) {
    pokeId = "00" + pokeId;
  } else if (pokeId.length === 2) {
    pokeId = "0" + pokeId;
  }

  const div = document.createElement("div");
  div.classList.add("pokemon");
  div.innerHTML = ` <p class="pokemon-id-back">${poke.id}</p>
  <div class="pokemon-image">
      <img src="${poke.sprites.other["official-artwork"].front_default}"
          alt="${poke.name}">
  </div>
  <div class="pokemon-info">
      <div class="name-container">
          <p class="pokemon-id">${poke.id}</p>
          <h2 class="pokemon-name">${poke.name}</h2>
      </div>
      <div class="pokemon-types">
          ${types}
      </div>
      <div class="pokemon-stats">
          <p class="stat">${poke.height}</p>
          <p class="stat">${poke.weight}</p>
      </div>
  `;

  pokemonList.append(div);
};
