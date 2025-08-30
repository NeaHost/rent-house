'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "269eec0697e82e4e9402ef4ec60e1a63",
"assets/AssetManifest.bin.json": "05d7b4a2a260641217e520046e79c573",
"assets/AssetManifest.json": "970de39dad1cfd5b342eb30cc7367600",
"assets/assets/dynamic_field.json": "01ae3867438795ca8608cccdc8eedd64",
"assets/assets/fonts/Akatab-Black.ttf": "1b84fb40869a7db271054baf402d77df",
"assets/assets/fonts/Akatab-Bold.ttf": "0b73465f09f35f06f45ef7ed0f45217c",
"assets/assets/fonts/Akatab-ExtraBold.ttf": "cc09e8478f1d502f89562adea728000e",
"assets/assets/fonts/Akatab-Medium.ttf": "13a42eea125842f28de2b6db99718ee0",
"assets/assets/fonts/Akatab-Regular.ttf": "be3b6163ebea6e45254ed19ebc65eb95",
"assets/assets/fonts/Akatab-SemiBold.ttf": "b1e500cc3fe8ef5afb7a942d38067829",
"assets/assets/icons/auth/ic_eye.svg": "91d00849f1a1ea41398c384cda4ae9d5",
"assets/assets/icons/auth/ic_eye_close.svg": "e8fd3a5c70fce214eb9a0728f0bd6cf3",
"assets/assets/icons/auth/ic_mail.svg": "66a0ccd8a47aeb3975dd642164f3626c",
"assets/assets/icons/auth/ic_ph.svg": "b847c0de45d95307556e4f957bc01863",
"assets/assets/icons/auth/ic_telegram.svg": "c5d6e68fbd8e2997e5e4ee3275fb5713",
"assets/assets/icons/calculator.png": "fed1a6f29d63d8489000efdde35e34fc",
"assets/assets/icons/calculator.webp": "7fbf5a6e75025709e1e549c31705afbe",
"assets/assets/icons/category.png": "f5d9c87fde0a8762bc061a9795b65325",
"assets/assets/icons/delivery.png": "2ed16f13045301fae60e229edaa990f8",
"assets/assets/icons/en.png": "44f6e2752eaaf29883a10a81ba04f9fb",
"assets/assets/icons/ic_cancel.svg": "e9b9b421adb2adb98ea96207117e1795",
"assets/assets/icons/ic_error.svg": "d1d8e440de95a1e97751252370f17f9a",
"assets/assets/icons/ic_eye.svg": "91d00849f1a1ea41398c384cda4ae9d5",
"assets/assets/icons/ic_eye_close.svg": "e8fd3a5c70fce214eb9a0728f0bd6cf3",
"assets/assets/icons/ic_order.svg": "3995edf79fe7a39c4b034a2dc86aa724",
"assets/assets/icons/ic_success.svg": "73c3c09f87877a4540d30ee544c9bf02",
"assets/assets/icons/km.png": "af166c8186b8c4f949cfb3f10e35cbde",
"assets/assets/icons/message.png": "1eae7e893df711cad68bfbf55a0c67c7",
"assets/assets/icons/order.png": "efbc9ecffc366f46501225fdd0477c1d",
"assets/assets/icons/order_from.png": "e4b9ab4cfec57dfff579a2a3c7807f0c",
"assets/assets/icons/order_info.png": "ad0f1131bb532def7b6eb1fd1a543155",
"assets/assets/icons/product.png": "4d072e207c4b59712ec1948a36fca7ec",
"assets/assets/icons/pymType.png": "7559dace32fc8e06def7f4a18e552323",
"assets/assets/icons/through.png": "828ad28022b91467d3da651252c14c51",
"assets/assets/icons/user.png": "7aa56bc3696af1e82230f7329e2316e1",
"assets/assets/icons/youtube.png": "ca6d67e60f758d352745329b283e8f32",
"assets/assets/images/aba.jpg": "b6f3120d4289f035b7944944c9b726ea",
"assets/assets/images/aceleda.png": "69b670ff179418c3226c4faaf9fcb011",
"assets/assets/images/cart.png": "6f5aeed5aac654a511e1cacd057538e9",
"assets/assets/images/clouds.png": "37ea893c5560bd31b2c705df3eb281f2",
"assets/assets/images/copy.png": "2257f328119a400a5b2d660a8142d48c",
"assets/assets/images/fb.png": "8c89ef8ab45d47ae9a954822532889f7",
"assets/assets/images/khqr.jpg": "3bcb67985649298048aef2243674ce26",
"assets/assets/images/log.svg": "cfd120cd57ecc7e309112bc55467b974",
"assets/assets/images/messenger.png": "84ff46e62aa52831dc80c1dfd8ed3031",
"assets/assets/images/mey.jpg": "bfc93119a3a87a5d7edc94aba264c547",
"assets/assets/images/moon.png": "cf4a8fe9fd5ae8417585e28243d3f660",
"assets/assets/images/no-content.png": "96a72285b9ff86039103e6910fb3ff2b",
"assets/assets/images/noimg.jpg": "3ea266799ac28909d4bbe79898e39485",
"assets/assets/images/pen.png": "99a8c857ae57104f982804d84e512379",
"assets/assets/images/pwd.png": "a59d86a5e7fab3a47c3fc34990732034",
"assets/assets/images/shop.png": "1ddcae767a7f263ee53757ad47ecd58e",
"assets/assets/images/stars.png": "6e029d65160db74b64fc5564587191d1",
"assets/assets/images/sun.png": "c166557bc4c9193b439e2e184d8327b2",
"assets/assets/images/telegram.png": "b37d6df3b36a74748a9bda890b3ba550",
"assets/assets/images/trash.png": "02c4053bff2835712d55b071d0221871",
"assets/assets/images/truemoney.png": "94c26005bca9ad2a9bbd9c1d76b07a23",
"assets/assets/images/waiting.gif": "3ca3e51a9965491eae2ee31c09643897",
"assets/assets/images/wing.png": "6123ff328eb2a408f5aba54174c142f4",
"assets/assets/splash_screen.json": "7d9db972ffe2b369ac15ebf13a4e4876",
"assets/assets/svg/burn.svg": "1092e8ea17523e4a64cf04d56d45dd89",
"assets/assets/svg/cart.svg": "ad7c0cfde92da1ea4cc30a1dcdb708c8",
"assets/assets/svg/distance.svg": "b4d02069d64d82363e7b511e777b4703",
"assets/assets/svg/exercise.svg": "a6289fddba5275f82b411a2d39c482b2",
"assets/assets/svg/filter.svg": "74007a8b614b895c50d2dd3beee060f2",
"assets/assets/svg/history.svg": "9feef16414bc28c927c0b05b8f4d4b8a",
"assets/assets/svg/home.svg": "cc9e59a115d9b73d8e20494ede08f7a8",
"assets/assets/svg/ic_delete.svg": "35c416d41526e2d583e35d1eaad0c8cd",
"assets/assets/svg/ic_filter.svg": "65a2f15437c20ef592329f9515091ff4",
"assets/assets/svg/ic_order.svg": "3995edf79fe7a39c4b034a2dc86aa724",
"assets/assets/svg/ic_pen.svg": "229f3ff9607daba6d614fe408110bf50",
"assets/assets/svg/ic_ph.svg": "b847c0de45d95307556e4f957bc01863",
"assets/assets/svg/ic_up.svg": "4bc798e1f4788f94e0dd583e56b13173",
"assets/assets/svg/lock.svg": "981c499da97b6a1153a80e9fd3f74ec5",
"assets/assets/svg/menubar.svg": "21fec5826e39d8781f17f6707d457040",
"assets/assets/svg/more.svg": "4d37592c7894253910b8dfa105dc4992",
"assets/assets/svg/profile.svg": "5b882f7482eea8a5af6a2af2b438b56a",
"assets/assets/svg/qr.svg": "48895686df1d71eb551c2ea8df8baedf",
"assets/assets/svg/search.svg": "af02da1f5e58690fd6ac4b1161a20a48",
"assets/assets/svg/setting.svg": "fccde2bb62dfc8654c2861f882c3de88",
"assets/assets/svg/signout.svg": "5e89bf15d17d54e4247c3cf4ee4e530b",
"assets/assets/svg/sleep.svg": "b4bf451ff1ba1a96c7c3ce9bd9677752",
"assets/assets/svg/steps.svg": "0a620e25b583f94a561c1cc51a6674e3",
"assets/FontManifest.json": "33dd27b695ecd759819dba422742947e",
"assets/fonts/MaterialIcons-Regular.otf": "ef58934d4c9bfb5757c830827fef5b8a",
"assets/NOTICES": "06bbeb8db907d7af350e1a749c999d73",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5eb24a68faf6e2da093ff79fea8e14a6",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shorebird.yaml": "10e1c92c954c1eb7ed1e4558eee74a06",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.ico": "6c48dae020a65e5947756b8a4757fb03",
"favicon.png": "96c830f3f6df0beaac580552e6f74cc1",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "8db2d5426b003c26e87496b67682a625",
"icons/Icon-192.png": "831bf344a0a142e9061275a355afa911",
"icons/Icon-512.png": "8c4b054feb416236449235a01f370b7b",
"icons/Icon-maskable-192.png": "831bf344a0a142e9061275a355afa911",
"icons/Icon-maskable-512.png": "8c4b054feb416236449235a01f370b7b",
"index.css": "4b45ba39b084fc1f9c5f3d1d0ab8227d",
"index.html": "649aed030e4e5de6b45ca6e38218a704",
"/": "649aed030e4e5de6b45ca6e38218a704",
"main.dart.js": "52b48b32cae8d0021a2fa2ec459a3acc",
"manifest.json": "4f152d4f36da37c73eb0b698162d8dfd",
"splash/img/dark-1x.gif": "23017c3c859eb7e442fc1a31e057b49d",
"splash/img/dark-2x.gif": "75f300c6a19411b646e24c4099b072b1",
"splash/img/dark-3x.gif": "09b1669fd05508eaf58ead12c3214058",
"splash/img/dark-4x.gif": "dc0d43860d6230cacd0bcc55c64fc0cf",
"splash/img/light-1x.gif": "23017c3c859eb7e442fc1a31e057b49d",
"splash/img/light-2x.gif": "75f300c6a19411b646e24c4099b072b1",
"splash/img/light-3x.gif": "09b1669fd05508eaf58ead12c3214058",
"splash/img/light-4x.gif": "dc0d43860d6230cacd0bcc55c64fc0cf",
"version.json": "cc39af40c297351e16debb3461f83805"};
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
