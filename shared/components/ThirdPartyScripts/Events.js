/* eslint-disable space-before-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import {
  viewItem,
  GAddToCart,
  GAddToWishlist,
  viewListItem,
  selectItem
} from './gtag'
import {
  RviewItem,
  SearchProd,
  ProductClick,
  AddItem,
  RaddtoWishhList,
  RViewEvent
} from './RetisioEvents'

const visitPDP = itemData => {
  try {
    if (window && window.lstImplement) {
      window.lstImplement.browsedProduct(itemData)
    }
    viewItem(itemData)
  } catch (e) {
    console.log(e)
  }

  RviewItem(itemData)
}

const Search = obj => {
  try {
    SearchProd(obj)
  } catch (e) {
    console.log(e)
  }
}

const ClickProduct = obj => {
  try {
    ProductClick(obj)
  } catch (e) {
    console.log(e)
  }
}

const login = data => {
  try {
    if (window && window.lstImplement) {
      window.lstImplement.captureEmail(data)
    }
  } catch (e) {
    console.log(e)
  }
}

const AddToCart = data => {
  try {
    AddItem(data)
    GAddToCart(data)
  } catch (e) {
    console.log(e)
  }
}

const cartItems = data => {
  try {
    if (window && window.lstImplement) {
      window.lstImplement.captureCartItems(data)
    }
  } catch (e) {
    console.log(e)
  }
}

const AddtoWishhList = obj => {
  RaddtoWishhList(obj)
  GAddToWishlist(obj)
}

const notifyMe = (data, merchId) => {
  try {
    if (window && window.lstImplement) {
      window.lstImplement.notifyMe(data, merchId)
    }
  } catch (e) {
    console.log(e)
  }
}

const pageViewEvent = data => {
  try {
    if (window && window.lstImplement) {
      window.lstImplement.pageEvent(data)
    }
  } catch (e) {
    console.log(e)
  }
}

const visitPLP = itemData => {
  try {
    viewListItem(itemData)
  } catch (e) {
    console.log(e)
  }
}

const viewEvent = obj => {
  try {
    RViewEvent(obj)
  } catch (e) {
    console.log(e)
  }
}

const selectPLPItem = itemData => {
  try {
    selectItem(itemData)
  } catch (e) {
    console.log(e)
  }
}

export {
  visitPDP,
  Search,
  ClickProduct,
  login,
  cartItems,
  AddToCart,
  notifyMe,
  AddtoWishhList,
  pageViewEvent,
  visitPLP,
  viewEvent,
  selectPLPItem
}
