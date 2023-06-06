// export const flushURLSpecialCharacters = (displayName) => displayName?
//   .replaceAll(" ?- ?", "-") // remove spaces around hyphens
//   .replaceAll("[ ']", "-") // turn spaces and quotes into hyphens
//   .replaceAll("[^0-9a-zA-Z-]", "-")
//   .replaceAll("[-]+", "-")
//   .toLowerCase();

export const flushURLSpecialCharacters = (displayName) => displayName?.replace(/[\s~`!@#$%^&*()_+\-={[}\]|\\:;"'<,>.?/]+/g, '-')?.toLowerCase();

export const constructBNSSEOURL = (payload, type = '', nameIdentifier = '') => {
  const slug = payload?.seoData?.slug;
  const pageType = type?.toLowerCase();
  if (pageType === 'plp' || pageType === 'slp') {
    return `/category/${flushURLSpecialCharacters(slug || payload?.name)}?N=${payload.id}`;
  }
  if (pageType === 'pdp') {
    const productURL = flushURLSpecialCharacters(slug || payload[nameIdentifier]);
    return `/products/${productURL}/${payload.productId}`;
  }
  return '';
};
