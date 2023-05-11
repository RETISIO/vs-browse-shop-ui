/* eslint-disable react/no-array-index-key */



/* eslint-disable import/named */



/* eslint-disable react/jsx-no-useless-fragment */



/* eslint-disable max-len */



/* eslint-disable react/destructuring-assignment */



/* eslint-disable linebreak-style */

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useAppContext } from '../../context/appContext';
import { requestContructor } from '../../helpers/api';
import ProductTile from '../template/components/ProductTile';
import { Settings, RecommondationsMap } from './getSettings';
import { viewEvent } from '../ThirdPartyScripts/Events';
import config from '../../helpers/getConfig';

export default function ProductRecommondation(props) {
  const [load, setLoad] = useState(false);
  const [productsData, setProductsData] = useState({ settings: { ...Settings } });
  const [selectedProducts, setSelectedProducts] = useState([]);
  const siteId = config.SKEY;
  const { state } = useAppContext();
  const configValues = props.configValue
    ? JSON.parse(props.configValue)
    : { };

  useEffect(() => {
    let productData;
    // console.log('props', props);

    // console.log('configValues', props?.payLoad?.products[0]);

    if(configValues?.productRecommendation?.association) {
      productData = props?.payLoad?.products[0]?.productDetails?.productAssociations[configValues.productRecommendation.association];
      setSelectedProducts(productData);
    }else if(state.channelData && state?.channelData?.defaultCatalogId && configValues.productRecommendation.recommendationType === 'AI_DRIVEN') {
      requestContructor(`rxc/${RecommondationsMap[configValues.productRecommendation.recommendation]}?siteId=${siteId}&catalogId=${state?.channelData?.defaultCatalogId}&seed=${props?.payLoad?.products[0].productId}&max=5`, '', {
        method: 'GET',
      }).then((res) => {
        if(res.recommended) {
          setSelectedProducts(res.recommended);
        }else{
          setSelectedProducts([]);
        }
      });
    }else{
      setSelectedProducts([]);
    }
    setProductsData({ ...productsData });
  }, [state.channelData, props]);

  useEffect(() => {
    if(state.channelData && state.userData && (selectedProducts && selectedProducts.length > 0) && !configValues.productRecommendation.association) {
      viewEvent({
        channelData: state.channelData,
        userData: state.userData,
        product: props?.payLoad?.products[0],
        products: selectedProducts,
        recommendationType: RecommondationsMap[configValues.productRecommendation.recommendation],
        pageType: 'PDP',
        eventType: 'recommendation',

      });
    }
  }, [state.channelData, state.userData, selectedProducts]);

  useEffect(() => {
    if(selectedProducts && selectedProducts.length > 0) {
      requestContructor('getProductsData', '', {
        method: 'POST',
        data: { productIds: selectedProducts },
      }).then((res) => {
        if (res.payLoad
            && res.payLoad.products
        ) {
          configValues.products = res.payLoad.products;
          setProductsData({
            ...productsData,
            configValues,
          });
          setLoad(true);
        }
      });
    }else{
      configValues.products = [];
      setProductsData({
        ...productsData,
        configValues,
      });
      setLoad(true);
    }
  }, [selectedProducts]);

  return (
    <>
      {load && selectedProducts && selectedProducts.length > 0 && (
        <>
          <h1 className="row align-left">
            <span>{props.name}</span>
            {/* <small className="ml-10">{productsData?.configValues.defaultProductSelector.viewAllLink && <a href={productsData?.configValues.defaultProductSelector.viewAllLink}>View All</a>}</small> */}
          </h1>
          <Slider {...productsData.settings}>
            {productsData?.configValues?.products.map(
              (value, index) => (
                <div key={index}>
                  <div style={{ margin: '15px' }}>
                    <ProductTile
                      value={value}
                      recommondationData={{
                        recommendationAttributionDetails: {
                          recommendationType: RecommondationsMap[configValues.productRecommendation.recommendation],
                          recommendationLocation: 'PDP',
                        },
                      }}
                    />
                  </div>
                </div>
              ),
            )}
          </Slider>
        </>
      )}
    </>
  );
}
