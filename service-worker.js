const CACHE_NAME = "raminmokamel-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/Picsart_25-10-27_03-21-20-910.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
