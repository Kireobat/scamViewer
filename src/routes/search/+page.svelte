<script>
  import Searchbar from "$lib/components/searchbar/Searchbar.svelte";
  import Topbar from "$lib/components/topbar/Topbar.svelte";
</script>

<main>
  <Topbar />
  <div class="bg-gradient-to-r from-sky-400 to-teal-300 py-24">
    <Searchbar mode="search" />
  </div>
</main>
