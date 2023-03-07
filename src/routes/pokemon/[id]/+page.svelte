<script>
// @ts-nocheck


    // @ts-ignore
    export let data;
  
  </script>
  
  <div class="flex flex-col items-center">

    <h1 class="text-4xl text-center my-8 uppercase">{data.pokeman.name}</h1>
    <img class="card-image w-64 h-64" src={data.pokeman.sprites['front_default']} 
    alt={data.pokeman.name}
    />
    <p>Type: <strong>{data.pokeman.types[0].type.name}</strong> | Height: <strong>{data.pokeman.height}</strong>
        | Weight: <strong>{data.pokeman.weight}</strong>
    </p>
    
</div>