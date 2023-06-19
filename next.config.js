/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('next').NextConfig} */

// const withLess = require('./config');
// withLess.patchNext(require('next/dist/build/webpack/config/blocks/css'));
// const lessToJS = require('less-vars-to-js');
// const fs = require('fs');
// const path = require('path');

// const themeVariables = lessToJS(
//   fs.readFileSync(path.resolve(__dirname, './styles/variables.less'), 'utf8'),
// );

module.exports = {
  experimental:{
    largePageDataBytes: 128 * 100000
  },
  reactStrictMode: false,
  generateEtags: false,
  poweredByHeader: false,
  publicRuntimeConfig: {
    APIURL: process.env.APIURL,
    IMGPATH: process.env.IMAGEPATH,
    YOTOKEY: process.env.YOTPO_KEY,
    GAKEY: process.env.GA_KEY,
    LISKEY: process.env.LISTRACK_MID,
    RKEY: process.env.RETISIO_ID,
    SKEY: process.env.SITEID,
    DARTMOUTHURL: process.env.DARTMOUTH_URL,
    HOME_PAGE_CACHE: process.env.HOME_PAGE_CACHE,
    PDP_PAGE_CACHE: process.env.PDP_PAGE_CACHE,
    STATIC_PAGE_CACHE: process.env.STATIC_PAGE_CACHE
  },
  async headers() {
    return [
      {
        source: '/', // automatically handles all locales
        headers: [
          {
            key: 'max-age',
            value: '86400',
          },
        ],
      },
      {
        source: '/:path*', // automatically handles all locales
        headers: [
          {
            key: 'max-age',
            value: '86400',
          },
        ],
      },
    ]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      // {
      //   hostname: '192.168.23.87',
      // },
      {
        hostname: '192.168.23.105',
      },
      {
        hostname: 'ab.qa.retisio.io',
      },
      {
        hostname: 'us.ab-dev.retisio.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    console.log('rewrite called', process.env.NEXT_PUBLIC_APIURL);
    return [
      {
        source: '/arc/:path*',
        destination: `${process.env.NEXT_PUBLIC_APIURL}:path*`,
      },
    ];
  },
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-US', 'fr', 'de'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    // domains: [
    //   {
    //     domain: 'example.com',
    //     defaultLocale: 'en-US',
    //   },
    //   {
    //     domain: 'example.nl',
    //     defaultLocale: 'nl-NL',
    //   },
    //   {
    //     domain: 'example.fr',
    //     defaultLocale: 'fr',
    //   },
    // ],
  },
};
