<script>
  import { lang } from "$lib/stores";

  // add som code that uses puppeteer on backend to get the screenshot
  // and the ip address

  let language = "";

  lang.subscribe((value) => {
    language = value;
  });

  let ip = "undefined";
  let host = "undefined";
  let screenshot = "../src/lib/assets/gif/loading.gif";
</script>

<div class="mx-96 h-1/3 mt-20">
  <div class="grid gap-4 grid-cols-2 grid-rows-1 h-full">
    <div class="grid gap-4 grid-cols-1 grid-rows-2">
      <div
        class="bg-white rounded-lg flex flex-col justify-center text-center h-48"
      >
        <h1 class="text-3xl">
          {#if language == "no"}
            Verts informasjon
          {:else if language == "en"}
            Host information
          {/if}
        </h1>
        <h1>{host}</h1>
      </div>
      <div class="bg-white rounded-lg flex flex-col justify-center text-center">
        <h1 class="text-3xl">
          {#if language == "no"}
            IP adresse
          {:else if language == "en"}
            IP address
          {/if}
        </h1>
        <h1>{ip}</h1>
      </div>
    </div>
    <div class="bg-white rounded-lg flex flex-col justify-center text-center">
      <h1 class="text-3xl mt-4">
        {#if language == "no"}
          Skjermbilde
        {:else if language == "en"}
          Screenshot
        {/if}
      </h1>
      <img
        src={screenshot}
        alt="Screenshot of the website"
        class="w-12 m-auto rounded-lg"
      />
    </div>
  </div>
</div>
