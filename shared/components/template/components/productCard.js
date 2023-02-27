/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable linebreak-style */
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { NextImage } from './nextImage';

export default function ProductCard({
  value, isLast, newLimit, index,
}) {
  /**
   * Select the Card component with useRef
   */
  const cardRef = useRef();

   /**
    * Implement Intersection Observer to check if the last Card in the array is visible on the screen, then set a new limit
    */
  useEffect(() => {
    if (!cardRef?.current) return;
 
    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting) {
        newLimit();
        observer.unobserve(entry.target);
      }
    });
 
    observer.observe(cardRef.current);
  }, [isLast]);
  return (
    <>
      <div className="col-md-4 col-sm-6 col-xs-12" ref={cardRef} key={index}>
        <div className="product-card" data-mh="product-card">
          {value?.productPrice?.onSale ? (
            <div className="product-badge sale">
              <div id="cc_img__resize_wrapper-sale-badge" className="">
                <NextImage
                  alt="sale"
                  className="ccLazyLoaded"
                  src="/static/assets/sale-badge.png"
                  height={50}
                  width={50}
                />
              </div>
            </div>
          ) : null}
          {value?.additionalDetails?.isPrimeProduct ? (
            <div className="product-badge usda">
              <div id="cc_img__resize_wrapper-usda-badge" className="">
                <NextImage
                  alt="usda"
                  className="ccLazyLoaded"
                  src="/static/assets/usda-badge.png"
                  height={55}
                  width={55}
                />
              </div>
            </div>
          ) : null}
          <Link
            className="product-image"
            href={`/products/month-plan-duo/${value?.productId}`}
          >
            <div className="image-pos">
              <NextImage
                alt={value?.skus?.[value?.defaultSkuId]?.media?.altText}
                className="item-thumb img-responsive"
                src={`${process.env.NEXT_PUBLIC_IMAGEPATH}catalog${value?.skus?.[value?.defaultSkuId]?.media?.smallImg}`}
                height={262}
                width={262}
              />
            </div>
          </Link>
          <div className="product-card-inner">
            <div className="product-card-desc">
              <Link href={`/products/month-plan-duo/${value?.productId}`}>
                {value.displayName}
              </Link>
              {(value?.additionalDetails?.isNewProduct || value?.additionalDetails?.isNeverFrozen)
                ? (
                  <div
                    id="cc_img__resize_wrapper-new-badge"
                    className=""
                    style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}
                  >
                    <NextImage
                      alt={((value?.additionalDetails?.isNewProduct && value?.additionalDetails?.isNeverFrozen) || (value?.additionalDetails?.isNeverFrozen)) ? 'fresh' : 'new'}
                      className="image-badge ccLazyLoaded"
                      src={((value?.additionalDetails?.isNewProduct && value?.additionalDetails?.isNeverFrozen) || (value?.additionalDetails?.isNeverFrozen)) ? '/static/assets/Fresh.png' : '/static/assets/new.png'}
                      height={50}
                      width={23}
                    />
                  </div>
                ) : null}
            </div>
            <div
              className="yotpo bottomLine yotpo-small"
              data-yotpo-product-id={value?.productId}
              // data-yotpo-product-id="10660"
              data-currency="USD"
            >
            </div>
            <p className="product-card-price">
              {(value?.productPrice?.minSalePrice || value?.productPrice?.minListPrice) === 0 ? null
                : (
                  <>
                    <span>Starting At: </span>
                    <b>
                      $
                      {value?.productPrice?.minSalePrice ? value?.productPrice?.minListPrice : value?.productPrice?.minListPrice}
                    </b>
                  </>
                )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
