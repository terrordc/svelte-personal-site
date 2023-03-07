// @ts-ignore
export async function load({ fetch, params }) {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=100';
    const res = await fetch(url);
    const data = await res.json();
    // @ts-ignore
    const loadedPokemon = data.results.map((data, index) =>{
        return {
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			index + 1
		}.png`

        };
    });
    return { pokemon:loadedPokemon }
};