import React from 'react';
import MiniCartDetails from './miniCartDetails';

export default function MiniCartIcon(props) {
  const { transformText, miniCartDetails, setMiniCartDetails } = props;
  const { showMiniCart } = miniCartDetails;
  const isminiCartOpen = showMiniCart ? 'open' : '';

  const toggleminiCartHandler = () => {
    const miniCart = !showMiniCart;
    setMiniCartDetails({ ...miniCartDetails, showMiniCart: miniCart });
  };

  const miniCartHandler = (event) => {
    event.preventDefault();
    toggleminiCartHandler();
  };

  const handleBlur = () => {
    setTimeout(() => { setMiniCartDetails({ ...miniCartDetails, showMiniCart: false }); }, 500);
  };

  const renderCartCount = () => {
    const { miniCartData } = miniCartDetails;
    if (miniCartData?.items) {
      const initalVal = 0;
      const itemCount = miniCartData?.items?.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity,
        initalVal,
      );
      return (
        <div
          aria-hidden="true"
          className="cart-counter"
        >
          {itemCount}
        </div>
      );
    }
    return '';
  };

  return (
    <li className={`list-inline-item header-actions-cart dropdown fast-order js-minicart-toggle ${isminiCartOpen}`} style={{ top: '10px' }}>
      <a
        className="dropdown-toggle outline-change ab-miniCart-Icon"
        id="cartlink"
        href="#"
        role="button"
        aria-haspopup="true"
        aria-label="Cart 0 items"
        aria-expanded={showMiniCart}
        onClick={(e) => miniCartHandler(e)}
        onBlur={handleBlur}
      >
        <i aria-hidden="true" className="icon icon-cart fas fa-shopping-cart" tabIndex="0">
          <span className="label-redesign" style={{ padding: '10px', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: '14px', fontWeight: 'normal' }}>My Cart</span>
          <span className="cart-val">
            <span className="sr-only">{transformText('quantity of items in your cart: 0')}</span>
            {renderCartCount()}
          </span>
        </i>
      </a>
      <div
        className="dropdown-menu dropdown-menu-center fast-order__dropdown js-custom-aside js-custom-height"
        data-aside="right"
        id="fast-order__dropdown"
      >
        <div className="dropdown-block" role="region" aria-label="cart">
          <div className="dropdown-block__header d-flex justify-space-between align-items-center">
            <span className="dropdown-block__title text-elipsis">Your Cart</span>
            <button
              className="dropdown-block__close"
              aria-label="Close"
              onClick={(e) => miniCartHandler(e)}
            >
              <i className="fa fa-times-circle"></i>
            </button>
          </div>
          <MiniCartDetails {...props} />
        </div>
      </div>
    </li>
  );
}
