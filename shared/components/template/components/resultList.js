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
  const { data, setLoader } = props;
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

  // const isServer = typeof window === 'undefined';
  // const isServer = process.browser;
  // let productArr = [];
  // if(!isServer) {
  //   productArr = props?.data?.payLoad?.products;
  // }

  useEffect(() => {
    if (offset > 0) {
      (async() => {
        const categoryIds = URLHandler('N', router.asPath) || '';
        const facetIds = URLHandler('t', router.asPath) || '';
        const sort = URLHandler('so', router.asPath) || '';
        const searchTerm = URLHandler('submit-search', router.asPath) || '';

        const pageDivider = productCount % 12;

        if(pageDivider === 0) {
          const pageCount = productCount / 12;
          if(pageCount > offset) {
            setLoader(true);
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
            if(window && window.yotpo) {
              setTimeout(() => {
                window.yotpo.refreshWidgets();
              }, 10);
            }
            setLoader(false);
          }
        } else if (Math.floor(productCount / 12) >= offset) {
          setLoader(true);
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
          setLoader(false);
          if(window && window.yotpo) {
            setTimeout(() => {
              window.yotpo.refreshWidgets();
            }, 10);
          }
        }
      })();
    }
  }, [offset]);

  return (
    <>
      {/* {isServer
        ? (
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
        )
        : (
          <>
            {productArr?.map((value, index) => (
              <ProductCard
                value={value}
                isLast={index === productArr.length - 1}
                newLimit={() => setOffset(offset + 1)}
                index={index}
              />
            ))}
          </>
        )} */}
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
