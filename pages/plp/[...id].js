/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable space-before-function-paren */
/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { useEffect } from 'react';
// eslint-disable-next-line import/named
import { useRouter } from 'next/router';
// eslint-disable-next-line import/named
import { requestContructor } from '../../shared/helpers/api';
import { usePageDataContext } from '../../shared/context/pageData-context';
import { usePLPDataContext } from '../../shared/context/plpDatacontext';
import PageBuilder from '../../shared/template/pageBuilder';
import MainLayout from '../layout';
import URLHandler from '../../shared/helpers/urlHandler';
import { Loader } from '../../shared/common/loader';

function Static({ data }) {
  // const i18n = useI18n();
  const navigate = useRouter();
  const { setPageData } = usePageDataContext();
  const {
    offset,
    products,
    setProducts,
    productCount,
    setProductCount,
    loading,
   // setLoading,
  } = usePLPDataContext();
  const pageContent = data?.payLoad?.page;
  data.page = data?.payLoad?.page;

  useEffect(() => {
    data && setPageData(data);
    // data && setLoading(false);
  }, [navigate.query.id]);

  useEffect(() => {
    if (offset > 0) {
      (async () => {
        const categoryIds = URLHandler('id', navigate.asPath);
        const facetIds = URLHandler('fs', navigate.asPath) || '';
        const sort = URLHandler('so', navigate.asPath) || '';
        if (Math.floor(productCount / 12) >= offset) {
          // eslint-disable-next-line max-len
          const res = await requestContructor(
            `getProductsList?CategoryId=${categoryIds}${
              facetIds !== '' ? `&FacetId=${facetIds}` : ''
            }${sort !== '' ? `&SortOrder=${sort}` : ''}${
              offset > 0 ? `&Offset=${offset * 10}` : ''
            }
        `,
            '',
            {},
            false
          );

          if (res?.payLoad?.products) {
            // eslint-disable-next-line no-unsafe-optional-chaining
            setProducts([...products, ...res?.payLoad?.products]);
            setProductCount(res?.payLoad?.productCount);
          }
        }
      })();
    }
  }, [offset]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <MainLayout data={data}>
      {loading ? (
        <Loader />
      ) : (
        <main>
          {/* {i18n.t('title')} */}
          <PageBuilder pageContent={pageContent} data={data} />
        </main>
      )}
    </MainLayout>
    // </Suspense>
  );
}

Static.getInitialProps = async (context) => {
  const { req, asPath } = context;

  const reqURI = req ? req?.url : asPath;
  const categoryIds = URLHandler('id', reqURI);
  const facetIds = URLHandler('fs', reqURI) || '';
  const sort = URLHandler('so', reqURI) || '';

  let res;

  try {
    res = await requestContructor(
      // eslint-disable-next-line max-len
      `getProductsList?CategoryId=${categoryIds}${
        facetIds !== '' ? `&FacetId=${facetIds}` : ''
      }${sort !== '' ? `&SortOrder=${sort}` : ''}
      `,
      '',
      {},
      !!req
    );
  } catch (e) {
    res = {};
  }
  return {
    data: res,
  };
};

export default Static;
