/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Head from 'next/head';
import config from './getConfig';

export default function SchemaOrg(props) {
  const { abUrl, productData } = props;

  const getSKUData = () => {
    const childSkuArr = [];
      
    Object.keys(productData?.skus).forEach((key) => {
      const item = {};
      item.priceCurrency = 'USD';
      item.itemOffered = {
        productID: key,
        '@type': 'IndividualProduct',
      };
      item['@type'] = 'Offer';
      item.price = productData?.skus?.[key]?.skuDetails?.price?.listPrice?.price?.replace('$', '');
      
      item.name = productData?.skus?.[key]?.displayName;
      if (productData?.skus?.[key]?.skuDetails?.hasStock) {
        item.availability = 'http://schema.org/InStock';
      } else {
        item.availability = 'http://schema.org/OutOfStock';
      }
      item.itemCondition = 'http://schema.org/NewCondition';
        
      childSkuArr.push(item);
    });
    return childSkuArr;
  };
      
  const schema = {
    offers: Object?.keys(productData?.skus)?.length > 0 ? getSKUData() : [],
    image: `${config.IMGPATH}${productData?.productDetails?.productMedia?.default?.media?.largeImg}`,
    '@type': 'Product',
    name: productData?.displayName,
    description: productData?.description,
    '@id': abUrl,
    '@context': 'https://schema.org',
    brand: 'Allen Brothers',
  };
  return (
    <Head>
      <script
        id="CC-schema-org-server"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}
