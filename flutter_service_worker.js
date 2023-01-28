'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"index.html": "8d0b804eec3e1d134f431c25d807d1d1",
"/": "8d0b804eec3e1d134f431c25d807d1d1",
"main.dart.js": "afdf511d936e5aad43b111d030c753f4",
"manifest.json": "c71d2c6800d36af6d0fcfd10de738a72",
"favicon.png": "f34b06ffdaf6cc7496513391e7bfa506",
"icons/Icon-512.png": "507598cb7f12d7a4c16e61c3eb9c52d7",
"icons/Icon-192.png": "54b509974449fca6b675c05618ba9723",
"assets/FontManifest.json": "291d3ebbe747f26cbf3e2476dc202dad",
"assets/NOTICES": "0e826e19df63f3ef09e7220a5c89da8c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/coverStory.png": "1914e4b5de99392805af5e86f8b5387d",
"assets/assets/images/accessbility_experience.png": "53051cc3fcaf6a305bf731d7d9aca61f",
"assets/assets/images/2x/coverStory.png": "fa1c240f545ab94dd1f2010a96099c2b",
"assets/assets/images/2x/accessbility_experience.png": "96bc4a4600edeaaa6f17e5cb5b557bae",
"assets/assets/images/2x/bowlogLogo.png": "8cfd5c4ddb34400501523a5020f04d59",
"assets/assets/images/2x/profile.png": "c4e07f1582f6333ed6c23983ce91295c",
"assets/assets/images/2x/ios_to_flutter_experience.png": "306d98a7901baba2461df14e8fe0d8ec",
"assets/assets/images/2x/estj.png": "3918e7826b16de3a69bb13b2364d99e4",
"assets/assets/images/2x/lottoLifeLogo.png": "83a50cd3155f318d6bfe2755f2a6e994",
"assets/assets/images/2x/otherProfile.png": "33e4b5e7a229b369bebfae58e1986bdd",
"assets/assets/images/2x/flutter_performance_experience.png": "d615a14ecf4aff562919fbcd91a5dcf7",
"assets/assets/images/2x/colorGameLogo.png": "1957977f8debb4aaaedd02297760f298",
"assets/assets/images/bowlogLogo.png": "f2ed1b032c109105adde64c4e3caef22",
"assets/assets/images/profile.png": "1b40be42fbe88a654868c8b6486f2520",
"assets/assets/images/ios_to_flutter_experience.png": "86fa12fd397b7c93debdab5f391b91f3",
"assets/assets/images/estj.png": "3f4e65f1086968a48d08a633816d98db",
"assets/assets/images/lottoLifeLogo.png": "5d1a2d584ae5ebc5b425b8dac0f1cbbf",
"assets/assets/images/3x/coverStory.png": "ba50e72268356420275089a6d300e792",
"assets/assets/images/3x/accessbility_experience.png": "969cd5e3fd4628a8fdf339aff0a4a726",
"assets/assets/images/3x/bowlogLogo.png": "57ae3c692dfe4bbda4567cb4aa91e6e0",
"assets/assets/images/3x/profile.png": "8ba464ee2d24aa8a98062d6967c3270c",
"assets/assets/images/3x/ios_to_flutter_experience.png": "8ee64fedf41359ff107e84d81a8e67f3",
"assets/assets/images/3x/estj.png": "4af7bc0b3718db21632f035d1baee186",
"assets/assets/images/3x/lottoLifeLogo.png": "57b19ff1339b7c3c4c9737cab5c5131d",
"assets/assets/images/3x/otherProfile.png": "3e28861b64cc33ef38ffaf5ca1ea30d6",
"assets/assets/images/3x/flutter_performance_experience.png": "0ae6939d72dd1b043d2f961294a92dae",
"assets/assets/images/3x/colorGameLogo.png": "09e0da56792586e0fb81f5df6b51a35d",
"assets/assets/images/otherProfile.png": "6440274cf5af462eb8f727ca8863f477",
"assets/assets/images/flutter_performance_experience.png": "6ab844c572956f3f383635fde27b1560",
"assets/assets/images/colorGameLogo.png": "1f803e319175df77bfaf08db445cefe2",
"assets/assets/fonts/SCDream-Regular.otf": "8be5836258dabb5c226e34e53a4c2c37",
"assets/assets/fonts/SCDream-Bold.otf": "3bd0c8cad0d8fa056ff66afb70c53b69",
"assets/assets/svgs/btnCancelBlack.svg": "770b6a59d55f5f8c9e1e29a9e97dcc39",
"assets/assets/svgs/btnBackBlack.svg": "49782aed92abe044d9d9a590cda8b170",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/AssetManifest.json": "25d6f0f303fa31a18daaee93e7df4a25",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"version.json": "2b21362556beb5df79b179121b7f890a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
