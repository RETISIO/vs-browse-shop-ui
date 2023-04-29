/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import Breadcrumb from '../template/components/breadcrumb';
import GcDetailsPage from './gcDetailsPage';
import ProductRecommondation from '../Sliders/ProductRecommondation';
import NextImage from '../template/components/nextImage';

export default function GiftCard(props) {
  const pdpData = props?.pdpData?.payLoad;
  const damPath = process.env.NEXT_PUBLIC_IMAGEPATH;
  const defaultSkuId = pdpData?.products[0]?.defaultSkuId;
  const breadcrumbData = {
    ...props?.pdpData,
  };
  breadcrumbData.payLoad.navigationPath = [{
    id: 'assortments',
    name: pdpData?.products[0]?.productType === 'giftcard' ? 'Physical Gift Card'
      : pdpData?.products[0]?.productType === 'egiftcard' ? 'Email Gift Card' : '',
    categoryNId: 'gifts_bundles',
    isRootCategory: false,
    hasCategories: true,
  }];
  const mediaObj = pdpData?.products[0]?.skus[defaultSkuId]?.media;
  const thumbnailHeight = 475;
  const thumbnailWidth = 475;

  const configValue = {
    configValue: '{"productRecommendation":{"recommendationType":"AI_DRIVEN","recommendation":"Product-Similar SKUs"}}',
    contentItemId: 'productRecommendations:custom:fba6a97f-0519-4c11-bbde-0af98c769c1f',
    contentTypeId: 'productRecommendations:custom',
    name: 'More Temptations to Consider',
  };

  return (
    <>
      <div className="container giftCardConainer">
        <nav className="breadcrumbs-block hidden-print">
          <ol className="breadcrumb">
            <Breadcrumb data={breadcrumbData} />
          </ol>
        </nav>
        <div className="gift-card-section">
          <div className="row">
            <div className="col-md-5 col-sm-6">
              <div className="product-gallery__main">
                <NextImage
                  alt={mediaObj?.altText}
                  src={`${damPath}${mediaObj?.thumbnailImg}`}
                  height={thumbnailHeight}
                  width={thumbnailWidth}
                  id="zoom-image"
                />
              </div>
            </div>
            <GcDetailsPage {...props} />
          </div>
        </div>
        <div className="product-description">
          <div
            data-bind="html: $data.product().longDescription()"
            dangerouslySetInnerHTML={{ __html: pdpData?.products[0]?.longDescription }}
          />
        </div>
      </div>
      <div className="giftcard-product-recommendation">
        <ProductRecommondation {...configValue} />
      </div>
    </>
  );
}
