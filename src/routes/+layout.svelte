<script>
    import "../app.css";
    import Nav from "../components/+nav.svelte";
    import Display from "../components/+display.svelte";

  </script>

<div class="bg-violet-100">
  <Nav/>
  
  <div class=" xl:px-32 px-12 max-w-8xl mx-auto">

    
    
<slot></slot>
<Display/>
<!-- <div class="flex justify-around items-center flex-wrap"></div> -->
</div>
</div>