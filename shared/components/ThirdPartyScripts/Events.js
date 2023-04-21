/* eslint-disable import/prefer-default-export */
import { viewItem } from './gtag';
import { RviewItem, SearchProd } from './RetisioEvents';

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
  SearchProd(obj);
};

export {
  visitPDP,
  Search,
};
