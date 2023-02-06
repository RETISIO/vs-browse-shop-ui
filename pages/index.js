import { useEffect } from 'react';
// eslint-disable-next-line import/named
// eslint-disable-next-line import/named
import { requestContructor } from '../shared/helpers/api';
// import { useI18n } from 'next-localization';
import { usePageDataContext } from '../shared/context/pageData-context';
import PageBuilder from '../shared/components/layout/pageBuilder';
import MainLayout from './layout';

export default function Home({ data }) {
  // const i18n = useI18n();
  const { setPageData } = usePageDataContext();
  const pageContent = data && data.page && data.page.segmentsMap;
  // const getData = async() => {
  //   const res = await requestContructor('getChannelDetails', '', {}, false);
  //   const homePage = await requestContructor('static/home', '', {}, false);
  //   return res;
  // };

  // console.log(data);
  // const getData = async () => {
  //   const res = await requestContructor('getChannelDetails', '', {}, false);
  //   const homePage = await requestContructor('static/home', '', {}, false);
  //   console.log('res', homePage);
  //   return res;
  // };
  useEffect(() => {
    setPageData(data);
    // getData();
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

export async function getStaticProps() {
  let res;
  try {
    res = await requestContructor('static/home', '', {}, true);
  } catch (e) {
    res = {};
  }
  return {
    // Passed to the page component as props
    props: { data: res },
  };
}
