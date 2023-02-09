import React from 'react';
import LevelTwoItem from './level-2-item';

export default function LevelOneItem(props) {
  const { headerType, rootCatagories } = props;
  const navContainerClass = headerType === 'nonHome' ? 'container' : '';
  let headerDropdownMenuClass = 'header-dropdown-menu dropdown-menu js-dropdown__body';
  headerDropdownMenuClass = headerType === 'home'
    ? `${headerDropdownMenuClass} homeDropdownMenu` : headerDropdownMenuClass;

  const toggleHeaderDropdownMenu = (event, displayHeaderMenu) => {
    const navEl = event.target.closest('.navListItems').querySelector('.header-dropdown-menu.dropdown-menu');
    if (displayHeaderMenu === 'show') {
      navEl.classList.add('open');
    } else {
      navEl.classList.remove('open');
    }
  };
  const mouseOverOnNav = (event) => toggleHeaderDropdownMenu(event, 'show');
  const mouseOutOnNav = (event) => toggleHeaderDropdownMenu(event, 'hide');

  const navElementsCloseBtnHandler = () => {
    const openNav = document.querySelector('.header-dropdown-menu.dropdown-menu.open');
    openNav.classList.remove('open');
  };

  const renderLevel1Item = (item, i) => {
    const navItem = item.name;
    return (
      <li
        key={`navEl-${i}`}
        className="nav-item js-dropdown navListItems"
        onMouseEnter={(e) => mouseOverOnNav(e)}
        onMouseLeave={(e) => mouseOutOnNav(e)}
      >
        {headerType === 'nonHome'
          ? <a className="js-dropdown__btn" href="/category/shop-beef" id={`header-nav-${navItem}`}>{navItem}</a>
          : (
            <button className="js-dropdown__btn" aria-expanded="false" id="header-nav-beef">
              {navItem}
            </button>
          )}
        <div className={headerDropdownMenuClass} id="header-navbar">
          {headerType === 'home'
            ? (
              <button
                onClick={() => navElementsCloseBtnHandler()}
                className="close-button"
                type="button"
                style={{
                  position: 'absolute',
                  top: '1px',
                  right: '19px',
                  padding: '2px 17px',
                  background: 'none',
                  border: 0,
                  fontSize: '18px',
                  cursor: 'pointer',
                }}
              >
                <span className="fas fa-times" aria-hidden="true"></span>
                <span className="sr-only">Close menu</span>
              </button>
            )
            : null}
          <LevelTwoItem
            catItem={item}
            headerType={headerType}
          />
        </div>
      </li>
    );
  };
  return (
    <nav className="navbar">
      <div className={navContainerClass}>
        <ul className="navbar-nav nav">
          {rootCatagories?.map((item, i) => renderLevel1Item(item, i))}
        </ul>
      </div>
    </nav>
  );
}
