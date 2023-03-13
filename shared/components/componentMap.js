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
  'Image carousel': ImageCarousel,
  'product carousel': ProductCarousel,
  'contact us form': ContactUs,
  'Catalog Request Form': RequestCatalog
};
export default ComponentMap;
