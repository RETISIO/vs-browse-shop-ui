/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-quotes */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import NextImage from '../template/components/nextImage'
// import SkuLineItem from './skuLineItem';
import GiftCard from '../giftCard'
import SkuSelection from './skuSelection'
import NewBadge from '../../../public/static/assets/new.png'
import FreshBadge from '../../../public/static/assets/Fresh.png'
import ImageCarousel from '../ImageCarousel'
import ProductSkus from './productSkus'

export default function ProductDescription(props) {
  const pdpData = props?.payLoad
  // const pdpData = props?.pdpData?.payLoad
  console.log('from ProductDescription111111111....props...', props)
  const productSkus =
    pdpData?.products[0]?.skus && Object.values(pdpData?.products[0]?.skus)
  const productType = pdpData?.products[0]?.productType
  const [showWidget, setShowWidget] = useState(false)
  const [showSaleWidget, setShowSaleWidget] = useState(false)

  if (productType === 'giftcard') {
    return <GiftCard {...props} />
  }

  useEffect(() => {
    setShowWidget(true)
    setTimeout(() => {
      window.yotpo && window.yotpo.refreshWidgets()
    }, 10)
  }, [])
  const damPath = process.env.NEXT_PUBLIC_IMAGEPATH
  //  const productId = pdpData?.products[0]?.productId;
  const productAdditionDetails = pdpData?.products[0]?.additionalDetails

  const handleShowOnSaleBadge = showBadge => {
    setShowSaleWidget(showBadge)
  }

  const renderGalleryImage = () => (
    <aside className='col-md-5'>
      <div className='product-gallery app-figure' id='zoom-fig'>
        <div className='product-gallery__main'>
          <ImageCarousel
            data={pdpData?.products[0]?.productDetails?.productMedia?.default}
            additionalDetails={productAdditionDetails}
            onSale={showSaleWidget}
          />
        </div>
      </div>
    </aside>
  )
  return (
    <section>
      <div className='container pdpMainContainer'>
        <div>
          <div className='hidden-lg hidden-md visible-sm visible-xs'>
            <div
              className='alert alert-dismissible hidden-print alert-success undefined'
              role='alert'
              style={{ display: 'none' }}
            >
              <button className='close' type='button' aria-label='Close'>
                <span aria-hidden='true'>×</span>
              </button>
            </div>
          </div>
          <div
            className='alert alert-dismissible hidden-print alert-success undefined'
            role='alert'
            style={{ display: 'none' }}
          >
            <button
              data-bind='click: $data.clearSuccessMessages'
              className='close'
              type='button'
              aria-label='Close'
            >
              <span aria-hidden='true'>×</span>
            </button>
          </div>
          <div
            className='alert alert-dismissible hidden-print alert-danger undefined'
            role='alert'
            style={{ display: 'none' }}
          >
            <button
              data-bind='click: $data.clearErrorMessages'
              className='close'
              type='button'
              aria-label='Close'
            >
              <span aria-hidden='true'>×</span>
            </button>
          </div>
        </div>
        <div className='product-title-wrapper'>
          <h1 className='page-title'>
            <span>{pdpData?.products[0]?.displayName}</span>
            <div>
              <div
                htmlFor='reviewsection'
                className='yotpo bottomLine'
                data-yotpo-product-id={pdpData?.products[0]?.productId}
              ></div>
            </div>
            {productAdditionDetails?.isNeverFrozen && (
              <div
                id='cc_img__resize_wrapper-badge-new'
                style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}
              >
                <NextImage
                  alt='New'
                  src={FreshBadge}
                  height='20'
                  width='44'
                  id='new-logo'
                  className='new-logo'
                />
              </div>
            )}
            {!productAdditionDetails?.isNeverFrozen &&
              productAdditionDetails?.isNewProduct && (
                <div
                  id='cc_img__resize_wrapper-badge-new'
                  style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}
                >
                  <NextImage
                    alt='New'
                    src={NewBadge}
                    height='20'
                    width='44'
                    id='new-logo'
                    className='new-logo'
                  />
                </div>
              )}
          </h1>
          <p className='page-short-description'>
            {pdpData?.products[0]?.description}
          </p>
        </div>
        <div className='row product-gallery-wrapper'>
          {renderGalleryImage()}
          <div className='col-md-7'>
            <ProductSkus
              props={props}
              handleShowOnSaleBadge={handleShowOnSaleBadge}
            />
            {/* <SkuSelection data={props} /> */}
          </div>
        </div>
      </div>

      <section className='product-info-section '>
        <div className='container'>
          <Accordion defaultActiveKey='0' flush>
            <Accordion.Item eventKey='0'>
              <Accordion.Header>
                <div className='panel panel-default panel-large'>
                  <div className='panel-heading'>
                    <div className='panel-title'>
                      <a
                        id='productInfoSelector'
                        className='collapse'
                        role='button'
                        data-toggle='collapse'
                        href='#productInfoPanel'
                      >
                        Product Info
                        <i className='icon fas fa-chevron-down'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div
                  className='panel-body'
                  data-bind='html: $data.product().longDescription()'
                >
                  <p>
                    A fine texture and rich marbling combined with our special
                    dry-aging process give Allen Brothers sirloin strip steaks
                    an incredibly robust flavor and juicy tenderness. Sometimes
                    called a New York strip or shell steak, by any name it's a
                    classic steak-lover's steak
                  </p>
                  <p>
                    We dry age our steaks in custom-designed, dry aging coolers
                    where a complex process incorporates an intricate and
                    delicate balance of time, temperature, air circulation and
                    humidity. The beef ages openly exposed to the air inside the
                    cooler, from the outside in, forming a hard crust around the
                    edible tissue. After aging is complete, this firm outer
                    crust is carefully removed, leaving meat that is
                    significantly more tender and with the distinctive ‘beefy’
                    flavor specific to dry aging.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>
                <div className='panel panel-default panel-large'>
                  <div className='panel-heading'>
                    <div className='panel-title'>
                      <a
                        id='productInfoSelector'
                        className='collapse'
                        role='button'
                        data-toggle='collapse'
                        href='#productInfoPanel'
                      >
                        Shipping Info
                        <i className='icon fas fa-chevron-down'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {/* <div className="panel-group">
            <div className="row">
              <div className="oc-panel col-md-12" data-oc-id="panel-0-0">
                <div data-bind="element: 'allnPDP-productInfo'" id="wi1800003-allnPDP-productInfo-id">
                  <div className="panel panel-default panel-large">
                    <div className="panel-heading">
                      <div className="panel-title">
                        <a id="productInfoSelector" className="collapse" role="button" data-toggle="collapse" href="#productInfoPanel">
                          Product Info
                          <i className="icon fas fa-chevron-down"></i>
                        </a>
                      </div>
                    </div>
                    <div className="panel-collapse collapse in" data-collapse="xs" id="productInfoPanel">
                      <div className="panel-body" data-bind="html: $data.product().longDescription()">
                        <p>A fine texture and rich marbling combined with our special dry-aging process give Allen Brothers sirloin strip steaks an incredibly robust flavor and juicy tenderness. Sometimes called a New York strip or shell steak, by any name it's a classic steak-lover's steak</p>
                        <p>We dry age our steaks in custom-designed, dry aging coolers where a complex process incorporates an intricate and delicate balance of time, temperature, air circulation and humidity. The beef ages openly exposed to the air inside the cooler, from the outside in, forming a hard crust around the edible tissue. After aging is complete, this firm outer crust is carefully removed, leaving meat that is significantly more tender and with the distinctive ‘beefy’ flavor specific to dry aging.</p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <div className='container' id='reviewsection'>
        {showWidget && (
          <div
            className='yotpo yotpo-main-widget'
            data-product-id={pdpData?.products[0]?.productId}
            data-price={pdpData?.products[0]?.productId}
            data-currency='USD'
            data-name={pdpData?.products[0]?.displayName}
            data-url={window.location.href}
            data-image-url={`${damPath}${
              pdpData?.products[0]?.skus[pdpData?.products[0]?.defaultSkuId]
                ?.media?.thumbnailImg
            }`}
          ></div>
        )}
      </div>
    </section>
  )
}
