if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>c(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/5d7nB6sXguh9iKj-jv1Eg/_buildManifest.js",revision:"a081b03a156e6170770d106be5f404e9"},{url:"/_next/static/5d7nB6sXguh9iKj-jv1Eg/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/2572-dc1cf2abc59e5860.js",revision:"dc1cf2abc59e5860"},{url:"/_next/static/chunks/522-6378f361f1dabd3e.js",revision:"6378f361f1dabd3e"},{url:"/_next/static/chunks/5675-1f2f9d95d979c4a6.js",revision:"1f2f9d95d979c4a6"},{url:"/_next/static/chunks/5701-70c0eb0c01349b97.js",revision:"70c0eb0c01349b97"},{url:"/_next/static/chunks/6647-3234f77b970bd959.js",revision:"3234f77b970bd959"},{url:"/_next/static/chunks/674a26a7-209d1d9847ffaa50.js",revision:"209d1d9847ffaa50"},{url:"/_next/static/chunks/7026.c3c0c449238c8f91.js",revision:"c3c0c449238c8f91"},{url:"/_next/static/chunks/9618-ca725e9040e23ffa.js",revision:"ca725e9040e23ffa"},{url:"/_next/static/chunks/9692-79cf91e84383d55b.js",revision:"79cf91e84383d55b"},{url:"/_next/static/chunks/ee8b1517-49901c61c9be4e9b.js",revision:"49901c61c9be4e9b"},{url:"/_next/static/chunks/framework-0995a3e8436ddc4f.js",revision:"0995a3e8436ddc4f"},{url:"/_next/static/chunks/main-614b2a36403a17ee.js",revision:"614b2a36403a17ee"},{url:"/_next/static/chunks/pages/Aplicacion-850f115399478794.js",revision:"850f115399478794"},{url:"/_next/static/chunks/pages/Aplicacion/Camara-c363d8c78734d5ce.js",revision:"c363d8c78734d5ce"},{url:"/_next/static/chunks/pages/Aplicacion/CapturePhoto-b889cce07b7c8fa3.js",revision:"b889cce07b7c8fa3"},{url:"/_next/static/chunks/pages/Aplicacion/Foto-a777ba5dce812dcc.js",revision:"a777ba5dce812dcc"},{url:"/_next/static/chunks/pages/Aplicacion/aministracion/CambioContrasena-3695a60e97459b88.js",revision:"3695a60e97459b88"},{url:"/_next/static/chunks/pages/Aplicacion/aministracion/ConsumoPorOrden-baf1e24ea96c2672.js",revision:"baf1e24ea96c2672"},{url:"/_next/static/chunks/pages/Aplicacion/aministracion/IngresarProducto-647ee5135f0e477e.js",revision:"647ee5135f0e477e"},{url:"/_next/static/chunks/pages/Aplicacion/aministracion/IngresoAdmon-0c1b63343a5fd4df.js",revision:"0c1b63343a5fd4df"},{url:"/_next/static/chunks/pages/Aplicacion/aministracion/MenuInventario-23b4ccf81076a7b5.js",revision:"23b4ccf81076a7b5"},{url:"/_next/static/chunks/pages/Aplicacion/aministracion/ModulosAdmon-e9149078a5b8470c.js",revision:"e9149078a5b8470c"},{url:"/_next/static/chunks/pages/Aplicacion/aministracion/Ordenes-e6d49d93ea48e39e.js",revision:"e6d49d93ea48e39e"},{url:"/_next/static/chunks/pages/Aplicacion/base/Finalizar-b61fa1b2d6752433.js",revision:"b61fa1b2d6752433"},{url:"/_next/static/chunks/pages/Aplicacion/base/Ingreso-c971c5eb95b743d7.js",revision:"c971c5eb95b743d7"},{url:"/_next/static/chunks/pages/Aplicacion/base/Modulos-021fa90f32110f5a.js",revision:"021fa90f32110f5a"},{url:"/_next/static/chunks/pages/Aplicacion/base/Verificado-965d451be67dfcbd.js",revision:"965d451be67dfcbd"},{url:"/_next/static/chunks/pages/Aplicacion/mensajeros/Datos-3ccc9466d3880805.js",revision:"3ccc9466d3880805"},{url:"/_next/static/chunks/pages/Aplicacion/mensajeros/Devolucion-744744f78c2fabd3.js",revision:"744744f78c2fabd3"},{url:"/_next/static/chunks/pages/Aplicacion/mensajeros/Dinero-1f02564d1be32c5a.js",revision:"1f02564d1be32c5a"},{url:"/_next/static/chunks/pages/Aplicacion/mensajeros/Efectivo-45c481fdc8c5408f.js",revision:"45c481fdc8c5408f"},{url:"/_next/static/chunks/pages/Aplicacion/mensajeros/Foto-aa46616ddcb159b3.js",revision:"aa46616ddcb159b3"},{url:"/_next/static/chunks/pages/Aplicacion/mensajeros/Nequi-d3c274d1677fd922.js",revision:"d3c274d1677fd922"},{url:"/_next/static/chunks/pages/Aplicacion/mensajeros/NequiEfectivo-498d4ff01749b67b.js",revision:"498d4ff01749b67b"},{url:"/_next/static/chunks/pages/Aplicacion/mensajeros/Otra-3bd109b2c8dcf565.js",revision:"3bd109b2c8dcf565"},{url:"/_next/static/chunks/pages/Aplicacion/mensajeros/SinCobro-e85493aa171e490e.js",revision:"e85493aa171e490e"},{url:"/_next/static/chunks/pages/Aplicacion/procesos/Cajoneras-50fd0093493b5343.js",revision:"50fd0093493b5343"},{url:"/_next/static/chunks/pages/Aplicacion/procesos/WhatsApp-72786a8f516da94b.js",revision:"72786a8f516da94b"},{url:"/_next/static/chunks/pages/Calidad-59750c60b8841626.js",revision:"59750c60b8841626"},{url:"/_next/static/chunks/pages/Contactenos-923bb10065e3145d.js",revision:"923bb10065e3145d"},{url:"/_next/static/chunks/pages/Dashboard-5b31935cea3184cd.js",revision:"5b31935cea3184cd"},{url:"/_next/static/chunks/pages/Historico/Servilla-6ea35514fdc637fb.js",revision:"6ea35514fdc637fb"},{url:"/_next/static/chunks/pages/Home-ec0a3c74640b3fb1.js",revision:"ec0a3c74640b3fb1"},{url:"/_next/static/chunks/pages/Indice-a85bc3389354549d.js",revision:"a85bc3389354549d"},{url:"/_next/static/chunks/pages/Ingresar-a22f5dad93a860d9.js",revision:"a22f5dad93a860d9"},{url:"/_next/static/chunks/pages/Mision-a562ec9772c812bd.js",revision:"a562ec9772c812bd"},{url:"/_next/static/chunks/pages/NotFound/Index-34006d374f227199.js",revision:"34006d374f227199"},{url:"/_next/static/chunks/pages/Registrarse-aaf7c060c9134386.js",revision:"aaf7c060c9134386"},{url:"/_next/static/chunks/pages/Salir-86978f7189a89550.js",revision:"86978f7189a89550"},{url:"/_next/static/chunks/pages/Servicio/Alistamiento-5089120d1c3427ac.js",revision:"5089120d1c3427ac"},{url:"/_next/static/chunks/pages/Servicio/Distribucion-bc0d1650a3096137.js",revision:"bc0d1650a3096137"},{url:"/_next/static/chunks/pages/Servicio/Dropshipping-f6d07396c77fb0f5.js",revision:"f6d07396c77fb0f5"},{url:"/_next/static/chunks/pages/Servicio/Email-5e2620ce0bfefb31.js",revision:"5e2620ce0bfefb31"},{url:"/_next/static/chunks/pages/Servicio/Fulfillment-1f33aede52346745.js",revision:"1f33aede52346745"},{url:"/_next/static/chunks/pages/Servicio/Paqueteo-65d2259dcbe04c70.js",revision:"65d2259dcbe04c70"},{url:"/_next/static/chunks/pages/Vision-653fc2120a5c05ce.js",revision:"653fc2120a5c05ce"},{url:"/_next/static/chunks/pages/_app-2e8121bf0fafa51f.js",revision:"2e8121bf0fafa51f"},{url:"/_next/static/chunks/pages/_error-a1dfd1adb240a82a.js",revision:"a1dfd1adb240a82a"},{url:"/_next/static/chunks/pages/index-d78b303192b013de.js",revision:"d78b303192b013de"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-3a90ae58bd60548f.js",revision:"3a90ae58bd60548f"},{url:"/_next/static/css/e0c961cb2812274e.css",revision:"e0c961cb2812274e"},{url:"/icons/android-chrome-192x192.png",revision:"8c536ae277dcb40fa3880bc6357defc3"},{url:"/icons/android-chrome-512x512.png",revision:"a3085630bcc5e39b552d29d9bfaa40a1"},{url:"/icons/apple-touch-icon.png",revision:"ec154b14224df7a06c547d4ce6d242fa"},{url:"/icons/browserconfig.xml",revision:"b0df1d8364886483f481bc261ea8db4b"},{url:"/icons/favicon-16x16.png",revision:"ff4fc527d912c1079ff1995483e859f7"},{url:"/icons/favicon-32x32.png",revision:"953216005724c95b525c3228e937c12f"},{url:"/icons/mstile-150x150.png",revision:"4bf9cf1df629a7fb16848fddd20c1852"},{url:"/icons/safari-pinned-tab.svg",revision:"2970fcfbe43b3d97611926ea516fa3c2"},{url:"/icons/site.webmanifest",revision:"b9aa277fcfc34c31db6c7a7ea3469b8c"},{url:"/manifest.json",revision:"b81b48033f6f0fdf922fef183369eae8"},{url:"/sitemap.xml",revision:"5d893594d3dcc7a56dcf5c4e85ef423a"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:c})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&c&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:c})=>"1"===e.headers.get("RSC")&&c&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
