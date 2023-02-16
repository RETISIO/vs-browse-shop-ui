/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePageDataContext } from '../context/pageData-context';
import NewBadge from '../../public/static/assets/New.jpg';

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
                  {/* <Image
                    alt="sale"
                    src="https://www.allenbrothers.com/file/general/sale-badge.png"
                    width={50}
                    height={50}
                    loading="lazy"
                  /> */}
                  <img
                    alt="sale"
                    className="ccLazyLoaded"
                    src="https://www.allenbrothers.com/file/general/sale-badge.png"
                    data-srcset="/ccstore/v1/images/?source=/file/general/sale-badge.png&amp;height=50&amp;width=50 50w"
                    srcSet="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/sale-badge.png&amp;height=50&amp;width=50 50w"
                    sizes="(max-width:480px) 50px,(min-width:481px) and (max-width:768px) 50px,(min-width:769px) and (max-width:979px) 50px,(min-width:980px) 50px"
                  />
                </div>
              </div>
            ) : null}
            {value?.additionalDetails?.isPrimeProduct ? (
              <div className="product-badge usda">
                <div id="cc_img__resize_wrapper-usda-badge" className="">
                  <img
                    alt="usda"
                    className="ccLazyLoaded"
                    src="https://www.allenbrothers.com/file/general/usda-badge.png" 
                    data-srcset="/ccstore/v1/images/?source=/file/general/usda-badge.png&amp;height=45&amp;width=55 55w"
                    data-sizes="(max-width:480px) 55px,(min-width:481px) and (max-width:768px) 55px,(min-width:769px) and (max-width:979px) 55px,(min-width:980px) 55px"
                    srcSet="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/usda-badge.png&amp;height=45&amp;width=55 55w"
                    sizes="(max-width:480px) 55px,(min-width:481px) and (max-width:768px) 55px,(min-width:769px) and (max-width:979px) 55px,(min-width:980px) 55px" />
                </div>
              </div>
            ) : null}
            <a
              className="product-image"
              href="/products/month-plan-duo/10916"
            >
              <div className="image-pos">
                <Image
                  className="item-thumb img-responsive"
                  alt={value?.skus?.[value?.defaultSkuId]?.media?.altText}
                  src={`${process.env.NEXT_PUBLIC_IMAGEPATH}catalog${value?.skus?.[value?.defaultSkuId]?.media?.smallImg}`}
                  width={262}
                  height={262}
                  loading="lazy"
                />
              </div>
            </a>
            <div className="product-card-inner">
              <p className="product-card-desc">
                <a href="/products/month-plan-duo/10916">
                  {value.displayName}
                </a>
                {value?.additionalDetails?.isNewProduct ? (
                  <div
                    id="cc_img__resize_wrapper-new-badge"
                    className=""
                    style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}
                  >
                    <Image
                      className="image-badge ccLazyLoaded"
                      alt="New"
                      src={NewBadge}
                      width={50}
                      height={23}
                      loading="lazy"
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
                <span>Starting At: </span>
                <b>
                  $
                  {value?.productPrice?.minListPrice}
                </b>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ResultList;
