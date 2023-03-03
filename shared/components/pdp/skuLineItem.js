import React, { useState } from 'react';
import { addToBagDetails, addToWishList } from '../../helpers/getPDPData';
import { useMiniCartDataContext } from '../../context/miniCartcontext';

export default function SkuLineItem(props) {
  const { skuItem, productId } = props;
  const { miniCartDetails, setMiniCartDetails } = useMiniCartDataContext();
  const itemPrice = skuItem.skuDetails?.price?.salePrice?.price || skuItem.skuDetails?.price?.listPrice?.price;
  const pieces = skuItem.skuDetails?.additionalDetails?.pieces || '';
  const weight = skuItem.skuDetails?.additionalDetails?.weight || '';
  const thickness = skuItem.skuDetails?.additionalDetails?.thickness || '';
  const options = `${pieces} ${weight} ${thickness}`;
  const [initialQnty, setInitialQnty] = useState(1);
  const addToBagHandler = (event) => {
    event.preventDefault();
    const pdp = {
      items: [
        {
          variantId: skuItem.skuId,
          productId,
          quantity: initialQnty,
          productType: 'product',
        },
      ],
    };
    const result = addToBagDetails(pdp);
    result.then( (data) => {
      console.log("Result::::::", data);
      setMiniCartDetails({...miniCartDetails, itemAdded: true, showMiniCart: true});
    });
  };

  const addToWishLisrHandler = (e) => {
    addToWishList({
      skuId: skuItem.skuId,
      productId,
      quantity: '1',
    });
  };
  const updateQntyObj = (value) => {
    if (value > 0) {
      setInitialQnty(value);
    }
  };
  const handleChange = (event) => {
    const { value } = event.target;
    updateQntyObj(parseInt(value, 10));
  };
  const handleQntyClick = (event, countModifier) => {
    event.preventDefault();
    let updatedQnty = '';
    if (countModifier === 'decrement') {
      updatedQnty = parseInt(initialQnty, 10) - 1;
    } else if (countModifier === 'increment') {
      updatedQnty = parseInt(initialQnty, 10) + 1;
    }
    updateQntyObj(updatedQnty);
  };
  return (
    <tr>
      <td>
        <span className="caption" style={{ width: 'auto' }}>Item #</span>
        <div className="cell-content testing">{skuItem.skuId}</div>
      </td>
      <td>
        <div className="cell-content">
          <p>{options}</p>
        </div>
      </td>
      <td>
        <div className="cell-content">
          <div className="cell-content-price">
            <b
              className="product-price"
            >
              {itemPrice}
            </b>
          </div>
        </div>
      </td>

      {/* <td className="v-middle hidden-xs">
            <div className="cell-content">
              <a href="#" data-toggle="modal" data-backdrop="static" data-target="#backInStockNotificationModal" style={{ fontSize: '13px', marginBottom: '10px' }}>Notify Me When In Stock</a>
            </div>
          </td> */}
      <td className="v-middle hidden-xs">
        <div className="cell-content">
          <div className="product-cart__counter counter js-counter">
            <div className="input-group">
              <span className="input-group-btn">
                <button
                  className="btn js-counter__btn qntyChangeBtn"
                  type="button"
                  onClick={(e) => handleQntyClick(e, 'decrement')}
                >
                  <i className="fa fa-minus" aria-hidden="true"></i>
                </button>
              </span>
              <input
                className="form-control js-counter__input"
                type="number"
                min="0"
                max="999"
                value={initialQnty}
                onChange={handleChange}
                maxLength="3"
                name="skuqntyItem"
              />
              <span className="input-group-btn">
                <button
                  className="btn js-counter__btn qntyChangeBtn"
                  type="button"
                  onClick={(e) => handleQntyClick(e, 'increment')}
                >
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
      </td>
      <td className="v-middle hidden-xs">
        <button
          className="btn btn-secondary btn-md add-to-cart pull-right"
          style={{ minWidth: '170px' }}
          id="0"
          disabled=""
          onClick={(e) => addToBagHandler(e)}
        >
          ADD TO CART
        </button>
        <div className="cell-content text-center">
          <button className="btn btn-primary btn-sm hidden-xs pdp-btn-wishlist" onClick={(e) => addToWishLisrHandler(e)}>
            Add to Wishlist
          </button>
          <p className="visible-xs"><a className="link" href="#">Add to Wishlist</a></p>
        </div>
      </td>
      <td className="v-middle visible-xs hidden-md hidden-sm hidden-lg">
        <div className="col-xs-4 visible-xs hidden-md hidden-sm hidden-lg" style={{ paddingLeft: '0px' }}>
          <a
            className="visible-xs hidden-md hidden-sm hidden-lg"
            data-bind="click: $parent.selectNotifyProduct.bind($parent, $data), widgetLocaleText: 'notifyStockLink'"
            href="#"
            data-toggle="modal"
            data-backdrop="static"
            data-target="#backInStockNotificationModal"
            id="backInStockPopup"
            style={{ fontSize: '13px', marginBottom: '10px' }}
          >
            Notify Me When In Stock
          </a>
        </div>
        <div className="col-xs-8 visible-xs hidden-md hidden-sm hidden-lg" style={{ paddingRight: '0px', paddingLeft: '22px' }}>
          <button
            className="btn btn-secondary btn-md add-to-cart visible-xs hidden-md hidden-sm hidden-lg"
            data-bind="attr: {id: $index()}, enable: ($data.quantity() > 0 &amp;&amp; $data.stockStatus() &amp;&amp;  $data.quantity() <= $data.stockStatus().inStockQuantity) , click: $parent.handleAddToCart.bind($parent, $data), widgetLocaleText: 'addToCartBtn'"
            style={{ width: '160px', minWidth: 'auto' }}
            id="0"
            disabled=""
          >
            ADD TO CART
          </button>
          <div className="cell-content text-center visible-xs hidden-md hidden-sm hidden-lg">
          </div>
        </div>
      </td>
      <td className="v-middle visible-xs hidden-md hidden-sm hidden-lg">
      </td>
    </tr>
  );
}
