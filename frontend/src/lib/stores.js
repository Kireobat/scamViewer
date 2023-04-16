import { writable } from 'svelte/store';


// Language
export const lang = writable("no");

// Website Info

export const hostInfo = writable({
  "meta": {
    "date": '',
    "url": ''
  },
  "ip": '',
  "hostInfo": {
  "domainName": '',
  "audit": {
    "createdDate": '',
    "updatedDate": ''
  },
  "registrarName": '',
  "registrarWebsite": '',
  "registryData": {
    "registrant": {
      "name": ''
    },
    "technicalContact": {
      "organisation": '',
      "language": '',
      "email": ''
    },
    "nameServers": []
  }
}
});
