'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3feec316c195d244a5a5c9ce39996c37",
".git/config": "aadd3266025b4ee5d9a942d3a199da0f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2686cc31ad2f361577b48db84ec84f16",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "480e9c7549cd343dd8676aeadf68b155",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "82936f9636d509a7f84ba79939af3b83",
".git/logs/refs/heads/main": "82936f9636d509a7f84ba79939af3b83",
".git/logs/refs/remotes/origin/main": "a3a126121eb8bee56c6208fc72a8a925",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/00/3434eae26fc29fa734dddfd9ad32a0db810572": "7dac0bb1ddc05d1446d75b1073fcfc77",
".git/objects/03/376731a156e30cd3d01e84bc57f5bb6dcc4f3e": "0f888f20b54b5a25fa5bde3a60b8815b",
".git/objects/0b/f73e9917f49d85153fe26cda56de849cb66628": "0f17fb348578e7ae7a012e0a12c0ef62",
".git/objects/0d/cbe6d9d85b8a7db68f3696b8e76ea309a1f4d5": "e92ae1501918e4b535cf469de0022040",
".git/objects/0e/a2af25366e3b4c379c8e873307413590c0fb59": "bdbdd1a899755b2acaf471f25ec7882a",
".git/objects/0f/005fc1a4a7614bb75fc1e7d20777e7463c7cbc": "3fb248c4794b28acfa485df073ad702a",
".git/objects/0f/2ca0b87944cd4271e2e8afdc0ffb409bf1c5f0": "a31f576193ccc5e1ce7009a277be2f8f",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/20/af49cead19d3566980d672f872b97125368220": "10101cf68d1f09945eadd89f5479a519",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/37/a2b6429c9f24431b4108eba9ac162c2d8f466c": "6ef6035c5aff4d6603e288ea9efa58c0",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/3d/2972125b38b6a6bf08dc1c9fa68ba23aa74f1f": "321bd3dc76d376347df90c0e92722a9e",
".git/objects/3d/42b153d790d6a19099212d126b938bdf81fd46": "d645c59f4ad0311a6b14c467fb36600c",
".git/objects/3f/15919e8761097dbf8a5d836baf6ea4217bfa78": "bd9630d141f3e65fa87d7db7cf838ec6",
".git/objects/3f/d8bedc52db1f91ec45140948ba66d8d3df0a6b": "ba9979529d786a6ca12f36c95f482a85",
".git/objects/44/b81cca5348cd5819a88e7c52782f99d008698e": "863a8f04f51f92f4b124ad9258863ef2",
".git/objects/45/f84628eb435164928c5fc2292aa499da374b64": "28f567dfcc8fbaf0f40983cd877164fe",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/ee59b9b5f30f519d2ed70c4de11d57eda33ca3": "06c75fde82f05f861a7317707910fd50",
".git/objects/4a/207d1335a74b32f36e79adeaefc900d6e4ab30": "7b27818e4cdfe8a364f74a5f62875141",
".git/objects/4b/0dca8d85ed7fc1d36ad4997ec1a6c35aed0f44": "d979f49db3b4cfe37dca0866d07f6825",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/54/b058ad034a9a2aa35cdfeb8a79fafc2e0fea01": "bebd8ef7161fad3b83cd382ce420966d",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/000ef77765739acb1fbd3df3e1c342b8d70975": "75256330f0d045bdc3c94513fe743deb",
".git/objects/5a/514b2740f84252006a093a516c87caa5ca9799": "874549571dcf432186ec0f7f320e417a",
".git/objects/5b/70645833f9b470bf4739db943bf1a391af9245": "7a2ab24bfaba111cd630bd32b68bf3d5",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/15da9213927b203937aca8b599655d78f29320": "1904b570d3e651dbbd6732e176a1e486",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/62/fadc7571286031df05ec490b2891fed91d46b3": "9076d4b3b2ac3dcba60b6ea4a5c14b63",
".git/objects/63/f5bb68c95ab0aaa13202482a73ad8388ccd02d": "76665bd26b6b149fb100b5bf09c5a7b6",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/75/bc6de6a9be986a29eabe102c643691dd384fda": "f5c0acd41ba8dcf683e805633c33d382",
".git/objects/76/45be8a17313601ffa22dbecc830455e2cceebc": "1b4458dc4d392d47f7be7bf8698b07a4",
".git/objects/7b/1f349223c2bc8457b3d204570d2c50ed9ff199": "a00a0f9c557b04f171d4a02a6fc8c677",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/18aeaa31d20c1f56a0ee642698ef73945ae03b": "e4950c2fc03469ad1f65d9b874060ca0",
".git/objects/80/d1c689bb9d666b98ecc3989bb9d106508effaf": "03590703b88f88b284c024e0b8d9947e",
".git/objects/81/5fcb1016902520d990672eaa3aa34d5e207e41": "2b2ff2155c0d78168d679810fb5cd5a5",
".git/objects/84/e857f4126cde43d65d04579935f03a5647db40": "232afea3340865a3ccfacc1864a3e48f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8f/dac18a6651e98cd582090f64c15f454ffb5b26": "4bb08dbedcdcb6552efb608b924688f4",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/7dbab3a7ca77dd1133bc0543b5190ab4a37698": "4b60f55fc993cc5ea80989990434793c",
".git/objects/9a/78c145e7b8a22886e824c26b85af8da3a37daf": "21aaa5ecac85bf600eb9637eb931080d",
".git/objects/9c/e407e6b3d9dd0361a5c869e797669b44051266": "8a9ca48d2da70726e38b69684dab1628",
".git/objects/9e/1d6bf69d34cd18f50f7c56e6f9806ae1adc365": "de913504841cb28936d678eaa11ec184",
".git/objects/9e/712b110b3109edb45a97b91e92ca0b0cee3c3d": "8b3f31ddf267e59a8de180865233720b",
".git/objects/a1/d050c4bbab2f4d790f82c624f2643853bab40e": "2942646d73b7f404e924a13e6aeeb9c2",
".git/objects/ab/b7c91e5609da2c51214d7f3898a2d634fba080": "87b49ebe13b806770715c2d70c62e678",
".git/objects/ac/ce8e3fab0b15950ddb643b13c6777d962923d6": "a3d862ec44329cda9fa14ccf6706fcfb",
".git/objects/af/20ed3e6dbc2d978dbf2179106e1e5c4d4b6d7c": "717b22fc56942998a8e3abed1da960f7",
".git/objects/b2/3e426c9f08b322b88794f88f18928e9ba88e96": "82b3cbc9f5bc1c2cb13eb60b13621534",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/c36d21eb56b35454bc323be15bad3c12e536f9": "051c5996d37321c1c700682855b2d009",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/48d75c2babd604e603cb7531efd4ef84c826d1": "ae729660fe109feb7d48c512e277d566",
".git/objects/c4/7780a08ede1a8d12213cfb7444ee2e9f06aa78": "2978d0efd5c931fa28d76b548986f79e",
".git/objects/c9/ab105325ae2688cbb4474b8e2b4714450528b1": "e580ac78519abc19fccbd74dd28df06f",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/a80e44c0e0960fdd696bed3b71e6c5a74f3181": "d7c8fbe3e696c034ef0d0c7bac65f8ba",
".git/objects/cc/cbb1a1da0e536e5bf7c1829b687acc725a22df": "b041e950a818d4a30f347959f8e52960",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d0/5a5c29c56d608528c9744f47821a2f59206e06": "05e25b64703902a0f753f201e662cada",
".git/objects/d0/aa35ac3b30269585887ad32eb179434b10225e": "544a801a899f24a906c04fea9d5a6727",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/8d439dd88f806272a56e26247eb26da719c6e2": "9c3b66776cb733e8cc4e52ece52e8687",
".git/objects/d2/f838ae70746d87e5d9d0fa0d32f092fbb4bd93": "b6a4bcf5222af60f446eed14eaeb3719",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/39f6a157cdd6702360d4e705302922566f8eca": "0ab0f0e7076737b8a2514f696c6a6fcf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8e1d1d4362c385bdd0cc46c277322f440c2d9c": "957dd365071974bb159d4aba92314f88",
".git/objects/e0/edfe63ac560965b038be20f4c4560a91fb18dd": "34db2d0d282f849057f7c0bce646c5ad",
".git/objects/e1/812148e09314a07fb21a1bb7f3a2edb38abc53": "374ebfd6115fa66a642eb95e86551313",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/fb/d2b02cb3a4e46ccddb8b37d58461895ed0657b": "969a755d8dd2e6c1cdd2ed947c0f2148",
".git/objects/fd/2d2ff9539197b92900ff421cec11dcadef71c6": "49ae80080a75bb174dd80bfb35de1b89",
".git/objects/fe/89093c3d450e47dd9b8edc0df12aa1df790253": "d02572be3e1e8bf9abad1c635611e61d",
".git/ORIG_HEAD": "118c89cc7da068a885869e2e0e814f31",
".git/refs/heads/main": "18e1b708ef6cc1310fbe7447fcfaa766",
".git/refs/remotes/origin/main": "18e1b708ef6cc1310fbe7447fcfaa766",
"assets/AssetManifest.bin": "a1f58ee07cdbc1dcb1f36c375d7d877c",
"assets/AssetManifest.bin.json": "66ebd77153b5ca78d3ef7207288b630e",
"assets/AssetManifest.json": "8456bd0567bcb4695d58ad95c82a4ace",
"assets/assets/buisiness_logo.jpeg": "0aa559af657275634072efc9d5b884ab",
"assets/assets/dev-pic.jpg": "0653d5e4dadabd406691dc98c6cc3746",
"assets/assets/facebook_logo.jpeg": "0179f14045df252af09a72efd7255ffe",
"assets/assets/instagram_logo.jpeg": "e8aba2449c0a5a3ca50edd5b6a8235d2",
"assets/assets/logo.PNG": "2a8591c7581d46b07c1de50cb484a371",
"assets/assets/tiktok_logo.jpeg": "fbd4510f541b740eb0e35f948e87f794",
"assets/assets/whatsapp_logo.jpeg": "db547de95ddf9b595aa72ae1a54972cd",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "b9d972fa7e3df39b67ec98603157613e",
"assets/NOTICES": "cf3ad72ccdcb45fd5cda4c9f1149e9cf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "9048fe612b0d9edfe79bdd72e38751e9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7087e78c4b77451baf5ff1245bc2150b",
"/": "7087e78c4b77451baf5ff1245bc2150b",
"logo.PNG": "2a8591c7581d46b07c1de50cb484a371",
"main.dart.js": "824c2058aa375152e30db7a6a6f7cbda",
"manifest.json": "3264262d2f0144701165a0814ce0a8b6",
"README.md": "2aeeda3e3856b543fbec04c5f73e1eff",
"version.json": "f4dc8c002f91c1b6f6e8d2d3ecb22ef0"};
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
