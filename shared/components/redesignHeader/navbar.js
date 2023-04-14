import React from 'react';
import NavbarList from './navbarList';

export default function Navbar(props) {
  const { rootCatagories } = props;
  const headerDropdownMenuClass = 'header-dropdown-menu dropdown-menu js-dropdown__body homeDropdownMenu';

  const toggleHeaderDropdownMenu = (event, displayHeaderMenu) => {
    const navEl = event.target.closest('.navListItems').querySelector('.header-dropdown-menu.dropdown-menu');
    if (displayHeaderMenu === 'show') {
      navEl.classList.add('open');
    };
  }
  const mouseOverOnNav = (event) => toggleHeaderDropdownMenu(event, 'show');
  const mouseOutOnNav = (event) => toggleHeaderDropdownMenu(event, 'hide');

  const renderLevel1Item = (item, i) => {
    const navItem = item.name;
    return (
      <li
        key={`navEl-${i}`}
        className="nav-item js-dropdown sub-nav"
        onMouseEnter={(e) => mouseOverOnNav(e)}
        onMouseLeave={(e) => mouseOutOnNav(e)}
      >
        <a
          className="js-dropdown__btn"
          href={`/category/${item.id}?N=${item.id}`}
        >
          {navItem}
        </a>
        <div className={headerDropdownMenuClass} id="header-navbar">
          <NavbarList
            catItem={item}
          />
        </div>
      </li>
    );
  };

  // const mouseOverOnMainNav = (event) => toggleHeaderMainDropdownMenu(event, 'show');
  // const mouseOutOnMainNav = (event) => toggleHeaderMainDropdownMenu(event, 'hide');

  // const toggleHeaderMainDropdownMenu = (event, displayHeaderMainMenu) => {
  //   const navMainEl = event.target.closest('.navListItems').querySelector('.header-dropdown-menu.dropdown-menu');
  //   if (displayHeaderMainMenu === 'show') {
  //     navMainEl.classList.add('open');
  //   };
  // }

  // const renderMainDropdown = () => {
  //   return (
  //     <li
  //       key={`navMainEl`}
  //       className="nav-item js-dropdown navListItems"
  //       onMouseEnter={(e) => mouseOverOnMainNav(e)}
  //       onMouseLeave={(e) => mouseOutOnMainNav(e)}
  //     >
  //       <a
  //         className="first-dropdown"
  //         href="#"
  //         style={{ textDecoration: 'none', textTransform: 'uppercase' }}
  //       >
  //         Shop All
  //       </a>
  //     </li>
  //   );
  // };

  return (
    <nav className="navbar redesign-navbar">
      <div>
        <ul className="navbar-nav nav nav-list">
          <li className="nav-item js-dropdown navListItems">
            <a className="first-dropdown" href="#" style={{ textDecoration: 'none', textTransform: 'uppercase' }}>Shop All</a>
            <div className="header-dropdown-menu dropdown-menu" id="header-navbar">
              <ul className="category-list list-unstyled c-list">
                {rootCatagories?.map((item, i) => renderLevel1Item(item, i))}
              </ul>
            </div>
            <button className="header-menu" type="button" data-target="" aria-label="">
              <i className="fa fa-chevron-down"></i>
            </button>
          </li>
          <li className="nav-item js-dropdown navListItems">
            <a className="first-dropdown" href="#" style={{ textDecoration: 'none', textTransform: 'uppercase' }}>Best Sellers</a>
            <div className="header-dropdown-menu dropdown-menu nav-redesign" id="header-navbar">
              <ul className="category-list list-unstyled">
                <li className="category-list-item">
                  <a href="#">Weekly Deals</a>
                </li>
                <li className="category-list-item">
                  <a href="#">Bundle & Save</a>
                </li>
                <li className="category-list-item">
                  <a href="#">Stock Up & Save</a>
                </li>
              </ul>
            </div>
            <button className="header-menu" type="button" data-target="" aria-label="">
              <i className="fa fa-chevron-down"></i>
            </button>
          </li>

          <li className="nav-item js-dropdown navListItems">
            <a className="first-dropdown" href="#" style={{ textDecoration: 'none', textTransform: 'uppercase' }}>Deals</a>
            <div className="header-dropdown-menu dropdown-menu nav-redesign" id="header-navbar">
              <ul className="category-list list-unstyled">
                <li className="category-list-item">
                  <a href="#">Weekly Deals</a>
                </li>
                <li className="category-list-item">
                  <a href="#">Bundle & Save</a>
                </li>
                <li className="category-list-item">
                  <a href="#">Stock Up & Save</a>
                </li>
              </ul>
            </div>
            <button className="header-menu" type="button" data-target="" aria-label="">
              <i className="fa fa-chevron-down"></i>
            </button>
          </li>

          <li className="nav-item js-dropdown navListItems">
            <a className="first-dropdown" href="#" style={{ textDecoration: 'none', textTransform: 'uppercase' }}>Gift & Bundles</a>
            <div className="header-dropdown-menu dropdown-menu nav-redesign" id="header-navbar">
              <ul className="category-list list-unstyled">
                <li className="category-list-item">
                  <a href="/products/gift-card/gc-10001">Gift Cards</a>
                </li>
                <li className="category-list-item">
                  <a href="#">Corporate Gifting</a>
                </li>
                <li className="category-list-item">
                  <a href="/category/assortments-favorite?N=assortments-favorite">Gifting Favorities</a>
                </li>
                <li className="category-list-item">
                  <a href="/category/assortments-gifts-of-the-month?N=assortments-gifts-of-the-month">Steak of the Month Subscriptions</a>
                </li>
              </ul>
            </div>
            <button className="header-menu" type="button" data-target="" aria-label="">
              <i className="fa fa-chevron-down"></i>
            </button>
          </li>

          <li className="nav-item js-dropdown navListItems">
            <a className="first-dropdown" href="#" style={{ textDecoration: 'none', textTransform: 'uppercase' }}>Cooking</a>
            <div className="header-dropdown-menu dropdown-menu nav-redesign" id="header-navbar">
              <ul className="category-list list-unstyled">
                <li className="category-list-item">
                  <a href="#">Recipes</a>
                </li>
                <li className="category-list-item">
                  <a href="#">Cooking Guides</a>
                </li>
                <li className="category-list-item">
                  <a href="#">Blog</a>
                </li>
                <li className="category-list-item">
                  <a href="#">Cookwares</a>
                </li>
              </ul>
            </div>
            <button className="header-menu" type="button" data-target="" aria-label="">
              <i className="fa fa-chevron-down"></i>
            </button>
          </li>

          <li className="nav-item js-dropdown navListItems">
            <a className="first-dropdown" href="#" style={{ textDecoration: 'none', textTransform: 'uppercase' }}>Subscribe & Save</a>
            <div className="header-dropdown-menu dropdown-menu nav-redesign" id="header-navbar">
              <ul className="category-list list-unstyled">
                <li className="category-list-item">
                  <a href="/category/assortments-gifts-of-the-month?N=assortments-gifts-of-the-month">Steak of the Month Subscriptions</a>
                </li>
                <li className="category-list-item">
                  <a href="/category/assortments-favorite?N=assortments-favorite">Favorities</a>
                </li>
                <li className="category-list-item">
                  <a href="#">Build Your Own</a>
                </li>
              </ul>
            </div>
            <button className="header-menu" type="button" data-target="" aria-label="">
              <i className="fa fa-chevron-down"></i>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
