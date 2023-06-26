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
      item['@type'] = 'Offer';
      item.itemCondition = 'http://schema.org/NewCondition';
      item.name = productData?.skus?.[key]?.displayName;
      item.price = productData?.skus?.[key]?.skuDetails?.price?.listPrice?.price;
        
      item.sku = key;
      item.priceCurrency = 'USD';
        
      if (productData?.skus?.[key]?.skuDetails?.hasStock) {
        item.availability = 'http://schema.org/InStock';
      } else {
        item.availability = 'http://schema.org/OutOfStock';
      }
        
      childSkuArr.push(item);
    });
    return childSkuArr;
  };
      
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    description: productData?.description,
    image: [`${config.IMGPATH}${productData?.productDetails?.productMedia?.default?.media?.largeImg}`],
    name: productData?.displayName,
    url: abUrl,
    offers: {
      '@type': 'AggregateOffer',
      highPrice: productData?.productPrice?.maxListPrice,
      lowPrice: productData?.productPrice?.minListPrice,
      offerCount: Object?.keys(productData?.skus)?.length,
      priceCurrency: 'USD',
      offers: Object?.keys(productData?.skus)?.length > 0 ? getSKUData() : [],
    },
    sku: productData?.defaultSkuId,
    brand: {
      '@type': 'Thing',
      name: 'Allen Brothers',
    },
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
