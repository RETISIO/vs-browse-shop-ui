/* eslint-disable @next/next/inline-script-id */
import Script from 'next/script';
import config from '../../helpers/getConfig';

export default function Yotpo() {
  return (
    <Script
      src={`https://staticw2.yotpo.com/${config.YOTOKEY}/widget.js`}
    >
    </Script>
  );
}
