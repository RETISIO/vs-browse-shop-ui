import React, {useEffect} from 'react';

export default function MobileNavLevelTwoItem(props) {
  const renderSubCategories = (subCategory, i) => (
    <li key={`sub-${i}`}>
      <a href="/category/shop-beef">{subCategory.name}</a>
    </li>
  );
  const renderl2Items = (l2item, count) => {
    if (l2item.hasCategories) {
      return (
        <>
          <li key={`l2-${count}`}>
            <h2 className="mobile-submenu__title text-elipsis">{l2item.name}</h2>
          </li>
          {l2item?.subCategories?.map((subCategory, i) => renderSubCategories(subCategory, i))}
        </>
      );
    }
    return (
      <li key={`l2-${count}`}>
        <a href="/category/shop-beef">{l2item.name}</a>
      </li>
    );
  };
  const renderL1Items = (item, i) => {
    console.log('MobileNavLevelTwoItem:::::', item);
    let subMenuClass = "mobile-submenu js-mobile-submenu";
    if (i === props.activeLevel2Item) {
        subMenuClass = "mobile-submenu js-mobile-submenu active";
    }
    const closeLevel2Menu = () => {
        props.setActiveLevel2Item("");
        props.setIsMobileLevelOneItem(!props.isMobileLevelOneItemOpen);
    }
    return (
      <div className={subMenuClass} key={`l1-${i}`}>
        <div className="navbar-header">
          <a className="mobile-menu__back js-mobile-menu-back submenu mobileSubMenuBackBtn" href="#" onClick={()=> closeLevel2Menu()}>
            <em className="icon icon-chevron-left fas fa-chevron-left"></em>
            <span className="navbar-title text-elipsis" data-bind="text: $data.displayName">{item.name}</span>
          </a>
        </div>
        <ul className="aside-nav mobile-submenu__body">
          {item?.subCategories?.map((l2item, count) => renderl2Items(l2item, count))}
        </ul>
      </div>
    );
  };
  useEffect(() => {
    // const mobileMenuBackBtn = document.querySelector('.mobileSubMenuBackBtn');
    // mobileNavMenuEl.addEventListener('click', mobileNavCloseHandler);
  }, []);
  return (
    <div className="mobile-menu__level js-mobile-menu-level" data-level="1">
      {props.rootCatagories?.map((item, i) => renderL1Items(item, i))}
    </div>
  );
}
