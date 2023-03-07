<!-- <script>
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
</div> -->
<form class="pb-4 m-auto w-full md:w-96">
  <div class=" gap-6 mb-6 md:grid-cols-2 items-end" >
      <div class="">
<label for="note" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New note</label>
            <input type="text" id="note" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="a" required>
            </div>
            <button type="submit"  class="mt-4 ml-auto block md:w-24 md:h-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            <hr class="mt-6">
          </form>
          <div class="w-96 m-auto h-60 bg-gray-500">
            <div class="bg-gray-50  text-gray-900 bg-gray-300 shadow-md rounded-lg">
              <div class="flex bg-gray-500">
              <span class="p-2.5 font-bold rounded-tl-md bg-gray-500 hover:bg-gray-200 hover:cursor-pointer transition-all">NEW NOTE</span>
              <span class="p-2.5 font-bold  bg-gray-500 mx-2 ml-auto hover:bg-gray-200 hover:cursor-pointer transition-all">I</span>
              <span class="p-2.5 font-bold rounded-tr-md  bg-gray-500 mx-2 mr-0 hover:bg-gray-200 hover:cursor-pointer transition-all">X</span>
            </div>
              <p class="p-4">NEW NOTE NEW NOTE NEW NOTE NEW NOTE NEW NOTE NEW NOTE NEW NOTE NEW NOTE NEW NOTE</p>
            </div>

          </div>

