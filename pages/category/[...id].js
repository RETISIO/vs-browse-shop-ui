/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable space-before-function-paren */
/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/named
import { useRouter, Router } from 'next/router';
import absoluteUrl from 'next-absolute-url';
// eslint-disable-next-line import/named
import { PageBuilder } from '@retisio/sf-ui';
import { usePageDataContext } from '../../shared/context/pageData-context';
import { usePLPDataContext } from '../../shared/context/plpDatacontext';
import MainLayout from '../../shared/components/Layout';
import { Loader } from '../../shared/components/loader';
import getPLPData from '../../shared/helpers/getPLPData';
import Yotpo from '../../shared/components/ThirdPartyScripts/Yotpo';
import ComponentMap from '../../shared/components/componentMap';

function Static({ data, origin }) {
  // const i18n = useI18n();
  const router = useRouter();
  const { setPageData } = usePageDataContext();
  const {
    setOffset,
  } = usePLPDataContext();
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);
  let abUrl = '';
  let seoData = '';
  if(data && data.payLoad && data.payLoad.webEnabledAttr) {
    seoData = data.payLoad.webEnabledAttr;
  }
  if(origin) {
    abUrl = origin + router.asPath;
  }

  useEffect(() => {
    setPageData(data);
    router.events.on('routeChangeStart', (url) => {
      setLoading(true);
    });
    Router.events.on('routeChangeComplete', (url) => {
      setLoading(false);
      if(window && window.yotpo) {
        window.yotpo.refreshWidgets();
      }
    });
    Router.events.on('routeChangeError', (url) => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if(data?.payLoad?.page === undefined || !data?.payLoad?.products) {
      router?.push('/404');
    }
  }, []);

  // const pageContent = data?.payLoad?.page;
  data.page = data?.payLoad?.page;
  const pageContent = data && data.page && data.page.segmentsMap;
  const payload = data?.payLoad;
  const categoryData = data?.categories;
  const pageType = 'PLP';

  useEffect(() => {
    setOffset(0);
    if(data?.payLoad?.productCount === 1) {
      const product = data?.payLoad?.products[0];
      router.push(`/products/${product?.displayName?.toLowerCase()?.replace(/ /g, '-')}/${product?.productId}`);
    } else if(data?.payLoad?.redirect) {
      router.push(data?.payLoad?.redirectURL);
    }
  }, [router.asPath]);

  return (
    <MainLayout data={data} abUrl={abUrl} SEO={seoData}>
      <main>
        <div id="main" className="container">
          <div className="row">
            <div className="redBox">
              <div className="col-sm-12" id="region-megaMenuRegionCatPage">
                <div id="allnProductLisitingPage_v10-wi1400005">
                  <div className="page-overlay js-overlay"></div>
                  <div className="page-main-inner">
                    <div className="container">
                      {/* {i18n.t('title')} */}
                      {loading && <Loader /> }
                      <PageBuilder
                        pageContent={pageContent}
                        ComponentMap={ComponentMap}
                        payLoad={{
                          ...payload, categoryData, loader, setLoader, pageType
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Yotpo />
    </MainLayout>
  );
}

Static.getInitialProps = async (context) => {
  const { origin } = absoluteUrl(context.req);
  try {
    const data = await getPLPData(context);
    return {
      data,
      origin
    };
  }catch(e) {
    return {
      data: {},
      origin
    };
  }
};

export default Static;
