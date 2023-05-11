/* eslint-disable @next/next/inline-script-id */
import React from 'react';
import Script from 'next/script';
import config from '../../helpers/getConfig';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${config.GAKEY}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${config.GAKEY}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
