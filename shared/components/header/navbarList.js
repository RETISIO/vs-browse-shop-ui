import React from 'react';

export default function NavbarList(props) {
  const { catItem } = props;
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
    <ul className="category-list list-unstyled sub-nav1 bg-color">
      {categoryItem?.map((navItem, i) => renderCategoryNavItems(navItem, i))}
    </ul>
  );
  const renderCategoryNavList = (categoryItem) => (
    <div className="col-sm-2">
      {getCategoryItemList(categoryItem)}
    </div>
  );
  const renderCategoryWithoutHeader = () => {
    const isCategoryHeaderAvail = catItem?.subCategories?.filter((el) => el.hasCategories === true);
    if (isCategoryHeaderAvail?.length !== catItem?.subCategories?.length) {
      return renderCategoryNavList(catItem.subCategories);
    }
  };
  const renderCategoryContainers = (categoryItem, i) => {
    const variantType = categoryItem.name;
    if (categoryItem?.hasCategories) {
      return (
        <div key={i} className="col-sm-2">
          <div className="category-heading sub-nav1 list-heading">{variantType}</div>
          {getCategoryItemList(categoryItem.subCategories)}
        </div>
      );
    }
  };
  return (
    <div className="container">
      <div className="row">
        {catItem.hasCategories
          ? catItem.subCategories.map((categoryItem, i) => renderCategoryContainers(categoryItem, i))
          : null}
        {renderCategoryWithoutHeader()}
      </div>
    </div>
  );
}
