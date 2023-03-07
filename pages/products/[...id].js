import React, { useEffect } from 'react';
import { usePageDataContext } from '../../shared/context/pageData-context';
import MainLayout from '../../shared/components/Layout';
import getPDPData from '../../shared/helpers/getPDPData';
import ProductDescription from '../../shared/components/pdp/pdpdetails';
import { viewItem } from '../../shared/components/ThirdPartyScripts/gtag';

export default function ProductDetails({ data }) {
  const { setPageData } = usePageDataContext();

  useEffect(() => {
    setPageData(data);
    viewItem(data);
  }, []);

  return (
    <MainLayout data={data}>
      {/* <Yotpo /> */}
      <main>
        {/* {i18n.t('title')} */}
        <ProductDescription pdpData={data} />
      </main>
    </MainLayout>
  );
}

ProductDetails.getInitialProps = async (context) => {
  const data = await getPDPData(context);
  return {
    data,
  };
};
