/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-named-as-default
import NextImage from './template/components/nextImage';
import Login from './Login';
import ImageCarousel from './Sliders/ImageCarousel';
import ProductCarousel from './Sliders/ProductCarousel';
import ContactUs from './contactUs';
import RequestCatalog from './requestCatalog';

const ComponentMap = {
  nextImage: NextImage,
  login: Login,
  'imageCarousel:default': ImageCarousel,
  'productCarousel:default': ProductCarousel,
  'contactUsForm:custom': ContactUs,
  'catalogRequestForm:custom': RequestCatalog
};
export default ComponentMap;
