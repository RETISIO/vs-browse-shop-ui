/* eslint-disable import/prefer-default-export */
import { viewItem } from './gtag';
import { RviewItem } from './RetisioEvents';

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

export {
  visitPDP,
};
