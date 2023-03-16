/* eslint-disable linebreak-style */
// eslint-disable-next-line import/named
import { requestContructor } from './api';
import URLHandler from './urlHandler';

export default async function getPLPData(context) {
  const { req, asPath } = context;

  const reqURI = req ? req?.url : asPath;
  const categoryIds = URLHandler('N', reqURI);
  const facetIds = URLHandler('t', reqURI) || '';
  const sort = URLHandler('so', reqURI) || '';
  let data;

  try {
    data = await requestContructor(
    // eslint-disable-next-line max-len
    `getProductsList?CategoryId=${categoryIds}${
      facetIds !== '' ? `&FacetId=${facetIds}` : ''
    }${sort !== '' ? `&SortOrder=${sort}` : ''}
      `,
    '',
    {},
    req,
    );
  } catch (e) {
    data = {};
  }
  return data;
}
