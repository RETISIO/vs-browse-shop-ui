import React from 'react';

export default function NavbarList(props) {
  const renderCategoryContainers = (categoryItem, i) => {
    const variantType = categoryItem.name;
    if (categoryItem?.hasCategories) {
      return (
        <div key={i} className="col-sm-2">
          <div className="category-heading">{variantType}</div>
          { getCategoryItemList(categoryItem.subCategories) }
        </div>
      );
    }
  };

  const renderCategoryNavItems = (navItem, i) => {
    if (navItem.hasCategories) {
      return null;
    }
    return (
      <li key={`nav-${i}`} className="category-list-item-navbar">
        <a href={`/category/${navItem.id}?N=${navItem.id}`}>{navItem.name}</a>
      </li>
    );
  };
  const getCategoryItemList = (categoryItem) => (
    <ul className="category-list list-unstyled">
      {categoryItem?.map((navItem, i) => renderCategoryNavItems(navItem, i))}
    </ul>
  );
  const renderCategoryNavList = (categoryItem, variantType = '') => {
    const categoryContainerClass = variantType === 'variantsNav'
      ? 'col-sm-2'
      : 'col-sm-3';
    return (
      <div className={categoryContainerClass}>
        {getCategoryItemList(categoryItem)}
      </div>
    );
  };
  const renderCategoryNav = (catItem) => renderCategoryNavList(catItem.subCategories);

  return (
    <div className="container">
      <div className="row">
        {props.catItem.hasCategories
          ? props.catItem.subCategories.map((categoryItem, i) => renderCategoryContainers(categoryItem, i))
          : null}
      </div>
      <div className="row">
        {renderCategoryNav(props.catItem)}
      </div>
    </div>
  );
}
