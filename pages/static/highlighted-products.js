import React from 'react';

export default function HighlightedProducts() {
  return (
    <div className="row">
      <div className="redBox">
        <div className="col-sm-12" id="region-re200119">
          <div
            id="ALLN-Article-Page-Highlighted-Products-2_v4-wi1400006"
            className="ALLN-Article-Page-Highlighted-Products"
          >
            <div className="row-full row_full_adj">
              <section className="related-products-section">
                <div className="container">
                  <h1 className="d-flex flex-wrap align-items-center">
                    <span data-bind="widgetLocaleText: 'sectionTitle'">
                      Highlighted Products
                    </span>
                    &nbsp;
                    <small className="ml-10">
                      <a href="/holiday/christmas">View All</a>
                    </small>
                  </h1>

                  <div className="row">
                    <div data-bind="foreach: products">
                      <div className="col-sm-3">
                        <div
                          className="product-card"
                          data-mh="highlighted-product"
                        >
                          <div className="product-badge usda">
                            <div
                              id="cc_img__resize_wrapper-usda-badge"
                              className="productCard-img-cont"
                            >
                              <img
                                alt="usda"
                                className="ccLazyLoaded"
                                src="https://www.allenbrothers.com/file/general/usda-badge.png"
                              />
                            </div>
                          </div>
                          <a
                            className="product-image"
                            href="/products/usda-prime-tenderloin-roast/10243"
                            data-bind="ccLink: $data.link, attr: {'href': $data.link}"
                          >
                            <img
                              alt="product Image"
                              className="item-thumb img-responsive ccLazyLoaded"
                              src="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v7313291223328755377/products/10243.jpg&amp;height=300&amp;width=300"
                              data-error-src="/file/v1375487262462743897/general/missing-image.jpg"
                              data-default-error-src="/img/no-image.jpg"
                              data-error-alt="Missing Product Image"
                              data-src="/ccstore/v1/images/?source=/file/v7313291223328755377/products/10243.jpg&amp;height=300&amp;width=300"
                              data-lazy-loading-image-className="ccLazyLoad"
                              data-lazy-loaded-image-className="ccLazyLoaded"
                              data-lazy-loading-parent-className="ccLazyLoad-background"
                              data-lazy-loading="false"
                            />
                          </a>

                          <div className="product-card-inner">
                            <p className="product-card-desc">
                              <a
                                href="/products/usda-prime-tenderloin-roast/10243"
                                data-bind="ccLink: $data.link, attr: {'href': $data.link}, text: $data.displayName"
                              >
                                USDA Prime Tenderloin Roast
                              </a>
                            </p>

                            <p className="product-card-price">
                              <span data-bind="widgetLocaleText: 'startingAt'">
                                Starting At:
                              </span>
                              <strong>$269.95</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div></div>

                      <div className="col-sm-3">
                        <div
                          className="product-card"
                          data-mh="highlighted-product"
                        >
                          <a
                            className="product-image"
                            href="/products/beef-wellington-tenderloin-roast/10246"
                            data-bind="ccLink: $data.link, attr: {'href': $data.link}"
                          >
                            <img
                              alt="product Image"
                              className="item-thumb img-responsive ccLazyLoaded"
                              src="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v583297483771295976/products/10246-1.jpg&amp;height=300&amp;width=300"
                              data-error-src="/file/v1375487262462743897/general/missing-image.jpg"
                              data-default-error-src="/img/no-image.jpg"
                              data-error-alt="Missing Product Image"
                              data-src="/ccstore/v1/images/?source=/file/v583297483771295976/products/10246-1.jpg&amp;height=300&amp;width=300"
                              data-lazy-loading-image-className="ccLazyLoad"
                              data-lazy-loaded-image-className="ccLazyLoaded"
                              data-lazy-loading-parent-className="ccLazyLoad-background"
                              data-lazy-loading="false"
                            />
                          </a>

                          <div className="product-card-inner">
                            <p className="product-card-desc">
                              <a
                                href="/products/beef-wellington-tenderloin-roast/10246"
                                data-bind="ccLink: $data.link, attr: {'href': $data.link}, text: $data.displayName"
                              >
                                Beef Wellington Tenderloin Roast
                              </a>
                            </p>

                            <p className="product-card-price">
                              <span data-bind="widgetLocaleText: 'startingAt'">
                                Starting At:
                              </span>
                              <strong
                                data-bind="currency: {
                                                          price: $data.price,
                                                          currencyObj: $parent.site().currency,
                                                          nullReplace: '\u2014',
                                                          prependNull: false}"
                              >
                                $259.95
                              </strong>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div></div>

                      <div className="col-sm-3">
                        <div
                          className="product-card"
                          data-mh="highlighted-product"
                        >
                          <div className="product-badge usda">
                            <div
                              id="cc_img__resize_wrapper-usda-badge"
                              className="productCard-img-cont"
                            >
                              <img
                                alt="usda"
                                data-error-src="/file/v1375487262462743897/general/missing-image.jpg"
                                data-default-error-src="/img/no-image.jpg"
                                className="ccLazyLoaded"
                                data-lazy-loading-image-className="ccLazyLoad"
                                data-lazy-loaded-image-className="ccLazyLoaded"
                                data-lazy-loading-parent-className="ccLazyLoad-background"
                                data-src="/file/general/usda-badge.png"
                                data-lazy-loading="false"
                                src="/file/general/usda-badge.png"
                                data-srcset="/ccstore/v1/images/?source=/file/general/usda-badge.png&amp;height=45&amp;width=55 55w"
                                data-sizes="(max-width:480px) 55px,(min-width:481px) and (max-width:768px) 55px,(min-width:769px) and (max-width:979px) 55px,(min-width:980px) 55px"
                                srcSet="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/usda-badge.png&amp;height=45&amp;width=55 55w"
                                sizes="(max-width:480px) 55px,(min-width:481px) and (max-width:768px) 55px,(min-width:769px) and (max-width:979px) 55px,(min-width:980px) 55px"
                              />
                            </div>
                          </div>

                          <a
                            className="product-image"
                            href="/products/usda-prime-bone-in-rib-roast/10224"
                            data-bind="ccLink: $data.link, attr: {'href': $data.link}"
                          >
                            <img
                              alt="product Image"
                              className="item-thumb img-responsive ccLazyLoaded"
                              src="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v6895093405200497859/products/10224-1.jpg&amp;height=300&amp;width=300"
                              data-error-src="/file/v1375487262462743897/general/missing-image.jpg"
                              data-default-error-src="/img/no-image.jpg"
                              data-error-alt="Missing Product Image"
                              data-src="/ccstore/v1/images/?source=/file/v6895093405200497859/products/10224-1.jpg&amp;height=300&amp;width=300"
                              data-lazy-loading-image-className="ccLazyLoad"
                              data-lazy-loaded-image-className="ccLazyLoaded"
                              data-lazy-loading-parent-className="ccLazyLoad-background"
                              data-lazy-loading="false"
                            />
                          </a>

                          <div className="product-card-inner">
                            <p className="product-card-desc">
                              <a
                                href="/products/usda-prime-bone-in-rib-roast/10224"
                                data-bind="ccLink: $data.link, attr: {'href': $data.link}, text: $data.displayName"
                              >
                                USDA Prime Rib Roast Bone-In
                              </a>
                            </p>

                            <p className="product-card-price">
                              <span data-bind="widgetLocaleText: 'startingAt'">
                                Starting At:
                              </span>
                              <strong
                                data-bind="currency: {
                                                          price: $data.price,
                                                          currencyObj: $parent.site().currency,
                                                          nullReplace: '\u2014',
                                                          prependNull: false}"
                              >
                                $239.95
                              </strong>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div></div>

                      <div className="col-sm-3">
                        <div
                          className="product-card"
                          data-mh="highlighted-product"
                        >
                          <div className="product-badge sale">
                            <div
                              id="cc_img__resize_wrapper-sale-badge"
                              className="productCard-img-cont"
                            >
                              <img
                                alt="sale"
                                src="/file/general/sale-badge.png"
                                srcSet="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/sale-badge.png&amp;height=50&amp;width=50 50w"
                                sizes="(max-width:480px) 50px,(min-width:481px) and (max-width:768px) 50px,(min-width:769px) and (max-width:979px) 50px,(min-width:980px) 50px"
                                data-error-src="/file/v1375487262462743897/general/missing-image.jpg"
                                data-default-error-src="/img/no-image.jpg"
                                className="ccLazyLoaded"
                                data-lazy-loading-image-className="ccLazyLoad"
                                data-lazy-loaded-image-className="ccLazyLoaded"
                                data-lazy-loading-parent-className="ccLazyLoad-background"
                                data-src="/file/general/sale-badge.png"
                                data-lazy-loading="false"
                                data-srcset="/ccstore/v1/images/?source=/file/general/sale-badge.png&amp;height=50&amp;width=50 50w"
                                data-sizes="(max-width:480px) 50px,(min-width:481px) and (max-width:768px) 50px,(min-width:769px) and (max-width:979px) 50px,(min-width:980px) 50px"
                              />
                            </div>
                          </div>
                          <div className="product-badge usda">
                            <div
                              id="cc_img__resize_wrapper-usda-badge"
                              className="productCard-img-cont"
                            >
                              <img
                                alt="usda"
                                data-error-src="/file/v1375487262462743897/general/missing-image.jpg"
                                data-default-error-src="/img/no-image.jpg"
                                className="ccLazyLoaded"
                                data-lazy-loading-image-className="ccLazyLoad"
                                data-lazy-loaded-image-className="ccLazyLoaded"
                                data-lazy-loading-parent-className="ccLazyLoad-background"
                                data-src="/file/general/usda-badge.png"
                                data-lazy-loading="false"
                                src="/file/general/usda-badge.png"
                                data-srcset="/ccstore/v1/images/?source=/file/general/usda-badge.png&amp;height=45&amp;width=55 55w"
                                data-sizes="(max-width:480px) 55px,(min-width:481px) and (max-width:768px) 55px,(min-width:769px) and (max-width:979px) 55px,(min-width:980px) 55px"
                                srcSet="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/usda-badge.png&amp;height=45&amp;width=55 55w"
                                sizes="(max-width:480px) 55px,(min-width:481px) and (max-width:768px) 55px,(min-width:769px) and (max-width:979px) 55px,(min-width:980px) 55px"
                              />
                            </div>
                          </div>

                          <a
                            className="product-image"
                            href="/products/usda-prime-filet-mignon-complete-trim/10001"
                            data-bind="ccLink: $data.link, attr: {'href': $data.link}"
                          >
                            <img
                              alt="product Image"
                              className="item-thumb img-responsive ccLazyLoaded"
                              src="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v6077391241202084224/products/AB-FC-S19-lg.jpg&amp;height=300&amp;width=300"
                              data-error-src="/file/v1375487262462743897/general/missing-image.jpg"
                              data-default-error-src="/img/no-image.jpg"
                              data-error-alt="Missing Product Image"
                              data-src="/ccstore/v1/images/?source=/file/v6077391241202084224/products/AB-FC-S19-lg.jpg&amp;height=300&amp;width=300"
                              data-lazy-loading-image-className="ccLazyLoad"
                              data-lazy-loaded-image-className="ccLazyLoaded"
                              data-lazy-loading-parent-className="ccLazyLoad-background"
                              data-lazy-loading="false"
                            />
                          </a>

                          <div className="product-card-inner">
                            <p className="product-card-desc">
                              <a
                                href="/products/usda-prime-filet-mignon-complete-trim/10001"
                                data-bind="ccLink: $data.link, attr: {'href': $data.link}, text: $data.displayName"
                              >
                                USDA Prime Filet Mignon: Complete-Trim
                              </a>
                            </p>

                            <p className="product-card-price">
                              <span data-bind="widgetLocaleText: 'startingAt'">
                                Starting At:
                              </span>
                              <strong
                                data-bind="currency: {
                                                          price: $data.price,
                                                          currencyObj: $parent.site().currency,
                                                          nullReplace: '\u2014',
                                                          prependNull: false}"
                              >
                                $89.95
                              </strong>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
