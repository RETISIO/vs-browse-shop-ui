import React from 'react';
import LevelTwoItem from './level-2-item';

export default function LevelOneItem(props) {
  const navContainerClass = props.headerType === 'nonHome' ? 'container' : '';
  let headerDropdownMenuClass = 'header-dropdown-menu dropdown-menu js-dropdown__body';
  headerDropdownMenuClass = props.headerType === 'home'
    ? `${headerDropdownMenuClass} homeDropdownMenu` : headerDropdownMenuClass;

  const renderLevel1Item = (item, i) => {
    const navItem = item.name;
    return (
      <li key={i} className="nav-item js-dropdown">
        {props.headerType === 'nonHome'
          ? <a className="js-dropdown__btn" href="/category/shop-beef" id={`header-nav-${navItem}`}>{navItem}</a>
          : (
            <button className="js-dropdown__btn" aria-expanded="false" id="header-nav-beef">
              {navItem}
            </button>
          )}
        <div className={headerDropdownMenuClass} id="header-navbar">
          {props.headerType === 'home'
            ? (
              <button
                className="close-button"
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
            headerType={props.headerType}
          />
        </div>
      </li>
    );
  };
  return (
    <nav className="navbar">
      <div className={navContainerClass}>
        <ul className="navbar-nav nav">
          {props.rootCatagories?.map((item, i) => renderLevel1Item(item, i))}
        </ul>
      </div>
    </nav>
  );
}
