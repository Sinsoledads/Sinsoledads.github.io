const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Solitude°"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"f49d6daf7c25c64b5cb575c116932fa2",url:"./about/index.html"},{revision:"b1ae0d7087f64c3c0821278e83e96c33",url:"./archives/2020/07/index.html"},{revision:"a2c67d7f9eec2d7fb10a246f4545e91a",url:"./archives/2020/08/index.html"},{revision:"650da24bcd1a22ba0c345545328ff898",url:"./archives/2020/index.html"},{revision:"05c98452293b8921b195e8e9963e84d5",url:"./archives/index.html"},{revision:"113b9e29c25b73100f65b843ba6da60d",url:"./categories/Hello-Word/index.html"},{revision:"3f6480df46d6ba7abc7eaf6ed53b51d0",url:"./categories/Hexo/部署/index.html"},{revision:"055163863a55a3ea73845ead88ab03ab",url:"./categories/Hexo/index.html"},{revision:"e880a26ad7b3cdcad10ffc16c1bc1406",url:"./categories/index.html"},{revision:"2f0d2ab4233b7bc22552d47bbceab142",url:"./categories/Linux/Docker/index.html"},{revision:"b2dcebd765932db821df20d496fd0080",url:"./categories/Linux/index.html"},{revision:"262e096c8bcd5aa5c5cd2c060466bd28",url:"./css/index.css"},{revision:"4c466a82269c0002cbef85a3c600916c",url:"./css/Solitude.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"7f679704e85cffeff5605dc5c4cc79be",url:"./Gallery/index.html"},{revision:"f72dea0af0e53667d6d7e0a02c6a6240",url:"./index.html"},{revision:"125fa8cc0f50b559881e6b0be97b3db2",url:"./js/main.js"},{revision:"c9af02da2fc1f7d634843f61536369d1",url:"./js/search/algolia.js"},{revision:"c33665b06edc70004a016ba9db4205b4",url:"./js/search/local-search.js"},{revision:"917f065096fedd8fe1d268b08df88bde",url:"./js/Solitude.js"},{revision:"e8455f75769585811cd6b3220787d08e",url:"./js/third-party/activate-power-mode.js"},{revision:"bb643bd9c2ac59f6ce2a1251b8014624",url:"./js/third-party/canvas-nest.js"},{revision:"4ca518354a167db9fe0869c0982ff215",url:"./js/third-party/canvas-ribbon.js"},{revision:"c2420dfec66aa5bad663e6c365a129c8",url:"./js/third-party/click_heart.js"},{revision:"22f4c82da4faed04c79e61fcbbdf675c",url:"./js/third-party/ClickShowText.js"},{revision:"080fdfcacffc6828826484645140af50",url:"./js/third-party/fireworks.js"},{revision:"5c8c9ff4bb9bed49e333387a54eae9be",url:"./js/third-party/piao.js"},{revision:"0176913a28754a766910352489a24a69",url:"./js/tw_cn.js"},{revision:"ed14620aa57998a9d3f887c1989f5365",url:"./js/utils.js"},{revision:"42bbd6691927b7c690f07a63075d43df",url:"./link/index.html"},{revision:"64df585c3dd793c68d07b7ac3ef71d42",url:"./message/index.html"},{revision:"c4e639060b9d15aa5fe5617a3b133c19",url:"./posts/16107.html"},{revision:"01ee5d2cc1e1328c27aa04ebd6b4b925",url:"./posts/16294.html"},{revision:"f25023ad12bb8c72fc619715f8775170",url:"./posts/16295.html"},{revision:"fa640271e5567d408e06a8e398c14709",url:"./posts/27423.html"},{revision:"f182e83797b674f2d25d35b8663be50a",url:"./pwa/manifest.json"},{revision:"a5a4de067493807c0ef4432d784dc163",url:"./tags/Butterfly/index.html"},{revision:"f0d9851f0db60f09b354ead4e27aa550",url:"./tags/Docker/index.html"},{revision:"6b8a53f16ee722c44263ee5d8f5e08ef",url:"./tags/Hello-World/index.html"},{revision:"4e021494d3ca81fc0ef3646c106c3e9e",url:"./tags/Hexo/index.html"},{revision:"d18dd9a769f0f60aa0c4f8d4984a1ae8",url:"./tags/index.html"},{revision:"55ec61fad5fbce45b9fafe3276d55331",url:"./tags/Mysql/index.html"},{revision:"d773a945ec4cdd72b1e78b385782332e",url:"./tags/Nginx/index.html"},{revision:"806cb6d92a9b68e81da54bd81244db29",url:"./tags/Reids/index.html"},{revision:"6e3aed96bc9a6f3587e664f2e6973a7a",url:"./tags/Tencent-Cloud/index.html"},{revision:"4dece5a53b48133a2e1593807d48f738",url:"./tags/Tencent-CloudBase/index.html"},{revision:"a7d9e8263ef33d14f9b216a19fc33d04",url:"./tags/Tomcat/index.html"},{revision:"fe7ddf38f87d48b014b432693e050c44",url:"./timer-shaft/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();