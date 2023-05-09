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
import { Settings } from './getSettings';

export default function ProductRecommondation(props) {
  const [load, setLoad] = useState(false);
  const [productsData, setProductsData] = useState({ settings: Settings });
  const [selectedProducts, setSelectedProducts] = useState([]);
  const siteId = process.env.NEXT_PUBLIC_SITEID;
  const { state } = useAppContext();

  useEffect(() => {
    let productData;
    // console.log('props', props);
    const configValues = props.configValue
      ? JSON.parse(props.configValue)
      : { };
    console.log('configValues', configValues);

    if(configValues?.productRecommendation?.association) {
      productData = props?.payLoad?.products[0]?.productDetails?.productAssociations[configValues.productRecommendation.association];
      setSelectedProducts(productData);
    }else if(state.channelData) {
      requestContructor(`rxc/similar_sku?siteId=${siteId}&catalogId=${state?.channelData?.defaultCatalogId}&seed=${props?.payLoad?.products[0].productId}&max=5`, '', {
        method: 'GET',
      }).then((res) => {
        if(res.recommended) {
          setSelectedProducts(res.recommended);
        }
      });
    }
    setProductsData({ ...productsData });
  }, [state.channelData]);

  useEffect(() => {
    requestContructor('getProductsData', '', {
      method: 'POST',
      data: { productIds: selectedProducts },
    }).then((res) => {
      const configValues = {};
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
                    <ProductTile value={value} />
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
