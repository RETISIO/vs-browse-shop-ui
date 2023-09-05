/* eslint-disable consistent-return */
/* eslint-disable default-case */
/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/named */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { getCookie } from '@retisio/sf-api';
import { useAppContext } from '../../context/appContext';
import { requestContructor } from '../../helpers/api';
import ProductTile from '../customComponents/ProductTile';
import { Settings, RecommondationsMap } from './getSettings';
import { viewEvent } from '../ThirdPartyScripts/Events';
import config from '../../helpers/getConfig';

export default function ProductRecommondation(props) {
  const [load, setLoad] = useState(false);
  const [productsData, setProductsData] = useState({
    settings: { ...Settings },
  });
  const [selectedProducts, setSelectedProducts] = useState([]);
  const siteId = config.SKEY;
  const { state } = useAppContext();
  const configValues = props.configValue ? JSON.parse(props.configValue) : {};
  const [productIDs, setSelectedproductIDs] = useState([]);
  const productId = props?.payLoad && props?.payLoad?.products && props?.payLoad?.products[0]?.productId;

  useEffect(() => {
    setTimeout(() => {
      // window && window.yotpo && window.yotpo.refreshWidgets();
    }, 10);
    let productData;
    if (
      configValues?.productRecommendation?.association
      && props?.payLoad?.products[0]
      && props?.payLoad?.products[0]?.productDetails
      && props?.payLoad?.products[0]?.productDetails?.productAssociations
    ) {
      productData = props?.payLoad?.products[0]?.productDetails?.productAssociations[
        configValues.productRecommendation.association
      ];
      setSelectedProducts(productData);
    } else if (
      getCookie('lu')
      && state.channelData
      && state?.channelData?.defaultCatalogId
      && configValues.productRecommendation.recommendationType === 'AI_DRIVEN'
      && configValues.productRecommendation.recommendation === 'Content-Affinity to Recently Viewed'
    ) {
      requestContructor(
        'getRecentlyViewedProducts',
        '',
        {
          method: 'GET',
        },
      ).then((res) => {
        if (res?.recentlyViewedSkuIds) {
          const skuIds = res?.recentlyViewedSkuIds?.toString();
          requestContructor(
              `rxc/affinity_to_recently_viewed?siteId=${siteId}&catalogId=${
                state?.channelData?.defaultCatalogId
              }&max=15&seed=${skuIds}`,
              '',
              {
                method: 'GET',
              },
          ).then((resp) => {
            if (resp.arvRecommendation) {
              setSelectedProducts(Object.values(resp.arvRecommendation));
            } else {
              setSelectedProducts([]);
            }
          });
        }
      });
    } else if (
      getCookie('lu')
      && state.channelData
      && state?.channelData?.defaultCatalogId
      && configValues.productRecommendation.recommendationType === 'AI_DRIVEN'
      && configValues.productRecommendation.recommendation === 'Content-Recently Viewed'
    ) {
      requestContructor(
        'getRecentlyViewedProducts',
        '',
        {
          method: 'GET',
        },
      ).then((res) => {
        if (res?.recentlyViewedSkuIds) {
          setSelectedProducts(res?.recentlyViewedSkuIds?.slice(0, 15));
        } else {
          setSelectedProducts([]);
        }
      });
    } else {
      const recommendation_type = RecommondationsMap[configValues.productRecommendation.recommendation];
      if(state.channelData && state?.channelData?.defaultCatalogId && recommendation_type) {
        requestContructor(
          `rxc/${recommendation_type}?${payload(recommendation_type)}`,
          '',
          {
            method: 'GET',
          },
        ).then((res) => {
          if (res?.recommended?.length > 1) {
            setSelectedProducts(res.recommended);
          } else if(res?.recommended && recommendation_type === 'frequently_bought_together') {
            setSelectedProducts(res.recommended);
          } else {
            setSelectedProducts([]);
          }
        });
      }
    }
    setProductsData({ ...productsData });
  }, [state.channelData, productId]);

  useEffect(() => {
    if (
      state.channelData
      && state.userData
      && productIDs
      && productIDs.length > 0
      && !configValues.productRecommendation.association
      && props?.payLoad?.products
    ) {
      viewEvent({
        channelData: state.channelData,
        userData: state.userData,
        product: props?.payLoad?.products[0],
        products: productIDs,
        recommendationType:
          RecommondationsMap[configValues.productRecommendation.recommendation],
        pageType: 'PDP',
        eventType: 'recommendation',
      });
    }
  }, [state.channelData, state.userData, productIDs]);

  useEffect(() => {
    if (selectedProducts && selectedProducts.length > 0) {
      let payload = {
        productIds: selectedProducts,
      };
      if(configValues?.productRecommendation?.recommendation === 'Product-Similar SKUs') {
        payload = {
          requestFilters: [
            {
              filterName: 'productVariants.skuId',
              filterValues: selectedProducts,
              filterType: 'or',
            }],
        };
      }
      requestContructor('getV3ProductsData', '', {
        method: 'POST',
        data: payload,
      }).then((res) => {
        if (res.payLoad && res.payLoad.products) {
          const productIds = res?.payLoad?.products?.map((x) => x.productId);
          setSelectedproductIDs(productIds);
          configValues.products = res.payLoad.products;
          setProductsData({
            ...productsData,
            configValues,
          });
          setLoad(true);
        }
      });
    } else {
      configValues.products = [];
      setProductsData({
        ...productsData,
        configValues,
      });
      setLoad(true);
    }
  }, [selectedProducts]);

  const payload = (type) => {
    switch (type) {
    case 'similar_sku':
      return `siteId=${siteId}&catalogId=${state?.channelData?.defaultCatalogId}&seed=${props?.payLoad?.products[0]?.defaultSkuId}&max=30`;
    case 'trending_products':
      return `siteId=${siteId}&catalogId=${state?.channelData?.defaultCatalogId}&max=8`;
    case 'bought_bought':
      return `siteId=${siteId}&catalogId=${state?.channelData?.defaultCatalogId}&seed=${props?.payLoad?.products[0]?.productId}&max=15`;
    case 'frequently_bought_together':
      return `siteId=${siteId}&catalogId=${state?.channelData?.defaultCatalogId}&seed=${props?.payLoad?.products[0]?.productId}&max=3`;
    case 'view_view':
      return `siteId=${siteId}&catalogId=${state?.channelData?.defaultCatalogId}&seed=${props?.payLoad?.products[0]?.productId}&max=15`;
    case 'view_bought':
      return `siteId=${siteId}&catalogId=${state?.channelData?.defaultCatalogId}&seed=${props?.payLoad?.products[0]?.productId}&max=15`;
    case 'loved_products':
      return `siteId=${siteId}&catalogId=${state?.channelData?.defaultCatalogId}&max=8`;
    case 'bestsellers':
      return `siteId=${siteId}&catalogId=${state?.channelData?.defaultCatalogId}&categoryId=generic&max=8`;
    }
  };

  const displayProducts = () => {
    if (productsData?.configValues?.products?.length) {
      return (
        <Slider {...productsData.settings}>
          {productsData?.configValues?.products.map((value, index) => (
            <div key={index}>
              <div style={{ margin: '15px' }}>
                <ProductTile
                  value={value}
                  recommondationData={{
                    recommendationAttributionDetails: {
                      recommendationType:
                        RecommondationsMap[
                          configValues.productRecommendation.recommendation
                        ],
                      recommendationLocation: 'PDP',
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      );
    }
  };
  return (
    <>
      {load && productsData && productsData?.configValues?.products.length > 0 && (
        <>
          <h1 className="row align-left recommendations">
            <span>{props.name}</span>
            {/* <small className="ml-10">{productsData?.configValues.defaultProductSelector.viewAllLink && <a href={productsData?.configValues.defaultProductSelector.viewAllLink}>View All</a>}</small> */}
          </h1>
          {displayProducts()}
        </>
      )}
    </>
  );
}
