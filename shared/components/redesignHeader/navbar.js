import React from 'react';
 import NavbarList from './navbarList';

export default function Navbar(props) {
  const { rootCatagories } = props;
  const headerDropdownMenuClass = 'header-dropdown-menu dropdown-menu js-dropdown__body homeDropdownMenu';

  const toggleHeaderDropdownMenu = (event, displayHeaderMenu) => {
    const navEl = event.target.closest('.navListItems').querySelector('.header-dropdown-menu.dropdown-menu');
    if (displayHeaderMenu === 'show') {
      navEl.classList.add('open');
      const { miniCartDetails, setMiniCartDetails } = props;
      if (miniCartDetails.showMiniCart) {
        setMiniCartDetails({ ...miniCartDetails, showMiniCart: false })
      }
    } else {
      navEl.classList.remove('open');
    }
  };
  const mouseOverOnNav = (event) => toggleHeaderDropdownMenu(event, 'show');
  const mouseOutOnNav = (event) => toggleHeaderDropdownMenu(event, 'hide');

  // const navElementsCloseBtnHandler = () => {
  //   const openNav = document.querySelector('.header-dropdown-menu.dropdown-menu.open');
  //   openNav.classList.remove('open');
  // };

  const renderLevel1Item = (item, i) => {
    const navItem = item.name;
    return (
      <li
        key={`navEl-${i}`}
        className="nav-item js-dropdown navListItems"
        onMouseEnter={(e) => mouseOverOnNav(e)}
        onMouseLeave={(e) => mouseOutOnNav(e)}
      >
        <button className="header-menu" type="button" data-target="" aria-label="">
            <i className="fa fa-chevron-down"></i>
          </button>
        <a
          className="js-dropdown__btn"
          href={`/category/${item.id}?N=${item.id}`}
          style={{textDecoration: 'none', textTransform: 'uppercase'}}
        >
          {navItem}
        </a>
        <div className={headerDropdownMenuClass} id="header-navbar">
          {/* <button
            onClick={() => navElementsCloseBtnHandler()}
            className="close-button"
            type="button"
          >
            <span className="fas fa-times" aria-hidden="true"></span>
            <span className="sr-only">Close menu</span>
          </button> */}
          <NavbarList
            catItem={item}
          />
        </div>
      </li>
    );
  };
  return (
    <nav className="navbar redesign-navbar">
      <div>
        <ul className="navbar-nav nav">
          {rootCatagories?.map((item, i) => renderLevel1Item(item, i))}
          
        </ul>
      </div>
    </nav>
  );
}
