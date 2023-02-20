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
import PageBuilder from './pageBuilder';
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

  const categoryIds = URLHandler('id', asPath);
  const facetIds = URLHandler('fs', asPath) || '';
  let res;
  try {
    res = await requestContructor(
      // eslint-disable-next-line max-len
      `getProductsList?CategoryId=${!!req ? query.id : categoryIds}${facetIds !== "" ? `&FacetId=${!!req ? query.fs : facetIds}` : ""}
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
