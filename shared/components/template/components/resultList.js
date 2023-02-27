/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { usePageDataContext } from '../../../context/pageData-context';
import { usePLPDataContext } from '../../../context/plpDatacontext';
import ProductCard from './productCard';
import URLHandler from '../../../helpers/urlHandler';
// eslint-disable-next-line import/named
import { requestContructor } from '../../../helpers/api';

function ResultList(props) {
  const { data } = props;
  // eslint-disable-next-line no-unused-vars
  const [pageContentData, setPageContent] = useState(data);
  const { pageData } = usePageDataContext();
  const router = useRouter();

  const {
    offset,
    setOffset,
    products,
    setProducts,
    setProductCount,
    productCount,
  } = usePLPDataContext();

  useEffect(() => {
    setPageContent(props?.data);
  }, []);

  useEffect(() => {
    if (offset === 0) {
      setProducts(props?.data?.payLoad?.products);
      setProductCount(props?.data?.payLoad?.productCount);
    }
  }, [props]);

  useEffect(() => {
    if (offset > 0) {
      (async() => {
        const categoryIds = URLHandler('id', router.asPath) || '';
        const facetIds = URLHandler('fs', router.asPath) || '';
        const sort = URLHandler('so', router.asPath) || '';
        const searchTerm = URLHandler('st', router.asPath) || '';
        if (Math.floor(productCount / 12) >= offset) {
          // eslint-disable-next-line max-len
          const res = await requestContructor(
            `getProductsList?CategoryId=${categoryIds}${
              facetIds !== '' ? `&FacetId=${facetIds}` : ''}${
            searchTerm !== '' ? `&SearchKey=${searchTerm}` : ''}${
            sort !== '' ? `&SortOrder=${sort}` : ''}${
            offset > 0 ? `&Offset=${offset * 12}` : ''
          }
        `,
            '',
            {},
            false,
          );
          // eslint-disable-next-line no-unsafe-optional-chaining
          setProducts([...products, ...res?.payLoad?.products]);
          setProductCount(res?.payLoad?.productCount);
        }
      })();
    }
  }, [offset]);

  return (
    <>
      {products?.map((value, index) => (
        <ProductCard
          value={value}
          isLast={index === products.length - 1}
          newLimit={() => setOffset(offset + 1)}
          index={index}
        />
      ))}
    </>
  );
}

export default ResultList;
