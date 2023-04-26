/* eslint-disable @next/next/inline-script-id */
import React from 'react';
import Script from 'next/script';

export default function RetisioSDK() {
  return (
    <Script src="https://storage.googleapis.com/retisio-dm-web-sdk/retisio-sdk.js">
      {`retisioSDK.init(${process.env.NEXT_PUBLIC_RETISIO_ID});`}
    </Script>
  );
}
