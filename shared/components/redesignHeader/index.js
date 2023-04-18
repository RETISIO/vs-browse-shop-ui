import React, { Component } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import MobileHeaderLogo, { MobileNavBar } from './mobileNew/mobileHeader';
import MiniCartIcon from './miniCartIcon';
import Navbar from './navbar';
import MobileNavLevelOneItem from './mobileNew/mobileNav-level-1-item';

class RedesignHeader extends Component {
    constructor(props) {
        super(props);
        this.setStick = this.setStick.bind(this);
        this.state = {
            sticky: '',
            mobileNavMenu: false,
            isSearchBoxOpen: false,
            searchText: '',
            phoneNumMenu: false,
            mobileSearchMenu: false,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.setStick);
        const mobileNavMenuEl = document.querySelector('#mobile-nav-menu-toggle');
        mobileNavMenuEl.addEventListener('click', this.mobileNavMenuHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.setStick);
        const mobileNavMenuEl = document.querySelector('#mobile-nav-menu-toggle');
        mobileNavMenuEl.removeEventListener('click', this.mobileNavMenuHandler);
    }

    setStick() {
        if (window.scrollY >= 50) {
            if (!this.state.sticky) {
                this.setState({ sticky: true });
            }
        } else if (this.state.sticky) {
            this.setState({ sticky: false });
        }
    }

    mobileNavMenuHandler = () => {
        const { mobileNavMenu } = this.state;
        this.setState({ mobileNavMenu: !mobileNavMenu });
    };

    toggleMobileSearchBox = (event) => {
        event.preventDefault();
        const { mobileSearchMenu } = this.state;
        this.setState({ mobileSearchMenu: !mobileSearchMenu });
    };

    render() {
        const {
            isHomePage, transformText, searchAheadData, componentMap, damPath, miniCartDetails, setMiniCartDetails,
        } = this.props;
        const isHomePageContainer = isHomePage === 'Home' ? 'homePageHeader' : 'nonHomePageHeader';
        const {
            isSearchBoxOpen, searchText,mobileSearchMenu,
        } = this.state;
        const searchBoxClassName = isSearchBoxOpen ? 'show' : '';
        const searchBoxActive = isSearchBoxOpen ? 'active' : '';
        let showSearchAheadDataMenu = '';
        if (isSearchBoxOpen && searchAheadData?.productsRes && searchText.length > 2) {
            showSearchAheadDataMenu = 'show';
        }
        return (
            <>
                <div className="home-header-container">
                    <main className={`page-row page-row-expanded ${isHomePageContainer}`}>
                        <div id="main" className="">
                            <div className="row">
                                <div className="redBox">
                                    <div className="col-sm-12" id="region-re1700017">
                                        <div id="ALLN-Header_v4-wi2700015">
                                            <div className="page-overlay js-overlay"></div>
                                            <div className="page-main row-full">
                                                <div id="header" style={{ width: '100%' }}>
                                                    <MobileHeaderLogo />
                                                    <div className={this.state.sticky ? 'header-sticky js-sticky-menu is_stuck' : 'header-sticky js-sticky-menu'}>
                                                        <MobileNavBar toggleMobileSearchBox={this.toggleMobileSearchBox} mobileSearchMenu={mobileSearchMenu} />
                                                        <div className="header-content-redesign hidden-xs">
                                                            <div className="container-navmenubar-redesign">
                                                                <div className="header-content-inner-redesign d-flex flex-row ab-flex-row row">
                                                                    <div className="align-self-center col-xs-4 col-md-3" id="logoMain">
                                                                        <a id="logo-redesign" href="/">
                                                                            <img
                                                                                alt="Allen Brothers"
                                                                                src={this.props?.appData?.channelData?.additionalSettings?.appLogo ? this.props.appData.channelData.additionalSettings.appLogo : 'https://www.allenbrothers.com/file/v4970033961931790421/general/Allen-Brothers-Logo-white-528x72.png'}
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                    <div id="header-1-redesign" className="header col-xs-4 col-md-6">
                                                                        <div className="search-box-redesign">
                                                                            <div className="align-self-center header-search-new js-search hidden-print">
                                                                                <form className="header-search-form-redesign" autoComplete="off" action="/search" id="search-form" onSubmit={(e) => this.searchFromSubmit(e)}>
                                                                                    <label className="sr-only" htmlFor="headerFormInputSearch">Search</label>
                                                                                    <div className="input-group">
                                                                                        <input
                                                                                            className="ab-search-redesign form-control-search js-search__input search-input"
                                                                                            type="text"
                                                                                            id="headerFormInputSearch"
                                                                                            data-search-min="1"
                                                                                            autoComplete="off"
                                                                                            placeholder="Type your desired meat or dish to find the best"
                                                                                            name="submit-search"
                                                                                        />
                                                                                        <div className="btn-new searchProducts ab-searchProducts-redesign">
                                                                                            <i className="icon icon-search fa fa-search" aria-hidden="true"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="align-self-center hidden-print icon-redesign col-xs-4 col-md-3">
                                                                        <ul className="list-inline header-actions-redesign d-flex flex-no-wrap head-actn">
                                                                            <li className="list-inline-item dropdown header-actions-account headerDropdown" style={{ top: '12px' }}>
                                                                                <i className="icon icon-user fas fa-user-circle"></i>
                                                                            </li>
                                                                            <div className="label-redesign">
                                                                                <span>My Account</span>
                                                                            </div>

                                                                            <div className="label-redesign">
                                                                                <span>|</span>
                                                                            </div>

                                                                            <MiniCartIcon {...this.props} />
                                                                            <div className="label-redesign">
                                                                                <span>My Cart</span>
                                                                            </div>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Collapse in={mobileSearchMenu}>
                                                            <div className="" id="page-header__search-box">
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
                                                        </Collapse>
                                                        <Navbar
                                                            rootCatagories={this.props.rootCatagories}
                                                            miniCartDetails={miniCartDetails}
                                                            setMiniCartDetails={setMiniCartDetails}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <MobileNavLevelOneItem
                                    mobileNavMenu={this.state.mobileNavMenu}
                                    setMobileNavMenu={this.mobileNavMenuHandler}
                                    rootCatagories={this.props.rootCatagories}
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </>
        );
    }
}
export default RedesignHeader;