import React from "react";

export default function LevelTwoItem(props) {
  const categoryHeadingClass =
    props.headerType === "nonHome" ? "col-sm-3" : "col-sm-2";
  const renderCategoryContainers = (categoryItem, i) => {
    const variantType = categoryItem.name;
    if (categoryItem?.hasCategories) {
      return (
        <div key={i} className={categoryHeadingClass}>
          <div className="category-heading">{variantType}</div>
        </div>
      );
    }
  };

  const renderCategoryNavItems = (navItem, i) => {
    if (navItem.hasCategories) {
      return renderCategoryNavContainer(navItem.subCategories, "variantsNav");
    } else {
      return (
        <li key={"nav-" + i} className="category-list-item">
          <a href={navItem.srcURL}>{navItem.name}</a>
        </li>
      );
    }
  };
  const renderCategoryNavContainer = (categoryItem, variantType = "") => {
    const categoryContainerClass =
      props.headerType === "home" && variantType === "variantsNav"
        ? "col-sm-2"
        : "col-sm-3";
    return (
      <div className={categoryContainerClass}>
        <ul className="category-list list-unstyled">
          {categoryItem?.map((navItem, i) =>
            renderCategoryNavItems(navItem, i)
          )}
        </ul>
      </div>
    );
  };
  const renderCategoryNav = (catItem) => {
    // if (catItem.hasCategories) {
    //     return catItem?.subCategories?.map((categoryItem, i) => renderCategoryNavContainer(categoryItem.subCategories, "variantsNav"))
    // } else {
    //     console.log("else",catItem);
    return renderCategoryNavContainer(catItem.subCategories);
    // }
  };
  return (
    <div className="container">
      <div className="row">
        {props.catItem.hasCategories
          ? props.catItem.subCategories.map((categoryItem, i) =>
              renderCategoryContainers(categoryItem, i)
            )
          : null}
      </div>
      <div className="row">
        {renderCategoryNav(props.catItem)}
        {props.headerType === "nonHome" ? (
          <div className="col-md-4">
            <ul className="category-list list-unstyled">
              <li className="category-list-item new-item">
                <a href="/catalog/best-sellers">
                  <div
                    id="cc_img__resize_wrapper-Best-Sellers"
                    className=""
                    style={{
                      maxWidth: "100%",
                      minHeight: "0px",
                      height: "100%",
                    }}
                  >
                    <img
                      className="new ccLazyLoaded"
                      alt="Best Sellers"
                      data-error-src="/file/v1375487262462743897/general/missing-image.jpg"
                      data-default-error-src="/img/no-image.jpg"
                      data-lazy-loading-image-className="ccLazyLoad"
                      data-lazy-loaded-image-className="ccLazyLoaded"
                      data-lazy-loading-parent-className="ccLazyLoad-background"
                      data-src="https://www.allenbrothers.com/file/general/best-sellers-icon.png"
                      data-lazy-loading="false"
                      src="https://www.allenbrothers.com/file/general/best-sellers-icon.png"
                      data-srcset="/ccstore/v1/images/?source=/file/general/best-sellers-icon.png&amp;height=36&amp;width=36 36w"
                      data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px"
                      srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/best-sellers-icon.png&amp;height=36&amp;width=36 36w"
                      sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px"
                    />
                  </div>
                  <span>Best Sellers</span>
                </a>
              </li>

              <li className="category-list-item new-item">
                <a href="/catalog/new-items">
                  <div
                    id="cc_img__resize_wrapper-New-Items"
                    className=""
                    style={{
                      maxWidth: "100%",
                      minHeight: "0px",
                      height: "100%",
                    }}
                  >
                    <img
                      className="new ccLazyLoaded"
                      alt="New Items"
                      data-error-src="/file/v1375487262462743897/general/missing-image.jpg"
                      data-default-error-src="/img/no-image.jpg"
                      data-lazy-loading-image-className="ccLazyLoad"
                      data-lazy-loaded-image-className="ccLazyLoaded"
                      data-lazy-loading-parent-className="ccLazyLoad-background"
                      data-src="https://www.allenbrothers.com/file/general/new-badge.png"
                      data-lazy-loading="false"
                      src="https://www.allenbrothers.com/file/general/new-badge.png"
                      data-srcset="/ccstore/v1/images/?source=/file/general/new-badge.png&amp;height=36&amp;width=36 36w"
                      data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px"
                      srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/new-badge.png&amp;height=36&amp;width=36 36w"
                      sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px"
                    />
                  </div>
                  <span>New Items</span>
                </a>
              </li>

              <li className="category-list-item new-item">
                <a href="/gift-card/gifting/gc-10001">
                  <div
                    id="cc_img__resize_wrapper-Gift-Cards"
                    className=""
                    style={{
                      maxWidth: "100%",
                      minHeight: "0px",
                      height: "100%",
                    }}
                  >
                    <img
                      className="new ccLazyLoaded"
                      alt="Gift Cards"
                      data-error-src="/file/v1375487262462743897/general/missing-image.jpg"
                      data-default-error-src="/img/no-image.jpg"
                      data-lazy-loading-image-className="ccLazyLoad"
                      data-lazy-loaded-image-className="ccLazyLoaded"
                      data-lazy-loading-parent-className="ccLazyLoad-background"
                      data-src="https://www.allenbrothers.com/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg"
                      data-lazy-loading="false"
                      src="https://www.allenbrothers.com/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg"
                      data-srcset="/ccstore/v1/images/?source=/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg&amp;height=36&amp;width=36 36w"
                      data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px"
                      srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v1871864902996706095/products/ABI-GiftCard_sm_3.jpg&amp;height=36&amp;width=36 36w"
                      sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px"
                    />
                  </div>
                  <span>Gift Cards</span>
                </a>
              </li>

              <li className="category-list-item new-item">
                <a href="/catalog/on-sale">
                  <div
                    id="cc_img__resize_wrapper-On-Sale"
                    className=""
                    style={{
                      maxWidth: "100%",
                      minHeight: "0px",
                      height: "100%",
                    }}
                  >
                    <img
                      className="new ccLazyLoaded"
                      alt="On Sale"
                      data-error-src="/file/v1375487262462743897/general/missing-image.jpg"
                      data-default-error-src="/img/no-image.jpg"
                      data-lazy-loading-image-className="ccLazyLoad"
                      data-lazy-loaded-image-className="ccLazyLoaded"
                      data-lazy-loading-parent-className="ccLazyLoad-background"
                      data-src="/file/general/on-sale-icon.png"
                      data-lazy-loading="false"
                      src="https://www.allenbrothers.com/file/general/on-sale-icon.png"
                      data-srcset="/ccstore/v1/images/?source=/file/general/on-sale-icon.png&amp;height=36&amp;width=36 36w"
                      data-sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px"
                      srcset="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/general/on-sale-icon.png&amp;height=36&amp;width=36 36w"
                      sizes="(max-width:480px) 36px,(min-width:481px) and (max-width:768px) 36px,(min-width:769px) and (max-width:979px) 36px,(min-width:980px) 36px"
                    />
                  </div>
                  <span>On Sale</span>
                </a>
              </li>
            </ul>
            <br />
          </div>
        ) : null}
      </div>
    </div>
  );
}
