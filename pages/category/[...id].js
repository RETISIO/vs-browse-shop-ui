/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
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
import { useRouter, Router } from 'next/router';
import absoluteUrl from 'next-absolute-url';
// eslint-disable-next-line import/named
import { usePageDataContext } from '../../shared/context/pageData-context';
import { usePLPDataContext } from '../../shared/context/plpDatacontext';
import PageBuilder from '../../shared/components/template/pageBuilder';
import MainLayout from '../../shared/components/Layout';
import { Loader } from '../../shared/components/loader';
import getPLPData from '../../shared/helpers/getPLPData';
import Yotpo from '../../shared/components/ThirdPartyScripts/Yotpo';

function Static({ data, origin }) {
  // const i18n = useI18n();
  const router = useRouter();
  const { setPageData } = usePageDataContext();
  const {
    setOffset,
  } = usePLPDataContext();
  const [loading, setLoading] = useState(false);
  let abUrl = '';
  let seoData = '';
  if(data && data.payLoad && data.payLoad.webEnabledAttr) {
    seoData = data.payLoad.webEnabledAttr;
  }
  if(origin) {
    abUrl = origin + router.asPath;
  }

  useEffect(() => {
    setPageData(data);
    router.events.on('routeChangeStart', (url) => {
      setLoading(true);
    });
    Router.events.on('routeChangeComplete', (url) => {
      setLoading(false);
      if(window && window.yotpo) {
        window.yotpo.refreshWidgets();
      }
    });
    Router.events.on('routeChangeError', (url) => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if(data?.payLoad?.page === undefined || data?.payLoad?.products === undefined || (data?.payLoad?.products && data?.payLoad?.products.length > 0)) {
      router?.push('/404');
    }
  }, []);

  const pageContent = data?.payLoad?.page;
  data.page = data?.payLoad?.page;

  useEffect(() => {
    setOffset(0);
    if(data?.payLoad?.productCount === 1) {
      const product = data?.payLoad?.products[0];
      router.push(`/products/${product?.displayName?.toLowerCase()?.replace(/ /g, '-')}/${product?.productId}`);
    } else if(data?.payLoad?.redirect) {
      router.push(data?.payLoad?.redirectURL);
    }
  }, [router.asPath]);

  return (
    <MainLayout data={data} abUrl={abUrl} SEO={seoData}>
      <main>
        {/* {i18n.t('title')} */}
        {loading && <Loader /> }
        <PageBuilder pageContent={pageContent} data={data} pageType="productListing" />
      </main>
      <Yotpo />
    </MainLayout>
  );
}

Static.getInitialProps = async (context) => {
  const { origin } = absoluteUrl(context.req);
  try {
    const data = await getPLPData(context);
    return {
      data,
      origin
    };
  }catch(e) {
    return {
      data: {},
      origin
    };
  }
};

export default Static;
