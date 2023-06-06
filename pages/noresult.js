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
import { PageBuilder } from '@retisio/sf-ui';
import { requestContructor } from '../shared/helpers/api';
import MainLayout from '../shared/components/Layout';
import { Loader } from '../shared/components/loader';
import ComponentMap from '../shared/components/componentMap';

export default function NoResult ({ data }) {
//   // const i18n = useI18n();

  // const [pageData, setPageData] = useState();
  // useEffect(() => {
  //   (async() => {
  //     const res = await requestContructor('static/noresult', '', {});
  //     setPageData(res);
  //   })();
  // }, []);

  const pageContent = data && data.page && data.page.segmentsMap;
  const pageType = 'search';

  return (
    <MainLayout data={data}>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main>
        <div id="main" className="container">
          <div className="row">
            <div className="redBox">
              <div className="col-sm-12" id="region-megaMenuRegionCatPage">
                <div id="allnProductLisitingPage_v10-wi1400005">
                  <div className="page-overlay js-overlay"></div>
                  <div className="page-main-inner">
                    <div className="">
                      {!data && <Loader /> }
                      {/* {i18n.t('title')} */}
                      <PageBuilder
                        pageContent={pageContent}
                        ComponentMap={ComponentMap}
                        payLoad={{
                          ...data.payLoad, pageType
                        }}
                      
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
    
  );
}

NoResult.getInitialProps = async (context) => {
  const { req, asPath } = context;
  const data = await requestContructor(
    'static/noresult',
    '',
    { cookie: req ? req.headers.cookie : '' },
    req,
    asPath,
  );
  return {
    data,
  };
};
