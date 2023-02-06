import React from "react";

export default function MobileNav(props) {
    console.log("Mobile Nav Object:::::::", props.mobileNavObj);
    const isMobileMenuOpen = props.mobileNavObj?.mobileNavMenu === true ? "open" : "";
    const mobileMenuClass = "mobile-menu mobile-menu-left js-mobile-menu " + isMobileMenuOpen;
    return (
        <div className={mobileMenuClass} id="mobileNav">
            <div role="dialog" aria-modal="true" aria-labelledby="heading-nav" id="dgbox">
                <nav className="navbar-mobile-menu">
                    <button className="navbar-toggle js-mobile-menu-toggle outline-change first-focusable-element" id="firstFElement" type="button" onClick={()=> props.mobileNavObj.setMobileNavMenu}>
                        <span className="sr-only" data-bind="widgetLocaleText: 'toggleNavigation'">Toggle navigation</span>
                        <i className="icon icon-x fas fa-times outline-change"></i>
                    </button>
                    <div data-bind="css: { 'closed': $data.activeMobileNav() }" className="mobile-menu__level js-mobile-menu-level" data-level="0">
                        <div className="mobile-menu-list">
                            <div className="navbar-header">
                                <div className="mobile-menu__back outline-change" id="mainmenu">
                                    <h1 id="heading-nav" className="navbar-title text-elipsis" data-bind="widgetLocaleText: 'menu'">Menu</h1>
                                </div>
                            </div>
                            <ul className="aside-nav">
                                <li>
                                    <a data-bind="click: $parent.openMobileSubNav.bind($parent, $data)" tabindex="0" className="dropdown-toggle mobile-menu__btn js-mobile-menu-btn" href="#" id="mainMenuElem">
                                        <span className="navbar-title text-elipsis" data-bind="text: $data.displayName">Beef</span>
                                        <span className="i fas fa-chevron-right icon icon-chevron-right"></span>
                                    </a>
                                </li>

                                <li>
                                    <a data-bind="click: $parent.openMobileSubNav.bind($parent, $data)" tabindex="0" className="dropdown-toggle mobile-menu__btn js-mobile-menu-btn" href="#" id="mainMenuElem">
                                        <span className="navbar-title text-elipsis" data-bind="text: $data.displayName">Lamb</span>
                                        <span className="i fas fa-chevron-right icon icon-chevron-right"></span>
                                    </a>
                                </li>

                                <li>
                                    <a data-bind="click: $parent.openMobileSubNav.bind($parent, $data)" tabindex="0" className="dropdown-toggle mobile-menu__btn js-mobile-menu-btn" href="#" id="mainMenuElem">
                                        <span className="navbar-title text-elipsis" data-bind="text: $data.displayName">Veal</span>
                                        <span className="i fas fa-chevron-right icon icon-chevron-right"></span>
                                    </a>
                                </li>

                                <li>
                                    <a data-bind="click: $parent.openMobileSubNav.bind($parent, $data)" tabindex="0" className="dropdown-toggle mobile-menu__btn js-mobile-menu-btn" href="#" id="mainMenuElem">
                                        <span className="navbar-title text-elipsis" data-bind="text: $data.displayName">Pork</span>
                                        <span className="i fas fa-chevron-right icon icon-chevron-right"></span>
                                    </a>
                                </li>

                                <li>
                                    <a data-bind="click: $parent.openMobileSubNav.bind($parent, $data)" tabindex="0" className="dropdown-toggle mobile-menu__btn js-mobile-menu-btn" href="#" id="mainMenuElem">
                                        <span className="navbar-title text-elipsis" data-bind="text: $data.displayName">Game</span>
                                        <span className="i fas fa-chevron-right icon icon-chevron-right"></span>
                                    </a>
                                </li>

                                <li>
                                    <a data-bind="click: $parent.openMobileSubNav.bind($parent, $data)" tabindex="0" className="dropdown-toggle mobile-menu__btn js-mobile-menu-btn" href="#" id="mainMenuElem">
                                        <span className="navbar-title text-elipsis" data-bind="text: $data.displayName">Seafood</span>
                                        <span className="i fas fa-chevron-right icon icon-chevron-right"></span>
                                    </a>
                                </li>

                                <li>
                                    <a data-bind="click: $parent.openMobileSubNav.bind($parent, $data)" tabindex="0" className="dropdown-toggle mobile-menu__btn js-mobile-menu-btn" href="#" id="mainMenuElem">
                                        <span className="navbar-title text-elipsis" data-bind="text: $data.displayName">Poultry</span>
                                        <span className="i fas fa-chevron-right icon icon-chevron-right"></span>
                                    </a>
                                </li>

                                <li>
                                    <a data-bind="click: $parent.openMobileSubNav.bind($parent, $data)" tabindex="0" className="dropdown-toggle mobile-menu__btn js-mobile-menu-btn" href="#" id="mainMenuElem">
                                        <span className="navbar-title text-elipsis" data-bind="text: $data.displayName">Gifts &amp; Bundles</span>
                                        <span className="i fas fa-chevron-right icon icon-chevron-right"></span>
                                    </a>
                                </li>

                                <li>
                                    <a data-bind="click: $parent.openMobileSubNav.bind($parent, $data)" tabindex="0" className="dropdown-toggle mobile-menu__btn js-mobile-menu-btn" href="#" id="mainMenuElem">
                                        <span className="navbar-title text-elipsis" data-bind="text: $data.displayName">More</span>
                                        <span className="i fas fa-chevron-right icon icon-chevron-right"></span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="aside-bottom-nav list-unstyled">
                                <li>
                                    <a data-bind="attr: {'href' : $data.headerLink1URL()}, click: $data.goToPage.bind($data, $data.headerLink1URL())" href="/catalog/on-sale">
                                        <i className="icon icon-tags fas fa-tags"></i>
                                        <span data-bind="widgetLocaleText: 'headerLink1Text'">ON SALE</span>
                                    </a>
                                </li>
                                <li>
                                    <a data-bind="attr: {'href' : $data.headerLink2URL()}, click: $data.goToPage.bind($data, $data.headerLink2URL())" href="/content/cooking-guides">
                                        <i className="icon icon-book fas fa-book-open"></i>
                                        <span data-bind="widgetLocaleText: 'headerLink2Text'">COOKING GUIDE</span>
                                    </a>
                                </li>
                                <li>
                                    <a data-bind="attr: {'href' : $data.headerLink3URL()}, click: $data.goToPage.bind($data, $data.headerLink3URL())" href="/gift-info">
                                        <i className="icon icon-gift fas fa-gift"></i>
                                        <span data-bind="widgetLocaleText: 'headerLink3Text'">Gift Center</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="last-focusable-element" id="lastFElement" data-bind="attr: {'href' : 'tel:'+headerPhoneNumber()}" href="tel:1-800-957-0111">
                                        <i className="icon icon-phone fas fa-phone"></i>
                                        1-800-957-0111
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mobile-menu__level js-mobile-menu-level" data-level="1">
                        <div data-bind="css: { 'active': $parent.activeMobileNav() === $data.id }" className="mobile-submenu js-mobile-submenu">
                            <div className="navbar-header">
                                <a data-bind="click: $parent.backToMainMobileNav" tabindex="-1" className="mobile-menu__back js-mobile-menu-back submenu" href="#">
                                    <em className="icon icon-chevron-left fas fa-chevron-left"></em>
                                    <span className="navbar-title text-elipsis" data-bind="text: $data.displayName">Beef</span>
                                </a>
                            </div>
                            <ul className="aside-nav mobile-submenu__body">
                                <li>
                                    <a data-bind="ccLink: $data, click: $parent.closeMobileNavigation" href="/category/shop-beef">Beef</a>
                                </li>
                                <li>
                                    <h2 className="mobile-submenu__title text-elipsis" data-bind="text: $data.displayName">Shop By Cut</h2>
                                </li>
                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[2].closeMobileNavigation" href="/shop-by-cut/filet-mignon">Filet Mignon</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[2].closeMobileNavigation" href="/shop-by-cut/strip-steak">Strip Steak</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[2].closeMobileNavigation" href="/shop-by-cut/ribeye">Ribeye</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[2].closeMobileNavigation" href="/shop-by-cut/porterhouse">Porterhouse</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[2].closeMobileNavigation" href="/shop-by-cut/roasts">Beef Roasts</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[2].closeMobileNavigation" href="/shop-by-cut/beef-assortments">Beef Assortments</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[2].closeMobileNavigation" href="/shop-by-cut/steak-burgers">Steak Burgers</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[2].closeMobileNavigation" href="/shop-by-cut/gourmet-hot-dogs">Gourmet Hot Dogs</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[2].closeMobileNavigation" href="/shop-by-cut/butchers-selections">Butcher's Selections</a>
                                </li>
                                <li>
                                    <h2 className="mobile-submenu__title text-elipsis" data-bind="text: $data.displayName">Shop By Type</h2>
                                </li>
                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[2].closeMobileNavigation" href="/shop-by-type/usda-prime">USDA Prime</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[2].closeMobileNavigation" href="/shop-by-type/dry-aged-beef">Dry Aged</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[2].closeMobileNavigation" href="/shop-by-type/wagyu">Wagyu / Japanese</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[2].closeMobileNavigation" href="/shop-by-type/grass-fed-beef">Grass-Fed</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[2].closeMobileNavigation" href="/shop-by-type/natural-beef">All-Natural</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[2].closeMobileNavigation" href="/shop-by-type/wet-aged-beef">Wet Aged</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[2].closeMobileNavigation" href="/shop-by-type/angus">Angus</a>
                                </li>
                            </ul>
                        </div>

                        <div data-bind="css: { 'active': $parent.activeMobileNav() === $data.id }" className="mobile-submenu js-mobile-submenu">
                            <div className="navbar-header">
                                <a data-bind="click: $parent.backToMainMobileNav" tabindex="-1" className="mobile-menu__back js-mobile-menu-back submenu" href="#">
                                    <em className="icon icon-chevron-left fas fa-chevron-left"></em>
                                    <span className="navbar-title text-elipsis" data-bind="text: $data.displayName">Lamb</span>
                                </a>
                            </div>
                            <ul className="aside-nav mobile-submenu__body">
                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/lamb/lamb-chops">Lamb Chops</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/lamb/lamb-rack-roast">Lamb Racks &amp; Roasts</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/lamb/lamb-shanks">Lamb Shanks</a>
                                </li>
                            </ul>
                        </div>

                        <div data-bind="css: { 'active': $parent.activeMobileNav() === $data.id }" className="mobile-submenu js-mobile-submenu">
                            <div className="navbar-header">
                                <a data-bind="click: $parent.backToMainMobileNav" tabindex="-1" className="mobile-menu__back js-mobile-menu-back submenu" href="#">
                                    <em className="icon icon-chevron-left fas fa-chevron-left"></em>
                                    <span className="navbar-title text-elipsis" data-bind="text: $data.displayName">Veal</span>
                                </a>
                            </div>
                            <ul className="aside-nav mobile-submenu__body">
                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/veal/veal-chops">Veal Chops</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/veal/veal-roasts">Veal Roasts</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/veal/veal-shanks">Veal Shanks</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/veal/veal-slices">Veal Slices</a>
                                </li>
                            </ul>
                        </div>

                        <div data-bind="css: { 'active': $parent.activeMobileNav() === $data.id }" className="mobile-submenu js-mobile-submenu">
                            <div className="navbar-header">
                                <a data-bind="click: $parent.backToMainMobileNav" tabindex="-1" className="mobile-menu__back js-mobile-menu-back submenu" href="#">
                                    <em className="icon icon-chevron-left fas fa-chevron-left"></em>
                                    <span className="navbar-title text-elipsis" data-bind="text: $data.displayName">Pork</span>
                                </a>
                            </div>
                            <ul className="aside-nav mobile-submenu__body">
                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/pork/pork-chops">Pork Chops</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/pork/pork-ribs">Pork Ribs</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/pork/pork-roasts">Pork Roasts</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/pork/pork-belly-bacon">Bacon &amp; Belly</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/pork/pork-ham">Ham</a>
                                </li>
                            </ul>
                        </div>

                        <div data-bind="css: { 'active': $parent.activeMobileNav() === $data.id }" className="mobile-submenu js-mobile-submenu">
                            <div className="navbar-header">
                                <a data-bind="click: $parent.backToMainMobileNav" tabindex="-1" className="mobile-menu__back js-mobile-menu-back submenu" href="#">
                                    <em className="icon icon-chevron-left fas fa-chevron-left"></em>
                                    <span className="navbar-title text-elipsis" data-bind="text: $data.displayName">Game</span>
                                </a>
                            </div>
                            <ul className="aside-nav mobile-submenu__body">
                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/game/bison">Bison</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/game/elk">Elk</a>
                                </li>
                            </ul>
                        </div>

                        <div data-bind="css: { 'active': $parent.activeMobileNav() === $data.id }" className="mobile-submenu js-mobile-submenu">
                            <div className="navbar-header">
                                <a data-bind="click: $parent.backToMainMobileNav" tabindex="-1" className="mobile-menu__back js-mobile-menu-back submenu" href="#">
                                    <em className="icon icon-chevron-left fas fa-chevron-left"></em>
                                    <span className="navbar-title text-elipsis" data-bind="text: $data.displayName">Seafood</span>
                                </a>
                            </div>
                            <ul className="aside-nav mobile-submenu__body">
                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/seafood/fish">Fish</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/seafood/shellfish">Shellfish</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/seafood/caviar">Caviar</a>
                                </li>
                            </ul>
                        </div>

                        <div data-bind="css: { 'active': $parent.activeMobileNav() === $data.id }" className="mobile-submenu js-mobile-submenu">
                            <div className="navbar-header">
                                <a data-bind="click: $parent.backToMainMobileNav" tabindex="-1" className="mobile-menu__back js-mobile-menu-back submenu" href="#">
                                    <em className="icon icon-chevron-left fas fa-chevron-left"></em>
                                    <span className="navbar-title text-elipsis" data-bind="text: $data.displayName">Poultry</span>
                                </a>
                            </div>
                            <ul className="aside-nav mobile-submenu__body">
                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/poultry/chicken">Chicken</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/poultry/turkey">Turkey</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/poultry/duck">Duck</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/poultry/quail">Quail</a>
                                </li>
                            </ul>
                        </div>

                        <div data-bind="css: { 'active': $parent.activeMobileNav() === $data.id }" className="mobile-submenu js-mobile-submenu">
                            <div className="navbar-header">
                                <a data-bind="click: $parent.backToMainMobileNav" tabindex="-1" className="mobile-menu__back js-mobile-menu-back submenu" href="#">
                                    <em className="icon icon-chevron-left fas fa-chevron-left"></em>
                                    <span className="navbar-title text-elipsis" data-bind="text: $data.displayName">Gifts &amp; Bundles</span>
                                </a>
                            </div>
                            <ul className="aside-nav mobile-submenu__body">
                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/gifts-bundles/shop-gift-cards">Gift Cards</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/gifts-bundles/grilling-assortments">Grilling</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/gifts-bundles/variety-assortments">Variety</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/gifts-bundles/surf-and-turf-assortments">Surf &amp; Turf</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/gifts-bundles/favorite-assortments">Favorites</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/gifts-bundles/gifts-of-the-month">Steak of The Month Subscriptions</a>
                                </li>
                            </ul>
                        </div>

                        <div data-bind="css: { 'active': $parent.activeMobileNav() === $data.id }" className="mobile-submenu js-mobile-submenu">
                            <div className="navbar-header">
                                <a data-bind="click: $parent.backToMainMobileNav" tabindex="-1" className="mobile-menu__back js-mobile-menu-back submenu" href="#">
                                    <em className="icon icon-chevron-left fas fa-chevron-left"></em>
                                    <span className="navbar-title text-elipsis" data-bind="text: $data.displayName">More</span>
                                </a>
                            </div>
                            <ul className="aside-nav mobile-submenu__body">
                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/more/pantry-items">Pantry Items</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/more/prepared-foods">Prepared Foods</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/more/desserts">Desserts</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/more/appetizers">Appetizers</a>
                                </li>

                                <li>
                                    <a data-bind="ccLink: $data, click: $parents[1].closeMobileNavigation" href="/more/fresh-truffles">Fresh Truffles</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="page-overlay js-overlay"></div>
        </div>
    )
}
