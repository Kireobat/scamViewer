<script>
  import { prevent_default } from "svelte/internal";

  import Fa from "svelte-fa/src/fa.svelte";
  import { faSearch } from "@fortawesome/free-solid-svg-icons/index.js";
  import { lang } from "$lib/stores";

  // language store

  let language = "";

  lang.subscribe((value) => {
    language = value;
  });

  // has two modes: search and analyze
  export let mode = "search";
  let placeholder = "";

  $: switch (language) {
    case "no":
      if (mode == "search") {
        placeholder = "Søk etter et domene f.eks. eksempel.no";
      } else if (mode == "analyze") {
        placeholder = "Skriv inn en svindel URL f.eks. https://eksempel.no";
      }
      break;
    case "en":
      if (mode == "search") {
        placeholder = "Search for a domain e.g. example.com";
      } else if (mode == "analyze") {
        placeholder = "Enter a scam URL e.g. https://example.com";
      }
      break;
  }
</script>

<form on:submit={prevent_default} class="flex justify-center">
  <div
    class="h-20 w-3/5 bg-gray-900 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border-gray-100 border-2 flex"
  >
    <button>
      {#if mode == "search"}
        <Fa icon={faSearch} class="text-gray-200 text-4xl mx-5 m-auto" />
      {:else if mode == "analyze"}
        <div>
          <h1 class="text-gray-200 text-4xl mx-5 m-auto">
            {#if language == "no"}
              Analyser
            {:else if language == "en"}
              Analyze
            {/if}
          </h1>
        </div>
      {/if}
    </button>
    <div
      class="w-8 h-full bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40"
    />
    <input
      type="text"
      class="h-full w-full bg-gray-900 rounded-r-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 text-4xl text-gray-200"
      {placeholder}
    />
  </div>
</form>
