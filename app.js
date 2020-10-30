const fetchPokemon = () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

        const pokemonPrpmises = []

        for(let i = 1; i <= 150; i++){
            pokemonPrpmises.push(fetch(getPokemonUrl(i)).then(response => response.json))
        }

        Promise.all(pokemonPrpmises)
        .then(pokemons => {
            console.log(pokemons)

            const listPokemons = pokemons.reduce((accumulator, pokemon) => {
                accumulator += `
                <li class="card">
                    <h2 class="card-title">${pokemon.name}. ${pokemon.name}</h2>
                </li>`
            }, '')

        })
}

fetchPokemon()