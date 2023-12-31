/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/named
import { PageBuilder } from '@retisio/sf-ui';
import { requestContructor } from '../shared/helpers/api';
import MainLayout from '../shared/components/Layout';

function Error() {
  // const i18n = useI18n();
  const [pageData, setPageData] = useState();
  useEffect(() => {
    (async() => {
      const res = await requestContructor('static/404', '', {});
      setPageData(res);
    })();
  }, []);
  return (
    <MainLayout data={pageData}>
      <main>
        {/* {i18n.t('title')} */}
        <PageBuilder pageContent={pageData && pageData.page && pageData.page.segmentsMap} />
      </main>
    </MainLayout>
  );
}

export default Error;
