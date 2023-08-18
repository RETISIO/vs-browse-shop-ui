/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-one-expression-per-line */

/* eslint-disable react/no-unstable-nested-components */

/* eslint-disable max-len */

/* eslint-disable react/destructuring-assignment */

/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { requestContructor } from '../../helpers/api';
import config from '../../helpers/getConfig';

export default function Featureproducts(props) {
  const configValues = props.configValue
    ? JSON.parse(props.configValue)
    : { };
  const content = props.content ? JSON.parse(props.content) : {};
//   console.log('prop', configValues, content);
  const [loading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState(content);
  useEffect(() => {
    const productIds = Object.keys(content.featuredProducts);
    requestContructor('getProductsData', '', {
      method: 'POST',
      data: { productIds },
    }).then((res) => {
      if (
        res.payLoad
            && res.payLoad.products
      ) {
        const finalContent = { ...productsData };
        res.payLoad.products.map((prod) => {
          if(finalContent.featuredProducts[prod.productId]) { finalContent.featuredProducts[prod.productId].productDetails = prod; }
        });
        setProductsData(finalContent);
        setLoading(true);
      }
    });
  }, []);
  function ImageBlock(conf) {
    const data = productsData.featuredProducts[conf.productId];
    return (
      <div className="col-sm-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
        <div className="promotion-image">
          <div className="product-image" style={{ backgroundImage: `url(${config.IMGPATH + data?.productDetails?.productDetails?.productMedia?.default?.media?.largeImg})`, height: '400px' }}></div>
        </div>
      </div>
    );
  }

  const calcPrice = (product) => {
    if(product && product.onSale && product?.productPrice?.minSalePrice && product?.productPrice?.minListPrice) {
      return product?.productPrice?.minListPrice < product?.productPrice?.minSalePrice ? product?.productPrice?.minListPrice.toFixed(2) : product?.productPrice?.minSalePrice.toFixed(2);
    }if(product?.productPrice && product?.productPrice.minListPrice) {
      return product?.productPrice?.minListPrice.toFixed(2);
    }
    return '';
  };

  const contentBlock = (conf) => {
    const data = productsData.featuredProducts[conf.productId];
    // console.log(conf,data);
    return (
      <div className="col-sm-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
        <div className="promotion-banner">
          <div className="promotion-banner-inner">
            <h2 className="promotion-title">
              {data.featuredProductName == 'productName' && data.productDetails.displayName}
              {data.featuredProductName == 'customProductName' && data.customProductName}
            </h2>
            <p className="promotion-description">
              {data.featuredProductDescription == 'productDescription' && data.productDetails.description}
              {data.featuredProductDescription == 'customProductDescription' && data.customProductDescription}
            </p>
            {conf.displayPrice == 'Yes' && (
              <div className="promotion-price">
                <span className="promotion-price" style={{ fontWeight: '400', color: 'black' }}>{`${Object.keys(data.productDetails?.skus)?.length === 1 ? 'Starting At ' : 'Starting From '}`}</span>
                <span className="promotion-price" style={{ color: 'black', fontWeight: '600' }}>${calcPrice(data.productDetails)}</span>
              </div>
            )}
          </div>
          <a href={`/products/${data.productDetails.seoData && data.productDetails.seoData.slug ? data.productDetails.seoData.slug : data.productDetails.displayName.replace(/[\s~`!@#$%^&*()_+\-={[}\]|\\:;"'<,>.?/]+/g, '-').toLowerCase()}/${data.productDetails?.productId}`} className="btn btn-secondary btn-md">{data.buttonCaption}</a>
        </div>
      </div>
    );
  };
  return (
    <div className="row homepagePromotionBanner">
      {loading && (
        configValues.featuredProducts.map((config) => (
          <div className="row-gutter-sm-15">
            {config.imagePosition === 'Left' && (<>{ImageBlock(config)}{contentBlock(config)}</>)}
            {config.imagePosition === 'Right' && (<>{contentBlock(config)}{ImageBlock(config)}</>)}
          </div>
        ))
      )}
    </div>
  );
}
