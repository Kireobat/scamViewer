<script>
  import { hostInfo, lang } from "$lib/stores";

  // add som code that uses puppeteer on backend to get the screenshot
  // and the ip address

  let language = "";

  let screenshot = "../src/lib/assets/gif/loading.gif";

  lang.subscribe((value) => {
    language = value;
  });

  let meta = {};
  let ip = "";
  let domainName = "";
  let createdDate = "";
  let updatedDate = "";
  let registrarName = "";
  let registrarWebsite = "";
  let registrantName = "";
  let technicalContact = {};
  let email = "";
  let nameServers = [];

  hostInfo.subscribe((value) => {
    meta = value.meta;
    ip = value.ip;
    domainName = value.hostInfo.domainName;
    createdDate = value.hostInfo.audit.createdDate;
    updatedDate = value.hostInfo.audit.updatedDate;
    registrarName = value.hostInfo.registrarName;
    registrarWebsite = value.hostInfo.registrarWebsite;
    registrantName = value.hostInfo.registryData.registrant.name;
    technicalContact = value.hostInfo.registryData.technicalContact;
    email = value.hostInfo.registryData.technicalContact.email;
    nameServers = value.hostInfo.registryData.nameServers;
  });
</script>

<div class="mx-96 h-1/3 mt-20">
  <div class="grid gap-4 grid-cols-2 grid-rows-1 h-full">
    <div class="grid gap-4 grid-cols-1 grid-rows-2">
      <div
        class="bg-white rounded-lg flex flex-col justify-center text-center h-48"
      >
        {#if language == "no"}
          <h1 class="text-3xl">Verts informasjon</h1>
        {:else if language == "en"}
          <h1 class="text-3xl">Host information</h1>
        {/if}
        <div>
          <h1>Registrar:{registrarName}</h1>
          <h1>
            Email: <a href="mailto:{email}">{email}</a>
          </h1>
          <h1>
            Website: <a href="https://{registrarWebsite}">{registrarWebsite}</a>
          </h1>
        </div>
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
