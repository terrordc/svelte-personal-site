<script>
    import "../app.css";
    import Nav from "../components/+nav.svelte";
  </script>

<div class="bg-zinc-500">
  <div class=" px-32 max-w-6xl mx-auto">
    <Nav/>
<slot></slot>
</div>
</div>