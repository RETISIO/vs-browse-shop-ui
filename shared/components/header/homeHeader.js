/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Template } from '@retisio/sf-ui';
import LevelOneItem from './level-1-item';
import MobileHeaderLogo, { MobileNavBar } from './mobile/mobileHeader';
import HeaderAccountActionLinks from './dropdown';
import MobileNavLevelOneItem from './mobile/mobileNav-level-1-item';
import { requestContructor } from '../../helpers/api';

export default function HomeHeader(props) {
  const [sticky, setSticky] = useState(false);
  const [mobileNavMenu, setMobileNavMenu] = useState(false);
  const [rootCatagories, setRootCatagories] = useState([]);
  const getData = async() => {
    const res = await requestContructor('getCategoryList', '', {}, false);
    setRootCatagories(res?.payLoad?.categories);
    return res?.payLoad?.categories;
  };

  useEffect(() => {
    window.addEventListener('scroll', setStick);
    getData();
  }, []);
  const mouseOverOnNav = (event) => toggleHeaderDropdownMenu(event, 'show');
  const mouseOutOnNav = (event) => toggleHeaderDropdownMenu(event, 'hide');

  const toggleHeaderDropdownMenu = (event, displayHeaderMenu) => {
    const navEl = event.target.querySelector('.header-dropdown-menu.dropdown-menu');
    if (displayHeaderMenu === 'show') {
      navEl.classList.add('open');
    } else {
      navEl.classList.remove('open');
    }
  };
  const navElementsCloseBtnHandler = () => {
    const openNav = document.querySelector('.header-dropdown-menu.dropdown-menu.open');
    openNav.classList.remove('open');
  };
  useEffect(() => {
    const navElements = document.querySelectorAll('.nav-item.js-dropdown');
    const navElementsCloseBtns = document.querySelectorAll('.nav-item.js-dropdown .close-button');
    navElementsCloseBtns.forEach((navElementsCloseBtn) => {
      navElementsCloseBtn.addEventListener('click', navElementsCloseBtnHandler);
    });
    navElements.forEach((navElement) => {
      navElement.addEventListener('mouseenter', mouseOverOnNav);
      navElement.addEventListener('mouseleave', mouseOutOnNav);
    });
  }, [rootCatagories]);

  function setStick() {
    if (window.scrollY >= 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }
  const mobileNavMenuHandler = () => {
    setMobileNavMenu(!mobileNavMenu);
  };

  useEffect(() => {
    const mobileNavMenuEl = document.querySelector('#mobile-nav-menu-toggle');
    mobileNavMenuEl.addEventListener('click', mobileNavMenuHandler);
  }, [mobileNavMenu]);

  return (
    <div className="home-header-container">
      {props.headerContent ? <Template templateData={props.headerContent} /> : null}
      <main className="page-row page-row-expanded">
        <div id="main" className="">
          <div className="row">
            <div className="redBox">
              <div className="col-sm-12" id="region-re1700017">
                <div id="ALLN-Header_v4-wi2700015">
                  <div className="page-overlay js-overlay"></div>
                  <div className="page-main row-full">
                    <div id="header" style={{ width: '100%' }}>
                      <MobileHeaderLogo />
                      <div className={sticky ? 'header-sticky js-sticky-menu is_stuck' : 'header-sticky js-sticky-menu'}>
                        <MobileNavBar />
                        <div className="header-content hidden-xs">
                          <div className="container-navmenubar">
                            <div className="header-content-inner d-flex flex-row ab-flex-row">
                              <div className="align-self-center" id="logoMain">
                                <Link legacyBehavior href="/">
                                  <a id="logo" href="/">
                                    <img
                                      alt="Allen Brothers"
                                      src={props?.appData?.channelData?.additionalSettings?.appLogo ? props.appData.channelData.additionalSettings.appLogo : 'https://www.allenbrothers.com/file/v4970033961931790421/general/Allen-Brothers-Logo-white-528x72.png'}
                                    />
                                  </a>
                                </Link>
                              </div>
                              <LevelOneItem
                                headerType="home"
                                rootCatagories={rootCatagories}
                              />
                              <div className="align-self-center hidden-print">
                                <ul className="list-inline header-actions d-flex flex-no-wrap head-actn">
                                  <li className="list-inline-item dropdown header-actions-account headerDropdown">
                                    <HeaderAccountActionLinks />
                                  </li>
                                  <li className="list-inline-item header-actions-cart dropdown fast-order js-minicart-toggle">
                                    <a className="dropdown-toggle outline-change" id="cartlink" href="#" data-target="dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-label="Cart 0 items" aria-expanded="false">
                                      <i aria-hidden="true" className="icon icon-cart fas fa-shopping-cart" tabIndex="0">
                                        <span className="cart-val">
                                          <span className="sr-only">quantity of items in your cart: 0</span>
                                          <div
                                            aria-hidden="true"
                                            className="cart-counter"
                                            style={{
                                              fontSize: '14px',
                                              border: 'none',
                                              cursor: 'pointer',
                                              outline: 'none',
                                                                                            /* display: block; */
                                            }}
                                          >
                                            0

                                          </div>
                                        </span>
                                      </i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-center fast-order__dropdown js-custom-aside js-custom-height" data-aside="right" id="fast-order__dropdown">
                                      <div className="dropdown-block" role="region" aria-label="cart">
                                        <div className="dropdown-block__header d-flex justify-space-between align-items-center">
                                          <span className="dropdown-block__title text-elipsis">Your Cart</span>
                                          <button className="dropdown-block__close" aria-label="Close">
                                            <i className="fa fa-times-circle"></i>
                                          </button>
                                        </div>
                                        <div className="dropdown-block__body">
                                          <span className="dropdown-block__subtitle d-block">You currently have no items in your shopping cart.</span>
                                        </div>
                                        <div className="dropdown-block__footer">
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li style={{ marginRight: '28px' }}>
                                    <div id="header-1" className="header">
                                      <div className="search-button new-sb">
                                        <a id="search-wrk" href="#" className="search-toggle outline-change-search" data-selector="#header-1"></a>
                                      </div>

                                      <div className="search-box">
                                        <div className="align-self-center header-search-new js-search hidden-print">
                                          <form className="header-search-form">
                                            <label className="sr-only" htmlFor="headerFormInputSearch">Search</label>
                                            <div className="input-group">
                                              <input className="ab-search form-control-search js-search__input search-input" type="text" id="headerFormInputSearch" data-search-min="1" autoComplete="off" placeholder="Search" />
                                              <div className="input-group-btn" style={{ display: 'none' }}>
                                                <div className="btn-new searchProducts ab-searchProducts">
                                                  <i className="icon icon-search fa fa-search" aria-hidden="true"></i>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="dropdown-menu dropdown-menu-center dropdown-menu-arrow dropdown-menu-search js-custom-height js-search__body" id="results" role="listbox" aria-labelledby="label">
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="list-inline-item dropdown header-actions-account">
                                    <a className="dropown-toggle outline-change aria-expand phone-num-new" id="phone-num" data-target="dropdown" data-toggle="dropdown" role="button" aria-label="phone" aria-haspopup="true" href="tel:1-800-957-0111">
                                      <i className="icon-phone fas fa-phone phone-new" style={{ fontSize: '30px' }}></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-center dropdown-menu-arrow dropdown-phone-menu-arrow">
                                      <li>
                                        <a href="tel:1-800-957-0111">
                                          <span style={{ marginLeft: '10px' }}>1-800-957-0111</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="collapse" id="page-header__search-box">
                          <form className="mobile-search-box d-flex justify-space-between align-items-center">
                            <div className="form-group" tabIndex="0">
                              <input className="form-control formControl-input form-control-search js-search-mobile-input" type="text" id="search_mobile" aria-label="Search" aria-autocomplete="list" aria-controls="productresults" aria-haspopup="listbox" aria-activedescendant="instructions" aria-describedby="instructions" aria-expanded="false" autoComplete="off" placeholder="Search" />
                              <div id="instructions" style={{ display: 'none' }}>
                                Begin typing to search, use tab key to navigate, Enter to select
                              </div>
                              <span className="text-danger" id="search_mobile-error" role="alert" style={{ display: 'none' }}></span>
                            </div>
                            <button className="btn btn-icon" type="reset">
                              <i className="icon icon-search fa fa-search" aria-hidden="true"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <MobileNavLevelOneItem
              mobileNavMenu={mobileNavMenu}
              setMobileNavMenu={setMobileNavMenu}
              rootCatagories={rootCatagories}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
