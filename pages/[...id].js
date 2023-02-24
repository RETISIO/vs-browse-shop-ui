/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-expressions */
import { useEffect } from 'react';
// eslint-disable-next-line import/named
import Router from 'next/router';
import { PageBuilder } from '@retisio/sf-ui';
import DefaultErrorPage from 'next/error';
import { requestContructor } from '../shared/helpers/api';
import { usePageDataContext } from '../shared/context/pageData-context';
import MainLayout from '../shared/components/Layout';

function Static({ data }) {
  // const i18n = useI18n();
  const { setPageData } = usePageDataContext();
  const pageContent = data && data.page && data.page.segmentsMap;
  useEffect(() => {
    data && setPageData(data);
    if(!data) {
      Router.push('/404');
    }
  }, []);
  return (
    <>
      {data ? (
        <MainLayout data={data}>
          <main>
            {/* {i18n.t('title')} */}
            <PageBuilder pageContent={pageContent} />
          </main>
        </MainLayout>
      ) : <DefaultErrorPage statusCode={404} /> }
    </>
  );
}

Static.getInitialProps = async(context) => {
  const { query } = context;
  let res;
  try {
    if (!query.id.includes('nginx-health')) {
      res = await requestContructor(
        `static/${query.id.join('/')}`,
        '',
        {},
        true,
      );
    } else {
      return {
        notFound: true,
      };
    }
  } catch (e) {
    return {
      notFound: true,
    };
  }
  return {
    data: res,
  };
};

export default Static;
