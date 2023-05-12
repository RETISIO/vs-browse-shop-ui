/* eslint-disable linebreak-style */
// eslint-disable-next-line import/named
import { requestContructor } from './api'
// import URLHandler from './urlHandler';

export default async function getPDPData (context) {
  const length = context?.query?.id?.length || 1
  const productId = context?.query?.id[length - 1]
  const { req } = context
  let data

  try {
    data = await requestContructor(
      `getPDPData?productIds=${productId}`,
      '',
      {},
      req
    )
  } catch (e) {
    data = {}
  }
  return data
}

export async function addToBagDetails (addToBagItems) {
  let data

  try {
    data = await requestContructor(
      'addToCartArc',
      '',
      { method: 'POST', data: addToBagItems },
      false
    )
  } catch (e) {
    data = e
    // data = {};
  }
  return data
}

export async function addToWishList (wishlistItem) {
  let data

  try {
    data = await requestContructor(
      'addToWishListArc',
      '',
      { method: 'POST', data: wishlistItem },
      false
    )
  } catch (e) {
    data = {}
  }
  return data
}
