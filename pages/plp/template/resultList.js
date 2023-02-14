import React from "react";
import { usePageDataContext } from "../../../shared/context/pageData-context";
import Link from "next/link";

export function ResultList() {
  const { pageData } = usePageDataContext();

  return (
    <>
      {pageData?.payLoad?.products?.map((value, index) => {
        return (
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="product-card" data-mh="product-card">
              <a
                className="product-image"
                href="/products/month-plan-duo/10916"
              >
                <div className="image-pos">
                  <img
                    className="item-thumb img-responsive"
                    alt={value?.skus?.[value?.defaultSkuId]?.media?.altText}
                    id="CC-product-list-image-10916-00"
                    onerror="https://www.allenbrothers.com/img/no-image.jpg"
                    //onerror="this.onerror=null;this.src='https://www.allenbrothers.com/img/no-image.jpg';"
                    //src={value?.skus?.[value?.defaultSkuId]?.media?.smallImg}
                    src="https://www.allenbrothers.com/img/no-image.jpg"
                  />
                </div>
              </a>
              <div className="product-card-inner">
                <p className="product-card-desc">
                  <a href="/products/month-plan-duo/10916">
                    {value.displayName}
                  </a>
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
                  <b>{value?.productPrice?.minListPrice}</b>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
