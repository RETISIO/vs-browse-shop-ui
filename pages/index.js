/* eslint-disable import/no-unresolved */
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// eslint-disable-next-line import/named
// eslint-disable-next-line import/named
import { PageBuilder } from '@retisio/sf-ui';
import Script from 'next/script';
import { requestContructor } from '../shared/helpers/api';
// import { useI18n } from 'next-localization';
import { usePageDataContext } from '../shared/context/pageData-context';
import { useAppContext } from '../shared/context/appContext';

import MainLayout from '../shared/components/Layout';
import Yotpo from '../shared/components/ThirdPartyScripts/Yotpo';
// import ImageCarousel from '../shared/components/Sliders/ImageCarousel';
import ComponentMap from '../shared/components/componentMap';

function Home({ data }) {
  // const i18n = useI18n();
  const router = useRouter();
  const { loggedInPopUp, page } = router.query;
  const { setShow } = useAppContext();
  const { setPageData } = usePageDataContext();
  const pageContent = data && data.page && data.page.segmentsMap;
  // const getData = async() => {
  //   const res = await requestContructor('getChannelDetails', '', {}, false);
  //   const homePage = await requestContructor('static/home', '', {}, false);
  //   return res;
  // };

  // console.log(data);
  // const getData = async () => {
  //   const res = await requestContructor('getChannelDetails', '', {}, false);
  //   const homePage = await requestContructor('static/home', '', {}, false);
  //   console.log('res', homePage);
  //   return res;
  // };
  useEffect(() => {
    setPageData(data);
    // getData();
    if(window && window.yotpo) {
      window.yotpo.refreshWidgets();
    }
    if(loggedInPopUp) {
      setShow(true);
    }
  }, []);
  return (
    <MainLayout data={data}>
      <main>
        {/* {i18n.t('title')} */}
        <PageBuilder pageContent={pageContent} ComponentMap={ComponentMap} />
        {/* <ImageCarousel /> */}
      </main>
      <Yotpo />
      <Script src="/js/listrack.js" />
    </MainLayout>
  );
}

Home.getInitialProps = async(context) => {
  const { req, asPath } = context;
  let res;
  try {
    res = await requestContructor('static/home', '', {}, req, asPath);
  } catch (e) {
    res = {};
  }
  return {
    data: res,
  };
};

export default Home;
