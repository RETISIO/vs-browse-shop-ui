import React, { Component } from 'react';
import MobileNavLevelTwoItem from './mobileNav-level-2-item';

class MobileNavLevelOneItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileLevelOneItemOpen: false,
      activeLevel2Item: '',
    };
  }

  mobileNavCloseHandler = () => {
    this.props.setMobileNavMenu();
    this.setActiveLevel2Item('');
    this.setState({ isMobileLevelOneItemOpen: false });
  };

  toggleMobileLevelOneItem = () => {
    const { isMobileLevelOneItemOpen } = this.state;
    this.setState({ isMobileLevelOneItemOpen: !isMobileLevelOneItemOpen });
  };

  setActiveLevel2Item = (index) => {
    this.setState({ activeLevel2Item: index });
  };

  mobileLevelOneItemBtnHandler = (event) => {
    event.preventDefault();
    // console.log('Event Target child::::', event.target);
    const li = event.target.closest('.mobileMenuLevelOneItems');
    const nodes = Array.from(li.closest('ul').children);
    const index = nodes.indexOf(li);
    this.setActiveLevel2Item(index);
    this.toggleMobileLevelOneItem();
  };
  
  renderLevel1Item = (item, i) => {
    const navItem = item.name;
    return (
      <li
        key={`item-${i}`}
        className="mobileMenuLevelOneItems"
      >
        <a
          tabIndex="0"
          className="dropdown-toggle mobile-menu__btn js-mobile-menu-btn"
          onClick={(e) => this.mobileLevelOneItemBtnHandler(e)}
          href="#"
        >
          <span className="navbar-title text-elipsis">{navItem}</span>
          <span className="i fas fa-chevron-right icon icon-chevron-right"></span>
        </a>
      </li>
    );
  };

  render() {
    const { mobileNavMenu, rootCatagories } = this.props;
    const { isMobileLevelOneItemOpen, activeLevel2Item } = this.state;
    const isMobileMenuOpen = mobileNavMenu === true ? 'open' : '';
    const mobileMenuClass = `mobile-menu mobile-menu-left js-mobile-menu ${isMobileMenuOpen}`;
    const mobileMenuLevelOneClass = isMobileLevelOneItemOpen ? 'closed' : '';
    return (
      <div className={mobileMenuClass} id="mobileNav">
        <div role="dialog" aria-modal="true" aria-labelledby="heading-nav" id="dgbox">
          <nav className="navbar-mobile-menu mobileNavLevel1Item">
            <button
              className="navbar-toggle js-mobile-menu-toggle mobileNavMenuCloseBtn outline-change first-focusable-element"
              id="firstFElement"
              onClick={() => this.mobileNavCloseHandler()}
              type="button"
            >
              <span className="sr-only">Toggle navigation</span>
              <i className="icon icon-x fas fa-times outline-change"></i>
            </button>
            <div
              className={`mobile-menu__level js-mobile-menu-level mobileMenuLevelOne ${mobileMenuLevelOneClass}`}
              data-level="0"
            >
              <div className="mobile-menu-list">
                <div className="navbar-header">
                  <div className="mobile-menu__back outline-change" id="mainmenu">
                    <h1 id="heading-nav" className="navbar-title text-elipsis">Menu</h1>
                  </div>
                </div>
                <ul className="aside-nav">
                  {rootCatagories?.map((item, i) => this.renderLevel1Item(item, i))}
                </ul>
                <ul className="aside-bottom-nav list-unstyled">
                  <li>
                    <a href="/catalog/on-sale">
                      <i className="icon icon-tags fas fa-tags"></i>
                      <span data-bind="widgetLocaleText: 'headerLink1Text'">ON SALE</span>
                    </a>
                  </li>
                  <li>
                    <a href="/content/cooking-guides">
                      <i className="icon icon-book fas fa-book-open"></i>
                      <span data-bind="widgetLocaleText: 'headerLink2Text'">COOKING GUIDE</span>
                    </a>
                  </li>
                  <li>
                    <a href="/gift-info">
                      <i className="icon icon-gift fas fa-gift"></i>
                      <span data-bind="widgetLocaleText: 'headerLink3Text'">Gift Center</span>
                    </a>
                  </li>
                  <li>
                    <a className="last-focusable-element" id="lastFElement" href="tel:1-800-957-0111">
                      <i className="icon icon-phone fas fa-phone"></i>
                      1-800-957-0111
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <MobileNavLevelTwoItem
              rootCatagories={rootCatagories}
              toggleMobileLevelOneItem={this.toggleMobileLevelOneItem}
              activeLevel2Item={activeLevel2Item}
              setActiveLevel2Item={this.setActiveLevel2Item}
            />
          </nav>
        </div>
        <div className="page-overlay js-overlay"></div>
      </div>
    );
  }
}
export default MobileNavLevelOneItem;
