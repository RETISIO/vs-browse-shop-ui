/* eslint-disable @next/next/inline-script-id */
import Script from 'next/script';

export default function Yotpo() {
  return (
    <Script
      src={`https://staticw2.yotpo.com/${process.env.NEXT_PUBLIC_YOTPO_KEY}/widget.js`}
    >
    </Script>
  );
}
