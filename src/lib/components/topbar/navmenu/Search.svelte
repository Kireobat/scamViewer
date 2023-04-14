<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faSearch } from "@fortawesome/free-solid-svg-icons/index.js";
  import { lang } from "$lib/stores";

  let language = "";

  lang.subscribe((value) => {
    language = value;
  });
</script>

<a href="/search">
  <div class="flex">
    <Fa icon={faSearch} size="lg" class="mr-2 my-1 flex-initial" />
    <h1 class="text-xl flex-initial">
      {#if language == "no"}
        Søk
      {:else if language == "en"}
        Search
      {/if}
    </h1>
  </div>
</a>
