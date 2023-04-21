/* eslint-disable import/prefer-default-export */
const siteId = process.env.NEXT_PUBLIC_SITEID;
const catalogId = '1001';
const RviewItem = (itemData) => {
  console.log('itemData', itemData);
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
    isTypedQuery: !obj?.payLoad?.autoCorrectTerm,
    isAutoSuggestedQuery: false,
    isCorrectedQuery: !!obj?.payLoad?.autoCorrectTerm,
    queryTokens: '',
    resultFound: true,
    profileId: loggedInUserData,
  });
};

export {
  RviewItem,
  SearchProd,
};
