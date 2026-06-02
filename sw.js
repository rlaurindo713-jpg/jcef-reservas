const CACHE = 'jcf-reservas-v1';
const FILES = [
  '/jcef-reservas/',
  '/jcef-reservas/index.html',
  '/jcef-reservas/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
