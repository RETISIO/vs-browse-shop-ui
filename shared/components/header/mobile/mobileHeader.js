import React from 'react';

export default function MobileHeaderLogo() {
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

export function MobileNavBar() {
    return (
        <nav className="navbar visible-xs">
        <div className="">
          <div className="navbar-header navbar-mobile">
            <div className="d-flex justify-space-between align-items-center">
              <button className="navbar-toggle js-mobile-menu-toggle navdrawer" id="mobile-nav-menu-toggle">
                <span className="sr-only" data-bind="widgetLocaleText: 'toggleNavigation'">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <ul className="header-actions d-flex flex-no-wrap align-items-center">
                <li>
                  <a id="accountlink" data-bind="click: openMobileAccountNav" className="js-mobile-menu-toggle outline-change" href="#" data-target="#myAccountNav">
                    <i className="icon icon-user fas fa-user-circle"></i>
                  </a>
                </li>
                <li className="header-actions-cart visible-xs">
                  <a data-bind="ccLink: 'cart', attr: { 'aria-label': 'Cart ' + cart().numberOfItems() + ' items' }" href="/cart" aria-label="Cart 0 items">
                    <i aria-hidden="true" className="icon icon-cart fas fa-shopping-cart">
                      <span tabIndex="0" className="sr-only" id="qty" data-bind="text: 'There are '+ cart().numberOfItems() +' products in your cart'">There are 0 products in your cart</span>
                    </i>
                  </a>
                </li>
                <li className="header-actions-cart dropdown fast-order js-minicart-toggle visible-sm">
                  <a className="dropdown-toggle" id="cartlink" href="#" data-target="dropdown" data-toggle="dropdown" aria-label="Cart" role="button" aria-haspopup="true">
                    <i className="icon icon-cart fas fa-shopping-cart"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-center fast-order__dropdown js-custom-aside js-custom-height" data-aside="right" id="fast-order__dropdown">
                    <div className="dropdown-block">
                      <div className="dropdown-block__header d-flex justify-space-between align-items-center">
                        <span className="dropdown-block__title text-elipsis" data-bind="widgetLocaleText: 'yourCartHeader'">Your Cart</span>
                        <button className="dropdown-block__close">
                          <i className="fa fa-times-circle"></i>
                        </button>
                      </div>
                      <div className="dropdown-block__body">
                        <span className="dropdown-block__subtitle d-block" data-bind="widgetLocaleText: 'EMPTY_CART'">You currently have no items in your shopping cart.</span>
                      </div>
                      <div className="dropdown-block__footer">
                      </div>
                    </div>
                  </div>
                </li>

                <li className="header-actions-search">
                  <button className="btn-search d-flex align-items-center justify-content-center collapsed" data-toggle="collapse" data-target="#page-header__search-box" aria-expanded="false" aria-controls="page-header__search-box">
                    <i className="icon icon-search fa fa-search"></i>
                    <i className="icon icon-close far fa-times-circle"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
}