/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { useEffect } from 'react';
// eslint-disable-next-line import/named
import { useRouter } from 'next/router';
import { requestContructor } from '../../shared/helpers/api';
import { usePageDataContext } from '../../shared/context/pageData-context';
import PageBuilder from './pageBuilder';
import MainLayout from '../layout';

function Static({ data }) {
  // const i18n = useI18n();
  const navigate = useRouter();
  const { setPageData } = usePageDataContext();
  const pageContent = data?.payLoad?.page?.segmentsMap;
  data.page = data?.payLoad?.page;
  useEffect(() => {
    data && setPageData(data);
    // const m = getData();
    // console.log('navigate.query', m);
  //  (async() => {
  //   let res = await requestContructor(`getProductsList?CategoryId=${navigate.query.id.join("+")}`, '', {}, false);
  //  console.log("ressss",res)
 // })
  }, [navigate.query.id]);
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
  const { query, req } = context;
  let res;
  try {
    res = await requestContructor(`getProductsList?CategoryId=${query.id}`, '', {}, !!req);
  } catch (e) {
    res = {};
  }
  return {
    data: res,
  };
};

export default Static;
