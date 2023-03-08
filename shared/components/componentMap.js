import NextImage from './template/components/nextImage';
import Login from './Login';
import ImageCarousel from './Sliders/ImageCarousel';
import ProductCarousel from './Sliders/ProductCarousel';

const ComponentMap = {
  nextImage: NextImage,
  login: Login,
  'Image carousel': ImageCarousel,
  'product carousel': ProductCarousel,
};
export default ComponentMap;
