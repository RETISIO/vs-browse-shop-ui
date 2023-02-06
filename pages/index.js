import { useEffect } from 'react';
import Head from 'next/head';
// eslint-disable-next-line import/named
// eslint-disable-next-line import/named
import { requestContructor } from '../shared/helpers/api';
// import { useI18n } from 'next-localization';
import { usePageDataContext } from '../shared/context/pageData-context';
import PageBuilder from '../shared/components/layout/pageBuilder';

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
    <>
      <Head>
        {data && data?.payload?.page?.seo?.title ? (
          <title>{data.payload.page.seo.title}</title>
        ) : (
          <title>Retisio Page</title>
        )}
        {data && data?.payload?.page?.seo?.description ? (
          <meta
            name="description"
            content={data.payload.page.seo.description}
          />
        ) : (
          <meta name="description" content="restisio home" />
        )}
        {data && data?.payload?.page?.seo?.keywords
          ? <meta name="keywords" content={data.payload.page.seo.keywords} />
          : <meta name="keywords" content="" />}
        {data && data?.payload?.page?.seo?.canonicalUrl ? (
          <link rel="canonical" href={data.payload.page.seo.canonicalUrl} />
        ) : (
          <link rel="canonical" href="restisio home" />
        )}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        {/* {i18n.t('title')} */}
        <PageBuilder pageContent={pageContent} />
      </main>
    </>
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
