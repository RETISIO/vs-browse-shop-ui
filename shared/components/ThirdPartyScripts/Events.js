/* eslint-disable import/prefer-default-export */
import { viewItem } from './gtag';
import { RviewItem, SearchProd, ProductClick } from './RetisioEvents';

const visitPDP = (itemData) => {
  viewItem(itemData);
  try{
    if(window && window.lstImplement) {
      window.lstImplement.browsedProduct(itemData);
    }
  }catch(e) {
    console.log(e);
  }

  RviewItem(itemData);
};

const Search = (obj) => {
  try{
    SearchProd(obj);
  }catch(e) {
    console.log(e);
  }
};

const ClickProduct = (obj) => {
  ProductClick(obj);
};

export {
  visitPDP,
  Search,
  ClickProduct,
};
