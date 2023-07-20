/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// eslint-disable-next-line import/named, linebreak-style
// eslint-disable-next-line import/named
import { PageBuilder } from '@retisio/sf-ui';
import Cookies from 'cookies';
import { requestContructor } from '../shared/helpers/api';
// import { useI18n } from 'next-localization';
import { usePageDataContext } from '../shared/context/pageData-context';
import { useAppContext } from '../shared/context/appContext';

import MainLayout from '../shared/components/Layout';
// import Yotpo from '../shared/components/ThirdPartyScripts/Yotpo';
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
    // if(window && window.yotpo) {
    //   window.yotpo.refreshWidgets();
    // }
    if(loggedInPopUp) {
      setShow(true);
    }
  }, []);
  return (
    <MainLayout data={data} robotsFollow="index;follow">
      <main>
        {/* {i18n.t('title')} */}
        <PageBuilder pageContent={pageContent} ComponentMap={ComponentMap} isNextJs={true} />
        {/* <ImageCarousel /> */}
      </main>
      {/* <Yotpo /> */}
    </MainLayout>
  );
}

Home.getInitialProps = async(context) => {
  const {
    req, asPath, query, res,
  } = context;
  const cookies = new Cookies(req, res);
  // if(req && res) {
  //   res.setHeader('Cache-Control', 'public, max-age=3600000');
  // }
  let response;
  const options = { customHeaders: {} };
  if(query.env) {
    cookies.set('env', query.env, {
      httpOnly: true, // true by default
    });
    options.customHeaders['x-env-name'] = query.env;
  }
  if(query.date) {
    cookies.set('date', query.date, {
      httpOnly: true, // true by default
    });
    options.customHeaders['x-env-date'] = query.date;
  }
  try {
    response = await requestContructor(
      'static/home',
      '',
      options,
      req,
      asPath,
    );
  } catch (e) {
    response = {};
  }
  return {
    data: response,
  };
};

export default Home;
