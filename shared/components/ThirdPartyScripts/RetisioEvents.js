/* eslint-disable import/prefer-default-export */
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
  // console.log(obj);
};

const AddItem = (obj) => {
  // console.log(obj);
};

export {
  RviewItem,
  SearchProd,
  ProductClick,
  AddItem,
};
