import React from 'react'

export default function saleprimecategory() {
  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="product-card" data-mh="product-card">

        <div className="product-badge sale">
          <div id="cc_img__resize_wrapper-sale-badge" className="">


            <img alt="sale"
              data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg"
              className="ccLazyLoaded" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded"
              data-lazy-loading-parent-className="ccLazyLoad-background"
              data-src="/file/general/sale-badge.png" data-lazy-loading="false"
              src="https://www.allenbrothers.com/file/general/sale-badge.png" data-srcset="/ccstore/v1/images/?source=/file/general/sale-badge.png&amp;height=50&amp;width=50 50w"
              data-sizes="(max-width:480px) 50px,(min-width:481px) and (max-width:768px) 50px,(min-width:769px) and (max-width:979px) 50px,(min-width:980px) 50px"
              srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/sale-badge.png&amp;height=50&amp;width=50 50w"
              sizes="(max-width:480px) 50px,(min-width:481px) and (max-width:768px) 50px,(min-width:769px) and (max-width:979px) 50px,(min-width:980px) 50px"/>

          </div>
        </div>

        <a className="product-image" data-bind="attr: {'href': $data.records[0].attributes['product.route']},
                pdpLink: {product: $data.records[0].attributes, parentCategoryId: $parents[1].categoryId()}, click: $parents[1].routeToPDP.bind($parents[1],
		 $data)" href="/products/heritage-black-turkey/10778">
          <div className="image-pos">
            <img
              className="item-thumb img-responsive ccLazyLoaded"
              alt="product" id="CC-product-list-image-10778-01"
              data-error-src="/file/v1375487262462743897/general/missing-image.jpg"
              data-default-error-src="/img/no-image.jpg" data-error-alt="Missing Product Image"
              data-src="/ccstore/v1/images/?source=/file/v260398831892097471/products/ab_c2_2018_024_0412_blackturkey_680.jpg&amp;height=300&amp;width=300"
              data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded"
              data-lazy-loading-parent-className="ccLazyLoad-background"
              data-lazy-loading="false"
              src="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v260398831892097471/products/ab_c2_2018_024_0412_blackturkey_680.jpg&amp;height=300&amp;width=300" />
          </div>
        </a>
        <div className="product-card-inner">
          <p className="product-card-desc">
            <a data-bind="html: $data.records[0].attributes['product.displayName'],
                                                      attr: {'href': $data.records[0].attributes['product.route']},
                                              	  	  pdpLink: {product: $data.records[0].attributes, parentCategoryId: $parents[1].categoryId()}" href="/products/heritage-black-turkey/10778">Heritage Black Turkey</a>

          </p>

          <div for="reviewsection" className="yotpo bottomLine yotpo-small" data-bind=" attr:{
												 'data-yotpo-product-id':$data.records[0].attributes['product.repositoryId'][0],
												 'data-url': window.location.origin + $data.records[0].attributes['product.route'][0]
			  }" 
        data-yotpo-product-id="10778"
         data-url="https://www.allenbrothers.com/products/heritage-black-turkey/10778" data-yotpo-element-id="2">
            <div className="yotpo-display-wrapper">
	  <div className="standalone-bottomline" data-source="default" tabindex="-1"> 
	  <div className="yotpo-bottomline pull-left  star-clickable" tabindex="0">  <span className="yotpo-stars"> <span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span className="yotpo-icon yotpo-icon-star rating-star pull-left">
	  </span><span className="yotpo-icon yotpo-icon-star rating-star pull-left">
	  </span>
	  <span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span className="yotpo-icon yotpo-icon-star rating-star pull-left"></span><span className="sr-only">4.9 star rating</span>
	   </span>  <a href="javascript:void(0)" className="text-m" aria-label="35 reviews" tabindex="-1">35 Reviews</a>   <div className="yotpo-clr"></div> </div> <div className="yotpo-clr"></div> </div>  
	    <div className="yotpo-clr"></div>
	     </div></div>  
              

          <p className="product-card-price">

            <span data-bind="widgetLocaleText: 'startingPrice'">Starting At:</span>
            <b data-bind="currency: {
															price: $data.startingPrice(),
															currencyObj: $parents[1].site().currency,
															nullReplace: '0.00',
                              prependNull: true}">$127.95</b>
										</p>
									
									</div>
								</div>
							</div>
 
  )
}
