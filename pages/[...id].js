/* eslint-disable no-unused-expressions */
import { useEffect } from 'react';
// eslint-disable-next-line import/named
import Router from 'next/router';
import { PageBuilder } from '@retisio/sf-ui';
import { requestContructor } from '../shared/helpers/api';
import { usePageDataContext } from '../shared/context/pageData-context';
import MainLayout from './layout';

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
    <MainLayout data={data}>
      <main>
        {/* {i18n.t('title')} */}
        <PageBuilder pageContent={pageContent} />
      </main>
    </MainLayout>
  );
}

Static.getInitialProps = async(context) => {
  const { query } = context;
  let res;
  try {
    res = await requestContructor(`static/${query.id.join('/')}`, '', {}, true);
  } catch (e) {
    res = '';
  }
  return {
    data: res,
  };
};

export default Static;
