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
import PageBuilder from '../../shared/template/pageBuilder';
import MainLayout from '../layout';
import URLHandler from '../../shared/helpers/urlHandler';

function Static({ data }) {
  // const i18n = useI18n();
  const navigate = useRouter();
  const { setPageData } = usePageDataContext();
  const pageContent = data?.payLoad?.page;
  data.page = data?.payLoad?.page;

  useEffect(() => {
    data && setPageData(data);
  }, [navigate.query.id]);

  return (
    <MainLayout data={data}>
      <main>
        {/* {i18n.t('title')} */}
        <PageBuilder pageContent={pageContent} data={data} />
      </main>
    </MainLayout>
  );
}

Static.getInitialProps = async (context) => {
  const { query, req, asPath } = context;
  
  const reqURI = req ? req?.url : asPath;
  const categoryIds = URLHandler('id', reqURI);
  const facetIds = URLHandler('fs', reqURI) || '';
  const sort = URLHandler('so', reqURI) || '';

  let res;
  try {
    res = await requestContructor(
      // eslint-disable-next-line max-len
      `getProductsList?CategoryId=${categoryIds}${facetIds !== '' ? `&FacetId=${facetIds}` : ''}${sort !== '' ? `&SortOrder=${sort}` : ''}
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
