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
import Head from 'next/head';
import { usePLPDataContext } from '../shared/context/plpDatacontext';
import PageBuilder from '../shared/components/template/pageBuilder';
import MainLayout from '../shared/components/Layout';
import { Loader } from '../shared/components/loader';
import getSearchData from '../shared/helpers/getSearchData';
import PageJson from '../shared/helpers/pageData.json';
import Yotpo from '../shared/components/ThirdPartyScripts/Yotpo';
// eslint-disable-next-line import/named
import { requestContructor } from '../shared/helpers/api';
import { Search } from '../shared/components/ThirdPartyScripts/Events';
import { useAppContext } from '../shared/context/appContext';

function Static({ data }) {
  // const i18n = useI18n();
  const router = useRouter();
  const { state } = useAppContext();

  const {
    setOffset,
  } = usePLPDataContext();

  const [loading, setLoading] = useState(false);
  const [searchData, setSearchPageData] = useState();

  const pageContent = data;

  useEffect(() => {
    setOffset(0);
  }, [router.asPath]);
 
  useEffect(() => {
    if(searchData && state.userData && state.channelData) {
      Search({ ...searchData, userData: state?.userData, channelData: state?.channelData });
    }
  }, [searchData, state]);
  useEffect(() => {
    setLoading(true);
    (async() => {
      const res = await getSearchData(router);
      if(res?.payLoad?.productCount === 0 && !res?.payLoad?.redirectURL) {
        Router.push(`/noresult?submit-search=${res.payLoad.searchTerm}`);
      } else if(res?.payLoad?.productCount === 1) {
        const product = res?.payLoad?.products[0];
        Router.push(`/products/${product?.displayName?.toLowerCase()?.replace(/ /g, '-')}/${product?.productId}`);
      } else if(res?.payLoad?.redirect) {
        Router.push(res?.payLoad?.redirectURL);
      } else {
        res.page = res?.payLoad?.page;
        setSearchPageData(res);
        setLoading(false);
        if(window && window.yotpo) {
          window.yotpo.refreshWidgets();
        }
      }
    })();
  }, [router.asPath]);

  return (
    <MainLayout data={data}>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main>
        {/* {i18n.t('title')} */}
        {loading && <Loader /> }
        {searchData && (
          <PageBuilder
            pageContent={pageContent}
            data={searchData}
            pageType="search"
          />
        )}
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
