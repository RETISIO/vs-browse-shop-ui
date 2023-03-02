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

function Static({ data }) {
  // const i18n = useI18n();
  const router = useRouter();
  const {
    setOffset,
  } = usePLPDataContext();

  const [loading, setLoading] = useState(false);
  const [searchData, setSearchPageData] = useState();

  const pageContent = PageJson;

  useEffect(() => {
    setOffset(0);
  }, [router.asPath]);
 
  useEffect(() => {
    setLoading(true);
    (async() => {
      const res = await getSearchData(router);
      
      if(res?.payLoad?.productCount === 0) {
        Router.push('/noresult');
      }
      res.page = PageJson;
      setSearchPageData(res);
      setLoading(false);
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
    </MainLayout>
  );
}

Static.getInitialProps = async (context) => {
  // const data = await getSearchData(context);
  const data = { page: PageJson };
  return {
    data,
  };
};

export default Static;
