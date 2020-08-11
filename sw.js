const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Solitude°"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"626063a859a4410237aa3908f63391c7",url:"./about/index.html"},{revision:"086eb05836c8af42e448bca938be7b7c",url:"./archives/2020/07/index.html"},{revision:"8875825cf4c45d6d91158a8d8eed1316",url:"./archives/2020/08/index.html"},{revision:"6f37971be643969056e325a46aa2074b",url:"./archives/2020/index.html"},{revision:"44e3ade18dcc5051c15f3110f3a16192",url:"./archives/index.html"},{revision:"004edee8bc0bd8f4455916f70d98eda2",url:"./categories/主题/index.html"},{revision:"2d2ce4cbc39e217920d8fb7d0779f084",url:"./categories/Hello-Word/index.html"},{revision:"bed3e1dfddcf529738537eac28f04a2f",url:"./categories/Hexo/备份/index.html"},{revision:"464c9227d990660e3f27e242ac3effcc",url:"./categories/Hexo/部署/index.html"},{revision:"ff70492615c2b5928800a732777b63c1",url:"./categories/Hexo/搭建/index.html"},{revision:"b15294fccc12f2e46d8e08d51125aed1",url:"./categories/Hexo/index.html"},{revision:"fac98de2885d13eff982bdc49f85606b",url:"./categories/index.html"},{revision:"56e78d26a2c07a4c9ddc2029f7debac9",url:"./categories/Linux/Docker/index.html"},{revision:"f9e16a5c1a81c9453fa972c6daa9ff06",url:"./categories/Linux/index.html"},{revision:"262e096c8bcd5aa5c5cd2c060466bd28",url:"./css/index.css"},{revision:"4c466a82269c0002cbef85a3c600916c",url:"./css/Solitude.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"f441cd95ca0f93c1cf1b9eacec0b81a1",url:"./Gallery/index.html"},{revision:"35bd874eb96b491fcb8463a15e2d9be4",url:"./index.html"},{revision:"125fa8cc0f50b559881e6b0be97b3db2",url:"./js/main.js"},{revision:"c9af02da2fc1f7d634843f61536369d1",url:"./js/search/algolia.js"},{revision:"c33665b06edc70004a016ba9db4205b4",url:"./js/search/local-search.js"},{revision:"917f065096fedd8fe1d268b08df88bde",url:"./js/Solitude.js"},{revision:"e8455f75769585811cd6b3220787d08e",url:"./js/third-party/activate-power-mode.js"},{revision:"bb643bd9c2ac59f6ce2a1251b8014624",url:"./js/third-party/canvas-nest.js"},{revision:"4ca518354a167db9fe0869c0982ff215",url:"./js/third-party/canvas-ribbon.js"},{revision:"c2420dfec66aa5bad663e6c365a129c8",url:"./js/third-party/click_heart.js"},{revision:"22f4c82da4faed04c79e61fcbbdf675c",url:"./js/third-party/ClickShowText.js"},{revision:"080fdfcacffc6828826484645140af50",url:"./js/third-party/fireworks.js"},{revision:"5c8c9ff4bb9bed49e333387a54eae9be",url:"./js/third-party/piao.js"},{revision:"0176913a28754a766910352489a24a69",url:"./js/tw_cn.js"},{revision:"ed14620aa57998a9d3f887c1989f5365",url:"./js/utils.js"},{revision:"a749012858766d7b646f2ed7658c2220",url:"./link/index.html"},{revision:"d1b92ec8737eb84acd3b60e70875f1a7",url:"./message/index.html"},{revision:"ad2bced7bd4d29d183f4e416def3c25a",url:"./posts/16107.html"},{revision:"69ac471fe16c107f9b6d46b913bc8d8b",url:"./posts/16294.html"},{revision:"10086b0259cfab0984a74fe9fc41fb44",url:"./posts/16295.html"},{revision:"209ce9d4ef8d51608e6f9b3859675ba6",url:"./posts/24860.html"},{revision:"8d735a045393e2ece73197b11b759fde",url:"./posts/27423.html"},{revision:"6c122c813f4f1191a59afa8c44559274",url:"./posts/53634.html"},{revision:"f182e83797b674f2d25d35b8663be50a",url:"./pwa/manifest.json"},{revision:"7531f4ca6e91c6c625a2faabbf2d2b71",url:"./tags/Butterfly/index.html"},{revision:"b0288783f10f3a7fbcf9b00bcb2df007",url:"./tags/Docker/index.html"},{revision:"b2ffd22a781549728e64d9e69d8ef85a",url:"./tags/git/index.html"},{revision:"af82cce7347def105a9f733bcc2963a8",url:"./tags/gitee/index.html"},{revision:"c5b15c4b155cdbdc877611aa13a6a1fa",url:"./tags/github/index.html"},{revision:"8e95789d8c4163ad2085d3839d4f7a2e",url:"./tags/Hello-World/index.html"},{revision:"f2810e3c6c6dc2f629165948329533f1",url:"./tags/Hexo/index.html"},{revision:"d0091746a2ef0197256138d106b40a0c",url:"./tags/index.html"},{revision:"482b6f2637a83f91a1a11436ff166095",url:"./tags/Mysql/index.html"},{revision:"c16c0f506f97c441d1c551e23be98b2e",url:"./tags/Nginx/index.html"},{revision:"a525ab800174c69c9ea9e2f046c1cb18",url:"./tags/Reids/index.html"},{revision:"33c73f4b4ef68689843d62ca5dc4cd59",url:"./tags/Tencent-Cloud/index.html"},{revision:"6758627e6ac91941bbd6d972dc947c71",url:"./tags/Tencent-CloudBase/index.html"},{revision:"a09264951208c059e0d5ab299b90c850",url:"./tags/thems/index.html"},{revision:"d2553b5ca598157c8f5a78da2bf01c52",url:"./tags/Tomcat/index.html"},{revision:"e2d56d1fcab67701eee560654a012ea2",url:"./tags/win/index.html"},{revision:"16590defed6efdf2ed946bd035112443",url:"./timer-shaft/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();