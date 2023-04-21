/* eslint-disable max-len */
import {
  Html, Head, Main, NextScript,
} from 'next/document';

export default function Document() {
  const GtagSrc = `https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GA_KEY}&gtm_auth=FX9Yprad5blniYKnO31hiw&gtm_preview=env-638&gtm_cookies_win=x`;

  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://staticw2.yotpo.com" />
        <link rel="preconnect" href="//www.google-analytics.com" />
        <noscript>
          <iframe
            src={GtagSrc}
            height="0"
            width="0"
            style={{display:"none",visibility:"hidden"}}
          >
          </iframe>

        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
