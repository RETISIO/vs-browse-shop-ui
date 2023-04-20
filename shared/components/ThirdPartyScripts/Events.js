/* eslint-disable import/prefer-default-export */
import { viewItem } from './gtag';

const visitPDP = (itemData) => {
  viewItem(itemData);
  if(window.lstImplement) {
    window.lstImplement.browsedProduct(itemData);
  }
};

export {
  visitPDP,
};
