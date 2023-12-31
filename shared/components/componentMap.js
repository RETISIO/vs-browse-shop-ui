/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-named-as-default
import NextImage from './customComponents/nextImage'
import Login from './Login'
import ImageCarousel from './Sliders/ImageCarousel'
import ProductCarousel from './Sliders/ProductCarousel'
// import ContactUs from './contactUs'
// import RequestCatalog from './requestCatalog'
// import Article from './article'
// import CookingGuide from './cookingGuide'
// import ProductDescription from './pdp/pdpdetails_sort'
import ProductDescription from './pdp/pdpdetails'
import CustomBreadcrumb from './custombreadcrumb'
import ProductAccordions from './productaccordions/ProductAccordions'
// import ArticleTitle from './article/articleTitle'
import ReviewSection from './reviewsection'
import ShippingInfoAccordion from './productaccordions/ShippingInfoAccordion'
import CookingInstructions from './productaccordions/CookingInstructions'
import ProductRecommondation from './Sliders/ProductRecommondation'
import Facet from './customComponents/facet'
import ResultList from './customComponents/resultList'
import { ResultCount } from './customComponents/resultCount'
import {
  CategoryDescription,
  CategoryLongDescription
} from './customComponents/categoryDescription';
import HeroBanner from './Sliders/HeroBanner'
import Featureproducts from './customComponents/Featureproducts'
// import CookingGuideFacet from './cookingGuide/staticFacet'

const ComponentMap = {
  nextImage: NextImage,
  login: Login,
  'imageCarousel:default': ImageCarousel,
  'customimagecarousel:custom': ImageCarousel,
  'productCarousel:default': ProductCarousel,
  'defaultProductSelector:custom': ProductCarousel,
  // 'contactUsForm:custom': ContactUs,
  // 'catalogRequestForm:custom': RequestCatalog,
  // 'article-detail-prodcutid:custom': Article,
  // 'miniStaticCarousel:custom': MiniStaticCarousel,
  // 'imagelist:custom': CookingGuide,
  // 'article:custom': Article,
  'pdpproductblock:custom': ProductDescription,
  // 'articletile:custom': ArticleTitle,
  // 'article-detail-prodcutid:custom': Article,
  'breadcrumb:default': CustomBreadcrumb,
  'classification:custom': ProductAccordions,
  'pdpshippinginfo:custom': ShippingInfoAccordion,
  'pdpcookinginstructions:custom': CookingInstructions,
  'pdpyotpoplaceholder:custom': ReviewSection,
  'productRecommendations:custom': ProductRecommondation,
  'facet:default': Facet,
  'resultCount:default': ResultCount,
  'resultList:default': ResultList,
  'categoryDescription:custom': CategoryDescription,
  'didyoumean:custom': CategoryDescription,
  'categoryLongDescription:custom': CategoryLongDescription,
  // 'cookingguidefacet:custom': CookingGuideFacet,
  'customherobanner:custom': HeroBanner,
  'herobanner:custom': HeroBanner,
  'featuredproducts:custom': Featureproducts
}
export default ComponentMap
