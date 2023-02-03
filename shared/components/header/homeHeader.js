import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LevelOneItem from './level-1-item';

export default function HomeHeader(props) {
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
        <div className="home-header-container">
            {/* {props.headerContent ? <Template templateData={props.headerContent} /> : null} */}
            <div className="row">
                <div className="redBox">
                    <div className="col-sm-12" id="region-re1700007">
                        <div id="allnclubuserheaderpromo1_v1-wi2300006" >
                            <div className="row">
                                <div className="oc-panel col-md-12" data-oc-id="panel-0-0">
                                    <span id="wi2300006-rich-text-190001">
                                        <div className="cc-rich-text" style={{ padding: '0px' }}><div className="row-full header-alert header-alert-main hidden-print promo-normal-header" style={{ zIndex: '1020' }}>
                                            <div className="container">
                                                <div className="text-center">
                                                    <span className="promotion-text">
                                                        <strong>FREE </strong>2&nbsp;Prime Strip Steaks w/orders $199+ and code <strong>NYSTEAKS22&nbsp;</strong>
                                                        <a href="https://www.allenbrothers.com/promotion-codes">exclusions apply*</a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main className="page-row page-row-expanded">
                <div id="main" className="">
                    <div className="row">
                        <div className="redBox">
                            <div className="col-sm-12" id="region-re1700017">
                                <div id="ALLN-Header_v4-wi2700015"><div className="page-overlay js-overlay"></div>
                                    <div className="page-main row-full">
                                        <div id="header" style={{ width: '100%' }}>
                                            <div className="header-sticky js-sticky-menu">
                                                <div className={sticky ? 'header-sticky js-sticky-menu is_stuck' : 'header-sticky js-sticky-menu'}>
                                                    <div className="header-content">
                                                        <div className="container-navmenubar">
                                                            <div className="header-content-inner d-flex flex-row ab-flex-row">
                                                                <div className="align-self-center" id="logoMain">
                                                                    <Link legacyBehavior href="/">
                                                                        <a id="logo" href="/">
                                                                            <img alt="Allen Brothers" src="https://www.allenbrothers.com/file/v4970033961931790421/general/Allen-Brothers-Logo-white-528x72.png" />
                                                                        </a>
                                                                    </Link>
                                                                </div>
                                                                <LevelOneItem headerType={"home"}/>

                                                                {/* <nav className="navbar">
                                                                    <div className="">
                                                                        <ul className="navbar-nav nav">
                                                                            <li className="nav-item js-dropdown">
                                                                                <button className="js-dropdown__btn" aria-expanded="false" id="header-nav-beef">
                                                                                    BEEF
                                                                                </button>
                                                                                <div className="header-dropdown-menu dropdown-menu js-dropdown__body" id="header-navbar" style={{
                                                                                    left: 'auto',
                                                                                    right: 'auto',
                                                                                    marginTop: '-7px',
                                                                                    padding: '30px 0',
                                                                                    border: 0,
                                                                                    borderRadius: 0,
                                                                                    backgroundColor: '#fff',
                                                                                    boxShadow: 'none',
                                                                                    width: '380px'
                                                                                }}>
                                                                                    <button className="close-button" style={{
                                                                                        position: 'absolute',
                                                                                        top: '1px',
                                                                                        right: '19px',
                                                                                        padding: '2px 17px',
                                                                                        background: 'none',
                                                                                        border: 0,
                                                                                        fontSize: '18px',
                                                                                        cursor: 'pointer'
                                                                                    }}>
                                                                                        <span className="fas fa-times" aria-hidden="true"></span>
                                                                                        <span className="sr-only">Close menu</span>
                                                                                    </button>
                                                                                    <div className="container">
                                                                                        <div className="row">
                                                                                            <div className="col-sm-2">
                                                                                                <div className="category-heading">Shop By Cut</div>
                                                                                            </div>

                                                                                            <div className="col-sm-2">
                                                                                                <div className="category-heading">Shop By Type</div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row">
                                                                                            <div className="col-sm-2">
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

                                                                                            <div className="col-sm-2">
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
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>

                                                                            <li className="nav-item js-dropdown">
                                                                                <button className="js-dropdown__btn" aria-expanded="false" id="header-nav-lamb">
                                                                                    LAMB

                                                                                </button>
                                                                                <div className="header-dropdown-menu dropdown-menu js-dropdown__body" id="header-navbar" style={{
                                                                                    left: 'auto',
                                                                                    right: 'auto',
                                                                                    marginTop: '-7px',
                                                                                    padding: '30px 0',
                                                                                    border: 0,
                                                                                    borderRadius: 0,
                                                                                    backgroundColor: '#fff',
                                                                                    boxShadow: 'none',
                                                                                    width: '210px'
                                                                                }}>
                                                                                    <button className="close-button" style={{
                                                                                        position: 'absolute',
                                                                                        top: '1px',
                                                                                        right: '19px',
                                                                                        padding: '2px 17px',
                                                                                        background: 'none',
                                                                                        border: 0,
                                                                                        fontSize: '18px',
                                                                                        cursor: 'pointer'
                                                                                    }}>
                                                                                        <span className="fas fa-times" aria-hidden="true"></span>
                                                                                        <span className="sr-only">Close menu</span>
                                                                                    </button>
                                                                                    <div className="container">
                                                                                        <div className="row">
                                                                                            <div className="col-sm-3"></div>
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
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>

                                                                            <li className="nav-item js-dropdown">
                                                                                <button className="js-dropdown__btn" aria-expanded="false" id="header-nav-veal">
                                                                                    VEAL
                                                                                </button>
                                                                                <div className="header-dropdown-menu dropdown-menu js-dropdown__body" id="header-navbar" style={{
                                                                                    left: 'auto',
                                                                                    right: 'auto',
                                                                                    marginTop: '-7px',
                                                                                    padding: '30px 0',
                                                                                    border: 0,
                                                                                    borderRadius: 0,
                                                                                    backgroundColor: '#fff',
                                                                                    boxShadow: 'none',
                                                                                    width: '210px'
                                                                                }}>
                                                                                    <button className="close-button" style={{
                                                                                        position: 'absolute',
                                                                                        top: '1px',
                                                                                        right: '19px',
                                                                                        padding: '2px 17px',
                                                                                        background: 'none',
                                                                                        border: 0,
                                                                                        fontSize: '18px',
                                                                                        cursor: 'pointer'
                                                                                    }}>
                                                                                        <span className="fas fa-times" aria-hidden="true"></span>
                                                                                        <span className="sr-only">Close menu</span>
                                                                                    </button>
                                                                                    <div className="container">
                                                                                        <div className="row">
                                                                                            <div className="col-sm-3"></div>
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
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>

                                                                            <li className="nav-item js-dropdown">
                                                                                <button className="js-dropdown__btn" aria-expanded="false" id="header-nav-pork">
                                                                                    PORK

                                                                                </button>
                                                                                <div className="header-dropdown-menu dropdown-menu js-dropdown__body" id="header-navbar" style={{
                                                                                    left: 'auto',
                                                                                    right: 'auto',
                                                                                    marginTop: '-7px',
                                                                                    padding: '30px 0',
                                                                                    border: 0,
                                                                                    borderRadius: 0,
                                                                                    backgroundColor: '#fff',
                                                                                    boxShadow: 'none',
                                                                                    width: '210px'
                                                                                }}>
                                                                                    <button className="close-button" style={{
                                                                                        position: 'absolute',
                                                                                        top: '1px',
                                                                                        right: '19px',
                                                                                        padding: '2px 17px',
                                                                                        background: 'none',
                                                                                        border: 0,
                                                                                        fontSize: '18px',
                                                                                        cursor: 'pointer'
                                                                                    }}>
                                                                                        <span className="fas fa-times" aria-hidden="true"></span>
                                                                                        <span className="sr-only">Close menu</span>
                                                                                    </button>
                                                                                    <div className="container">
                                                                                        <div className="row">
                                                                                            <div className="col-sm-3"></div>
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
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>

                                                                            <li className="nav-item js-dropdown">

                                                                                <button className="js-dropdown__btn" aria-expanded="false" id="header-nav-game">
                                                                                    GAME

                                                                                </button>
                                                                                <div className="header-dropdown-menu dropdown-menu js-dropdown__body" id="header-navbar" style={{
                                                                                    left: 'auto',
                                                                                    right: 'auto',
                                                                                    marginTop: '-7px',
                                                                                    padding: '30px 0',
                                                                                    border: 0,
                                                                                    borderRadius: 0,
                                                                                    backgroundColor: '#fff',
                                                                                    boxShadow: 'none',
                                                                                    width: '210px'
                                                                                }}>
                                                                                    <button className="close-button" style={{
                                                                                        position: 'absolute',
                                                                                        top: '1px',
                                                                                        right: '19px',
                                                                                        padding: '2px 17px',
                                                                                        background: 'none',
                                                                                        border: 0,
                                                                                        fontSize: '18px',
                                                                                        cursor: 'pointer'
                                                                                    }}>
                                                                                        <span className="fas fa-times" aria-hidden="true"></span>
                                                                                        <span className="sr-only">Close menu</span>
                                                                                    </button>
                                                                                    <div className="container">
                                                                                        <div className="row">
                                                                                            <div className="col-sm-3"></div>
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
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>

                                                                            <li className="nav-item js-dropdown">
                                                                                <button className="js-dropdown__btn" aria-expanded="false" id="header-nav-seafood-and-fish">
                                                                                    SEAFOOD

                                                                                </button>
                                                                                <div className="header-dropdown-menu dropdown-menu js-dropdown__body" id="header-navbar" style={{
                                                                                    left: 'auto',
                                                                                    right: 'auto',
                                                                                    marginTop: '-7px',
                                                                                    padding: '30px 0',
                                                                                    border: 0,
                                                                                    borderRadius: 0,
                                                                                    backgroundColor: '#fff',
                                                                                    boxShadow: 'none',
                                                                                    width: '210px'
                                                                                }}>
                                                                                    <button className="close-button" style={{
                                                                                        position: 'absolute',
                                                                                        top: '1px',
                                                                                        right: '19px',
                                                                                        padding: '2px 17px',
                                                                                        background: 'none',
                                                                                        border: 0,
                                                                                        fontSize: '18px',
                                                                                        cursor: 'pointer'
                                                                                    }}>
                                                                                        <span className="fas fa-times" aria-hidden="true"></span>
                                                                                        <span className="sr-only">Close menu</span>
                                                                                    </button>
                                                                                    <div className="container">
                                                                                        <div className="row">
                                                                                            <div className="col-sm-3"></div>
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
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </li>

                                                                            <li className="nav-item js-dropdown">
                                                                                <button className="js-dropdown__btn" aria-expanded="false" id="header-nav-poultry">
                                                                                    POULTRY

                                                                                </button>
                                                                                <div className="header-dropdown-menu dropdown-menu js-dropdown__body" id="header-navbar" style={{
                                                                                    left: 'auto',
                                                                                    right: 'auto',
                                                                                    marginTop: '-7px',
                                                                                    padding: '30px 0',
                                                                                    border: 0,
                                                                                    borderRadius: 0,
                                                                                    backgroundColor: '#fff',
                                                                                    boxShadow: 'none',
                                                                                    width: '210px'
                                                                                }}>
                                                                                    <button className="close-button" style={{
                                                                                        position: 'absolute',
                                                                                        top: '1px',
                                                                                        right: '19px',
                                                                                        padding: '2px 17px',
                                                                                        background: 'none',
                                                                                        border: 0,
                                                                                        fontSize: '18px',
                                                                                        cursor: 'pointer'
                                                                                    }}>
                                                                                        <span className="fas fa-times" aria-hidden="true"></span>
                                                                                        <span className="sr-only">Close menu</span>
                                                                                    </button>
                                                                                    <div className="container">
                                                                                        <div className="row">
                                                                                            <div className="col-sm-3"></div>
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
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </li>
                                                                            <li className="nav-item js-dropdown">
                                                                                <button className="js-dropdown__btn" aria-expanded="false" id="header-nav-assortments">
                                                                                    GIFTS &amp; BUNDLES
                                                                                </button>
                                                                                <div className="header-dropdown-menu dropdown-menu js-dropdown__body" id="header-navbar" style={{
                                                                                    left: 'auto',
                                                                                    right: 'auto',
                                                                                    marginTop: '-7px',
                                                                                    padding: '30px 0',
                                                                                    border: 0,
                                                                                    borderRadius: 0,
                                                                                    backgroundColor: '#fff',
                                                                                    boxShadow: 'none',
                                                                                    width: '300px'
                                                                                }}>
                                                                                    <button className="close-button" style={{
                                                                                        position: 'absolute',
                                                                                        top: '1px',
                                                                                        right: '19px',
                                                                                        padding: '2px 17px',
                                                                                        background: 'none',
                                                                                        border: 0,
                                                                                        fontSize: '18px',
                                                                                        cursor: 'pointer'
                                                                                    }}>
                                                                                        <span className="fas fa-times" aria-hidden="true"></span>
                                                                                        <span className="sr-only">Close menu</span>
                                                                                    </button>
                                                                                    <div className="container">
                                                                                        <div className="row">
                                                                                            <div className="col-sm-3"></div>
                                                                                        </div>
                                                                                        <div className="row">
                                                                                            <div className="col-sm-4">
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
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>

                                                                            <li className="nav-item js-dropdown">
                                                                                <button className="js-dropdown__btn" aria-expanded="false" id="header-nav-10901">
                                                                                    MORE
                                                                                </button>
                                                                                <div className="header-dropdown-menu dropdown-menu js-dropdown__body" id="header-navbar" style={{
                                                                                    left: 'auto',
                                                                                    right: 'auto',
                                                                                    marginTop: '-7px',
                                                                                    padding: '30px 0',
                                                                                    border: 0,
                                                                                    borderRadius: 0,
                                                                                    backgroundColor: '#fff',
                                                                                    boxShadow: 'none',
                                                                                    width: '210px'
                                                                                }}>
                                                                                    <button className="close-button" style={{
                                                                                        position: 'absolute',
                                                                                        top: '1px',
                                                                                        right: '19px',
                                                                                        padding: '2px 17px',
                                                                                        background: 'none',
                                                                                        border: 0,
                                                                                        fontSize: '18px',
                                                                                        cursor: 'pointer'
                                                                                    }}>
                                                                                        <span className="fas fa-times" aria-hidden="true"></span>
                                                                                        <span className="sr-only">Close menu</span>
                                                                                    </button>
                                                                                    <div className="container">
                                                                                        <div className="row">
                                                                                            <div className="col-sm-3"></div>
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
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </nav> */}
                                                                <div className="align-self-center hidden-print">
                                                                    <ul className="list-inline header-actions d-flex flex-no-wrap head-actn">
                                                                        <li className="list-inline-item dropdown header-actions-account">
                                                                            <a className="dropdown-toggle outline-change aria-expand" id="accountlink" href="#" data-target="dropdown" data-toggle="dropdown" role="button" aria-label="User" aria-haspopup="true" aria-expanded="false">
                                                                                <i className="icon icon-user fas fa-user-circle"></i>
                                                                            </a>
                                                                            <ul className="dropdown-menu dropdown-menu-center dropdown-menu-arrow">
                                                                                <li>
                                                                                    <a href="/registration">Register</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" data-toggle="modal" data-target="#loginModal" data-backdrop="static">Log In</a>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                        <li className="list-inline-item header-actions-cart dropdown fast-order js-minicart-toggle">
                                                                            <a className="dropdown-toggle outline-change" id="cartlink" href="#" data-target="dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-label="Cart 0 items" aria-expanded="false">
                                                                                <i aria-hidden="true" className="icon icon-cart fas fa-shopping-cart" tabindex="0">
                                                                                    <span className="cart-val">
                                                                                        <span className="sr-only">quantity of items in your cart: 0</span>
                                                                                        <div aria-hidden="true" className="cart-counter" style={{
                                                                                            fontSize: '14px',
                                                                                            border: 'none',
                                                                                            cursor: 'pointer',
                                                                                            outline: 'none',
                                                                                            /* display: block; */
                                                                                        }}>0</div>
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
                                                                                            <label className="sr-only" for="headerFormInputSearch">Search</label>
                                                                                            <div className="input-group">
                                                                                                <input className="ab-search form-control-search js-search__input search-input" type="text" id="headerFormInputSearch" data-search-min="1" autocomplete="off" placeholder="Search" />
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
                                                            <div className="form-group" tabindex="0">
                                                                <input className="form-control formControl-input form-control-search js-search-mobile-input" type="text" id="search_mobile" aria-label="Search" aria-autocomplete="list" aria-controls="productresults" aria-haspopup="listbox" aria-activedescendant="instructions" aria-describedby="instructions" aria-expanded="false" autocomplete="off" placeholder="Search" />
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
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
