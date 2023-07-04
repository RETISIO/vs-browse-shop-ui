/* eslint-disable max-len */
import {
  Html, Head, Main, NextScript,
} from 'next/document';
import config from '../shared/helpers/getConfig';

export default function Document() {
  const GtagSrc = `https://www.googletagmanager.com/ns.html?id=${config.GAKEY}&gtm_auth=FX9Yprad5blniYKnO31hiw&gtm_preview=env-638&gtm_cookies_win=x`;

  return (
    <Html lang="en">
      <Head>
        {/* <link rel="preconnect" href="https://staticw2.yotpo.com" />
        <link rel="preconnect" href="//www.google-analytics.com" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <noscript>
          <iframe
            src={GtagSrc}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          >
          </iframe>
        </noscript>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
