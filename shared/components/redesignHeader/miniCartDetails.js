import React from 'react';

export default function MiniCartDetails(props) {
  const { miniCartDetails, damPath } = props;
  const miniCartData = miniCartDetails?.miniCartData;
  const thumbnailHeight = 75;
  const thumbnailWidth = 75;
  const renderCartLineItems = (item, index) => {
    const itemPrice = item?.itemPrice?.discountedAmount || item?.itemPrice?.amount;
    const productName = item.skuDisplayName;
    let productURL = item.productName?.replace(/\s+/g, '-').toLowerCase();
    productURL = `/products/${productURL}/${item.productId}`;
    return (
      <li className="fast-order__item" role="option" key={`cartLine-${index}-${item.skuId}`} id={`item-${index}`}>
        <div className="fast-order__item-inner">
          <div className="fast-order__item-image">
            <a href={productURL} className="">
              <img
                alt={item?.imageUrl}
                src={`${damPath}${item?.imageUrl}`}
                height={thumbnailHeight}
                width={thumbnailWidth}
              />
            </a>
          </div>
          <a href={productURL}>
            <div className="fast-order__item-title">{productName}</div>
          </a>
          <div className="fast-order__item-quantity">
            Qty:
            <span>{item.quantity}</span>
          </div>
          <div className="fast-order__item-price">
            Total Price:
            <span>{itemPrice}</span>
          </div>
        </div>
      </li>
    );
  };
  const renderMiniCartDetails = () => {
    if (miniCartData.items) {
      const cartItemsArr = [...miniCartData.items];
      return (
        <>
          <a className="btn-action btn-action-primary btn-action-md btn-block mini-cart-btn mini-cart-btn-header" href="/checkout/cart">View Cart</a>
          <h3 className="dropdown-block__subtitle">Recently added items</h3>
          <ul className="list-unstyled">
            {cartItemsArr.reverse().slice(0, 3).map((item, i) => renderCartLineItems(item, i))}
          </ul>
        </>
      );
    }
    return (
      <span className="dropdown-block__subtitle d-block">You currently have no items in your shopping cart.</span>
    );
  };
  const renderSubTotalSection = () => {
    if (miniCartData.items) {
      const totalAmnt = miniCartData?.cartSummary?.subTotal;
      return (
        <div className="dropdown-block__footer">
          <div className="fast-order__full-price text-center">
            <b>
              Subtotal:
              <span>{totalAmnt}</span>
            </b>
          </div>
          <a
            className="btn-action btn-action-primary btn-action-md btn-block mini-cart-btn"
            href="/checkout/cart"
          >
            View Cart
          </a>
        </div>
      );
    }
    return '';
  };
  return (
    <>
      <div className="dropdown-block__body">
        {renderMiniCartDetails()}
      </div>
      {renderSubTotalSection()}
    </>
  );
}
