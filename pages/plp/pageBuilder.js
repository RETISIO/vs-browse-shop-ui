import React from 'react';
import { Template } from '../../shared/template/template';
import { usePageDataContext } from '../../shared/context/pageData-context';
import { SortVO } from '../../shared/template/sortVO';

export default function PageBuilder(props) {
  const { pageData } = usePageDataContext();
  const pageContent = pageData?.payLoad?.page;
  return (
    <div id="main" className="static-main-container holidayContainer">
      <div className="row">
        <div className="redBox">
          <div className="col-sm-12" id="region-megaMenuRegionCatPage">
            <div id="allnProductLisitingPage_v10-wi1400005">
              <div className="page-overlay js-overlay"></div>
              <div className="page-main-inner">
                <div className="container">
                  {pageContent?.segmentsMap?.top ? (
                    <Template templateData={pageContent?.segmentsMap?.top} />
                  ) : (
                    ''
                  )}
                  <div className="product-listing-container">
                    <div className="row">
                      <aside className="col-md-3 col-sm-4 hidden-xs">
                        <div className="catalog-aside">
                          <div className="catalog-filter__top">
                            {/* <div className="panel panel-default">
                                <div className="panel-heading">
                                  <div className="panel-title">
                                    <a>Categories</a>
                                  </div>
                                </div>
                                <div className="panel-collapse">
                                  <div className="panel-body">
                                    <ul className="catalog-filter__category-list list-unstyled">
                                      <li>
                                        <a href="/holiday/mothers-day">
                                          Mother's Day
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/holiday/fathers-day">
                                          Father's Day
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/holiday/easter-dining">
                                          Easter Dining
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/holiday/valentines-day-dining">
                                          Valentine's Day Dining
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/holiday/thanksgiving">
                                          Thanksgiving
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/holiday/christmas">
                                          Christmas
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div> */}
                            <div className="catalog-filter__clear">
                              <strong>Filters: </strong>
                            </div>
                            <ul className="catalog-filter__selected list-unstyled"></ul>
                          </div>
                          <div className="catalog-filter__block">
                            {pageContent?.segmentsMap?.left ? (
                              <Template
                                templateData={pageContent?.segmentsMap?.left}
                              />
                            ) : (
                              ''
                            )}
                          </div>
                        </div>
                      </aside>
                      <div className="col-md-9 col-sm-8">
                        <div className="page-title-container d-flex justify-space-between align-items-top">
                          <h1>
                            <span className="result-title-count">
                              Holiday Food Gifts
                            </span>

                            <small className="results-count countOne">
                              (
                              {pageData?.payLoad?.productCount}
                            </small>
                            <small className="results-count">Results)</small>
                          </h1>
                          <button
                            className="btn btn-block btn-primary btn-filter js-mobile-menu-toggle visible-xs"
                            data-target="#mobileFilter"
                          >
                            Filter
                          </button>
                            <SortVO />
                          {/* <form className="form-inline sort-by">
                            <div className="form-group">
                              <label htmlFor="cc-sort">Sort By:</label>
                              <select id="cc-sort" className="form-control">
                                {}
                                <option value="">Recommended</option>
                                <option value="">Price: Low to High</option>
                                <option value="">Price: High to low</option>
                                <option value="">Name</option>
                              </select>
                              <span
                                className="text-danger"
                                role="alert"
                              >
                              </span>
                            </div>
                          </form> */}
                        </div>
                        <p className="page-description">
                          Are you looking for the best gift idea that will
                          stand out this holiday season? Get your friends and
                          loved ones a gourmet food gift from Allen Brothers.
                          Our selection of high-quality meats makes the
                          perfect gift for the foodie in your life!
                        </p>
                        <div id="product-grid">
                          <div className="row row-gutter-sm-15">
                            {pageContent?.segmentsMap?.middle ? (
                              <Template templateData={pageContent?.segmentsMap?.middle} />
                            ) : (
                              ''
                            )}
                            {/* <div className="col-md-4 col-sm-6 col-xs-12">
                                <div
                                  className="product-card"
                                  data-mh="product-card"
                                >
                                  <a
                                    className="product-image"
                                    href="/products/month-plan-duo/10916"
                                  >
                                    <div className="image-pos">
                                      <img
                                        className="item-thumb img-responsive"
                                        alt="product"
                                        id="CC-product-list-image-10916-00"
                                        src="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v7738534021773200712/products/AB-Subscription-Plans_MP-DUO_2022.jpg&amp;height=300&amp;width=300"
                                      />
                                    </div>
                                  </a>
                                  <div className="product-card-inner">
                                    <p className="product-card-desc">
                                      <a href="/products/month-plan-duo/10916">
                                        DUO: Steaks and more in 12 or 6 month
                                        Subscriptions
                                      </a>
                                    </p>
                                    <div
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
                                              <span className="sr-only">
                                                5.0 star rating
                                              </span>{" "}
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
                                    </div>
                                    <p className="product-card-price">
                                      <span>Starting At:</span>
                                      <b>$550.00</b>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-6 col-xs-12">
                                <div
                                  className="product-card"
                                  data-mh="product-card"
                                >
                                  <a
                                    className="product-image"
                                    href="/products/twelve-month-plan/10301"
                                  >
                                    <div className="image-pos">
                                      <img
                                        className="item-thumb img-responsive"
                                        alt="product"
                                        id="CC-product-list-image-10301-01"
                                        src="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v5881601607011388203/products/AB-Subscription-Plans_12-Month-Plan_2022.jpg&amp;height=300&amp;width=300"
                                      />
                                    </div>
                                  </a>
                                  <div className="product-card-inner">
                                    <p className="product-card-desc">
                                      <a href="/products/twelve-month-plan/10301">
                                        Twelve-Month Steaks and more Gift Plan
                                      </a>
                                    </p>
                                    <div
                                      for="reviewsection"
                                      className="yotpo bottomLine yotpo-small"
                                      data-yotpo-product-id="10301"
                                      data-url="https://www.allenbrothers.com/products/twelve-month-plan/10301"
                                      data-yotpo-element-id="2"
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
                                              <span className="sr-only">
                                                5.0 star rating
                                              </span>
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
                                    </div>
                                    <p className="product-card-price">
                                      <span>Starting At:</span>
                                      <b>$2,000.00</b>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-6 col-xs-12">
                                <div
                                  className="product-card"
                                  data-mh="product-card"
                                >
                                  <a
                                    className="product-image"
                                    href="/products/six-month-plan/10299"
                                  >
                                    <div className="image-pos">
                                      <img
                                        className="item-thumb img-responsive"
                                        alt="product"
                                        id="CC-product-list-image-10299-02"
                                        src="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v7613713134715620605/products/AB-Subscription-Plans_6-Month-Plan_2022.jpg&amp;height=300&amp;width=300"
                                      />
                                    </div>
                                  </a>
                                  <div className="product-card-inner">
                                    <p className="product-card-desc">
                                      <a href="/products/six-month-plan/10299">
                                        Six Month Steaks and more Gift Plan
                                      </a>
                                    </p>
                                    <div
                                      for="reviewsection"
                                      className="yotpo bottomLine yotpo-small"
                                      data-yotpo-product-id="10299"
                                      data-url="https://www.allenbrothers.com/products/six-month-plan/10299"
                                      data-yotpo-element-id="3"
                                    >
                                      <div className="yotpo-display-wrapper">
                                        <div className="yotpo-clr"></div>
                                      </div>
                                    </div>
                                    <p className="product-card-price">
                                      <span>Starting At:</span>
                                      <b>$1,000.00</b>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-6 col-xs-12">
                                <div
                                  className="product-card"
                                  data-mh="product-card"
                                >
                                  <a
                                    className="product-image"
                                    href="/products/month-plan-share/10917"
                                  >
                                    <div className="image-pos">
                                      <img
                                        className="item-thumb img-responsive ccLazyLoaded"
                                        alt="product"
                                        id="CC-product-list-image-10917-10"
                                        data-error-src="/file/v1375487262462743897/general/missing-image.jpg"
                                        data-default-error-src="/img/no-image.jpg"
                                        data-error-alt="Missing Product Image"
                                        data-src="/ccstore/v1/images/?source=/file/v8267480695715939033/products/AB-Subscription-Plans_MP-SHARE_2022.jpg&amp;height=300&amp;width=300"
                                        data-lazy-loading-image-className="ccLazyLoad"
                                        data-lazy-loaded-image-className="ccLazyLoaded"
                                        data-lazy-loading-parent-className="ccLazyLoad-background"
                                        data-lazy-loading="false"
                                        src="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v8267480695715939033/products/AB-Subscription-Plans_MP-SHARE_2022.jpg&amp;height=300&amp;width=300"
                                      />
                                    </div>
                                  </a>
                                  <div className="product-card-inner">
                                    <p className="product-card-desc">
                                      <a href="/products/month-plan-share/10917">
                                        SHARE: Steaks and more in 12 or 6 month
                                        Subscriptions
                                      </a>
                                    </p>
                                    <div
                                      for="reviewsection"
                                      className="yotpo bottomLine yotpo-small"
                                      data-yotpo-product-id="10917"
                                      data-url="https://www.allenbrothers.com/products/month-plan-share/10917"
                                      data-yotpo-element-id="4"
                                    >
                                      <div className="yotpo-display-wrapper">
                                        <div className="yotpo-clr"></div>
                                      </div>
                                    </div>
                                    <p className="product-card-price">
                                      <span>Starting At:</span>
                                      <b>$800.00</b>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 col-sm-6 col-xs-12">
                                <div
                                  className="product-card"
                                  data-mh="product-card"
                                >
                                  <a
                                    className="product-image"
                                    href="/products/month-plan-family/10918"
                                  >
                                    <div className="image-pos">
                                      <img
                                        className="item-thumb img-responsive ccLazyLoaded"
                                        alt="product"
                                        id="CC-product-list-image-10918-11"
                                        data-error-src="/file/v1375487262462743897/general/missing-image.jpg"
                                        data-default-error-src="/img/no-image.jpg"
                                        data-error-alt="Missing Product Image"
                                        data-src="/ccstore/v1/images/?source=/file/v9095223137373528622/products/AB-Subscription-Plans_MP-FAMILY_2022.jpg&amp;height=300&amp;width=300"
                                        data-lazy-loading-image-className="ccLazyLoad"
                                        data-lazy-loaded-image-className="ccLazyLoaded"
                                        data-lazy-loading-parent-className="ccLazyLoad-background"
                                        data-lazy-loading="false"
                                        src="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v9095223137373528622/products/AB-Subscription-Plans_MP-FAMILY_2022.jpg&amp;height=300&amp;width=300"
                                      />
                                    </div>
                                  </a>
                                  <div className="product-card-inner">
                                    <p className="product-card-desc">
                                      <a href="/products/month-plan-family/10918">
                                        FAMILY: Steaks and more in 12 or 6 month
                                        Subscriptions
                                      </a>
                                    </p>
                                    <div
                                      for="reviewsection"
                                      className="yotpo bottomLine yotpo-small"
                                      data-yotpo-product-id="10918"
                                      data-url="https://www.allenbrothers.com/products/month-plan-family/10918"
                                      data-yotpo-element-id="5"
                                    >
                                      <div className="yotpo-display-wrapper">
                                        <div className="yotpo-clr"></div>
                                      </div>
                                    </div>
                                    <p className="product-card-price">
                                      <span>Starting At:</span>
                                      <b>$1,000.00</b>
                                    </p>
                                  </div>
                                </div>
                              </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
