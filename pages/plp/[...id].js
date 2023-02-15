/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { useEffect } from 'react';
// eslint-disable-next-line import/named
import { requestContructor } from '../../shared/helpers/api';
import { usePageDataContext } from '../../shared/context/pageData-context';
import PageBuilder from './pageBuilder';
import MainLayout from '../layout';
import { useRouter } from 'next/router';

function Static({ data }) {
  // const i18n = useI18n();
  let navigate = useRouter();
  const { setPageData } = usePageDataContext();
  const pageContent = data?.payLoad?.page?.segmentsMap;
  data.page = data?.payLoad?.page;


  const getData = async () => {
    const res = await requestContructor(`getProductsList?CategoryId=${navigate.query.id.join("+")}`, '', {}, false);
    console.log('reshoihoi', res);
    return res;
  };
  useEffect(() => {
    data && setPageData(data);
   let m = getData();
   console.log("navigate.query",m);
  //  (async() => {
  //   let res = await requestContructor(`getProductsList?CategoryId=${navigate.query.id.join("+")}`, '', {}, false);
  //  console.log("ressss",res)
 // })

  }, [navigate.query.id]);
  return (
    <MainLayout data={data}>
      <main >
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
  } catch (e) {
    res = {};
  }
  return {
    data: res,
  };
};

export default Static;
