'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "07fba117cbccb6c984082b1e60004218",
"assets/AssetManifest.bin.json": "27319fe0cfd20bdd53a5be3cdb338cd2",
"assets/AssetManifest.json": "49275be217129b5a932367ef73f97b94",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "cd32c9566681d7859f0502feacc71902",
"assets/lib/assets/7stickassets/7stick0.png": "e1112769375a07658386814b52d2b514",
"assets/lib/assets/7stickassets/7stick1.png": "ea993686c1ed9f1b089e0168527800b9",
"assets/lib/assets/7stickassets/7stick2.png": "ed649a06fa07ee87fb322cad60649cf3",
"assets/lib/assets/7stickassets/7stick3.png": "24bcce0df4e6f0f12e98e1056ea254ce",
"assets/lib/assets/7stickassets/7stick4.png": "97422d961f12883853f21a3bbf2a2901",
"assets/lib/assets/7stickassets/7stick5.png": "77e3918e382512a41e5111baefa16322",
"assets/lib/assets/7stickassets/7stick6.png": "28b0420f65e3a2e76d2eb373d6aa7bc4",
"assets/lib/assets/AmmanSkyO.jpg": "2d34e66d9b686c8e1213952aa7be22d3",
"assets/lib/assets/bavariaassets/bvr0.png": "653886c92cf3b4afdf965dfb98830076",
"assets/lib/assets/bavariaassets/bvr1.png": "50351ff7371018dd2d784e1c34897386",
"assets/lib/assets/bavariaassets/bvr2.png": "86b31fdf0b06e132b3141f03ecd799b6",
"assets/lib/assets/bavariaassets/bvr3.png": "6fe946cfbfcfc73f2f9cb75afc2be98d",
"assets/lib/assets/bavariaassets/bvr4.png": "e85e6083ddad5ae64765631fcd8da4ec",
"assets/lib/assets/britannicaassets/britannica0.png": "033188364180e0db9efaedc309e2be6a",
"assets/lib/assets/britannicaassets/britannica1.png": "d5ae81c6f476e3efa843ba5f5829fabc",
"assets/lib/assets/britannicaassets/britannica2.png": "dd13fd32a872e9a8ac3df52423efe9a5",
"assets/lib/assets/britannicaassets/britannica3.png": "a1d5f22efbe652aebfb7d119e5f1f1e3",
"assets/lib/assets/catalougepdf/7stick.pdf": "6329942fbfb060a8f4daac747af281a4",
"assets/lib/assets/catalougepdf/bavaria.pdf": "ffbde4049c9f6a72346b5a69c52f1574",
"assets/lib/assets/catalougepdf/britannica.pdf": "8ef3c3e845f7d74e1b075fc29714d4db",
"assets/lib/assets/catalougepdf/chupachups.pdf": "3cd83f41a72df1e1c6d8d062816dcec0",
"assets/lib/assets/catalougepdf/flis.pdf": "cae75227781b4d4954d486d131c81fef",
"assets/lib/assets/catalougepdf/lestello.pdf": "4c60af54ee6660a390b719f1e489b909",
"assets/lib/assets/catalougepdf/millennium.pdf": "01314ce07e382feeb804d56eac24021a",
"assets/lib/assets/catalougepdf/mr.sukkar.pdf": "3565e7c32de684ca909ba2dcf6367237",
"assets/lib/assets/catalougepdf/xxl.pdf": "6ab0cce3a3d5b31b0c0ed11ac743bdfb",
"assets/lib/assets/catalougepdf/zlotoklos.pdf": "6e7170866660ffc0157a2f32b3554ee8",
"assets/lib/assets/CDL.jpeg": "7f2861c4b7329354e98d8767617dac26",
"assets/lib/assets/chupachupsassets/chupachups0.png": "60ce823419d2415d89dd5b3bb30a79b9",
"assets/lib/assets/chupachupsassets/chupachups1.png": "504028b8525d188c0a737e8e976d8fd4",
"assets/lib/assets/chupachupsassets/chupachups2.png": "47a7b89026acff740b957f9b6c3f5c6d",
"assets/lib/assets/flis/flis0.jpg": "f4aa8be2561ceb1569f64cde463f52e2",
"assets/lib/assets/flis/flis1.jpg": "96eb9abc0c6d12e205e27b997e1ce2ee",
"assets/lib/assets/flis/flis12.jpg": "adb2867fa31b29c5028acf88e65aafeb",
"assets/lib/assets/flis/flis13.jpg": "ce267ba73028f11b3252dafa34471e5c",
"assets/lib/assets/flis/flis14.png": "546357f9eb29954709056cacb8666f9b",
"assets/lib/assets/flis/flis17.jpg": "841897e98b50e9ed7af3e77a2f0aa9de",
"assets/lib/assets/flis/flis18.jpg": "2c821ac79980c86706806c4f3e3a99ef",
"assets/lib/assets/flis/flis19.jpg": "04414fa97c0193fbd38162f449cf6b96",
"assets/lib/assets/flis/flis8.jpg": "b5d31784aa26718057b4321e242667ef",
"assets/lib/assets/flis/flis9.jpg": "991fe090a740cb04a7545984a0eb38f2",
"assets/lib/assets/JFM.png": "1e8f7d9e78380a5b7fe34dc887d5022f",
"assets/lib/assets/lestelloassets/lestello0.png": "8db740ca578cc602c26a3ea9f9d7a303",
"assets/lib/assets/lestelloassets/lestello1.png": "bcf01bd581c44b6b66aec9940a869772",
"assets/lib/assets/lestelloassets/lestello2.png": "3d383af328b61de156a2b963ce922cfc",
"assets/lib/assets/lestelloassets/lestello3.png": "48e19fe4c2e6088f50c8dcca7580ca31",
"assets/lib/assets/lestelloassets/lestello4.png": "b715df59905273d446c24582a544061d",
"assets/lib/assets/logoassets/7sticklogo.png": "c392d9604b30bf4eba4da67fbfbb619a",
"assets/lib/assets/logoassets/bavarialogo.jpeg": "08d29b6e8e4ec9d0abbe6e9733424cad",
"assets/lib/assets/logoassets/Britannicalogo.png": "47d2293170a8a469915fe143ec369880",
"assets/lib/assets/logoassets/chupachupslogo.png": "0357debe78744a1cb16834270b0432a1",
"assets/lib/assets/logoassets/Flislogo.png": "7e4476dd3f0a3d0ceab3a10410be4df1",
"assets/lib/assets/logoassets/lestellologo.png": "4af44f6bc6d1d6b4988e0d559d2d9349",
"assets/lib/assets/logoassets/millenniumlogo.png": "a77a1f0f5e9ff237846be0d09b1590f2",
"assets/lib/assets/logoassets/xxllogo.jpg": "25e8cbc3c4ff6e24159b7ca33c851600",
"assets/lib/assets/logoassets/zlotokloslogo.png": "e0ecf35b9a750b6a784c63447f6e114b",
"assets/lib/assets/logoswshadow.jpg": "534ac3af469ed9ce0cd0aeb5e0005819",
"assets/lib/assets/millennium/millennium(0).png": "06e390558d935e9f3d887df75a912acb",
"assets/lib/assets/millennium/millennium(10).png": "efa1af4c56f8d877778460a75d9de75e",
"assets/lib/assets/millennium/millennium(11).png": "fb2ec6ff669f86cff469db9987551db1",
"assets/lib/assets/millennium/millennium(13).png": "6a85bd6b6eb58ec0452d75dacd8a129b",
"assets/lib/assets/millennium/millennium(14).png": "727ef3e44961d1dbaed1c054958a6e18",
"assets/lib/assets/millennium/millennium(15).png": "f8da5cccb6af063ad793db05be3b972d",
"assets/lib/assets/millennium/millennium(16).png": "ad91d367102d90f768705be666a832c5",
"assets/lib/assets/millennium/millennium(18).png": "961a66ee95853622bb944c99db77bc96",
"assets/lib/assets/millennium/millennium(7).png": "02f5edd4ef1b1c894cf3ee3eabac1ef9",
"assets/lib/assets/millennium/millennium(8).png": "168f02c0bd9c34f80e5ddeb22ab08ecd",
"assets/lib/assets/millennium/millennium(9).png": "59d74b19db7910f107ea92ff2f8cf525",
"assets/lib/assets/mrsukkar/mrsukkar0.jpg": "fac1ddab5cc74f0de2f4cabdffd30f5e",
"assets/lib/assets/mrsukkar/mrsukkar1.jpg": "cb047b9432ff9e938312e254ebcdcf78",
"assets/lib/assets/mrsukkar/mrsukkar2.jpg": "437765953bd4d46c0fecdfcc98c0cc51",
"assets/lib/assets/mrsukkar/mrsukkar3.jpg": "7566481bb1fa940fde2510bc42414572",
"assets/lib/assets/mrsukkar/mrsukkar4.jpg": "f6aec5405995973a33ee5716d8e1eb6e",
"assets/lib/assets/mrsukkar/mrsukkar5.jpg": "a35c7a7ae792d1c77105e7db0c8f6452",
"assets/lib/assets/mrsukkar/mrsukkar6.jpg": "2ca14d8292d7f9a4284d465136a6ebaf",
"assets/lib/assets/mrsukkar/mrsukkar7.jpg": "c14e6d418d7698a961487c75acee5d08",
"assets/lib/assets/xxlassets/xxl0.png": "ac3203adbba9209da8bf6b78bef71259",
"assets/lib/assets/zlotoklos/zlotoklos(0).png": "5b2d4a4f1355db70ffe5e8c05580a75b",
"assets/lib/assets/zlotoklos/zlotoklos(2).png": "3cf1ef688f726403a51fd9da3d0f2e71",
"assets/lib/assets/zlotoklos/zlotoklos(3).png": "8b8c0cd13289d5e37758b198391a8b1e",
"assets/lib/assets/zlotoklos/zlotoklos(4).png": "264792b4296a8964c758902b1b7d05f4",
"assets/lib/assets/zlotoklos/zlotoklos(6).png": "c9295ee49cba6beecb6622855a5ef95a",
"assets/lib/assets/zlotoklos/zlotoklos(7).png": "db10cfc2503566b67724dff987a8ee47",
"assets/lib/assets/zlotoklos/zlotoklos(8).png": "f1d2a802ec947b5036e82035c6906776",
"assets/lib/assets/zlotoklos/zlotoklos(9).png": "f5d6281e31976c56245ee4cd87bb8148",
"assets/NOTICES": "be153ce48fe45da0f001ef36a409cb22",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3ca9960fd0358c714ace2168946da702",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "e024c818ae1c2bfd1c048aaf5add1afd",
"icons/android-chrome-192x192.png": "e6460dcdefea978be9044e940584fa3a",
"icons/android-chrome-512x512.png": "0fd5afb022d522abb65585fa2ea71723",
"icons/apple-touch-icon.png": "e6b8a96a5ef04ef17477c69efc92655c",
"index.html": "fee3ebcd13e1530fab05b84729c4a902",
"/": "fee3ebcd13e1530fab05b84729c4a902",
"logo.png": "e6460dcdefea978be9044e940584fa3a",
"main.dart.js": "34fc3f21d660a1c24febee1ae3b703c5",
"manifest.json": "4a6a31b77a9ab67db04f9d33d48edd82",
"version.json": "77166945bc92939d3739aa40a8c344ea"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
