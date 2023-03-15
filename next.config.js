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
  reactStrictMode: false,
  generateEtags: false,
  poweredByHeader: false,
  // lessLoaderOptions: {
  //   lessOptions: {
  //     modifyVars: themeVariables,
  //   },
  // },
  images: {
    // unoptimized: true,
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
