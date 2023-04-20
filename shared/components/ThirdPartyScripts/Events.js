/* eslint-disable import/prefer-default-export */
import { viewItem } from './gtag';
import { RviewItem } from './RetisioEvents';

const visitPDP = (itemData) => {
  viewItem(itemData);
  if(window.lstImplement) {
    window.lstImplement.browsedProduct(itemData);
  }
  RviewItem(itemData);
};

export {
  visitPDP,
};
