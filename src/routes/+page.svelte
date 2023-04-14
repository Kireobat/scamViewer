<script>
  import "../app.css";
  import Topbar from "$lib/components/topbar/Topbar.svelte";
  import Report from "$lib/components/report/Report.svelte";
  import { lang } from "$lib/stores";

  let language = "";

  lang.subscribe((value) => {
    language = value;
  });

  /*
    Import fontawesome icons

  import Fa from "svelte-fa/src/fa.svelte";
  import {
    faSearch,
    faLanguage,
  } from "@fortawesome/free-solid-svg-icons/index.js";

  */
</script>

<main>
  <Topbar />
  <Report />
</main>

<style lang="postcss">
  :global(html) {
    background-color: rgb(233, 245, 252);
  }
</style>
