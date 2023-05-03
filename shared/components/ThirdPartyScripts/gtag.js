/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_KEY;

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
  const data = {
    currency: 'USD',
    value: 7.77,
    items: [
      {
        item_id: item?.productId,
        item_name: item?.displayName,
        // affiliation: 'Google Merchandise Store',
        // coupon: 'SUMMER_FUN',
        // discount: 2.22,
        index: 0,
        item_brand: item?.brand?.displayName,
        // item_category: 'Apparel',
        // item_category2: 'Adult',
        // item_category3: 'Shirts',
        // item_category4: 'Crew',
        // item_category5: 'Short sleeve',
        // item_list_id: 'related_products',
        // item_list_name: 'Related Products',
        // item_variant: 'green',
        // location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
        price: item?.productPrice?.maxListPrice,
        quantity: 1,
      },
    ],
  };
  // event('view_item', data);
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

export {
  pageview,
  event,
  viewItem,
  GAddToCart,
};
