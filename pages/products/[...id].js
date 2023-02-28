import React, { useEffect } from 'react';
import { usePageDataContext } from '../../shared/context/pageData-context';
import MainLayout from '../../shared/components/Layout';
import getPDPData from '../../shared/helpers/getPDPData';
import Details from './pdpdetails';

export default function Products({ data }) {
  const { setPageData } = usePageDataContext();

  useEffect(() => {
    setPageData(data);
  }, []);

  return (
    <MainLayout data={data}>
      {/* <Yotpo /> */}
      <main>
        {/* {i18n.t('title')} */}
        <Details pdpData={data} />
      </main>
    </MainLayout>
  );
}

Products.getInitialProps = async (context) => {
  const data = await getPDPData(context);
  return {
    data,
  };
};
