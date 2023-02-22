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
import getPLPData from '../../shared/common/getPLPData';

function Static({ data }) {
  // const i18n = useI18n();
  const navigate = useRouter();
  const { setPageData } = usePageDataContext();
  let response;
  const {
    offset,
    setOffset,
    products,
    setProducts,
    productCount,
    setProductCount,
    loading,
    setLoading,
  } = usePLPDataContext();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      response = await getPLPData(navigate);
      if(response) {
        setPageData(response);
        setLoading(false);
      }
    }
    fetchData();
    
    return () => {
      console.log('This will be logged on unmount');
    };
  }, [navigate.asPath]);

  const pageContent = data?.payLoad?.page;
  data.page = data?.payLoad?.page;

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
              offset > 0 ? `&Offset=${offset * 12}` : ''
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

  useEffect(() => {
    setOffset(0);
  }, [navigate.asPath]);

  return (
    <MainLayout data={data}>
     
      <main>
        {/* {i18n.t('title')} */}
        {loading ? (
          <Loader />
        ) : (
          <PageBuilder pageContent={pageContent} data={data} />
        )}
      </main>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  const data = await getPLPData(context);
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Static;
