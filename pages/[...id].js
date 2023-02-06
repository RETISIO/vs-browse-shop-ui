/* eslint-disable no-unused-expressions */
import { useEffect} from 'react';
import Head from 'next/head';
// eslint-disable-next-line import/named
import { requestContructor } from '../shared/helpers/api';
import { usePageDataContext } from '../shared/context/pageData-context';
import PageBuilder from '../shared/components/layout/pageBuilder';

function Static({ data }) {
  // const i18n = useI18n();
  const { setPageData } = usePageDataContext();
  const pageContent = data && data.page && data.page.segmentsMap;
  useEffect(() => {
    data && setPageData(data);
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

Static.getInitialProps = async(context) => {
  const { query } = context;
  let res;
  try {
    res = await requestContructor(`static/${query.id.join('/')}`, '', {}, true);
  } catch (e) {
    res = {};
  }
  return {
    data: res,
  };
};

export default Static;
