/* eslint-disable linebreak-style */
// eslint-disable-next-line import/named
import { requestContructor } from './api';
// import URLHandler from './urlHandler';

export default async function getPDPData(context) {
  const productId = context?.query?.id[1];
  const { req } = context;
  let data;

  try {
    data = await requestContructor(`getPDPData?productIds=${productId}`, '', {}, req);
  } catch (e) {
    data = {};
  }
  return data;
}

export async function addToBagDetails(addToBagItems) {
  let data;

  try {
    data = await requestContructor('addToCartArc', '', { method: 'POST', data: addToBagItems }, false);
  } catch (e) {
    data = {};
  }
  return data;
}
