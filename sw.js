const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"Solitude°"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"1cf9e909cc9bf78f5bcbac110e52badf",url:"./about/index.html"},{revision:"88e380d001a2ed968281652785ebeaeb",url:"./archives/2020/07/index.html"},{revision:"6b9e238e76c4fe657904c5942f452f6d",url:"./archives/2020/08/index.html"},{revision:"5cedaf53696e00a5f045330459508c5a",url:"./archives/2020/index.html"},{revision:"5648c49be31e58738ee0765ecd3bf769",url:"./archives/index.html"},{revision:"37317f0a5ad719090bbf83bf26290b08",url:"./categories/压测/index.html"},{revision:"b6e81ff2bdd297e9b268bb55b83bf600",url:"./categories/Hello-Word/index.html"},{revision:"0c3df3d6373fe5914e1a87cc31baa8b1",url:"./categories/Hexo/备份/index.html"},{revision:"f0ca55aab4bcecc17c5dcaa373642d49",url:"./categories/Hexo/部署/index.html"},{revision:"8d0bb5274637404f2cead2821906c58c",url:"./categories/Hexo/搭建/index.html"},{revision:"af9d194c447954870c5d7dd53b1f51d7",url:"./categories/Hexo/主题/index.html"},{revision:"2d890f2fcf1e03b9b43d37d21b5524cc",url:"./categories/Hexo/index.html"},{revision:"81eb92adca1f40a80c046b160c6d3c74",url:"./categories/index.html"},{revision:"ff1c1773355c33462225f1b27a48bb75",url:"./categories/Java/开源项目/index.html"},{revision:"c36c9ea575235c822c4552d26f3ae81e",url:"./categories/Java/index.html"},{revision:"6d68a3fcc00ce0a9f5ab72adb377fc44",url:"./categories/Linux/Docker/index.html"},{revision:"651ed93894348839380fa83113323f92",url:"./categories/Linux/index.html"},{revision:"a9ba7de924e92d9f88e8fc4f4e7faea1",url:"./categories/Markdown/index.html"},{revision:"262e096c8bcd5aa5c5cd2c060466bd28",url:"./css/index.css"},{revision:"85bae7178dbd1437e461db55f119adba",url:"./css/Solitude.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"2d2d02650bb52c729756e64d6be1023c",url:"./index.html"},{revision:"125fa8cc0f50b559881e6b0be97b3db2",url:"./js/main.js"},{revision:"c9af02da2fc1f7d634843f61536369d1",url:"./js/search/algolia.js"},{revision:"c33665b06edc70004a016ba9db4205b4",url:"./js/search/local-search.js"},{revision:"86867d2e0dfd5d23c1d5450648341d0b",url:"./js/Solitude.js"},{revision:"e8455f75769585811cd6b3220787d08e",url:"./js/third-party/activate-power-mode.js"},{revision:"bb643bd9c2ac59f6ce2a1251b8014624",url:"./js/third-party/canvas-nest.js"},{revision:"4ca518354a167db9fe0869c0982ff215",url:"./js/third-party/canvas-ribbon.js"},{revision:"c2420dfec66aa5bad663e6c365a129c8",url:"./js/third-party/click_heart.js"},{revision:"22f4c82da4faed04c79e61fcbbdf675c",url:"./js/third-party/ClickShowText.js"},{revision:"080fdfcacffc6828826484645140af50",url:"./js/third-party/fireworks.js"},{revision:"5c8c9ff4bb9bed49e333387a54eae9be",url:"./js/third-party/piao.js"},{revision:"0176913a28754a766910352489a24a69",url:"./js/tw_cn.js"},{revision:"ed14620aa57998a9d3f887c1989f5365",url:"./js/utils.js"},{revision:"dab6261ffbef76cc09347ed2ec95e0db",url:"./link/index.html"},{revision:"7f42e86726300a84caf1278a14fb9c96",url:"./message/index.html"},{revision:"ffe63e90db422a724209ea7c143f8f23",url:"./photo/index.html"},{revision:"a8d7cc3c28252b314084639b72e83b1c",url:"./posts/16107.html"},{revision:"3d40991a45fa55bf87197a345da6e247",url:"./posts/16294.html"},{revision:"25b157f4ddd93af290e70f90446214a9",url:"./posts/16295.html"},{revision:"ffce8d0f674d90d008bbbdc373a1fc86",url:"./posts/21229.html"},{revision:"83ddf3972553a5fea8b4323546b9629c",url:"./posts/24860.html"},{revision:"0d0bdec214f829ab276de653757e6b4b",url:"./posts/27423.html"},{revision:"aedb123c56eede9255cecb00f0e8e8aa",url:"./posts/41658.html"},{revision:"ea4a0e745c3be5f5e7c87577ddf32753",url:"./posts/53634.html"},{revision:"24f37b7fe6168cdac4c7f2df3f30d4ae",url:"./posts/58154.html"},{revision:"f182e83797b674f2d25d35b8663be50a",url:"./pwa/manifest.json"},{revision:"ee4e708f7e6b20344730dd157faa6642",url:"./tags/Butterfly/index.html"},{revision:"ea1fa4811e012010aff359a0beacc5d3",url:"./tags/Docker/index.html"},{revision:"6fdff69f5d3716f45abde94a79942442",url:"./tags/Git/index.html"},{revision:"2014632c50e11011ef7e18d27c531ad6",url:"./tags/Gitee/index.html"},{revision:"9a724eab5e629df2514204b82759071e",url:"./tags/Github/index.html"},{revision:"49024c20cb2c80af83fb95489656e6ed",url:"./tags/Hello-World/index.html"},{revision:"7662fa5aaf0c385cb20e70d38d9a36e2",url:"./tags/Hexo/index.html"},{revision:"c6717335c44b5d16e432fcfe41244b02",url:"./tags/index.html"},{revision:"5ca33dc4f8bd1de83e9b6d3672430c00",url:"./tags/Java/index.html"},{revision:"ac07e9b5b257bcf8d92c13701b52e109",url:"./tags/JMter/index.html"},{revision:"f82b9042ef189cf22e19bc0201003000",url:"./tags/Markdown/index.html"},{revision:"9e5866a391f918559690eace7024c7b6",url:"./tags/Mysql/index.html"},{revision:"cc94dbc5afcf8a2a58002e5d560548b7",url:"./tags/Nginx/index.html"},{revision:"eb2e1117126b328eb0e5ac25a3ff231b",url:"./tags/Reids/index.html"},{revision:"b197d8ee67f6621891759e19e58dd6d3",url:"./tags/Tencent-Cloud/index.html"},{revision:"ff9bf5ce3a904011aeb0deea6a3ed6a2",url:"./tags/Tencent-CloudBase/index.html"},{revision:"67c82c8eb6695722be4e75dfa231fab2",url:"./tags/Thems/index.html"},{revision:"d3dd1460ec1bd0a183e09961faa0c75a",url:"./tags/Tomcat/index.html"},{revision:"f8534f61df754724116f8ae805cef044",url:"./tags/Win/index.html"},{revision:"25eb37b8dcf4c6c5eec4e1ea631b68b3",url:"./timer-shaft/index.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();