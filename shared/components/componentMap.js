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
import Facet from './template/components/facet'
import ResultList from './template/components/resultList'
import { ResultCount } from './template/components/resultCount'
import {
  CategoryDescription,
  CategoryLongDescription
} from './template/components/categoryDescription'
// import CookingGuideFacet from './cookingGuide/staticFacet'

const ComponentMap = {
  nextImage: NextImage,
  login: Login,
  'imageCarousel:default': ImageCarousel,
  'productCarousel:default': ProductCarousel,
  'defaultProductSelector:custom': ProductCarousel,
  // 'contactUsForm:custom': ContactUs,
  // 'catalogRequestForm:custom': RequestCatalog,
  // 'article-detail-prodcutid:custom': Article,
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
  // 'cookingguidefacet:custom': CookingGuideFacet
}
export default ComponentMap
