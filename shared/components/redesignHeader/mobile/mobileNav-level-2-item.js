import React from 'react';

export default function MobileNavLevelTwoItem(props) {
  const renderSubCategories = (subCategory, i) => (
    <li key={`sub-${i}`}>
      <a href={`/category/${subCategory.id}?N=${subCategory.id}`}>{subCategory.name}</a>
    </li>
  );
  const renderl2Items = (l2item, count) => {
    if (l2item.hasCategories) {
      return (
        <React.Fragment key={`l2-${count}`}>
          <li>
            <h2 className="mobile-submenu__title text-elipsis">{l2item.name}</h2>
          </li>
          {l2item?.subCategories?.map((subCategory, i) => renderSubCategories(subCategory, i))}
        </React.Fragment>
      );
    }
    return renderSubCategories(l2item, count);
  };
  const renderL1Items = (item, i) => {
    let subMenuClass = 'mobile-submenu js-mobile-submenu';
    if (i === props.activeLevel2Item) {
      subMenuClass = 'mobile-submenu js-mobile-submenu active';
    }
    const closeLevel2Menu = () => {
      props.setActiveLevel2Item('');
      props.toggleMobileLevelOneItem();
    };
    return (
      <div className={subMenuClass} key={`l1-${i}`}>
        <div className="navbar-header">
          <a
            className="mobile-menu__back js-mobile-menu-back submenu mobileSubMenuBackBtn"
            href="#"
            onClick={() => closeLevel2Menu()}
          >
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
  return (
    <div className="mobile-menu__level js-mobile-menu-level" data-level="1">
      {props.rootCatagories?.map((item, i) => renderL1Items(item, i))}
    </div>
  );
}
