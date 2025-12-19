const CACHE_NAME = 'news-pwa-cache-v1'
const OFFLINE_URL = '/offline.html'

const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/offline.html'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE)
    })
  )
  self.skipWaiting()
})

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).catch(() => caches.match(OFFLINE_URL))
    })
  )
})
