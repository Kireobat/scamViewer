<script>
  import Searchbar from "../searchbar/Searchbar.svelte";
  import ReportInfo from "./reportinfo/ReportInfo.svelte";
</script>

<article>
  <div class="bg-gradient-to-r from-sky-400 to-teal-300 py-24">
    <Searchbar mode="analyze" />
    <ReportInfo />
  </div>
</article>
