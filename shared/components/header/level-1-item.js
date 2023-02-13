import React from 'react';
import LevelTwoItem from './level-2-item';

export default function LevelOneItem(props) {
  const { rootCatagories } = props;
  const headerDropdownMenuClass = 'header-dropdown-menu dropdown-menu js-dropdown__body homeDropdownMenu';

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
        <button className="js-dropdown__btn" type="button" aria-expanded="false" id="header-nav-beef">
          {navItem}
        </button>
        <div className={headerDropdownMenuClass} id="header-navbar">
          <button
            onClick={() => navElementsCloseBtnHandler()}
            className="close-button"
            type="button"
          >
            <span className="fas fa-times" aria-hidden="true"></span>
            <span className="sr-only">Close menu</span>
          </button>
          <LevelTwoItem
            catItem={item}
          />
        </div>
      </li>
    );
  };
  return (
    <nav className="navbar">
      <div>
        <ul className="navbar-nav nav">
          {rootCatagories?.map((item, i) => renderLevel1Item(item, i))}
        </ul>
      </div>
    </nav>
  );
}
