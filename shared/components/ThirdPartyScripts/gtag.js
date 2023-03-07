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
const event = ({ action, obj }) => {
  window && window.gtag && window.gtag('event', action, obj);
};

const viewItem = (itemData) => {
  const item = itemData.payLoad && itemData.payLoad.products.length > 0 && itemData.payLoad.products[0] ? itemData.payLoad.products[0] : {};
  const data = {
    currency: 'USD',
    value: 7.77,
    items: [
      {
        item_id: item.productId,
        item_name: item.displayName,
        // affiliation: 'Google Merchandise Store',
        // coupon: 'SUMMER_FUN',
        // discount: 2.22,
        index: 0,
        item_brand: item.brand.displayName,
        // item_category: 'Apparel',
        // item_category2: 'Adult',
        // item_category3: 'Shirts',
        // item_category4: 'Crew',
        // item_category5: 'Short sleeve',
        // item_list_id: 'related_products',
        // item_list_name: 'Related Products',
        // item_variant: 'green',
        // location_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
        price: item.productPrice.maxListPrice,
        quantity: 1,
      },
    ],
  };
  event('view_item', data);
};

export {
  pageview,
  event,
  viewItem,
};
