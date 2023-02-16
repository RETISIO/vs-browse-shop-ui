/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePageDataContext } from '../context/pageData-context';
import { DisplayImage } from './displayImage';

function ResultList(props) {
  const { data } = props;
  const [pageContentData, setPageContent] = useState(data);
  const { pageData } = usePageDataContext();
  useEffect(() => {
    setPageContent(pageData);
  }, [pageData]);

  return (
    <>
      {pageContentData?.payLoad?.products?.map((value) => (
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="product-card" data-mh="product-card">
            {value?.productPrice?.onSale ? (
              <div className="product-badge sale">
                <div id="cc_img__resize_wrapper-sale-badge" className="">
                  <DisplayImage
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
                  <DisplayImage
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
                <DisplayImage
                  alt={value?.skus?.[value?.defaultSkuId]?.media?.altText}
                  className="item-thumb img-responsive"
                  src={`${process.env.NEXT_PUBLIC_IMAGEPATH}catalog${value?.skus?.[value?.defaultSkuId]?.media?.smallImg}`}
                  height={262}
                  width={262}
                />
              </div>
            </Link>
            <div className="product-card-inner">
              <p className="product-card-desc">
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
                      <DisplayImage
                        alt={((value?.additionalDetails?.isNewProduct && value?.additionalDetails?.isNeverFrozen) || (value?.additionalDetails?.isNeverFrozen)) ? 'fresh' : 'new'}
                        className="image-badge ccLazyLoaded"
                        src={((value?.additionalDetails?.isNewProduct && value?.additionalDetails?.isNeverFrozen) || (value?.additionalDetails?.isNeverFrozen)) ? '/static/assets/fresh.png' : '/static/assets/new.png'}
                        height={50}
                        width={23}
                      />
                    </div>
                  ) : null}
              </p>
              {/* <div
                  for="reviewsection"
                  className="yotpo bottomLine yotpo-small"
                  data-yotpo-product-id="10916"
                  data-url="https://www.allenbrothers.com/products/month-plan-duo/10916"
                  data-yotpo-element-id="1"
                >
                  <div className="yotpo-display-wrapper">
                    <div
                      className="standalone-bottomline"
                      data-source="default"
                      tabindex="-1"
                    >
                      <div
                        className="yotpo-bottomline pull-left  star-clickable"
                        tabindex="0"
                      >
                        <span className="yotpo-stars">
                          <span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span>
                          <span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span>
                          <span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span>
                          <span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span>
                          <span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span>
                          <span className="sr-only">5.0 star rating</span>{" "}
                        </span>
                        <a
                          href="javascript:void(0)"
                          className="text-m"
                          aria-label="1 reviews"
                          tabindex="-1"
                        >
                          1 Review
                        </a>
                        <div className="yotpo-clr"></div>
                      </div>
                      <div className="yotpo-clr"></div>
                    </div>
                    <div className="yotpo-clr"></div>
                  </div>
                </div> */}
              <p className="product-card-price">
                {value?.productPrice?.minListPrice === 0 ? null
                  : (
                    <>
                      <span>Starting At: </span>
                      <b>
                        $
                        {value?.productPrice?.minListPrice}
                      </b>
                    </>
                  )}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ResultList;
