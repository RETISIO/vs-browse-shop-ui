/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { usePageDataContext } from '../../context/pageData-context';
import { usePLPDataContext } from '../../context/plpDatacontext';
import ProductCard from './productCard';

function ResultList(props) {
  const { data } = props;
  // eslint-disable-next-line no-unused-vars
  const [pageContentData, setPageContent] = useState(data);
  const { pageData } = usePageDataContext();

  const {
    offset, setOffset, products, setProducts, setProductCount,
  } = usePLPDataContext();

  useEffect(() => {
    setPageContent(pageData);
    setProducts(pageData?.payLoad?.products);
    setProductCount(pageData?.payLoad?.productCount || pageContentData?.payLoad?.productCount);
  }, [pageData]);

  return (
    <>
      {products?.map((value, index) => (
        <ProductCard
          value={value}
          isLast={index === products.length - 1}
          newLimit={() => setOffset(offset + 1)}
        />
      ))}
    </>
  );
}

export default ResultList;
