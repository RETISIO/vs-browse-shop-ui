/* eslint-disable no-use-before-define */



/* eslint-disable no-unused-vars */



/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import { getCookie } from '@retisio/sf-api';
import config from '../../helpers/getConfig';

const siteId = config.SKEY;
const catalogId = '';
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
    eventType: 'search',
    searchQuerykey: obj?.payLoad?.searchTerm,
    productIdList: obj?.payLoad?.products?.map((val) => val.productId),
    pageUrl: window.location.href,
  });
};

const RViewEvent = (obj) => {
  let loggedInUserData = '';
  if(obj.userData?.userDetails?.accountId) {
    loggedInUserData = obj.userData?.userDetails?.accountId;
  }
  window.retisioSDK.event('integration', 'viewEvent', '1.0', {
    siteId,
    profileId: loggedInUserData,
    catalogId: obj?.channelData?.defaultCatalogId || catalogId,
    eventType: obj.eventType,
    productIdList: obj.products,
    pageUrl: window.location.href,
    recommendationType: obj.recommendationType,
    pageType: obj.pageType,
    pdpProductId: obj.product.productId,
  });
};

const PrepareClickData = (obj) => {
  let loggedInUserData = '';
  if(obj.userData?.userDetails?.accountId) {
    loggedInUserData = obj.userData?.userDetails?.accountId;
  }
  let finalData = {
    skuId: obj.data.defaultSkuId,
    productId: obj.data.productId,
    catalogId: obj?.channelData?.defaultCatalogId || catalogId,
    profileId: loggedInUserData,
  };
  if(obj.searchData) {
    finalData = {
      ...finalData,
      categories: obj.searchData.categories.map((vl) => vl.id),
      searchAttribution: true,
      recommendationAttribution: false,
      browseAttribution: false,
      promotionAttribution: false,
      searchAttributionDetails: {
        query: obj.searchData.searchTerm,
      },
    };
  }

  if(obj.recommendation) {
    finalData = {
      ...finalData,
      categories: obj.data.breadcrumbs,
      searchAttribution: false,
      recommendationAttribution: true,
      browseAttribution: false,
      promotionAttribution: false,
      recommendationAttributionDetails: {
        ...obj.recommendation,
      },
    };
  }

  if(!finalData.categories && obj.data && obj.data.breadcrumbs) {
    finalData = {
      ...finalData,
      categories: obj.data.breadcrumbs,
    };
  }

  return finalData;
};

const ProductClick = (obj) => {
  window.retisioSDK.event('integration', 'clickProduct', '1.0', PrepareClickData(obj));
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
    isOrderIdCartIdSame: false,
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

const RaddtoWishhList = (obj) => {
  let loggedInUserData = '';
  if(obj.userData?.userDetails?.accountId) {
    loggedInUserData = obj.userData?.userDetails?.accountId;
  }
  window.retisioSDK.event('integration', 'addToWishlist', '1.0', {
    wishlistId: obj.wishListId,
    skuId: obj.skuId,
    productId: obj.productId,
    profileId: loggedInUserData,
    catalogId: obj?.channelData?.defaultCatalogId || catalogId,
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
  RaddtoWishhList,
  RViewEvent,
};
