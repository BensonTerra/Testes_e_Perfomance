const staticDevCoffee = "dev-coffee-site-v2";
const offline_url = 'offline.html'


const assets = [
  "/",
  "/index.html",
  "/images/01.webp","/images/01-25.webp","/images/01-50.webp",
  "/images/02.webp","/images/02-25.webp","/images/02-50.webp",
  "/images/03.webp","/images/03-25.webp","/images/03-50.webp",
  "/images/04.webp","/images/04-25.webp","/images/04-50.webp",
  "/images/05.webp","/images/05-25.webp","/images/05-50.webp",
  "/images/06.webp","/images/06-25.webp","/images/06-50.webp",
  "/images/07.webp","/images/07-25.webp","/images/07-50.webp",
  "/images/08.webp","/images/08-25.webp","/images/08-50.webp",
  "/images/09.webp","/images/09-25.webp","/images/09-50.webp",
  "/serviceWorker.js"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
      cache.addAll([offline_url]);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});