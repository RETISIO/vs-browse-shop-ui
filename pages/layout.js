/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Head from 'next/head';
import Layout from '../shared/components/layout/index';
// eslint-disable-next-line import/named
import { useAppContext } from '../shared/context/appContext';
import { requestContructor } from '../shared/helpers/api';

export default function MainLayout({ data, children }) {
  const { state, updateState } = useAppContext();

  useEffect(() => {
    if(!state.channelData) {
      (async() => {
        let channelData = await requestContructor('getChannelDetails', '', {}, false);
        channelData = channelData[process.env.NEXT_PUBLIC_CHANNELDOMAIN];
        updateState({ ...state, channelData });
      })();
    }
  }, []);
  return (
    <>
      <Head>
        {data && data?.payload?.page?.seo?.title ? (
          <title>{data.payload.page.seo.title}</title>
        ) : (
          <title>Retisio Page</title>
        )}
        {data && data?.payload?.page?.seo?.description ? (
          <meta
            name="description"
            content={data.payload.page.seo.description}
          />
        ) : (
          <meta name="description" content="restisio home" />
        )}
        {data && data?.payload?.page?.seo?.keywords
          ? <meta name="keywords" content={data.payload.page.seo.keywords} />
          : <meta name="keywords" content="" />}
        {data && data?.payload?.page?.seo?.canonicalUrl ? (
          <link rel="canonical" href={data.payload.page.seo.canonicalUrl} />
        ) : (
          <link rel="canonical" href="restisio home" />
        )}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout data={data} appData={state}>
        {children}
      </Layout>
    </>
  );
}
