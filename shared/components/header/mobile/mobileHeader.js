import React from 'react';

export default function mobileHeaderLogo() {
  return (
    <div className="header-logo-mobile visible-xs">
      <div className="header-content text-center" style={{ backgroundColor: '#00466a' }}>
        <a id="logo" href="/">
          <img alt="Allen Brothers" src="https://www.allenbrothers.com/file/v4970033961931790421/general/Allen-Brothers-Logo-white-528x72.png" />
        </a>
      </div>
    </div>
  );
}

export function mobileNav() {
    return (
        <nav class="navbar visible-xs">
        <div class="">
          <div class="navbar-header navbar-mobile">
            <div class="d-flex justify-space-between align-items-center">
              <button class="navbar-toggle js-mobile-menu-toggle navdrawer" id="mobile-nav-menu-toggle">
                <span class="sr-only" data-bind="widgetLocaleText: 'toggleNavigation'">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <ul class="header-actions d-flex flex-no-wrap align-items-center">
                <li>
                  <a id="accountlink" data-bind="click: openMobileAccountNav" class="js-mobile-menu-toggle outline-change" href="#" data-target="#myAccountNav">
                    <i class="icon icon-user fas fa-user-circle"></i>
                  </a>
                </li>
                <li class="header-actions-cart visible-xs">
                  <a data-bind="ccLink: 'cart', attr: { 'aria-label': 'Cart ' + cart().numberOfItems() + ' items' }" href="/cart" aria-label="Cart 0 items">
                    <i aria-hidden="true" class="icon icon-cart fas fa-shopping-cart">
                      <span tabindex="0" class="sr-only" id="qty" data-bind="text: 'There are '+ cart().numberOfItems() +' products in your cart'">There are 0 products in your cart</span>
                    </i>
                  </a>
                </li>
                <li class="header-actions-cart dropdown fast-order js-minicart-toggle visible-sm">
                  <a class="dropdown-toggle" id="cartlink" href="#" data-target="dropdown" data-toggle="dropdown" aria-label="Cart" role="button" aria-haspopup="true">
                    <i class="icon icon-cart fas fa-shopping-cart"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-center fast-order__dropdown js-custom-aside js-custom-height" data-aside="right" id="fast-order__dropdown">
                    <div class="dropdown-block">
                      <div class="dropdown-block__header d-flex justify-space-between align-items-center">
                        <span class="dropdown-block__title text-elipsis" data-bind="widgetLocaleText: 'yourCartHeader'">Your Cart</span>
                        <button class="dropdown-block__close">
                          <i class="fa fa-times-circle"></i>
                        </button>
                      </div>
                      <div class="dropdown-block__body">
                        <span class="dropdown-block__subtitle d-block" data-bind="widgetLocaleText: 'EMPTY_CART'">You currently have no items in your shopping cart.</span>
                      </div>
                      <div class="dropdown-block__footer">
                      </div>
                    </div>
                  </div>
                </li>

                <li class="header-actions-search">
                  <button class="btn-search d-flex align-items-center justify-content-center collapsed" data-toggle="collapse" data-target="#page-header__search-box" aria-expanded="false" aria-controls="page-header__search-box">
                    <i class="icon icon-search fa fa-search"></i>
                    <i class="icon icon-close far fa-times-circle"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
}