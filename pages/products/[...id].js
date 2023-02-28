import React, { useEffect } from 'react';
import { usePageDataContext } from '../../shared/context/pageData-context';
import MainLayout from '../../shared/components/Layout';
import getPDPData from '../../shared/helpers/getPDPData';
import ProductDescription from './pdpdetails';

export default function ProductDetails({ data }) {
  const { setPageData } = usePageDataContext();

  useEffect(() => {
    setPageData(data);
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
