/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "7ba6ac532ba12322ac1ad998cb6b8371"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.1160f6fc.css",
    "revision": "da50c7329dbabc55c05c83b1af8b7e8a"
  },
  {
    "url": "assets/img/add_beat.1efd0c01.png",
    "revision": "1efd0c01da85df25ed0d2c3d4188a4be"
  },
  {
    "url": "assets/img/delete_beat.da733370.png",
    "revision": "da73337092107eaa9db09c4cf81c5fbf"
  },
  {
    "url": "assets/img/EER-diagram.c3eca197.png",
    "revision": "c3eca1978cf566cb00bbc00810cdd6aa"
  },
  {
    "url": "assets/img/get_all.9e48fb50.png",
    "revision": "9e48fb50bab432b13f128e988a79bcf4"
  },
  {
    "url": "assets/img/get_by_id.6cfa7521.png",
    "revision": "6cfa7521408be783442117bc7d2b45ec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/udate_beat.3705a4a5.png",
    "revision": "3705a4a508995fc6408ce6df44bbae91"
  },
  {
    "url": "assets/js/10.2335d171.js",
    "revision": "fea7c8caf3c78ceee44a393912146324"
  },
  {
    "url": "assets/js/11.e4410e65.js",
    "revision": "7c3183bb28914e7eca93f8097e64cdf1"
  },
  {
    "url": "assets/js/12.95061cd2.js",
    "revision": "f5303aac86a7f3b24ee097c3f9692a35"
  },
  {
    "url": "assets/js/13.dee2741b.js",
    "revision": "1e18b7c74ddf421fef9e62bc09d04dfa"
  },
  {
    "url": "assets/js/14.4ec39f14.js",
    "revision": "fc8adf744f64945e3fb309f06e74d6fa"
  },
  {
    "url": "assets/js/15.3e78f918.js",
    "revision": "e989c24d3da7f7b7bc46e2ed54fe5a80"
  },
  {
    "url": "assets/js/16.11901f1b.js",
    "revision": "c263f49960ab72c2409770204b77dbaf"
  },
  {
    "url": "assets/js/17.3d122e1e.js",
    "revision": "6d6b56457c75cdddc0fdd7798ec5fb1a"
  },
  {
    "url": "assets/js/18.4a79f3d9.js",
    "revision": "1fcdbc15c35def4bf1bbe57b6184765f"
  },
  {
    "url": "assets/js/19.a242e83d.js",
    "revision": "e3fa4a82e1498b3a8d0a086ab728f7ed"
  },
  {
    "url": "assets/js/2.173e3381.js",
    "revision": "e83ae08752bb15e89a35040767e944e9"
  },
  {
    "url": "assets/js/20.02b05cd2.js",
    "revision": "5a4251c1fc49cbffe5cac9fcc8282c98"
  },
  {
    "url": "assets/js/21.7da743a2.js",
    "revision": "bef43bd00dcc586b1a96e6b58bf9fc62"
  },
  {
    "url": "assets/js/22.71edc657.js",
    "revision": "7d7bbfa2e241fbe120da0186a0e98541"
  },
  {
    "url": "assets/js/23.cf6919c1.js",
    "revision": "c78e9b9e274cb577616623c2801ebbba"
  },
  {
    "url": "assets/js/24.581ed11a.js",
    "revision": "f46630e2c0478bb7a0ede1637a89ebcd"
  },
  {
    "url": "assets/js/26.92f11a01.js",
    "revision": "30d3a279ef2c9a3926b29b676025ac05"
  },
  {
    "url": "assets/js/3.c5813262.js",
    "revision": "cfecf2605b180a613a22dfacc2849e24"
  },
  {
    "url": "assets/js/4.7b4ef2dc.js",
    "revision": "3d6d5f9d1edd47cb25f3b7585d33f664"
  },
  {
    "url": "assets/js/5.bef440fb.js",
    "revision": "380ea1057a82131278aaa086feeaac57"
  },
  {
    "url": "assets/js/6.c6360e74.js",
    "revision": "fd09527626dd68c3ac05800c5aeac174"
  },
  {
    "url": "assets/js/7.da2488ef.js",
    "revision": "46ad7d5ada3793aa18628a96f89ce767"
  },
  {
    "url": "assets/js/8.15f89980.js",
    "revision": "6e77d6755a4be3b51d8e4cbe8328b320"
  },
  {
    "url": "assets/js/9.1f5cd9f1.js",
    "revision": "bd7019f9104848e37a7283efbd174418"
  },
  {
    "url": "assets/js/app.c1308663.js",
    "revision": "b346bc16f05f0fa944d92998534b3047"
  },
  {
    "url": "conclusion/index.html",
    "revision": "87f991544d8023cbdf95c15f2d745aec"
  },
  {
    "url": "design/index.html",
    "revision": "8a8a66f6225cd28c2310e7e8b2878ee2"
  },
  {
    "url": "EER-diagram.png",
    "revision": "c3eca1978cf566cb00bbc00810cdd6aa"
  },
  {
    "url": "index.html",
    "revision": "ad5b99c7dda14be2ae11d1a61189e65b"
  },
  {
    "url": "intro/index.html",
    "revision": "8b4d95217ea5e6ceabab47243daa188d"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "ecb5f2d7c646cafa652cb07bdd1de2a0"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "5c4f20a13809a25ad35c78af0d75091f"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "7044dbecd6d5aed8f6a33e26534e2853"
  },
  {
    "url": "software/index.html",
    "revision": "038dfc35c3239a6a0a45da9cc471896f"
  },
  {
    "url": "test/index.html",
    "revision": "452c08429400669043e072c81a263a9d"
  },
  {
    "url": "use cases/index.html",
    "revision": "819eb0c596d869c329c659bbd0fa12b5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
