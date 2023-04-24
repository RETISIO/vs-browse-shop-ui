/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-named-as-default
import NextImage from './template/components/nextImage'
import Login from './Login'
import ImageCarousel from './Sliders/ImageCarousel'
import ProductCarousel from './Sliders/ProductCarousel'
import ContactUs from './contactUs'
import RequestCatalog from './requestCatalog'
import Article from './article'
import MiniStaticCarousel from './miniStaticCarousel'
import CookingGuide from './cookingGuide'
import ProductDescription from './pdp/pdpdetails'
import CustomBreadcrumb from './custombreadcrumb'
import ProductInfo from './productinfo'
import ArticleTitle from './article/articleTitle'

const ComponentMap = {
  nextImage: NextImage,
  login: Login,
  'imageCarousel:default': ImageCarousel,
  'productCarousel:default': ProductCarousel,
  'contactUsForm:custom': ContactUs,
  'catalogRequestForm:custom': RequestCatalog,
  'article-detail-prodcutid:custom': Article,
  'miniStaticCarousel:custom': MiniStaticCarousel,
  'imagelist:custom': CookingGuide,
  'article:custom': Article,
  'pdp-product-block:custom': ProductDescription,
  'articletile:custom': ArticleTitle,
  // 'article-detail-prodcutid:custom': Article,
  'breadcrumb:default': CustomBreadcrumb,
  'classification:custom': ProductInfo
}
export default ComponentMap
