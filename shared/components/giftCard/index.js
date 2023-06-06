/* eslint-disable import/no-named-as-default */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import Breadcrumb from '../template/components/breadcrumb';
import GcDetailsPage from './gcDetailsPage';
import ProductRecommondation from '../Sliders/ProductRecommondation';
import NextImage from '../template/components/nextImage';
import config from '../../helpers/getConfig';

export default function GiftCard(props) {
  const pdpData = props?.pdpData?.payLoad;
  const damPath = config.IMGPATH;
  const defaultSkuId = pdpData?.products[0]?.defaultSkuId;

  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState();

  useEffect(() => {
    if (successMsg || errorMsg) {
      setTimeout(() => {
        setSuccessMsg('');
        setErrorMsg('');
      }, 3000);
    }
  }, [errorMsg, successMsg]);

  const breadcrumbData = {
    ...props?.pdpData
  };
  breadcrumbData.payLoad.navigationPath = [
    {
      id: 'assortments',
      name:
        pdpData?.products[0]?.productType === 'giftcard'
          ? 'Physical Gift Card'
          : pdpData?.products[0]?.productType === 'egiftcard'
            ? 'Email Gift Card'
            : '',
      categoryNId: 'gifts_bundles',
      isRootCategory: false,
      hasCategories: true
    }
  ];
  const mediaObj = pdpData?.products[0]?.skus[defaultSkuId]?.media;
  const thumbnailHeight = 475;
  const thumbnailWidth = 475;

  const configValue = {
    configValue:
      '{"productRecommendation":{"recommendationType":"AI_DRIVEN","recommendation":"Product-Similar SKUs"}}',
    contentItemId:
      'productRecommendations:custom:fba6a97f-0519-4c11-bbde-0af98c769c1f',
    contentTypeId: 'productRecommendations:custom',
    name: 'More Temptations to Consider'
  };

  const handleSuccessMsg = msg => {
    setErrorMsg('');
    setSuccessMsg('The item(s) has been successfully added to your cart.');
    window.scrollTo(0, 0);
  };

  const handleErrorMsg = error => {
    setSuccessMsg('');
    setErrorMsg(error);
    window.scrollTo(0, 0);
  };

  const handleCloseBtn = (errMsg, sucsMsg) => (
    <button
      className='close'
      type='button'
      aria-label='Close'
      style={{
        opacity: '1.2',
        fontSize: '31px',
        lineHeight: '0px',
        marginTop: '10px'
      }}
      onClick={() => {
        if (errMsg) {
          setErrorMsg('');
        }
        if (sucsMsg) {
          setSuccessMsg('');
        }
      }}
    >
      <span aria-hidden='true'>×</span>
    </button>
  );

  return (
    <>
      <div className='container giftCardConainer'>
        <nav className='breadcrumbs-block hidden-print'>
          <ol className='breadcrumb'>
            <Breadcrumb data={breadcrumbData} />
          </ol>
        </nav>
        <div className='gift-card-section'>
          <div className='row'>
            {errorMsg && (
              <div
                className='alert alert-dismissible hidden-print alert-danger undefined cart-success-msg'
                aria-describedby='loginModalErrors-desc'
                tabIndex='0'
                role='alert'
                id='pdp-errorMsg'
              >
                {handleCloseBtn(errorMsg, undefined)}
                <b id='loginModalErrors-desc'>{errorMsg}</b>
              </div>
            )}
            {successMsg && (
              <div
                className='alert alert-dismissible hidden-print alert-success undefined header-alert-top cart-success-msg'
                role='alert'
                id='pdp-successMsg'
              >
                {handleCloseBtn(undefined, successMsg)}
                <strong>{successMsg}</strong>
              </div>
            )}
            <div className='col-md-5 col-sm-6'>
              <div className='product-gallery__main'>
                <NextImage
                  alt={mediaObj?.altText}
                  src={`${damPath}${mediaObj?.thumbnailImg}`}
                  height={thumbnailHeight}
                  width={thumbnailWidth}
                  id='zoom-image'
                />
              </div>
            </div>
            <GcDetailsPage
              {...props}
              handleSuccessMsg={handleSuccessMsg}
              handleErrorMsg={handleErrorMsg}
            />
          </div>
        </div>
        <div className='product-description'>
          <div
            data-bind='html: $data.product().longDescription()'
            dangerouslySetInnerHTML={{
              __html: pdpData?.products[0]?.longDescription
            }}
          />
        </div>
      </div>
      <div className='giftcard-product-recommendation'>
        <ProductRecommondation {...configValue} payLoad={pdpData} />
      </div>
    </>
  );
}
