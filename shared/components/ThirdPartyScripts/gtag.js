/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

import config from "../../helpers/getConfig";

/* eslint-disable no-unused-expressions */
const GA_TRACKING_ID = config.GAKEY;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url) => {
  window && window.gtag && window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = (obj) => {
  // window && window.gtag && window.gtag('event', action, obj);
  window && window.dataLayer && window.dataLayer.push(obj);
};

const convertFloat = (amt = '$0.0') => {
  const Amount = amt.split('$')[1];
  return parseFloat(Amount);
};

const viewItem = (itemData) => {
  const item = itemData.payLoad && itemData.payLoad.products.length > 0 && itemData.payLoad.products[0] ? itemData.payLoad.products[0] : {};
  event({
    event: 'view_item',
    currency: 'USD',
    ecommerce: {
      items: [{
        item_name: item?.displayName,
        item_id: item?.productId,
        price: item?.productPrice?.minListPrice,
        currency: 'USD',
        quantity: 1,
      }],
    },
  });
};

const GAddToCart = (obj) => {
  event({
    event: 'product_added_to_cart',
    ecommerce: {
      add: {
        products: [
          {
            name: obj?.productData?.displayName,
            id: obj?.productData?.productId,
            price: convertFloat(obj.productData.skus[obj.addToProdData.variantId].skuDetails.price.listPrice.price),
            brand: obj?.productData?.brand?.displayName,
            category: obj?.productData?.productDetails?.productCategory?.displayName,
            variant: obj.addToProdData.variantId,
            quantity: obj.addToProdData.quantity,
          },
        ],
      },
    },
  });
  event({
    event: 'add_to_cart',
    ecommerce: {
      items: [
        {
          item_name: obj?.productData?.displayName,
          item_id: obj?.productData?.productId,
          affiliation: 'Allen Brothers',
          currency: 'USD',
          price: convertFloat(obj.productData.skus[obj.addToProdData.variantId].skuDetails.price.listPrice.price),
          item_category: obj?.productData?.productDetails?.productCategory?.displayName,
          item_variant: obj.addToProdData.variantId,
          quantity: obj.addToProdData.quantity,
        },
      ],
    },
  });
};

const GAddToWishlist = (obj) => {
  event({
    event: 'add_to_wishlist',
    ecommerce: {
      items: [
        {
          item_id: obj.productId,
          item_name: obj.productData.displayName,
          affiliation: 'Allen Brothers',
          currency: 'USD',
          price: convertFloat(obj.productData.skus[obj.skuId].skuDetails.price.listPrice.price),
          quantity: 1,
        },
      ],
    },
  });
};

const viewListItem = (itemData) => {
  const item = itemData.payLoad && itemData.payLoad.products.length > 0 && itemData.payLoad.products;
  const itemsList = (item.length > 0) && item?.map((x) => ({
    item_name: x?.displayName,
    item_id: x?.productId,
    price: x?.productPrice.minListPrice,
    quantity: 1,
  }));
  event({
    event: 'view_item_list',
    ecommerce: {
      items: itemsList,
    },
  });
};

const selectItem = (itemData) => {
  const item = itemData || {};
  event({
    event: 'select_item',
    ecommerce: {
      items: [{
        item_name: item?.displayName,
        item_id: item?.productId,
        price: item?.productPrice?.minListPrice,
        quantity: 1,
      }],
    },
  });
};

export {
  pageview,
  event,
  viewItem,
  GAddToCart,
  GAddToWishlist,
  viewListItem,
  selectItem,
};
