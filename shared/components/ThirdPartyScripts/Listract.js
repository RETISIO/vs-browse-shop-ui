/* eslint-disable max-len */
import React from 'react';
import Script from 'next/script';
import config from '../../helpers/getConfig';

export default function Listract() {
  return (
    <>
      <Script src="/js/jquery.js"></Script>
      <Script src={`https://cdn.listrakbi.com/scripts/script/script.js?m=${config.LISKEY}&v=1`}></Script>
    </>
  );
}
