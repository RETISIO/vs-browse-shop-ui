/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable @next/next/inline-script-id */
import React from 'react';
import Script from 'next/script';

export default function RetisioSDK() {
  return (
    <Script src="https://storage.googleapis.com/retisio-dm-web-sdk/retisio-sdk.js" 
    onLoad={() => {
      retisioSDK.init(process.env.NEXT_PUBLIC_RETISIO_ID);
    }}>
    </Script>
  );
}
