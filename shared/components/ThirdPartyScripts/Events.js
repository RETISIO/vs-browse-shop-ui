/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { viewItem } from './gtag';
import { RviewItem, SearchProd, ProductClick } from './RetisioEvents';

const visitPDP = (itemData) => {
  viewItem(itemData);
  try {
    if (window && window.lstImplement) {
        // eslint-disable-next-line indent
        window.lstImplement.browsedProduct(itemData);
      // console.log("capture");
    }
  } catch (e) {
    console.log(e);
  }

  RviewItem(itemData);
};

const Search = (obj) => {
  SearchProd(obj);
};

const ClickProduct = (obj) => {
  ProductClick(obj);
};

const login = (data) => {
  console.log(data);
  try {
    if (window && window.lstImplement) {
      window.lstImplement.captureEmail(data);
    }
  } catch (e) {
    console.log(e);
  }
};

const cartItems = (data) =>{
  try {
    if (window && window.lstImplement) {
      window.lstImplement.captureCartItems(data);
    }
  } catch (e) {
    console.log(e);
  }
};

export {
  visitPDP,
  Search,
  ClickProduct,
  login,
  cartItems,
};
