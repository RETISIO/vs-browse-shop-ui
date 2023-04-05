import React from 'react';

export default function SearchAheadResults(props) {
  const {
    searchAheadData, transformText, damPath
  } = props;
  const categories = searchAheadData?.productsRes?.categories;
  const products = searchAheadData?.productsRes?.products;
  const thumbnailHeight = 75;
  const thumbnailWidth = 75;
  const currencySymbol = '$';
  const renderSuggestedCategories = (item, i) => (
    <li key={`key-${i}`} role="option" id={`result-${i}`}>
      <a href={`/category/${item.id}?N=${item.id}`}>{item.name}</a>
    </li>
  );
  const renderSuggestedProducts = (item, i) => {
    const productName = item?.displayName?.replace(/\s+/g, '-').toLowerCase();
    const productId = item?.productId;
    const productUrl = `/products/${productName}/${productId}`;
    return (
      <li key={`products-${i}-${item.productId}`} className="search-product-item" role="option" id="productImage-0">
        <a className="d-flex" href={productUrl}>
          <div className="search-product-image">
            <div id="cc_img__resize_wrapper-typeaheadImage-1066098054">
              <img
                alt={item?.skus?.[item?.defaultSkuId]?.media?.altText}
                src={`${damPath}${item?.skus?.[item?.defaultSkuId]?.media?.thumbnailImg}`}
                height={thumbnailHeight}
                width={thumbnailWidth}
              />
            </div>
          </div>
          <div>
            <p className="search-product-title">{item.displayName}</p>
            <p>
              <span>Starting At:</span>
              <b className="product-price">{`${currencySymbol}${item.productPrice.minListPrice}`}</b>
            </p>
          </div>
        </a>
      </li>
    );
  };
  const renderSearchSuggestions = () => {
    if (products) {
      return (
        <>
          <div className="col-sm-5" role="group" aria-labelledby="group-0-heading">
            <h3 className="mb-5px" id="group-0-heading">{transformText('Categories')}</h3>
            <div className="categories-list-wrapper">
              <ul className="search-list list-unstyled" role="listbox" aria-labelledby="listbox">
                {categories?.slice(0, 5).map((item, i) => renderSuggestedCategories(item, i))}
              </ul>
            </div>
          </div>
          <div className="col-sm-7" role="group" aria-labelledby="group-1-heading">
            <h3 className="mb-5px" id="group-1-heading">{transformText('Possible Product Matches')}</h3>
            <div className="products-list-wrapper">
              <ul className="list-unstyled" role="listbox" aria-labelledby="listbox">
                {products?.map((item, i) => renderSuggestedProducts(item, i))}
              </ul>
            </div>
          </div>
        </>
      );
    }
    return (
      <div className="col-xs-12">
        <span>No matches found</span>
      </div>
    );
  };
  return (
    <div className="dropdown-inner">
      <div className="row">
        {renderSearchSuggestions()}
      </div>
    </div>
  );
}
