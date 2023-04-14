<script>
  import Searchbar from "../searchbar/Searchbar.svelte";

  // add som code that uses puppeteer on backend to get the screenshot
  // and the ip address

  let ip = "undefined";
</script>

<article>
  <div class="bg-gradient-to-r from-sky-400 to-teal-300 py-24">
    <Searchbar mode="analyze" />
  </div>
  <div class="mx-10 h-1/3">
    <div class="grid gap-4 grid-cols-2 grid-rows-1 h-full">
      <div class="grid gap-4 grid-cols-1 grid-rows-2">
        <div><h1>Host information</h1></div>
        <div class="bg-">
          <h1>Ip addresse</h1>
          <h1>{ip}</h1>
        </div>
      </div>
      <div><h1>Screenshot</h1></div>
    </div>
  </div>
</article>
