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
import Router, { useRouter } from 'next/router';
// eslint-disable-next-line import/named
import { PageBuilder } from '@retisio/sf-ui';
import { usePLPDataContext } from '../shared/context/plpDatacontext';
import MainLayout from '../shared/components/Layout';
import { Loader } from '../shared/components/loader';
import getSearchData from '../shared/helpers/getSearchData';
import Yotpo from '../shared/components/ThirdPartyScripts/Yotpo';
// eslint-disable-next-line import/named
import { requestContructor } from '../shared/helpers/api';
import { Search } from '../shared/components/ThirdPartyScripts/Events';
import { useAppContext } from '../shared/context/appContext';
import URLHandler from '../shared/helpers/urlHandler';
import ComponentMap from '../shared/components/componentMap';

function Static({ data }) {
  // const i18n = useI18n();
  const router = useRouter();
  const { state } = useAppContext();

  const {
    setOffset,
    setSearchResultData
  } = usePLPDataContext();

  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);
  const [searchData, setSearchPageData] = useState();

  // const pageContent = data;
  const pageContent = data && data.page && data.page.segmentsMap;
  const pageType = 'search';

  useEffect(() => {
    setOffset(0);
  }, [router.asPath]);
 
  useEffect(() => {
    if(searchData && state.userData && state.channelData) {
      const autoSuggest = router?.query?.as === 't';
      Search({
        ...searchData, userData: state?.userData, channelData: state?.channelData, autoSuggest
      });
    }
    setSearchResultData(searchData);
  }, [searchData, state]);
  useEffect(() => {
    setLoading(true);
    (async() => {
      const res = await getSearchData(router);
      if(res?.payLoad?.productCount === 0 && !res?.payLoad?.redirectURL) {
        Router.push(`/noresult?submit-search=${res.payLoad.searchTerm}`);
      } else if(res?.payLoad?.productCount === 1) {
        const product = res?.payLoad?.products[0];
        // eslint-disable-next-line max-len
        Router.push(`/products/${product.seoData && product.seoData.slug ? product.seoData.slug : product.displayName.replace(/[\s~`!@#$%^&*()_+\-={[}\]|\\:;"'<,>.?/]+/g, '-').toLowerCase()}/${product?.productId}`);
      } else if(res?.payLoad?.redirect) {
        Router.push(res?.payLoad?.redirectURL);
      } else {
        const { req, asPath } = router;
        const reqURI = req ? req?.url : asPath;
        const searchTerm = URLHandler('submit-search', reqURI) || '';
        res.page = res?.payLoad?.page;
        res.payLoad.searchTerm = searchTerm;
        setSearchPageData(res);
        setLoading(false);
        if(window && window.yotpo) {
          window.yotpo.refreshWidgets();
        }
      }
    })();
  }, [router.asPath]);

  return (
    <MainLayout data={data} robotsFollow="noindex, nofollow">
      <main>
        <div id="main" className="container">
          <div className="row">
            <div className="redBox">
              <div className="col-sm-12" id="region-megaMenuRegionCatPage">
                <div id="allnProductLisitingPage_v10-wi1400005">
                  <div className="page-overlay js-overlay"></div>
                  <div className="page-main-inner">
                    <div className="">
                      {/* {i18n.t('title')} */}
                      {loading && <Loader /> }
                      {searchData && (
                        <PageBuilder
                          pageContent={pageContent}
                          ComponentMap={ComponentMap}
                          payLoad={{
                            ...searchData.payLoad, loader, setLoader, pageType
                          }}
                        />
                      )}
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
  const { req } = context;
  let data;
  try{
    data = await requestContructor('static/search', '', {}, req);
  }catch(e) {
    data = '';
  }
  
  return {
    data,
  };
};

export default Static;
