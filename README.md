# Bug Report

## Info

Build is failing when using "@nuxtjs/i18n": "^8.0.0-rc.3" with "nuxt": "^3.6.5", setting (SSR: true) in nuxt.config.ts

But created when using "@nuxtjs/i18n": "^8.0.0-rc.3" with "nuxt": "^3.6.5", setting (SSR: false) in nuxt.config.ts

# Bug Reproduction

## Setup

**Clone this repo**

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

## Error
```
> build
> nuxt build

Nuxi 3.6.5                                                                                           1:46:49 PM
Nuxt 3.6.5 with Nitro 2.5.2                                                                          1:46:49 PM

 WARN  Vue I18n configuration file does not exist at i18n.config. Skipping...           @nuxtjs/i18n 1:46:50 PM

ℹ Building client...                                                                                1:46:52 PM
ℹ vite v4.3.9 building for production...                                                            1:46:52 PM
ℹ ✓ 143 modules transformed.                                                                        1:46:55 PM
ℹ .nuxt/dist/client/manifest.json                   2.92 kB │ gzip:  0.49 kB                        1:46:55 PM
ℹ .nuxt/dist/client/_nuxt/error-500.c5df6088.css    1.95 kB │ gzip:  0.74 kB                        1:46:55 PM
ℹ .nuxt/dist/client/_nuxt/error-404.7fc72018.css    3.63 kB │ gzip:  1.12 kB                        1:46:55 PM
ℹ .nuxt/dist/client/_nuxt/en.e152a1fb.js            0.10 kB │ gzip:  0.11 kB                        1:46:55 PM
ℹ .nuxt/dist/client/_nuxt/hi.bf256499.js            0.11 kB │ gzip:  0.14 kB                        1:46:55 PM
ℹ .nuxt/dist/client/_nuxt/404.60ec169a.js           0.17 kB │ gzip:  0.16 kB                        1:46:55 PM
ℹ .nuxt/dist/client/_nuxt/index.2b9f28b4.js         0.17 kB │ gzip:  0.16 kB                        1:46:55 PM
ℹ .nuxt/dist/client/_nuxt/aboutUs.ca7211eb.js       0.19 kB │ gzip:  0.17 kB                        1:46:55 PM
ℹ .nuxt/dist/client/_nuxt/default.569cbae4.js       0.47 kB │ gzip:  0.31 kB                        1:46:55 PM
ℹ .nuxt/dist/client/_nuxt/error-500.88bf14ba.js     1.88 kB │ gzip:  0.99 kB                        1:46:55 PM
ℹ .nuxt/dist/client/_nuxt/error-404.19074b47.js     2.25 kB │ gzip:  1.16 kB                        1:46:55 PM
ℹ .nuxt/dist/client/_nuxt/nuxt-link.56e2aac4.js     4.35 kB │ gzip:  1.86 kB                        1:46:55 PM
ℹ .nuxt/dist/client/_nuxt/entry.c4a53ccd.js       216.37 kB │ gzip: 77.87 kB                        1:46:55 PM
ℹ ✓ built in 3.12s                                                                                  1:46:55 PM
✔ Client built in 3136ms                                                                            1:46:55 PM
ℹ Building server...                                                                                1:46:55 PM
ℹ vite v4.3.9 building SSR bundle for production...                                                 1:46:55 PM
ℹ ✓ 92 modules transformed.                                                                         1:46:56 PM
ℹ .nuxt/dist/server/_nuxt/error-404-styles.1e0dde27.mjs         0.15 kB                             1:46:57 PM
ℹ .nuxt/dist/server/_nuxt/error-500-styles.cf4b3e80.mjs         0.15 kB                             1:46:57 PM
ℹ .nuxt/dist/server/styles.mjs                                  0.35 kB                             1:46:57 PM
ℹ .nuxt/dist/server/_nuxt/en-4c293fab.js                        0.20 kB │ map:   0.10 kB            1:46:57 PM
ℹ .nuxt/dist/server/_nuxt/hi-af056e6d.js                        0.20 kB │ map:   0.10 kB            1:46:57 PM
ℹ .nuxt/dist/server/_nuxt/index-e12b288f.js                     0.22 kB │ map:   5.29 kB            1:46:57 PM
ℹ .nuxt/dist/server/_nuxt/aboutUs-8b7a1e7b.js                   0.77 kB │ map:   0.30 kB            1:46:57 PM
ℹ .nuxt/dist/server/_nuxt/404-3a2f2bbe.js                       1.11 kB │ map:   0.13 kB            1:46:57 PM
ℹ .nuxt/dist/server/_nuxt/index-6dec0d48.js                     1.12 kB │ map:   0.13 kB            1:46:57 PM
ℹ .nuxt/dist/server/_nuxt/island-renderer-f6748c54.js           1.27 kB │ map:   1.42 kB            1:46:57 PM
ℹ .nuxt/dist/server/_nuxt/default-78fce5c8.js                   2.05 kB │ map:   0.58 kB            1:46:57 PM
ℹ .nuxt/dist/server/_nuxt/error-500-styles-1.mjs-8fa81fcc.js    2.17 kB │ map:   0.12 kB            1:46:57 PM
ℹ .nuxt/dist/server/_nuxt/error-500-0e3831b4.js                 3.27 kB │ map:   3.79 kB            1:46:57 PM
ℹ .nuxt/dist/server/_nuxt/error-404-styles-1.mjs-e0837f4f.js    3.86 kB │ map:   0.12 kB            1:46:57 PM
ℹ .nuxt/dist/server/_nuxt/error-404-7fdd67e2.js                 4.16 kB │ map:   5.83 kB            1:46:57 PM
ℹ .nuxt/dist/server/_nuxt/nuxt-link-744fccd2.js                 5.99 kB │ map:  13.21 kB            1:46:57 PM
ℹ .nuxt/dist/server/server.mjs                                153.60 kB │ map: 368.34 kB            1:46:57 PM
ℹ ✓ built in 1.58s                                                                                  1:46:57 PM
✔ Server built in 1600ms                                                                            1:46:57 PM
✔ Generated public .output/public                                                             nitro 1:46:57 PM
ℹ Initializing prerenderer                                                                    nitro 1:46:57 PM
ℹ Prerendering 1 initial routes with crawler                                                  nitro 1:46:59 PM
  ├─ / (84ms) (Error: [301] )                                                                  nitro 1:46:59 PM
                                                                                               nitro 1:46:59 PM
Errors prerendering:
  ├─ / (301)                                                                                   nitro 1:46:59 PM
                                                                                               nitro 1:46:59 PM

 ERROR  Exiting due to prerender errors.                                                             1:46:59 PM

  at prerender (node_modules/nitropack/dist/shared/nitro.1db3349c.mjs:189:11)
  at async node_modules/nuxt/dist/index.mjs:2641:7
  at async build (node_modules/nuxt/dist/index.mjs:3794:5)
  at async Object.invoke (node_modules/nuxi/dist/chunks/build.mjs:59:5)
  at async _main (node_modules/nuxi/dist/cli.mjs:49:20)
```
