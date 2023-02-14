/* eslint-disable no-unused-expressions */
import { useEffect } from 'react';
// eslint-disable-next-line import/named
import { requestContructor } from '../../shared/helpers/api';
import { usePageDataContext } from '../../shared/context/pageData-context';
import  PageBuilder  from './pageBuilder';
import MainLayout from '../layout';

function Static({ data }) {
  console.log('ress', data);
  // const i18n = useI18n();
  const { setPageData } = usePageDataContext();
  const pageContent = data?.payLoad?.page?.segmentsMap;
  useEffect(() => {
    data && setPageData(data);
  }, []);
  return (
    <MainLayout data={data?.payLoad}>
      <main style={{ minHeight: '300px' }}>
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
    res = await requestContructor(`getProductsList?CategoryId=${query.id}`, '', {}, true);
    console.log('ress', res);
  } catch (e) {
    res = {};
  }
  return {
    data: res,
  };
};

export default Static;
