/* eslint-disable no-use-before-define */

/* eslint-disable no-unused-vars */

/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import { getCookie } from '@retisio/sf-api';

const siteId = process.env.NEXT_PUBLIC_SITEID;
const catalogId = '1001';
const RviewItem = (itemData) => {
  // console.log('itemData', itemData);
};

const SearchProd = (obj) => {
  let loggedInUserData = '';
  if(obj.userData?.userDetails?.accountId) {
    loggedInUserData = obj.userData?.userDetails?.accountId;
  }
  window.retisioSDK.event('integration', 'searchProduct', '1.0', {
    siteId,
    catalogId: obj?.channelData?.defaultCatalogId || catalogId,
    queryString: obj?.payLoad?.searchTerm,
    isTypedQuery: obj.autoSuggest ? false : !obj?.payLoad?.autoCorrectTerm,
    isAutoSuggestedQuery: obj.autoSuggest,
    isCorrectedQuery: !!obj?.payLoad?.autoCorrectTerm,
    queryTokens: '',
    resultFound: true,
    profileId: loggedInUserData,
  });
  window.retisioSDK.event('integration', 'viewEvent', '1.0', {
    siteId,
    profileId: loggedInUserData,
    catalogId: obj?.channelData?.defaultCatalogId || catalogId,
    eventType: 'recommendation',
    recommendationType: 'view_view',
    searchQuerykey: obj?.payLoad?.searchTerm,
    productIdList: obj?.payLoad?.products?.map((val) => val.productId),
    pageUrl: window.location.href,
  });
};

const ProductClick = (obj) => {
  let loggedInUserData = '';
  if(obj.userData?.userDetails?.accountId) {
    loggedInUserData = obj.userData?.userDetails?.accountId;
  }
  window.retisioSDK.event('integration', 'clickProduct', '1.0', {
    skuId: obj.data.defaultSkuId,
    productId: obj.data.productId,
    catalogId: obj?.channelData?.defaultCatalogId || catalogId,
    categories: obj.searchData.categories.map((vl) => vl.id),
    searchAttribution: true,
    recommendationAttribution: false,
    browseAttribution: false,
    promotionAttribution: false,
    searchAttributionDetails: {
      query: obj.searchData.searchTerm
      ,
    },
    profileId: loggedInUserData,
  });
};

const AddItem = (obj) => {
  let loggedInUserData = '';
  if(obj.userData?.userDetails?.accountId) {
    loggedInUserData = obj.userData?.userDetails?.accountId;
  }
  window.retisioSDK.event('integration', 'addItemToCart', '1.0', {
    cartId: getCookie('arcCartId'),
    catalogId: obj?.channelData?.defaultCatalogId || catalogId,
    currency: 'USD',
    cartValue: convertFloat(obj.miniCartDetails.miniCartData.cartSummary.total),
    items: [
      {
        skuId: obj.addToProdData.variantId,
        productId: obj.addToProdData.productId,
        brand: obj?.productData?.brand?.displayName,
        categoryIds: [obj?.productData?.productDetails.productCategory.id],
        price: convertFloat(obj.productData.skus[obj.addToProdData.variantId].skuDetails.price.listPrice.price),
        quantity: obj.addToProdData.quantity,
        shippingOption: 'STD',
        modelNumber: obj.productData.modelCode || '',
        attributedToSearch: 'false',
        attributedToBrowse: 'false',
        attributedToRecommendation: 'false',
        attributedToPromotion: 'false',
      },
    ],
    profileId: loggedInUserData,
  });
};

const convertFloat = (amt = '$0.0') => {
  const Amount = amt.split('$')[1];
  return parseFloat(Amount);
};

export {
  RviewItem,
  SearchProd,
  ProductClick,
  AddItem,
};
