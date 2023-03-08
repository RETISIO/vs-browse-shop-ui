/* eslint-disable import/named */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-empty */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-useless-fragment */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import NextImage from '../template/components/nextImage';
import { requestContructor } from '../../helpers/api';
import ProductTile from '../template/components/ProductTile';

export default function ProductCarousel(props) {
  const Props = props;
  const [load, setLoad] = useState(false);
  const [productsData, setProductsData] = useState({});
  useEffect(() => {
    const configValues = Props.configValue ? JSON.parse(Props.configValue) : { noOfRecords: 6 };
    const settings = {
      dots: false,
      slidesToShow: configValues.customProductSelector.noOfRecords,
      slidesToScroll: configValues.customProductSelector.noOfRecords,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: configValues.customProductSelector.noOfRecords,
            slidesToScroll: configValues.customProductSelector.noOfRecords,
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
    const productIds = configValues.customProductSelector.products.map((item) => item.productId);
    requestContructor('getProductsData', '', { method: 'POST', data: { productIds } }).then((res) => {
      if(res.payLoad && res.payLoad.products) {
        configValues.customProductSelector.products = res.payLoad.products;
        setProductsData({
          configValues,
          settings,
        });
        setLoad(true);
      }
    });
    
    console.log(configValues);
  }, []);
  return (
    <>
      {load && (
        <div className="container">
          <h2 className="row category-container__title">{props.name}</h2>
          <Slider {...productsData.settings}>
            {productsData.configValues.customProductSelector.products.map((value, index) => (
            //   <div>
            //     <div style={{ margin: '7px' }}>
            //       <a href={item.refinementPageLink}>
            //         <NextImage alt={item.displayName} className="img-responsive category-list__image" src="/set/sdf.jpg" width="184" height="184" />
            //         <div className="category-list__text">
            //           <section>
            //             <span className="category-list-text col-xs-8 col-md-12">{item.displayName}</span>
            //           </section>
            //         </div>
            //       </a>
            //     </div>
            //   </div>
              <div key={index}>
                <div style={{ margin: '7px' }}>
                  <ProductTile value={value} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
}
