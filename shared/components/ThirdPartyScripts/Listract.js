/* eslint-disable max-len */
import React from 'react';
import Script from 'next/script';

export default function Listract() {
  return (
    <Script src={`https://cdn.listrakbi.com/scripts/script/script.js?m=${process.env.NEXT_PUBLIC_LISTRACK_MID}&v=1`}></Script>
  );
}
