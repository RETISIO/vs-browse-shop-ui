/* eslint-disable no-use-before-define */
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
import React, { Component } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import LevelOneItem from './level-1-item';
import MobileHeaderLogo, { MobileNavBar } from './mobile/mobileHeader';
import HeaderAccountActionLinks from './dropdown';
import MobileNavLevelOneItem from './mobile/mobileNav-level-1-item';
import SearchAheadResults from './searchAheadResults';
import MiniCartIcon from './miniCartIcon';
import RedesignHeader from '../redesignHeader';
import PromoBanner from '../promoBanner';

class HomeHeader extends Component {
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

  toggleSearchBox = (event) => {
    event.preventDefault();
    const { isSearchBoxOpen } = this.state;
    this.setState(
      { isSearchBoxOpen: !isSearchBoxOpen },
      () => {
        document.getElementById('headerFormInputSearch').focus();
        if (!isSearchBoxOpen) { this.props.searchAheadChangeHandler(''); }
      },
    );
  };

  toggleMobileSearchBox = (event) => {
    event.preventDefault();
    const { mobileSearchMenu } = this.state;
    this.setState({ mobileSearchMenu: !mobileSearchMenu });
  };

  togglePhoneNum = (event) => {
    event.preventDefault();
    const { phoneNumMenu } = this.state;
    this.setState({ phoneNumMenu: !phoneNumMenu });
  };

  searchHandleChange = (event) => {
    const { value } = event.target;
    this.setState({ searchText: value });
    this.props.searchAheadChangeHandler(value);
  };

  searchFromSubmit = (event) => {
    event.preventDefault();
    if (this.state.searchText.trim().length) {
      document.getElementById('search-form').submit();
    }
  };

  render() {
    const {
      isHomePage, transformText, searchAheadData, componentMap, damPath, miniCartDetails, setMiniCartDetails,
    } = this.props;
    const {
      isSearchBoxOpen, searchText, phoneNumMenu, mobileSearchMenu,
    } = this.state;
    const isHomePageContainer = isHomePage === 'Home' ? 'homePageHeader' : 'nonHomePageHeader';
    const searchBoxClassName = isSearchBoxOpen ? 'show' : '';
    const searchBoxActive = isSearchBoxOpen ? 'active' : '';
    let showSearchAheadDataMenu = '';
    if (isSearchBoxOpen && searchAheadData?.productsRes && searchText.length > 2) {
      showSearchAheadDataMenu = 'show';
    }
    const isphoneNumOpen = phoneNumMenu ? 'open' : '';
    
    const redesignHeader = true;
    if(redesignHeader){
      return <RedesignHeader {...this.props}/>
    }

    const promoBanner = true;
    if(PromoBanner){
      return <PromoBanner {...this.props}/>
    }

    return (
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
                          <div className="header-content hidden-xs">
                            <div className="container-navmenubar">
                              <div className="header-content-inner d-flex flex-row ab-flex-row">
                                <div className="align-self-center" id="logoMain">
                                  <a id="logo" href="/">
                                    <img
                                      alt="Allen Brothers"
                                      src={this.props?.appData?.channelData?.additionalSettings?.appLogo ? this.props.appData.channelData.additionalSettings.appLogo : 'https://www.allenbrothers.com/file/v4970033961931790421/general/Allen-Brothers-Logo-white-528x72.png'}
                                    />
                                  </a>
                                </div>
                                <LevelOneItem
                                  rootCatagories={this.props.rootCatagories}
                                  miniCartDetails={miniCartDetails}
                                  setMiniCartDetails={setMiniCartDetails}
                                />
                                <div className="align-self-center hidden-print">
                                  <ul className="list-inline header-actions d-flex flex-no-wrap head-actn">
                                    <li className="list-inline-item dropdown header-actions-account headerDropdown">
                                      <HeaderAccountActionLinks {...this.props} />
                                    </li>
                                    <MiniCartIcon {...this.props} />
                                    <li style={{ marginRight: '28px' }}>
                                      <div id="header-1" className={`header ${searchBoxClassName}`}>
                                        <div className="search-button new-sb">
                                          <a
                                            id="search-wrk"
                                            href="#"
                                            className={`search-toggle outline-change-search ${searchBoxActive}`}
                                            onClick={(e) => this.toggleSearchBox(e)}
                                          >
                                          </a>
                                        </div>

                                        <div className="search-box">
                                          <div className="align-self-center header-search-new js-search hidden-print">
                                            <form className="header-search-form" autoComplete="off" action="/search" id="search-form" onSubmit={(e) => this.searchFromSubmit(e)}>
                                              <label className="sr-only" htmlFor="headerFormInputSearch">Search</label>
                                              <div className="input-group">
                                                <input
                                                  className="ab-search form-control-search js-search__input search-input"
                                                  type="text"
                                                  id="headerFormInputSearch"
                                                  data-search-min="1"
                                                  autoComplete="off"
                                                  placeholder="Search"
                                                  onChange={this.searchHandleChange}
                                                  value={searchText}
                                                  name="submit-search"
                                                />
                                                <button
                                                  type="button"
                                                  className="input-group-btn"
                                                  onClick={(e) => this.searchFromSubmit(e)}
                                                  style={{
                                                    background: '0', width: '0', height: '0', border: '0',
                                                  }}
                                                >
                                                  <div className="btn-new searchProducts ab-searchProducts">
                                                    <i className="icon icon-search fa fa-search" aria-hidden="true"></i>
                                                  </div>
                                                </button>
                                              </div>
                                              <div className={`dropdown-menu dropdown-menu-center dropdown-menu-arrow dropdown-menu-search js-custom-height js-search__body ${showSearchAheadDataMenu}`} id="results" role="listbox" aria-labelledby="label">
                                                <SearchAheadResults
                                                  searchAheadData={searchAheadData}
                                                  transformText={transformText}
                                                  componentMap={componentMap}
                                                  damPath={damPath}
                                                />
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className={`list-inline-item dropdown header-actions-account ${isphoneNumOpen}`}>
                                      <a
                                        className="dropown-toggle outline-change aria-expand phone-num-new"
                                        id="phone-num"
                                        data-target="dropdown"
                                        data-toggle="dropdown"
                                        role="button"
                                        aria-label="phone"
                                        aria-haspopup="true"
                                        href="tel:1-800-957-0111"
                                        onClick={(e) => this.togglePhoneNum(e)}
                                      >
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
    );
  }
}
export default HomeHeader;
