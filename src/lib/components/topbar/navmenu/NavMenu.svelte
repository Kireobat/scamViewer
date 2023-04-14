<script>
  import { lang } from "$lib/stores";
  import Language from "./Language.svelte";
  import Search from "./Search.svelte";

  let language = "";

  lang.subscribe((value) => {
    language = value;
  });
</script>

<div class="flex">
  <div class="flex-auto">
    <Language />
  </div>
  <div class="flex-auto">
    <Search />
  </div>
  <div class="flex-auto">
    <h1 class="text-xl">
      {#if language == "no"}
        Om nettsiden
      {:else if language == "en"}
        About the website
      {/if}
    </h1>
  </div>
</div>
