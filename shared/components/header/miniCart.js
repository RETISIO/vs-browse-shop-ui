import React from 'react'

export default function MiniCart() {
    return (
        <div className="mini-cart">
            <div className="dropdown-block__body">
                {/* <span className="dropdown-block__subtitle d-block">You currently have no items in your shopping cart.</span> */}
                <a className="btn-action btn-action-primary btn-action-md btn-block mini-cart-btn mini-cart-btn-header" href="/cart">View Cart</a>
                <h3 className="dropdown-block__subtitle">Recently added items</h3>
                <ul className="list-unstyled">
                    <li className="fast-order__item" role="option" id="item-0">
                        <div className="fast-order__item-inner">
                            <div className="fast-order__item-image">
                                <a href="/products/usda-prime-filet-mignon-complete-trim/10001" className="">
                                    <img className="mini-cart-img ccLazyLoaded" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-error-alt="Missing Product Image" data-src="/ccstore/v1/images/?source=/file/v6077391241202084224/products/AB-FC-S19-lg.jpg&amp;height=100&amp;width=100" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-lazy-loading="false" src="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v6077391241202084224/products/AB-FC-S19-lg.jpg&amp;height=100&amp;width=100" alt="USDA Prime Filet Mignon: Complete-Trim" title="USDA Prime Filet Mignon: Complete-Trim" />
                                </a>
                            </div>
                            <a href="/products/usda-prime-filet-mignon-complete-trim/10001">
                                <div className="fast-order__item-title">USDA Prime Complete Trim Filet Mignon | 8 filets | 10 oz ea | 2" thick</div>
                            </a>
                            <div className="fast-order__item-quantity">
                                Qty:
                                <span>1</span>
                            </div>
                            <div className="fast-order__item-price">
                                Total Price:
                                <span>$484.95</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="dropdown-block__footer">
                <div className="fast-order__full-price text-center">
                    <b>
                        Subtotal:
                        <span>$484.95</span>
                    </b>
                </div>
                <a className="btn-action btn-action-primary btn-action-md btn-block mini-cart-btn" href="/cart">View Cart</a>
            </div>
        </div>
    )
}
