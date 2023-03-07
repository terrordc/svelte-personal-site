<script>
// @ts-nocheck
export let data;
  // import { pokemon } from "../stores/pokestore";
  let searchTerm = "";
  let filteredPokemon = [];

  $:{

    if(searchTerm){
      filteredPokemon = data.pokemon.filter(pokeman => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    else{
      filteredPokemon = [ ... data.pokemon]
    }
  }

  import PokemanSingle from "../components/+pokemanSingle.svelte";
</script>

<h1 class="text-4xl text-center my-8 uppercase">Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<input type="text" bind:value={searchTerm} placeholder="search" class="w-full rounded-md text-lg p-4 border-2 mb-4 border-gray-200">

<div class="grid gap-4 md:grid-cols-2 grid-cols-1">
  {#each filteredPokemon as pokeman}
    <PokemanSingle {pokeman} />
  {/each}
</div>

