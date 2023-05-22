/* eslint-disable import/prefer-default-export */

/* eslint-disable linebreak-style */
const Settings = {
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  infinite: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const RecommondationsMap = {
  'Product-Similar SKUs': 'similar_sku',
};

export { Settings, RecommondationsMap };
