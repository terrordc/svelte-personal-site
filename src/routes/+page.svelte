
<!-- 
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

          </div> -->
        
<div class="flex justify-center items-center">
        <div class="m-auto " id="plot" bind:this={plotDiv}></div>
        <div class="m-auto ">
            <div class= "bg-black w-56 h-56 " id="image" bind:this={imageDiv}></div>
      </div>
      </div>

        <script>
          import { onMount } from 'svelte';
          let plotDiv;
          let imageDiv;

          export let data;

          const input_folder = 'D:\\miniset_resized\\'
          const resized_images = 'src\\resized_images\\'

          onMount(() => {
            data.tsneData.forEach(item => {
              item.path = item.path.replace(input_folder, '');
              item.path = resized_images + item.path;
              // console.log(item.path);
            });
            
            const imageUrls = data.tsneData.map(item => item.path);
            
          const trace = [{
            x: [],
            y: [],
            mode: 'markers',
            type: 'scatter'
          }];

          data.tsneData.forEach(d => {
            trace[0].x.push(d.point[0]);
            trace[0].y.push(d.point[1]);
          });
          

          const layout = {
            hovermode: 'closest',
            width: 800,
            height: 500,
            xaxis: { title: 't-SNE dimension 1' },
            yaxis: { title: 't-SNE dimension 2' }
          };
      
      
          Plotly.newPlot('plot', trace, layout, {scrollZoom: true});


          plotDiv.on('plotly_hover', event => {
            const pointIndex = event.points[0].pointIndex;
            const path = imageUrls[pointIndex];
            imageDiv.innerHTML = `<img src="${path}">`;
          });
      
          
          // const y = document.getElementsByClassName("xy");
          // const plot = y[0];

          //   plotDiv.on('plotly_hover', e => {
          //     // const x = e.clientX - e.target.offsetLeft;
          //     // const y = e.clientY - e.target.offsetTop;
          //     // imageDiv.style.transform = `translate(${x}px, ${y}px)`;
          //     // // console.log(imageDiv.style);
          //     // console.log(e);
          // });
          
            // plotDiv.addEventListener('mousemove', (e) => {
            //   const x = e.clientX - e.target.offsetLeft;
            //   const y = e.clientY - e.target.offsetTop;

            //   imageDiv.style.transform = `translate(${x}px, ${y}px)`;
            //   console.log(imageDiv.style);
            // });
            
          });    
          </script>