if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1757-8afa2f03805c5f53.js",revision:"8afa2f03805c5f53"},{url:"/_next/static/chunks/1822-7f4c3923dc3cf4d0.js",revision:"7f4c3923dc3cf4d0"},{url:"/_next/static/chunks/2368-0b6d6aff1bced70c.js",revision:"0b6d6aff1bced70c"},{url:"/_next/static/chunks/2572-d2fb38d7272943b7.js",revision:"d2fb38d7272943b7"},{url:"/_next/static/chunks/522-2b026a832bfb8856.js",revision:"2b026a832bfb8856"},{url:"/_next/static/chunks/5675-27117e432f15e6c1.js",revision:"27117e432f15e6c1"},{url:"/_next/static/chunks/655-af84ba04c44256b2.js",revision:"af84ba04c44256b2"},{url:"/_next/static/chunks/6647-b2a7bffb7ea84967.js",revision:"b2a7bffb7ea84967"},{url:"/_next/static/chunks/674a26a7-7c3a791103209b94.js",revision:"7c3a791103209b94"},{url:"/_next/static/chunks/7026.9f55c324473bcfa6.js",revision:"9f55c324473bcfa6"},{url:"/_next/static/chunks/8013-ecbc3c1a97ce0851.js",revision:"ecbc3c1a97ce0851"},{url:"/_next/static/chunks/cb355538-ff8f2e1a5a77c9f9.js",revision:"ff8f2e1a5a77c9f9"},{url:"/_next/static/chunks/ee8b1517-44a69fb16a99910f.js",revision:"44a69fb16a99910f"},{url:"/_next/static/chunks/framework-0e8d27528ba61906.js",revision:"0e8d27528ba61906"},{url:"/_next/static/chunks/main-e473c1e21ca819b8.js",revision:"e473c1e21ca819b8"},{url:"/_next/static/chunks/pages/Aplicacion-64560cd786aadfb2.js",revision:"64560cd786aadfb2"},{url:"/_next/static/chunks/pages/Aplicacion/Camara-c5487375ae20db0b.js",revision:"c5487375ae20db0b"},{url:"/_next/static/chunks/pages/Aplicacion/CapturePhoto-01240a57bba2948d.js",revision:"01240a57bba2948d"},{url:"/_next/static/chunks/pages/Aplicacion/Foto-266045fae092849f.js",revision:"266045fae092849f"},{url:"/_next/static/chunks/pages/Aplicacion/aministracion/CambioContrasena-a1b1228a737d3b24.js",revision:"a1b1228a737d3b24"},{url:"/_next/static/chunks/pages/Aplicacion/aministracion/ConsumoPorOrden-1d80bd72379299a7.js",revision:"1d80bd72379299a7"},{url:"/_next/static/chunks/pages/Aplicacion/aministracion/IngresarProducto-c257c4f92b0e9b25.js",revision:"c257c4f92b0e9b25"},{url:"/_next/static/chunks/pages/Aplicacion/aministracion/IngresoAdmon-5e870f84d8c5646b.js",revision:"5e870f84d8c5646b"},{url:"/_next/static/chunks/pages/Aplicacion/aministracion/MenuInventario-484cafe8b301a386.js",revision:"484cafe8b301a386"},{url:"/_next/static/chunks/pages/Aplicacion/aministracion/ModulosAdmon-a182226859b3c7ed.js",revision:"a182226859b3c7ed"},{url:"/_next/static/chunks/pages/Aplicacion/aministracion/Ordenes-c30fd805eab284b2.js",revision:"c30fd805eab284b2"},{url:"/_next/static/chunks/pages/Aplicacion/aministracion/inventario-a1273e711ff70bb0.js",revision:"a1273e711ff70bb0"},{url:"/_next/static/chunks/pages/Aplicacion/base/Finalizar-34369143796d931c.js",revision:"34369143796d931c"},{url:"/_next/static/chunks/pages/Aplicacion/base/Ingreso-d1e3cf2160fbf12b.js",revision:"d1e3cf2160fbf12b"},{url:"/_next/static/chunks/pages/Aplicacion/base/Modulos-cc831bd4bc6140d5.js",revision:"cc831bd4bc6140d5"},{url:"/_next/static/chunks/pages/Aplicacion/base/Verificado-c8ee13b88104d00a.js",revision:"c8ee13b88104d00a"},{url:"/_next/static/chunks/pages/Aplicacion/mensajeros/Datos-3795d2295be30c54.js",revision:"3795d2295be30c54"},{url:"/_next/static/chunks/pages/Aplicacion/mensajeros/Devolucion-56f97df51bda62bc.js",revision:"56f97df51bda62bc"},{url:"/_next/static/chunks/pages/Aplicacion/mensajeros/Dinero-e3fb850ff36ac301.js",revision:"e3fb850ff36ac301"},{url:"/_next/static/chunks/pages/Aplicacion/mensajeros/Efectivo-c46cdcc49ac97e68.js",revision:"c46cdcc49ac97e68"},{url:"/_next/static/chunks/pages/Aplicacion/mensajeros/Foto-b05d26628158fd6d.js",revision:"b05d26628158fd6d"},{url:"/_next/static/chunks/pages/Aplicacion/mensajeros/Nequi-cd6f2c39db308e1f.js",revision:"cd6f2c39db308e1f"},{url:"/_next/static/chunks/pages/Aplicacion/mensajeros/NequiEfectivo-1109d7466306bf05.js",revision:"1109d7466306bf05"},{url:"/_next/static/chunks/pages/Aplicacion/mensajeros/Otra-067a6183edd48325.js",revision:"067a6183edd48325"},{url:"/_next/static/chunks/pages/Aplicacion/mensajeros/SinCobro-c5391d894d47ba64.js",revision:"c5391d894d47ba64"},{url:"/_next/static/chunks/pages/Aplicacion/procesos/Cajoneras-c54082db992bb8dc.js",revision:"c54082db992bb8dc"},{url:"/_next/static/chunks/pages/Aplicacion/procesos/WhatsApp-b4b89a253680e494.js",revision:"b4b89a253680e494"},{url:"/_next/static/chunks/pages/Calidad-5dee95f432cac2c1.js",revision:"5dee95f432cac2c1"},{url:"/_next/static/chunks/pages/Contactenos-ba5ddf427f9c8957.js",revision:"ba5ddf427f9c8957"},{url:"/_next/static/chunks/pages/Dashboard-e978fa24fff5c438.js",revision:"e978fa24fff5c438"},{url:"/_next/static/chunks/pages/Historico/Servilla-05ad4c97768a4ac5.js",revision:"05ad4c97768a4ac5"},{url:"/_next/static/chunks/pages/Home-449bf49a58798d70.js",revision:"449bf49a58798d70"},{url:"/_next/static/chunks/pages/Home/MapComponents-a542db126a5a48b1.js",revision:"a542db126a5a48b1"},{url:"/_next/static/chunks/pages/Home/YearsInMarket-7b463dccebabad1e.js",revision:"7b463dccebabad1e"},{url:"/_next/static/chunks/pages/Home1-6b8eb91fe8e487df.js",revision:"6b8eb91fe8e487df"},{url:"/_next/static/chunks/pages/Indice-e1d9da229a2f3490.js",revision:"e1d9da229a2f3490"},{url:"/_next/static/chunks/pages/Ingresar-489ef15f2f22bb9a.js",revision:"489ef15f2f22bb9a"},{url:"/_next/static/chunks/pages/Mision-e992b19ecc7f20a0.js",revision:"e992b19ecc7f20a0"},{url:"/_next/static/chunks/pages/NotFound/Index-e3ac36e1c6689977.js",revision:"e3ac36e1c6689977"},{url:"/_next/static/chunks/pages/Registrarse-11e0a26aa8a963db.js",revision:"11e0a26aa8a963db"},{url:"/_next/static/chunks/pages/Salir-3b340b22eaee9717.js",revision:"3b340b22eaee9717"},{url:"/_next/static/chunks/pages/Servicio/Alistamiento-b8c96e5060e98b67.js",revision:"b8c96e5060e98b67"},{url:"/_next/static/chunks/pages/Servicio/Distribucion-fb715b0e3e5312c3.js",revision:"fb715b0e3e5312c3"},{url:"/_next/static/chunks/pages/Servicio/Dropshipping-5538520e6829340d.js",revision:"5538520e6829340d"},{url:"/_next/static/chunks/pages/Servicio/Email-37a37cead9c1cc66.js",revision:"37a37cead9c1cc66"},{url:"/_next/static/chunks/pages/Servicio/Fulfillment-9f5778bd6bb60edf.js",revision:"9f5778bd6bb60edf"},{url:"/_next/static/chunks/pages/Servicio/Paqueteo-88fe25741ea0cdb0.js",revision:"88fe25741ea0cdb0"},{url:"/_next/static/chunks/pages/Vision-04980c3b5172614b.js",revision:"04980c3b5172614b"},{url:"/_next/static/chunks/pages/_app-c4c1ec538660d79d.js",revision:"c4c1ec538660d79d"},{url:"/_next/static/chunks/pages/_error-eb74a452056fea13.js",revision:"eb74a452056fea13"},{url:"/_next/static/chunks/pages/index-57d7b8ec94b921f6.js",revision:"57d7b8ec94b921f6"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-1c59c85998b18c29.js",revision:"1c59c85998b18c29"},{url:"/_next/static/css/ccf371c3ff8780a4.css",revision:"ccf371c3ff8780a4"},{url:"/_next/static/tXuQckXMQJbwi8-Ol31Fk/_buildManifest.js",revision:"7effe2478fa7f2e89b94ce0ea33b052e"},{url:"/_next/static/tXuQckXMQJbwi8-Ol31Fk/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icons/android-chrome-192x192.png",revision:"8c536ae277dcb40fa3880bc6357defc3"},{url:"/icons/android-chrome-512x512.png",revision:"a3085630bcc5e39b552d29d9bfaa40a1"},{url:"/icons/apple-touch-icon.png",revision:"ec154b14224df7a06c547d4ce6d242fa"},{url:"/icons/browserconfig.xml",revision:"b0df1d8364886483f481bc261ea8db4b"},{url:"/icons/favicon-16x16.png",revision:"ff4fc527d912c1079ff1995483e859f7"},{url:"/icons/favicon-32x32.png",revision:"953216005724c95b525c3228e937c12f"},{url:"/icons/mstile-150x150.png",revision:"4bf9cf1df629a7fb16848fddd20c1852"},{url:"/icons/safari-pinned-tab.svg",revision:"2970fcfbe43b3d97611926ea516fa3c2"},{url:"/icons/site.webmanifest",revision:"b9aa277fcfc34c31db6c7a7ea3469b8c"},{url:"/manifest.json",revision:"b81b48033f6f0fdf922fef183369eae8"},{url:"/sitemap.xml",revision:"5d893594d3dcc7a56dcf5c4e85ef423a"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
