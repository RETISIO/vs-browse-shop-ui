import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LevelOneItem from './level-1-item';

export default function NormalHeader() {

    const [sticky, setSticky] = useState(false);

    function setStick() {
        if (window.scrollY >= 200) {
            setSticky(true)
        }
        else {
            setSticky(false)
        }
    }

    useEffect (()=> {
        window.addEventListener('scroll', setStick)
    }, []);

    return (
        <div id="page" className="normalHeader">
            <header id="headerBar" className="page-row">
                <div>
                    <div className="row">
                        <div className="redBox">
                            <div className="col-sm-12" id="region-re200010">
                                <div id="allnclubuserheaderpromo1_v1-wi2300006" >
                                    <div className="row">
                                        <div className="oc-panel col-md-12" data-oc-id="panel-0-0">
                                            <span id="wi2300006-rich-text-190001">
                                                <div className="cc-rich-text" style={{ padding: '0px' }}><div className="row-full header-alert header-alert-main hidden-print promo-normal-header" style={{ zIndex: '1020' }}>
                                                    <div className="container">
                                                        <div className="text-center">
                                                            <span className="promotion-text">
                                                                <strong>FREE </strong>2&nbsp;Prime Strip Steaks w/orders $199+ and code <strong>NYSTEAKS22&nbsp;</strong>
                                                                <a href="https://www.allenbrothers.com/promotion-codes">exclusions apply*</a></span></div>
                                                    </div>
                                                </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div id="allnclubuserheaderpromo2_v1-wi2300007" >
                                    <div className="row">
                                        <div className="oc-panel col-md-12" data-oc-id="panel-0-0">
                                            <div className="row-full header-alert hidden-print" style={{ backgroundColor: '#1e4783', zIndex: '1020' }}>
                                                <span id="wi2300007-rich-text-180003">
                                                    <div className="cc-rich-text" style={{ padding: '0px' }}><div className="container">
                                                        <div className="text-center">Not sure what to send? Let them select their favorites <a href="https://www.allenbrothers.com/gift-card/gifting/gc-10001">with a Gift Card</a>!</div>
                                                    </div>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="ALLN-Header_v4-wi800002"><div className="page-overlay js-overlay"></div>
                                    <div className="page-main row-full">
                                        <div id="header">
                                            <div className="header-sup-nav hidden-print">
                                                <div className="container">
                                                    <nav className="nav-links d-flex">
                                                        <ul className="list-inline">
                                                            <li className="list-inline-item">
                                                                <i className="icon icon-tags fas fa-tags"></i>
                                                                <a href="/catalog/on-sale">ON SALE</a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <i className="icon icon-book fas fa-book-open"></i>
                                                                <a href="/content/cooking-guides">COOKING GUIDE</a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <i className="icon icon-gift fas fa-gift"></i>
                                                                <a href="/gift-info">Gift Center</a>
                                                            </li>
                                                            <li className="list-inline-item list-phone-link">
                                                                <i className="icon icon-phone fas fa-phone"></i>
                                                                <a href="tel:1-800-957-0111">1-800-957-0111</a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                            <div className="header-sticky js-sticky-menu">
                                            <div className={sticky ? 'header-sticky js-sticky-menu is_stuck' : 'header-sticky js-sticky-menu'}>
                                                <div className="header-content">
                                                    <div className="container">
                                                        <div className="header-content-inner d-flex flex-row">
                                                            <div className="align-self-center">
                                                                <Link legacyBehavior href="/">
                                                                    <a id="logo" href="/">
                                                                        <img alt="Allen Brothers" src="https://www.allenbrothers.com/file/v2517220989386652596/general/AB-logo.png" />
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                            <div className="align-self-center header-search js-search hidden-print">
                                                                <form className="header-search-form">
                                                                    <label className="sr-only" for="headerFormInputSearch">Search</label>
                                                                    <div className="input-group">
                                                                        <input className="form-control form-control-search js-search__input" type="text" id="headerFormInputSearch" data-search-min="1" autocomplete="off" placeholder="Search" />
                                                                        <div className="input-group-btn">
                                                                            <div className="btn searchProducts">
                                                                                <i className="icon icon-search fa fa-search" aria-hidden="true"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="dropdown-menu dropdown-menu-center dropdown-menu-arrow dropdown-menu-search js-custom-height js-search__body">
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div className="align-self-center hidden-print">
                                                                <ul className="list-inline header-actions d-flex flex-no-wrap">
                                                                    <li className="list-inline-item dropdown header-actions-account">
                                                                        <a className="dropdown-toggle" href="#" data-target="dropdown" data-toggle="dropdown" role="button" aria-label="User" aria-haspopup="true" aria-expanded="false">
                                                                            <i className="icon icon-user fas fa-user-circle"></i>
                                                                        </a>
                                                                        <ul className="dropdown-menu dropdown-menu-center dropdown-menu-arrow">
                                                                            <li><a href="/registration">Register</a></li>
                                                                            <li><a href="#" data-toggle="modal" data-target="#loginModal" data-backdrop="static">Log In</a></li>
                                                                        </ul>
                                                                    </li>
                                                                    <li className="list-inline-item header-actions-cart dropdown fast-order js-minicart-toggle">
                                                                        <a className="dropdown-toggle" href="#" data-target="dropdown" aria-label="Cart" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                                                            <i className="icon icon-cart fas fa-shopping-cart"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-center fast-order__dropdown js-custom-aside js-custom-height" data-aside="right" id="fast-order__dropdown">
                                                                            <div className="dropdown-block">
                                                                                <div className="dropdown-block__header d-flex justify-space-between align-items-center">
                                                                                    <span className="dropdown-block__title text-elipsis">Your Cart</span>
                                                                                    <button className="dropdown-block__close"><i className="fa fa-times-circle"></i></button>
                                                                                </div>
                                                                                <div className="dropdown-block__body">
                                                                                    <span className="dropdown-block__subtitle d-block">You currently have no items in your shopping cart.</span>
                                                                                </div>
                                                                                <div className="dropdown-block__footer">
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <LevelOneItem headerType={"nonHome"}/>
                                                {/* <nav className="navbar">
                                                    <div className="container">
                                                        <ul className="navbar-nav nav">
                                                            <li className="nav-item js-dropdown">
                                                                <a className="js-dropdown__btn" href="/category/shop-beef" id="header-nav-beef">Beef</a>
                                                                <div className="header-dropdown-menu dropdown-menu js-dropdown__body">
                                                                    <div className="container">
                                                                        <div className="row">
                                                                            <div className="col-sm-3">
                                                                                <div className="category-heading">Shop By Cut</div>
                                                                            </div>

                                                                            <div className="col-sm-3">
                                                                                <div className="category-heading">Shop By Type</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-sm-3">
                                                                                <ul className="category-list list-unstyled">
                                                                                    <li className="category-list-item">
                                                                                        <a href="/shop-by-cut/filet-mignon">Filet Mignon</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/shop-by-cut/strip-steak">Strip Steak</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/shop-by-cut/ribeye">Ribeye</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/shop-by-cut/porterhouse">Porterhouse</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/shop-by-cut/roasts">Beef Roasts</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/shop-by-cut/beef-assortments">Beef Assortments</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/shop-by-cut/steak-burgers">Steak Burgers</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/shop-by-cut/gourmet-hot-dogs">Gourmet Hot Dogs</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/shop-by-cut/butchers-selections">Butcher's Selections</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>

                                                                            <div className="col-sm-3">
                                                                                <ul className="category-list list-unstyled">
                                                                                    <li className="category-list-item">
                                                                                        <a href="/shop-by-type/usda-prime">USDA Prime</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/shop-by-type/dry-aged-beef">Dry Aged</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/shop-by-type/wagyu">Wagyu / Japanese</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/shop-by-type/grass-fed-beef">Grass-Fed</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/shop-by-type/natural-beef">All-Natural</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/shop-by-type/ab-angus">AB Angus</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/shop-by-type/wet-aged-beef">Wet Aged</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-md-4">
                                                                                <ul className="category-list list-unstyled">
                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/best-sellers">
                                                                                            <div id="cc_img__resize_wrapper-Best-Sellers" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="Best Sellers" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="https://www.allenbrothers.com/file/general/best-sellers-icon.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/best-sellers-icon.png" data-srcset="/ccstore/v1/images/?source=/file/general/best-sellers-icon.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/best-sellers-icon.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>Best Sellers</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/new-items">
                                                                                            <div id="cc_img__resize_wrapper-New-Items" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="New Items" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="https://www.allenbrothers.com/file/general/new-badge.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/new-badge.png" data-srcset="/ccstore/v1/images/?source=/file/general/new-badge.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/new-badge.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>New Items</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/gift-card/gifting/gc-10001">
                                                                                            <div id="cc_img__resize_wrapper-Gift-Cards" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="Gift Cards" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="https://www.allenbrothers.com/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg" data-lazy-loading="false" src="https://www.allenbrothers.com/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg" data-srcset="/ccstore/v1/images/?source=/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>Gift Cards</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/on-sale">
                                                                                            <div id="cc_img__resize_wrapper-On-Sale" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="On Sale" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/on-sale-icon.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/on-sale-icon.png" data-srcset="/ccstore/v1/images/?source=/file/general/on-sale-icon.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/on-sale-icon.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>On Sale</span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul><br />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                            <li className="nav-item js-dropdown">
                                                                <a className="js-dropdown__btn" href="/category/shop-lamb" id="header-nav-lamb">Lamb</a>
                                                                <div className="header-dropdown-menu dropdown-menu js-dropdown__body">
                                                                    <div className="container">
                                                                        <div className="row">
                                                                            <div className="col-sm-3">
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-sm-3">
                                                                                <ul className="category-list list-unstyled">
                                                                                    <li className="category-list-item">
                                                                                        <a href="/lamb/lamb-chops">Lamb Chops</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/lamb/lamb-rack-roast">Lamb Racks &amp; Roasts</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/lamb/lamb-shanks">Lamb Shanks</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-md-4">
                                                                                <ul className="category-list list-unstyled">
                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/best-sellers">
                                                                                            <div id="cc_img__resize_wrapper-Best-Sellers" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="Best Sellers" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/best-sellers-icon.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/best-sellers-icon.png" data-srcset="/ccstore/v1/images/?source=/file/general/best-sellers-icon.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/best-sellers-icon.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>Best Sellers</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/new-items">
                                                                                            <div id="cc_img__resize_wrapper-New-Items" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="New Items" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/new-badge.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/new-badge.png" data-srcset="/ccstore/v1/images/?source=/file/general/new-badge.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/new-badge.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>New Items</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/gift-card/gifting/gc-10001">
                                                                                            <div id="cc_img__resize_wrapper-Gift-Cards" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="Gift Cards" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg" data-lazy-loading="false" src="https://www.allenbrothers.com/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg" data-srcset="/ccstore/v1/images/?source=/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>Gift Cards</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/on-sale">
                                                                                            <div id="cc_img__resize_wrapper-On-Sale" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="On Sale" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/on-sale-icon.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/on-sale-icon.png" data-srcset="/ccstore/v1/images/?source=/file/general/on-sale-icon.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/on-sale-icon.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>On Sale</span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul><br />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                            <li className="nav-item js-dropdown">
                                                                <a className="js-dropdown__btn" href="/category/shop-veal" id="header-nav-veal">Veal</a>
                                                                <div className="header-dropdown-menu dropdown-menu js-dropdown__body">
                                                                    <div className="container">
                                                                        <div className="row">
                                                                            <div className="col-sm-3">
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-sm-3">
                                                                                <ul className="category-list list-unstyled">
                                                                                    <li className="category-list-item">
                                                                                        <a href="/veal/veal-chops">Veal Chops</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/veal/veal-roasts">Veal Roasts</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/veal/veal-shanks">Veal Shanks</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/veal/veal-slices">Veal Slices</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-md-4">
                                                                                <ul className="category-list list-unstyled">
                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/best-sellers">
                                                                                            <div id="cc_img__resize_wrapper-Best-Sellers" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="Best Sellers" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/best-sellers-icon.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/best-sellers-icon.png" data-srcset="/ccstore/v1/images/?source=/file/general/best-sellers-icon.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/best-sellers-icon.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>Best Sellers</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/new-items">
                                                                                            <div id="cc_img__resize_wrapper-New-Items" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="New Items" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/new-badge.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/new-badge.png" data-srcset="/ccstore/v1/images/?source=/file/general/new-badge.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/new-badge.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>New Items</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/gift-card/gifting/gc-10001">
                                                                                            <div id="cc_img__resize_wrapper-Gift-Cards" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="Gift Cards" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg" data-lazy-loading="false" src="https://www.allenbrothers.com/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg" data-srcset="/ccstore/v1/images/?source=/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>Gift Cards</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/on-sale">
                                                                                            <div id="cc_img__resize_wrapper-On-Sale" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="On Sale" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/on-sale-icon.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/on-sale-icon.png" data-srcset="/ccstore/v1/images/?source=/file/general/on-sale-icon.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/on-sale-icon.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>On Sale</span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul><br />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                            <li className="nav-item js-dropdown">
                                                                <a className="js-dropdown__btn" href="/category/shop-pork" id="header-nav-pork">Pork</a>
                                                                <div className="header-dropdown-menu dropdown-menu js-dropdown__body">
                                                                    <div className="container">
                                                                        <div className="row">
                                                                            <div className="col-sm-3">
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-sm-3">
                                                                                <ul className="category-list list-unstyled">
                                                                                    <li className="category-list-item">
                                                                                        <a href="/pork/pork-chops">Pork Chops</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/pork/pork-ribs">Pork Ribs</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/pork/pork-roasts">Pork Roasts</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/pork/pork-belly-bacon">Bacon &amp; Belly</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/pork/pork-ham">Ham</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-md-4">
                                                                                <ul className="category-list list-unstyled">
                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/best-sellers">
                                                                                            <div id="cc_img__resize_wrapper-Best-Sellers" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="Best Sellers" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/best-sellers-icon.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/best-sellers-icon.png" data-srcset="/ccstore/v1/images/?source=/file/general/best-sellers-icon.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/best-sellers-icon.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>Best Sellers</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/new-items">
                                                                                            <div id="cc_img__resize_wrapper-New-Items" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="New Items" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/new-badge.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/new-badge.png" data-srcset="/ccstore/v1/images/?source=/file/general/new-badge.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/new-badge.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>New Items</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/gift-card/gifting/gc-10001">
                                                                                            <div id="cc_img__resize_wrapper-Gift-Cards" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="Gift Cards" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg" data-lazy-loading="false" src="https://www.allenbrothers.com/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg" data-srcset="/ccstore/v1/images/?source=/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>Gift Cards</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/on-sale">
                                                                                            <div id="cc_img__resize_wrapper-On-Sale" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="On Sale" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/on-sale-icon.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/on-sale-icon.png" data-srcset="/ccstore/v1/images/?source=/file/general/on-sale-icon.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/on-sale-icon.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>On Sale</span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul><br />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                            <li className="nav-item js-dropdown">
                                                                <a className="js-dropdown__btn" href="/category/shop-game" id="header-nav-game">Game</a>
                                                                <div className="header-dropdown-menu dropdown-menu js-dropdown__body">
                                                                    <div className="container">
                                                                        <div className="row">
                                                                            <div className="col-sm-3">
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-sm-3">
                                                                                <ul className="category-list list-unstyled">
                                                                                    <li className="category-list-item">
                                                                                        <a href="/game/bison">Bison</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/game/elk">Elk</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-md-4">
                                                                                <ul className="category-list list-unstyled">
                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/best-sellers">
                                                                                            <div id="cc_img__resize_wrapper-Best-Sellers" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="Best Sellers" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/best-sellers-icon.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/best-sellers-icon.png" data-srcset="/ccstore/v1/images/?source=/file/general/best-sellers-icon.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/best-sellers-icon.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>Best Sellers</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/new-items">
                                                                                            <div id="cc_img__resize_wrapper-New-Items" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="New Items" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/new-badge.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/new-badge.png" data-srcset="/ccstore/v1/images/?source=/file/general/new-badge.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/new-badge.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>New Items</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/gift-card/gifting/gc-10001">
                                                                                            <div id="cc_img__resize_wrapper-Gift-Cards" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="Gift Cards" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg" data-lazy-loading="false" src="https://www.allenbrothers.com/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg" data-srcset="/ccstore/v1/images/?source=/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>Gift Cards</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/on-sale">
                                                                                            <div id="cc_img__resize_wrapper-On-Sale" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="On Sale" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/on-sale-icon.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/on-sale-icon.png" data-srcset="/ccstore/v1/images/?source=/file/general/on-sale-icon.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/on-sale-icon.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>On Sale</span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul><br />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                            <li className="nav-item js-dropdown">
                                                                <a className="js-dropdown__btn" href="/category/shop-seafood-and-fish" id="header-nav-seafood-and-fish">Seafood</a>
                                                                <div className="header-dropdown-menu dropdown-menu js-dropdown__body">
                                                                    <div className="container">
                                                                        <div className="row">
                                                                            <div className="col-sm-3">
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-sm-3">
                                                                                <ul className="category-list list-unstyled">
                                                                                    <li className="category-list-item">
                                                                                        <a href="/seafood/fish">Fish</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/seafood/shellfish">Shellfish</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/seafood/caviar">Caviar</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-md-4">
                                                                                <ul className="category-list list-unstyled">
                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/best-sellers">
                                                                                            <div id="cc_img__resize_wrapper-Best-Sellers" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="Best Sellers" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/best-sellers-icon.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/best-sellers-icon.png" data-srcset="/ccstore/v1/images/?source=/file/general/best-sellers-icon.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/best-sellers-icon.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>Best Sellers</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/new-items">
                                                                                            <div id="cc_img__resize_wrapper-New-Items" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="New Items" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/new-badge.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/new-badge.png" data-srcset="/ccstore/v1/images/?source=/file/general/new-badge.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/new-badge.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>New Items</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/gift-card/gifting/gc-10001">
                                                                                            <div id="cc_img__resize_wrapper-Gift-Cards" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="Gift Cards" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg" data-lazy-loading="false" src="https://www.allenbrothers.com/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg" data-srcset="/ccstore/v1/images/?source=/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>Gift Cards</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/on-sale">
                                                                                            <div id="cc_img__resize_wrapper-On-Sale" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="On Sale" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/on-sale-icon.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/on-sale-icon.png" data-srcset="/ccstore/v1/images/?source=/file/general/on-sale-icon.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/on-sale-icon.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>On Sale</span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul><br />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                            <li className="nav-item js-dropdown">
                                                                <a className="js-dropdown__btn" href="/category/shop-poultry" id="header-nav-poultry">Poultry</a>
                                                                <div className="header-dropdown-menu dropdown-menu js-dropdown__body">
                                                                    <div className="container">
                                                                        <div className="row">
                                                                            <div className="col-sm-3">
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-sm-3">
                                                                                <ul className="category-list list-unstyled">
                                                                                    <li className="category-list-item">
                                                                                        <a href="/poultry/chicken">Chicken</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/poultry/turkey">Turkey</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/poultry/duck">Duck</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/poultry/quail">Quail</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-md-4">
                                                                                <ul className="category-list list-unstyled">
                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/best-sellers">
                                                                                            <div id="cc_img__resize_wrapper-Best-Sellers" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="Best Sellers" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/best-sellers-icon.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/best-sellers-icon.png" data-srcset="/ccstore/v1/images/?source=/file/general/best-sellers-icon.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/best-sellers-icon.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>Best Sellers</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/new-items">
                                                                                            <div id="cc_img__resize_wrapper-New-Items" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="New Items" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/new-badge.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/new-badge.png" data-srcset="/ccstore/v1/images/?source=/file/general/new-badge.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/new-badge.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>New Items</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/gift-card/gifting/gc-10001">
                                                                                            <div id="cc_img__resize_wrapper-Gift-Cards" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="Gift Cards" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg" data-lazy-loading="false" src="https://www.allenbrothers.com/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg" data-srcset="/ccstore/v1/images/?source=/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>Gift Cards</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/on-sale">
                                                                                            <div id="cc_img__resize_wrapper-On-Sale" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="On Sale" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/on-sale-icon.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/on-sale-icon.png" data-srcset="/ccstore/v1/images/?source=/file/general/on-sale-icon.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/on-sale-icon.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>On Sale</span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul><br />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                            <li className="nav-item js-dropdown">
                                                                <a className="js-dropdown__btn" href="/category/shop-assortments" id="header-nav-assortments">Gifts &amp; Bundles</a>
                                                                <div className="header-dropdown-menu dropdown-menu js-dropdown__body">
                                                                    <div className="container">
                                                                        <div className="row">
                                                                            <div className="col-sm-3">
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-sm-3">
                                                                                <ul className="category-list list-unstyled">
                                                                                    <li className="category-list-item">
                                                                                        <a href="/gifts-bundles/shop-gift-cards">Gift Cards</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/gifts-bundles/grilling-assortments">Grilling</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/gifts-bundles/variety-assortments">Variety</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/gifts-bundles/surf-and-turf-assortments">Surf &amp; Turf</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/gifts-bundles/favorite-assortments">Favorites</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/gifts-bundles/gifts-of-the-month">Steak of The Month Subscriptions</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-md-4">
                                                                                <ul className="category-list list-unstyled">
                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/best-sellers">
                                                                                            <div id="cc_img__resize_wrapper-Best-Sellers" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="Best Sellers" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/best-sellers-icon.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/best-sellers-icon.png" data-srcset="/ccstore/v1/images/?source=/file/general/best-sellers-icon.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/best-sellers-icon.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>Best Sellers</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/new-items">
                                                                                            <div id="cc_img__resize_wrapper-New-Items" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="New Items" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/new-badge.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/new-badge.png" data-srcset="/ccstore/v1/images/?source=/file/general/new-badge.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/new-badge.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>New Items</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/gift-card/gifting/gc-10001">
                                                                                            <div id="cc_img__resize_wrapper-Gift-Cards" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="Gift Cards" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg" data-lazy-loading="false" src="https://www.allenbrothers.com/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg" data-srcset="/ccstore/v1/images/?source=/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>Gift Cards</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/on-sale">
                                                                                            <div id="cc_img__resize_wrapper-On-Sale" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="On Sale" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/on-sale-icon.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/on-sale-icon.png" data-srcset="/ccstore/v1/images/?source=/file/general/on-sale-icon.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/on-sale-icon.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>On Sale</span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul><br />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                            <li className="nav-item js-dropdown">
                                                                <a className="js-dropdown__btn" href="/category/more" id="header-nav-10901">More</a>
                                                                <div className="header-dropdown-menu dropdown-menu js-dropdown__body">
                                                                    <div className="container">
                                                                        <div className="row">
                                                                            <div className="col-sm-3">
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-sm-3">
                                                                                <ul className="category-list list-unstyled">
                                                                                    <li className="category-list-item">
                                                                                        <a href="/more/pantry-items">Pantry Items</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/more/prepared-foods">Prepared Foods</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/more/desserts">Desserts</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/more/appetizers">Appetizers</a>
                                                                                    </li>

                                                                                    <li className="category-list-item">
                                                                                        <a href="/more/fresh-truffles">Fresh Truffles</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                            <div className="col-md-4">
                                                                                <ul className="category-list list-unstyled">
                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/best-sellers">
                                                                                            <div id="cc_img__resize_wrapper-Best-Sellers" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="Best Sellers" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/best-sellers-icon.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/best-sellers-icon.png" data-srcset="/ccstore/v1/images/?source=/file/general/best-sellers-icon.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/best-sellers-icon.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>Best Sellers</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/new-items">
                                                                                            <div id="cc_img__resize_wrapper-New-Items" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="New Items" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/new-badge.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/new-badge.png" data-srcset="/ccstore/v1/images/?source=/file/general/new-badge.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/new-badge.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>New Items</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/gift-card/gifting/gc-10001">
                                                                                            <div id="cc_img__resize_wrapper-Gift-Cards" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="Gift Cards" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg" data-lazy-loading="false" src="https://www.allenbrothers.com/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg" data-srcset="/ccstore/v1/images/?source=/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>Gift Cards</span>
                                                                                        </a>
                                                                                    </li>

                                                                                    <li className="category-list-item new-item">
                                                                                        <a href="/catalog/on-sale">
                                                                                            <div id="cc_img__resize_wrapper-On-Sale" className="" style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}>
                                                                                                <img className="new ccLazyLoaded" alt="On Sale" data-error-src="/file/v1375487262462743897/general/missing-image.jpg" data-default-error-src="/img/no-image.jpg" data-lazy-loading-image-className="ccLazyLoad" data-lazy-loaded-image-className="ccLazyLoaded" data-lazy-loading-parent-className="ccLazyLoad-background" data-src="/file/general/on-sale-icon.png" data-lazy-loading="false" src="https://www.allenbrothers.com/file/general/on-sale-icon.png" data-srcset="/ccstore/v1/images/?source=/file/general/on-sale-icon.png&amp;height=36&amp;width=36 36w" data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/on-sale-icon.png&amp;height=36&amp;width=36 36w" sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px" /></div>
                                                                                            <span>On Sale</span>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul><br />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </nav> */}
                                                <div className="collapse" id="page-header__search-box">
                                                    <form className="mobile-search-box d-flex justify-space-between align-items-center">
                                                        <div className="form-group">
                                                            <input className="form-control formControl-input form-control-search js-search-mobile-input" id="search_mobile" type="search" aria-label="Search" placeholder="Search" />
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

                                        <div className="header-mobile-search">
                                            <div className="typeahead-search typeahead-search-mobile">
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Login Modal--> */}
                                    <div className="modal modal-large modal-login fade" tabindex="-1" role="dialog" id="loginModal">
                                        <div className="modal-dialog" role="document">
                                            <form autocomplete="off" novalidate="">
                                                <div className="modal-content">
                                                    <button className="close close-popup" type="button" data-dismiss="modal" aria-label="Close"><i className="fa fa-times-circle" aria-hidden="true"></i></button>
                                                    <div className="row no-gutter">
                                                        <div className="alert alert-dismissible hidden-print alert-success undefined header-alert-top" role="alert"><strong>First time logging into our new site?</strong><br /><a className="link-underline" data-dismiss="modal" href="#" data-toggle="modal" data-backdrop="static" data-target="#forgotPasswordModal">Click here to reset your password.</a></div>
                                                        <div className="col-sm-6 modal-login-left">
                                                            <div className="modal-body">
                                                                <span className="span-title">Login</span>
                                                                <p>If you have an account with us, please login.</p>
                                                                <div className="form-group" style={{ display: 'none' }}>
                                                                    <div className="alert alert-dismissible hidden-print alert-danger undefined" role="alert">
                                                                        <button className="close" type="button" aria-label="Close"><span aria-hidden="true">×</span></button>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <input className="form-control formControl-input" value="" type="email" maxlength="128" id="login_email" autocomplete="username email" required="required" placeholder="Email Address *" />
                                                                    <label className="formGroup-label label-visible" for="login_email">Email Address *</label>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="input-group">
                                                                        <input className="form-control formControl-input" type="password" value="" id="login_current_password" autocomplete="new-password" data-toggler="password_login" placeholder="Password *" />
                                                                        <label className="formGroup-label label-visible" for="login_current_password">Password *</label>
                                                                        <div className="input-group-btn">
                                                                            <button className="btn showHidePasswordTrigger" type="button">
                                                                                <i className="fa fa-eye" aria-hidden="true"></i>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <a className="link-underline" role="button" data-dismiss="modal" data-toggle="modal" data-backdrop="static" data-target="#forgotPasswordModal">Reset Password</a>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <div className="modal-footer-inner">
                                                                    <button className="btn btn-action btn-action-md btn-action-default" type="button" data-dismiss="modal">Cancel</button>
                                                                    <button className="btn btn-action btn-action-md btn-action-primary" type="button">Login</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="modal-body">
                                                                <span className="modal-login-heading span-title">New Customers</span>
                                                                <p>By creating an account with our store,you will be able to move through checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                                                                <a className="btn btn-modal btn-default btn-default-light btn-create-account" data-dismiss="modal" href="/registration">Create an Account</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    {/* <!-- Forgot Password Modal--> */}
                                    <div className="modal fade" tabindex="-1" role="dialog" id="forgotPasswordModal">
                                        <div className="modal-dialog" role="document">
                                            <form autocomplete="off" novalidate="">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <button className="close close-popup" type="button" data-dismiss="modal" aria-label="Close"><i className="fa fa-times-circle" aria-hidden="true"></i></button>
                                                        <span className="modal-title">Forgot Your Password?</span>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="modal-inner">
                                                            <p>Please enter your email below and you will receive a secure link to reset your password.</p>
                                                            <p>To ensure that you receive the password reset link, please add info@allenbrothers.com to your email address book.</p><br />
                                                            <div className="form-group">
                                                                <input className="form-control formControl-input" type="email" maxlength="128" id="cc-forgotPasswordEmail" required="required" placeholder="Email Address *" />
                                                                <label className="formGroup-label" for="cc-forgotPasswordEmail">Email Address *</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <hr />
                                                        <div className="modal-footer-inner">
                                                            <button className="btn btn-action btn-action-md btn-action-default" type="button" data-dismiss="modal">Cancel</button>
                                                            <button className="btn btn-action btn-action-md btn-action-primary" type="button">Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    {/* <!-- Reset Password Modal--> */}
                                    <div className="modal modal-large fade" tabindex="-1" role="dialog" id="resetPasswordModal">
                                        <div className="modal-dialog" role="document">
                                            <form autocomplete="off" novalidate="">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <button className="close close-popup" type="button" data-dismiss="modal" aria-label="Close"><i className="fa fa-times-circle" aria-hidden="true"></i></button>
                                                        <span className="modal-title">Reset Password</span>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="modal-inner">
                                                            <div className="alert alert-dismissible hidden-print alert-danger undefined" role="alert" style={{ display: 'none' }}>
                                                                <button className="close" type="button" data-dismiss="alert" aria-label="Close">
                                                                    <span aria-hidden="true">×</span>
                                                                </button>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm-6">
                                                                    <p>Please enter your email address and new password below to reset your password.</p>
                                                                    <div className="form-group">
                                                                        <input className="form-control formControl-input" type="email" maxlength="128" id="cc-resetEmail" required="required" placeholder="Email Address *" />
                                                                        <label className="formGroup-label" for="cc-resetEmail">Email Address *</label>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <div className="input-group  ">
                                                                            <input className="form-control formControl-input" type="password" id="reset_new_password" autocomplete="new-password" required="required" placeholder="New Password" />
                                                                            <label className="formGroup-label" for="reset_new_password">New Password</label>
                                                                            <div className="input-group-btn">
                                                                                <button className="btn showHidePasswordTrigger" type="button">
                                                                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <div>
                                                                            <input className="form-control formControl-input" type="password" id="reset_confirm_password" autocomplete="new-password" required="required" placeholder="Confirm Password" />
                                                                            <label className="formGroup-label" for="reset_confirm_password">Confirm Password</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <span className="span-title">Password Rules:</span>
                                                                    <ul>
                                                                        <li>Minimum length: 8 characters</li>
                                                                        <li>Cannot match username</li>
                                                                        <li style={{ display: 'none' }}>Cannot be a previously used password</li>
                                                                        <li style={{ display: 'none' }}>Must include uppercase and lowercase letters</li>
                                                                        <li>Must include a number</li>
                                                                        <li style={{ display: 'none' }}>Must include one of the following special characters: ~!@#$%^&amp;*()_-+={ }[]|:;&lt;&gt;,./?</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <hr />
                                                        <div className="modal-footer-inner">
                                                            <button className="btn btn-action btn-action-md btn-action-default" type="button" data-dismiss="modal">Cancel</button>
                                                            <button className="btn btn-action btn-action-md btn-action-primary" type="button">Save</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="panel-fixed-right d-flex align-items-center js-scroll-phone hidden-xs hidden-print">
                                        <a className="d-flex align-items-center" href="tel:1-800-957-0111">
                                            <i className="icon icon-phone fas fa-phone"></i>
                                            1-800-957-0111
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
