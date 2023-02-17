/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useI18n } from 'next-localization';
import { useRouter } from 'next/router';
// import Layout from '../shared/components/layout/index';
import { Layout } from '@retisio/sf-ui';
// eslint-disable-next-line import/named
import { useAppContext } from '../shared/context/appContext';
import { requestContructor } from '../shared/helpers/api';

export default function MainLayout({ data, children }) {
  const { state, updateState } = useAppContext();
  const router = useRouter();
  const i18n = useI18n();
  const [rootCatagories, setRootCatagories] = useState([]);
  const getData = async() => {
    const res = await requestContructor('getCategoryList', '', {}, false);
    setRootCatagories(res?.payLoad?.categories);
    return res?.payLoad?.categories;
  };

  useEffect(() => {
    if(!state.channelData) {
      (async() => {
        let channelData = await requestContructor('getChannelDetails', '', {}, false);
        channelData = channelData[process.env.NEXT_PUBLIC_CHANNELDOMAIN];
        updateState({ ...state, channelData });
      })();
    }
  }, []);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    async function changeLocale() {
      if (router.locale === 'en-US') {
        i18n.set('en-US', await import('../locales/en.json'));
        i18n.locale('en-US');
      } else if (router.locale === 'de') {
        i18n.set('de', await import('../locales/de.json'));
        i18n.locale('de');
      }
    }
    changeLocale();
  }, [router.locale]);
  const [searchAheadData, setSearchAheadData] = useState(null);
  const getSearchAheadData = async(text) => {
    const res = await requestContructor('getTypeAheadArc', `?searchKey=${text}&size=4`, {}, false);
    return res;
  };
  const searchAheadChangeHandler = (text) => {
    if (text.trim().length > 2) {
      const result = getSearchAheadData(text);
      setSearchAheadData(result);
    } else {
      setSearchAheadData(null);
    }
  };
  return (
    <>
      <Head>
        {data && data?.page?.seo?.title ? (
          <title>{data.page.seo.title}</title>
        ) : (
          <title>Retisio Page</title>
        )}
        {data && data?.page?.seo?.description ? (
          <meta
            name="description"
            content={data.page.seo.description}
          />
        ) : (
          <meta name="description" content="restisio home" />
        )}
        {data && data?.page?.seo?.keywords
          ? <meta name="keywords" content={data.page.seo.keywords} />
          : <meta name="keywords" content="" />}
        {data && data?.page?.seo?.canonicalUrl ? (
          <link rel="canonical" href={data.page.seo.canonicalUrl} />
        ) : (
          <link rel="canonical" href="restisio home" />
        )}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout
        data={data}
        appData={state}
        transformText={i18n.t}
        rootCatagories={rootCatagories}
        searchAheadChangeHandler={searchAheadChangeHandler}
        searchAheadData={searchAheadData}
      >
        {children}
      </Layout>
    </>
  );
}
