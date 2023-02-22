/* eslint-disable linebreak-style */
// eslint-disable-next-line import/named
import { requestContructor } from '../helpers/api';
import URLHandler from '../helpers/urlHandler';

export default async function getPLPData(context) {
  const { req, asPath } = context;

  const reqURI = req ? req?.url : asPath;
  const categoryIds = URLHandler('id', reqURI);
  const facetIds = URLHandler('fs', reqURI) || '';
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
    !!req,
    );
  } catch (e) {
    data = {};
  }
  return data;
}
