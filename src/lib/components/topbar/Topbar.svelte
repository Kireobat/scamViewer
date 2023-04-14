<script>
  import NavMenu from "./navmenu/NavMenu.svelte";
</script>

<article>
  <div class="flex my-5 mx-4">
    <div class="flex flex-1">
      <div class="flex-1">
        <a href="/">
          <div class="flex">
            <img
              src="src\lib\img\scamViewer.png"
              alt="logo"
              class="h-20 flex-initial mr-4"
            />
            <h1 class="text-6xl flex-initial">ScamViewer</h1>
          </div>
        </a>
      </div>
      <div class="flex-1" />
    </div>
    <div class="flex flex-1">
      <div class="flex-1" />
      <div class="flex-1 mt-4">
        <NavMenu />
      </div>
    </div>
  </div>
</article>
