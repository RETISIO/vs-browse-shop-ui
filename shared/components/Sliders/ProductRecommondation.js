/* eslint-disable react/no-array-index-key */
/* eslint-disable import/named */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { requestContructor } from '../../helpers/api';
import ProductTile from '../template/components/ProductTile';

export default function ProductRecommondation(props) {
  const [load, setLoad] = useState(false);
  const [productsData, setProductsData] = useState({});
  const siteId = process.env.NEXT_PUBLIC_SITEID;
  const catalogId = '1001';

  useEffect(() => {
    let productData;
    const settings = {
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    console.log('props', props);
    const configValues = props.configValue
      ? JSON.parse(props.configValue)
      : { };
    if(configValues?.productRecommendation?.association) {
      productData = props?.payLoad?.products[0]?.productDetails?.productAssociations[configValues.productRecommendation.association];
    }else{
      requestContructor(`rxc/similar_sku?siteId=${siteId}&catalogId=${catalogId}&seed=${props?.payLoad?.products[0].productId}&max=5`, '', {
        method: 'GET',
      }).then((res) => {
        console.log('res', res);
      });
    }
    requestContructor('getProductsData', '', {
      method: 'POST',
      data: { productData },
    }).then((res) => {
      if (res.payLoad
          && res.payLoad.products
      ) {
        configValues.products = res.payLoad.products;
        setProductsData({
          configValues,
          settings,
        });
        setLoad(true);
      }
    });
  }, []);
  return (
    <>
      {load && (
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
