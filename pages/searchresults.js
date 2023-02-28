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
// eslint-disable-next-line import/named
import { usePageDataContext } from '../shared/context/pageData-context';
import { usePLPDataContext } from '../shared/context/plpDatacontext';
import PageBuilder from '../shared/components/template/pageBuilder';
import MainLayout from '../shared/components/Layout';
import { Loader } from '../shared/components/loader';
import getSearchData from '../shared/helpers/getSearchData';
import PageJson from '../shared/helpers/pageData.json';

function Static({ data }) {
  // const i18n = useI18n();
  const router = useRouter();
  const { setPageData } = usePageDataContext();
  const {
    setOffset,
  } = usePLPDataContext();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPageData(data);
    router.events.on('routeChangeStart', (url) => {
      setLoading(true);
    });
    Router.events.on('routeChangeComplete', (url) => {
      setLoading(false);
    });
    Router.events.on('routeChangeError', (url) => {
      setLoading(false);
    });
  }, []);

  const pageContent = PageJson;
  data.page = PageJson;

  useEffect(() => {
    setOffset(0);
  }, [router.asPath]);

  return (
    <MainLayout data={data}>
      <main>
        {/* {i18n.t('title')} */}
        {loading && <Loader /> }
        <PageBuilder
          pageContent={pageContent}
          data={data}
        />
      </main>
    </MainLayout>
  );
}

Static.getInitialProps = async (context) => {
  const data = await getSearchData(context);
  return {
    data,
  };
};

export default Static;
