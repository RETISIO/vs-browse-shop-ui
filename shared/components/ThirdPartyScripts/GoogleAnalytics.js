/* eslint-disable indent */
/* eslint-disable @next/next/inline-script-id */
import React,{useEffect} from 'react';
import config from '../../helpers/getConfig';

export default function GoogleAnalytics() {

  useEffect(() => {
    // const script = document.createElement("script");
    // script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_KEY}`;
    // document.body.appendChild(script);
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?`&l=${l}`:'';j.async=true;j.src=
      `https://www.googletagmanager.com/gtm.js?id=${i}${dl }&gtm_auth=FX9Yprad5blniYKnO31hiw&gtm_preview=env-638&gtm_cookies_win=x`;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer', config.GAKEY);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${config.GAKEY}', {
      page_path: window.location.pathname,
    });
  `;
    document.body.appendChild(script);
  }, []);
  
  return (
    <>
    </>
  );
}