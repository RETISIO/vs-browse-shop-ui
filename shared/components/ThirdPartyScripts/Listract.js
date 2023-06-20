/* eslint-disable max-len */
import React,{useEffect} from 'react';
import Script from 'next/script';
import config from '../../helpers/getConfig';

export default function Listract() {
  useEffect(()=>{
    const script = document.createElement("script");

    script.src = `https://cdn.listrakbi.com/scripts/script/script.js?m=${config.LISKEY}&v=1`;
    script.defer = true;

    document.body.appendChild(script);
  },[]);
  return (
    <>
      <Script src="/js/jquery.js"></Script>
    </>
  );
}
