if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),d={module:{uri:t},exports:o,require:c};s[t]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e8df8c8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-Bu5GuvUG.js",revision:null},{url:"assets/index-CLhvSaWP.css",revision:null},{url:"index.html",revision:"410efa8630b510a552794deb4c34af92"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/apple-touch-icon.png",revision:"c550c3e6e6bdfd64c99eff3ccf895a5b"},{url:"assets/logo.svg",revision:"e2b03b6c9080baef241d5bfb08b8929c"},{url:"assets/pwa-192x192.png",revision:"ea7ce0bcb18f55839831f4685bf5a735"},{url:"assets/pwa-512x512.png",revision:"22d10379bcfdc18a7e208723d99ab09a"},{url:"assets/safari-pinned-tab.svg",revision:"85221e69a02af866e292d3c91cb70be5"},{url:"manifest.webmanifest",revision:"123ab889b33f72169b31fde2652dbd67"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
