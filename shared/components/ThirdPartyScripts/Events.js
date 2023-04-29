/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { viewItem } from './gtag';
import {
  RviewItem, SearchProd, ProductClick, AddItem, RaddtoWishhList,
} from './RetisioEvents';

const visitPDP = (itemData) => {
  viewItem(itemData);
  try {
    if (window && window.lstImplement) {
      window.lstImplement.browsedProduct(itemData);
    }
  } catch (e) {
    console.log(e);
  }

  RviewItem(itemData);
}

const Search = (obj) => {
  try{
    SearchProd(obj);
  }catch(e) {
    console.log(e);
  }
};

const ClickProduct = obj => {
  ProductClick(obj);
}

const login = (data) => {
  try {
    if (window && window.lstImplement) {
      window.lstImplement.captureEmail(data);
    }
  } catch (e) {
    console.log(e);
  }
};

const AddToCart = (data) => {
  try {
    AddItem(data);
  } catch (e) {
    console.log(e);
  }
};

const cartItems = (data) => {
  try {
    if (window && window.lstImplement) {
      window.lstImplement.captureCartItems(data);
    }
  } catch (e) {
    console.log(e);
  }
};

const AddtoWishhList = (obj) => {
  RaddtoWishhList(obj);
};


const notifyMe = (data, merchId) => {
  try {
    if(window && window.lstImplement) {
      window.lstImplement.notifyMe(data, merchId);
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
  AddToCart,
  notifyMe,
  AddtoWishhList,
};
