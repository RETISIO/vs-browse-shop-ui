/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable space-before-function-paren */
/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/named
import { requestContructor } from '../shared/helpers/api';
import MainLayout from '../shared/components/Layout';
import PageBuilder from '../shared/components/template/noResultPageBuilder';

export default function NoResult () {
//   // const i18n = useI18n();

  const [pageData, setPageData] = useState();
  useEffect(() => {
    (async() => {
      const res = await requestContructor('static/noresult', '', {});
      setPageData(res);
    })();
  }, []);

  return (
    <MainLayout data={pageData}>
      <main>
        {/* {i18n.t('title')} */}
        <PageBuilder {...pageData} />
      </main>
    </MainLayout>
    
  );
}
