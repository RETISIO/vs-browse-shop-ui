/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable space-before-function-paren */
/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import Head from 'next/head';
// eslint-disable-next-line import/named
import { requestContructor } from '../shared/helpers/api';
import MainLayout from '../shared/components/Layout';
import PageBuilder from '../shared/components/template/noResultPageBuilder';
import { Loader } from '../shared/components/loader';

export default function NoResult ({ data }) {
//   // const i18n = useI18n();

  // const [pageData, setPageData] = useState();
  // useEffect(() => {
  //   (async() => {
  //     const res = await requestContructor('static/noresult', '', {});
  //     setPageData(res);
  //   })();
  // }, []);

  return (
    <MainLayout data={data}>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main>
        {!data && <Loader /> }
        {/* {i18n.t('title')} */}
        <PageBuilder {...data} pageType="search" />
      </main>
    </MainLayout>
    
  );
}

NoResult.getInitialProps = async () => {
  const data = await requestContructor('static/noresult', '', {});
  return {
    data,
  };
};
