import React from 'react';
import { Breadcrumb } from '../template/components/breadcrumb';
import { NextImage } from '../template/components/nextImage';
import SkuLineItem from './skuLineItem';
import GiftCard from '../giftCard';

export default function ProductDescription(props) {
  const pdpData = props?.pdpData?.payLoad;
  const productSkus = pdpData?.products[0]?.skus && Object.values(pdpData?.products[0]?.skus);
  const productType = pdpData?.products[0]?.productType;
  if (productType === 'giftcard') {
    return (
      <GiftCard {...props} />
    );
  }
  const damPath = process.env.NEXT_PUBLIC_IMAGEPATH;
  const productId = pdpData?.products[0]?.productId;
  const renderGalleryImage = () => {
    const defaultSkuId = pdpData?.products[0]?.defaultSkuId;
    const mediaObj = pdpData?.products[0]?.skus[defaultSkuId]?.media;
    const thumbnailHeight = 475;
    const thumbnailWidth = 475;
    return (
      <aside className="col-md-5">
        <div className="product-gallery app-figure" id="zoom-fig">
          <div id="cc_img__resize_wrapper-badge-usda-prime" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
            {/* <img
              id="usda-logo"
              className="usda-prime-logo"
              alt="USDA Prime"
              src="https://www.allenbrothers.com/file/general/usda.png"
              srcSet="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/usda.png&amp;height=45&amp;width=55 55w"
              sizes="(max-width:480px) 55px,(min-width:481px) and (max-width:768px) 55px,(min-width:769px) and (max-width:979px) 55px,(min-width:980px) 55px"
            /> */}

            <NextImage
              alt={mediaObj?.altText}
              src={`${damPath}${mediaObj?.thumbnailImg}`}
              height={thumbnailHeight}
              width={thumbnailWidth}
              id="usda-logo"
              className="usda-prime-logo hidden"
            />

          </div>
          <div className="product-gallery__main">
            <a
              className="MagicZoom js-product-gallery-zoom"
              id="zoom"
              href="/ccstore/v1/images/?source=/file/v4671930468835559977/products/10032.jpg"
            >
              <figure className="mz-figure mz-hover-zoom mz-ready">
                {/* <img
                  id="zoom-image"
                  loading="lazy"
                  alt="Dry-Aged USDA Prime Boneless Sirloin Strip Steaks"
                  src="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v4671930468835559977/products/10032.jpg&amp;height=475&amp;width=475"
                  style={{ maxWidth: '475px', maxHeight: '475px' }}
                /> */}
                <NextImage
                  alt={mediaObj?.altText}
                  src={`${damPath}${mediaObj?.thumbnailImg}`}
                  height={thumbnailHeight}
                  width={thumbnailWidth}
                  id="zoom-image"
                />
                <div
                  className="mz-lens"
                  style={{
                    top: '0px', transform: 'translate(-10000px, -10000px)', width: '255px', height: '255px',
                  }}
                >
                  <img
                    src="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v4671930468835559977/products/10032.jpg&amp;height=475&amp;width=475"
                    style={{
                      position: 'absolute', top: '0px', left: '0px', width: '458px', height: '458px', transform: 'translate(-204px, -1px)',
                    }}
                  />
                </div>
              </figure>

            </a>
          </div>
          <div className="MagicScroll js-product-gallery-scroll" id="productThumb" data-magic-zoom-id="zoom" data-target-id="pdp-slider-desktop" data-options="orientation: horizontal;" data-bind="mainGallery: mainGallery"></div>
          <div className="MagicScroll" id="pdp-slider-desktop" data-options="orientation: horizontal;"></div>
        </div>
      </aside>
    );
  };
  return (
    <section>
      <div className="container pdpMainContainer">
        <nav className="breadcrumbs-block hidden-print">
          <ol className="breadcrumb">
            <Breadcrumb data={props.pdpData} />
          </ol>
        </nav>
        <div>
          <div className="hidden-lg hidden-md visible-sm visible-xs">
            <div className="alert alert-dismissible hidden-print alert-success undefined" role="alert" style={{ display: 'none' }}>
              <button className="close" type="button" aria-label="Close"><span aria-hidden="true">×</span></button>
            </div>
          </div>
          <div className="alert alert-dismissible hidden-print alert-success undefined" role="alert" style={{ display: 'none' }}>
            <button data-bind="click: $data.clearSuccessMessages" className="close" type="button" aria-label="Close"><span aria-hidden="true">×</span></button>
          </div>
          <div className="alert alert-dismissible hidden-print alert-danger undefined" role="alert" style={{ display: 'none' }}>
            <button data-bind="click: $data.clearErrorMessages" className="close" type="button" aria-label="Close"><span aria-hidden="true">×</span></button>
          </div>
        </div>
        <div className="product-title-wrapper">
          <h1 className="page-title">
            <span>{pdpData?.products[0]?.displayName}</span>
            <div>
              {/* <div htmlFor="reviewsection" className="yotpo bottomLine yotpo-medium" data-bind=" attr:{ 'data-yotpo-product-id':$data.product().id()}" data-yotpo-product-id="10032" data-yotpo-element-id="2">
                <div className="yotpo-display-wrapper">
                  <div className="standalone-bottomline" data-source="default" tabIndex="-1">
                    <div className="yotpo-bottomline pull-left  star-clickable" tabIndex="0">
                      <span className="yotpo-stars">
                        <span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span>
                        <span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span>
                        <span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span>
                        <span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span>
                        <span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span>
                        <span className="sr-only">4.8 star rating</span>
                      </span>
                      <a href="javascript:void(0)" className="text-m" aria-label="20 reviews" tabIndex="-1">20 Reviews</a>
                      <div className="yotpo-clr"></div>
                    </div>
                    <div className="yotpo-clr"></div>
                  </div>
                  <div className="yotpo-clr"></div>
                </div>
              </div> */}
            </div>
          </h1>
          <p className="page-short-description">{pdpData?.products[0]?.description}</p>
        </div>
        <div className="row product-gallery-wrapper">
          {renderGalleryImage()}
          <div className="col-md-7">
            <table className="table table-striped table-responsive-sm product-table">
              <thead>
                <tr>
                  <th>Item #</th>
                  <th width="160">Options</th>
                  <th>Price</th>
                  <th>QTY</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {productSkus?.map((item, i) => <SkuLineItem key={`sku-${i}`} skuItem={item} productId={productId} />)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
