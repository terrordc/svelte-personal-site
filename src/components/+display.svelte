<script>
    let imageList = [];
    // Fetch the list of images from the server
    async function fetchImages() {
      const currentDomain = `${window.location.protocol}//${window.location.hostname}`;
      const response = await fetch(`${currentDomain}:5173/api/display`);
      imageList = await response.json();
      imageList = Object.values(imageList['images']);
    }
    import { onMount } from 'svelte';
    onMount(fetchImages);
  </script>

<div >
  <h1 class="mt-6 text-2xl text-center">My works</h1>
  <div class="flex  items-center max-w-screen-xl mt-6 flex-col md:flex-row flex-wrap ">
    {#each imageList as image}
    <img src={`public/display-images/${image}`} class="basis-1/3 w-64 m-6 flex-auto" alt={image} />
  {/each}
  </div>
</div>
