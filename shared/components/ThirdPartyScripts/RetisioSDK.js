/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable @next/next/inline-script-id */
import React from 'react';
import Script from 'next/script';
import config from '../../helpers/getConfig';

export default function RetisioSDK() {
  return (
    <Script
      src={config.DARTMOUTHURL}
      onLoad={() => {
        retisioSDK.init(config.RKEY);
      }}>
    </Script>
  );
}
