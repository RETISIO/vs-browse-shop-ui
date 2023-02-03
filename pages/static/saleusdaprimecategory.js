import React from 'react'

export default function Saleusdaprimecategory() {
  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="product-card" data-mh="product-card">
        <div className="product-badge sale">
          <div id="cc_img__resize_wrapper-sale-badge" className="">
            <img alt="sale"
              data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg"
              className="ccLazyLoaded" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded"
              data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/sale-badge.png"
              data-lazy-loading="false"
              src="https://www.allenbrothers.com/file/general/sale-badge.png" data-srcset="/ccstore/v1/images/?source=/file/general/sale-badge.png&amp;height=50&amp;width=50 50w"
              data-sizes="(max-width:480px) 50px,(min-width:481px) and (max-width:768px) 50px,(min-width:769px) and (max-width:979px) 50px,(min-width:980px) 50px"
              srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/sale-badge.png&amp;height=50&amp;width=50 50w"
              sizes="(max-width:480px) 50px,(min-width:481px) and (max-width:768px) 50px,(min-width:769px) and (max-width:979px) 50px,(min-width:980px) 50px" />
          </div>
        </div>

        <div className="product-badge usda">
          <div id="cc_img__resize_wrapper-usda-badge" className="">
            <img alt="usda"
              data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg"
              className="ccLazyLoaded" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded"
              data-lazy-loading-parent-className="ccLazyLoad-background"
              data-src="/file/general/usda-badge.png" data-lazy-loading="false"
              src="https://www.allenbrothers.com/file/general/usda-badge.png" data-srcset="/ccstore/v1/images/?source=/file/general/usda-badge.png&amp;height=45&amp;width=55 55w"
              data-sizes="(max-width:480px) 55px,(min-width:481px) and (max-width:768px) 55px,(min-width:769px) and (max-width:979px) 55px,(min-width:980px) 55px"
              srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/usda-badge.png&amp;height=45&amp;width=55 55w"
              sizes="(max-width:480px) 55px,(min-width:481px) and (max-width:768px) 55px,(min-width:769px) and (max-width:979px) 55px,(min-width:980px) 55px" />
          </div>
        </div>

        <a className="product-image" data-bind="attr: {'href': $data.records[0].attributes['product.route']},
                                    pdpLink: {product: $data.records[0].attributes, parentCategoryId: $parents[1].categoryId()}, click: $parents[1].routeToPDP.bind($parents[1], $data)" href="/products/usda-prime-filet-mignon-complete-trim/10001">
          <div className="image-pos">
            <img
              className="item-thumb img-responsive ccLazyLoaded"
              alt="product" id="CC-product-list-image-10001-00"
              data-error-src="/file/v1375487262462743897/general/missing-image.jpg"
              data-default-error-src="/img/no-image.jpg" data-error-alt="Missing Product Image"
              data-src="/ccstore/v1/images/?source=/file/v6077391241202084224/products/AB-FC-S19-lg.jpg&amp;height=300&amp;width=300"
              data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded"
              data-lazy-loading-parent-className="ccLazyLoad-background"
              data-lazy-loading="false"
              src="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v6077391241202084224/products/AB-FC-S19-lg.jpg&amp;height=300&amp;width=300" />
          </div>
        </a>
        <div className="product-card-inner">
          <p className="product-card-desc">
            <a data-bind="html: $data.records[0].attributes['product.displayName'],
                                        attr: {'href': $data.records[0].attributes['product.route']},
                                        pdpLink: {product: $data.records[0].attributes, parentCategoryId: $parents[1].categoryId()}" href="/products/usda-prime-filet-mignon-complete-trim/10001">USDA Prime Filet Mignon: Complete-Trim</a>

          </p>

          <div for="reviewsection" className="yotpo bottomLine yotpo-small" data-bind=" attr:{
           'data-yotpo-product-id':$data.records[0].attributes['product.repositoryId'][0],
           'data-url': window.location.origin + $data.records[0].attributes['product.route'][0]
           }" data-yotpo-product-id="10001" data-url="https://www.allenbrothers.com/products/usda-prime-filet-mignon-complete-trim/10001" data-yotpo-element-id="1"> <div className="yotpo-display-wrapper" >  <div className="standalone-bottomline" data-source="default" tabindex="-1"> <div className="yotpo-bottomline pull-left  star-clickable" tabindex="0">  <span className="yotpo-stars"> <span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span className="sr-only">4.9 star rating</span> </span>  <a href="javascript:void(0)" className="text-m" aria-label="130 reviews" tabindex="-1">130 Reviews</a>   <div className="yotpo-clr"></div> </div> <div className="yotpo-clr"></div> </div>   <div className="yotpo-clr"></div> </div></div>
          <p className="product-card-price">

            <span data-bind="widgetLocaleText: 'startingPrice'">Starting At:</span>
            <strong data-bind="currency: {
                price: $data.startingPrice(),
                currencyObj: $parents[1].site().currency,
                nullReplace: '0.00',
                prependNull: true}">$89.95</strong>

          </p>
        </div>
      </div>
    </div>
  )
}
