/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { usePLPDataContext } from '../../../context/plpDatacontext';
import ProductCard from './productCard';
import URLHandler from '../../../helpers/urlHandler';
// eslint-disable-next-line import/named
import { requestContructor } from '../../../helpers/api';
import { useAppContext } from '../../../context/appContext';
import { Search } from '../../ThirdPartyScripts/Events';
import { EllipseLoader } from '../../loader';
import { searchTermHandler } from '../../../helpers/utils';

function ResultList(props) {
  const { singleColumn } = props;
  const { loader, setLoader } = props.payLoad;
  const { state } = useAppContext();
  const router = useRouter();
  const [searchData, setSearchPageData] = useState();

  const {
    offset,
    setOffset,
    products,
    setProducts,
    setProductCount,
    productCount,
  } = usePLPDataContext();

  // useEffect(() => {
  //   setPageContent(props?.data);
  // }, []);

  useEffect(() => {
    if (offset === 0) {
      setProducts(props?.payLoad?.products);
      setProductCount(props?.payLoad?.productCount);
    }
  }, [props]);

  useEffect(() => {
    if(searchData && state.userData && state.channelData) {
      const autoSuggest = router?.query?.as === 't';
      Search({
        ...searchData, userData: state?.userData, channelData: state?.channelData, autoSuggest,
      });
    }
  }, [searchData, state]);

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
        const searchTerm = searchTermHandler('submit-search', router.asPath) || '';

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
          if(res.payLoad.searchTerm) {
            res.payLoad.searchTerm = searchTerm;
            setSearchPageData(res);
          }

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
     
    <div id="product-grid">
      <div className="row row-gutter-sm-15">
        {products?.map((value, index) => (
          <ProductCard
            value={value}
            isLast={index === products.length - 1}
            newLimit={() => setOffset(offset + 1)}
            index={index}
          // eslint-disable-next-line react/no-array-index-key
            key={index}
            singleColumn={singleColumn}
          />
        ))}
      </div>
      {loader && <EllipseLoader /> }
    </div>
    
  );
}

export default ResultList;
