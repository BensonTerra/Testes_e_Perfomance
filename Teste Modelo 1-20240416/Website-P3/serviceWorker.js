const staticDevCoffee = "dev-coffee-site-v2";
const offline_url = 'offline.html'


const assets = [
  "/",
  "/index.html",
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.png",
  "/serviceWorker.js"
];
//em caso de falha: remova, atualize,adcione, atualize serviceWorker.js
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