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
import ProductAccordions from './productaccordions/ProductAccordions'
import ArticleTitle from './article/articleTitle'
import ReviewSection from './reviewsection'
import ShippingInfoAccordion from './productaccordions/ShippingInfoAccordion'
import CookingInstructions from './productaccordions/CookingInstructions'
import ProductRecommondation from './Sliders/ProductRecommondation'
// import loginIcon from '../../public/headerImg/mobile/account/acc-loginIcon.png';
// import registerIcon from '../../public/headerImg/mobile/account/acc-registerIcon.png';
// import dashboardIcon from '../../public/headerImg/mobile/account/acc-dashboardIcon.png';
// import accountInfoIcon from '../../public/headerImg/mobile/account/acc-accountInfoIcon.png'
// import addressBookIcon from '../../public/headerImg/mobile/account/acc-addressBookIcon.png'
// import ordersIcon from '../../public/headerImg/mobile/account/acc-ordersIcon.png'
// import wishlistIcon from '../../public/headerImg/mobile/account/acc-wishlistIcon.png'
// import logOutIcon from '../../public/headerImg/mobile/account/acc-logOutIcon.png'

const ComponentMap = {
  nextImage: NextImage,
  login: Login,
  'imageCarousel:default': ImageCarousel,
  'productCarousel:default': ProductCarousel,
  'contactUsForm:custom': ContactUs,
  'catalogRequestForm:custom': RequestCatalog,
  // 'article-detail-prodcutid:custom': Article,
  'miniStaticCarousel:custom': MiniStaticCarousel,
  'imagelist:custom': CookingGuide,
  'article:custom': Article,
  'pdpproductblock:custom': ProductDescription,
  'articletile:custom': ArticleTitle,
  // 'article-detail-prodcutid:custom': Article,
  'breadcrumb:default': CustomBreadcrumb,
  'classification:custom': ProductAccordions,
  'pdpshippinginfo:custom': ShippingInfoAccordion,
  'pdpcookinginstructions:custom': CookingInstructions,
  'pdpyotpoplaceholder:custom': ReviewSection,
  'productRecommendations:custom': ProductRecommondation,
  // loginIcon,
  // registerIcon,
  // dashboardIcon,
  // accountInfoIcon,
  // addressBookIcon,
  // ordersIcon,
  // wishlistIcon,
  // logOutIcon,

}
export default ComponentMap
