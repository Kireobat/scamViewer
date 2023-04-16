<script>
  import Fa from "svelte-fa/src/fa.svelte";
  import { faLanguage } from "@fortawesome/free-solid-svg-icons/index.js";
  import { lang } from "$lib/stores.js";

  let language = "";

  $: lang.update((value) => {
    if (language == "") language = "no";
    value = language;
    return value;
  });
</script>

<div class="flex">
  <Fa icon={faLanguage} class="flex-initial" size="2x" />
  <select bind:value={language} class="text-xl flex-initial ml-2 bg-white">
    <option value="no" selected>Norsk</option>
    <option value="en">English</option>
  </select>
</div>
