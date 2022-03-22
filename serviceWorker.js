const staticCelestial = "celestiale-site-v1"
const assets = [
  "/",
  "/index.html",
  "/js/app.js",
  
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCelestial).then(cache => {
      cache.addAll(assets)
    })
  )
})

// Fetch the assets from cache or network
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })