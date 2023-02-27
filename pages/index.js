/* eslint-disable import/no-unresolved */
import { useEffect } from 'react';
// eslint-disable-next-line import/named
// eslint-disable-next-line import/named
import { PageBuilder } from '@retisio/sf-ui';
import { requestContructor } from '../shared/helpers/api';
// import { useI18n } from 'next-localization';
import { usePageDataContext } from '../shared/context/pageData-context';
import MainLayout from '../shared/components/Layout';
import Yotpo from '../shared/components/ThirdPartyScripts/Yotpo';

function Home({ data }) {
  // const i18n = useI18n();
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
  }, []);
  return (
    <MainLayout data={data}>
      <main>
        {/* {i18n.t('title')} */}
        <PageBuilder pageContent={pageContent} />
      </main>
      {/* <div className="container">
            <div className="row ab-rating">
              <div
                className="yotpo yotpo-reviews-carousel"
                data-background-color="transparent"
                data-mode="manual"
                data-type="both"
                data-count="3"
                data-show-bottomline="1"
                data-autoplay-enabled="1"
                data-autoplay-speed="3000"
                data-show-navigation="1"
                data-testimonials-page-enabled="1"
                data-testimonials-page-text="See All Reviews"
                data-review-ids="290913911,290612342,290897289"
                data-testimonials-page-link="https://a7353428c1tst-store.occa.ocs.oraclecloud.com/ratings-and-reviews"
              >
            &nbsp;
              </div>
            </div>
          </div> */}
      {/* <Yotpo /> */}
      <Yotpo />
    </MainLayout>
  );
}

Home.getInitialProps = async(context) => {
  const { req } = context;
  let res;
  try {
    res = await requestContructor('static/home', '', {}, !!req);
  } catch (e) {
    res = {};
  }
  return {
    data: res,
  };
};

export default Home;
