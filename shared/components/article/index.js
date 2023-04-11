/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable comma-spacing */
/* eslint-disable import/first */
/* eslint-disable react/button-has-type */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-quotes */
/* eslint-disable operator-linebreak */
/* eslint-disable arrow-parens */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable import/named */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-empty */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-useless-fragment */
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import NextImage from '../template/components/nextImage'
import { requestContructor } from '../../helpers/api'

export default function Article(props) {
  const Props = props
  const [load, setLoad] = useState(false)
  const [productsData, setProductsData] = useState({})
  const [content, setContent] = useState()

  useEffect(() => {
    if (props && props.content) {
      setContent(JSON.parse(props.content))
    }
  }, [props])

  useEffect(() => {
    const configValues = Props.configValue
      ? JSON.parse(Props.configValue)
      : { noOfRecords: 6 }
    const productId = configValues?.buyProduct

    requestContructor('getProductsData', '', {
      method: 'POST',
      data: { productIds: [productId] }
    }).then(res => {
      //   console.log('productId..,res.', productId, res)
      if (configValues.buyProduct && res.payLoad && res.payLoad.products) {
        configValues.products = res.payLoad.products
        setProductsData({
          configValues
        })
        setLoad(true)
      }
    })
  }, [])

  const handlePrint = () => {
    const backupContent = document.body.innerHTML
    const printContent = document.getElementsByClassName(
      'cooking-instruction'
    )[0].innerHTML
    document.body.innerHTML = printContent
    window.print()
    document.body.innerHTML = backupContent
  }

  console.log('from Article.....content,content.name..', content)

  return (
    <>
      {content && (
        <div className='cooking-instruction' id='11'>
          <div className='cooking-instruction-caption'>
            <div>
              <h1>
                {/* <span className='text-slim'>Bacon-wrapped Filets....</span> */}
                {content.servingSize.length && 'Cooking Instructions: '}
                <span className='text-slim'>{content.name}</span>
              </h1>
              {content.servingSize.length && (
                <p className='serving-size'>
                  <strong>Serving Size:</strong>
                  {/* <strong></strong> */}
                  <span className='text-slim'>{content.servingSize}</span>
                </p>
              )}
            </div>
            {load && (
              <>
                {productsData?.configValues?.products.map((value, index) => (
                  <div className='cooking-instruction-buttons'>
                    <NextImage
                      alt={value?.skus?.[value?.defaultSkuId]?.media?.altText}
                      className='item-thumb img-responsive'
                      src={`${process.env.NEXT_PUBLIC_IMAGEPATH}${
                        value?.skus?.[value?.defaultSkuId]?.media?.largeImg
                      }`}
                      height={262}
                      width={262}
                    />
                    <Link
                      className='btn btn-primary btn-block btn-buy'
                      id='btnBuyNow'
                      href={`/products/${value?.displayName
                        ?.toLowerCase()
                        ?.replace(/ /g, '-')}/${value?.productId}`}
                    >
                      Buy Now
                    </Link>
                    <button
                      className='btn btn-primary btn-inverse btn-print'
                      onClick={handlePrint}
                    >
                      <i className='icon icon-left fas fa-print'></i>
                      Print
                    </button>
                    <div className='btn-group'>
                      <a
                        className='btn btn-primary btn-inverse btn-share dropdown-toggle'
                        href='mailto:?subject=Bacon Wrapped Quail Appetizers&amp;body=Check out these cooking instructions from Allen Brothers: https://www.allenbrothers.com/article/bacon-wrapped-quail-appetizers/9'
                      >
                        <i className='icon icon-left fas fa-share-square'></i>
                        Share
                      </a>
                    </div>
                  </div>
                ))}
              </>
            )}
            {/* <img
              src='/ccstore/v1/images/?source=/file/v7112668396619829489/products/ab_c1_2018_024_0140_cover_baconwrappedfilets_680.jpg&amp;height=300&amp;width=300'
              alt='Bacon-wrapped Filets'
            />
            <a
              className='btn btn-primary btn-block btn-buy'
              id='btnBuyNow'
              href='/products/bacon-wrapped-filet-mignon/10373'
            >
              Buy Now
            </a>
            <button className='btn btn-primary btn-inverse btn-print'>
              <i className='icon icon-left fas fa-print'></i>
            </button>
            <div className='btn-group'>
              <a
                className='btn btn-primary btn-inverse btn-share dropdown-toggle'
                href='mailto:?subject=Bacon-wrapped Filets&amp;body=Check out these cooking instructions from Allen Brothers: https://www.allenbrothers.com/article/bacon-wrapped-filets/11'
              >
                <i className='icon icon-left fas fa-share-square'></i>
              </a>
            </div> */}
            {/* </div> */}
          </div>
          <br />
          <div className='cooking-description'>
            {content.cookingInstruction}
            {/* <div className='dot-divider' style={{ margin: '10px 0 16px 0' }}>
              &nbsp;
            </div>

            <div className='recipe-products'>
              <h4>Products included in this recipe</h4>

              <ul>
                <li>
                  <a href='/products/bacon-wrapped-filet-mignon/10373'>
                    Bacon Wrapped Filet Mignon
                  </a>
                </li>
              </ul>
            </div>

            <div className='dot-divider' style={{ margin: '14px 0 30px 0' }}>
              &nbsp;
            </div>

            <p>8 OUNCE FILET</p>

            <p>Thaw* product on a dish in the refrigerator.</p>

            <p>&nbsp;</p>

            <h3>SEAR &amp; ROAST</h3>

            <ol>
              <li>
                Preheat oven to 400°F. Season filets with salt and pepper.
              </li>
              <li>
                In skillet, heat 2 teaspoon olive oil on medium heat until
                almost smoking. Sear filets 1 minute on each side. Then turn
                filet on the bacon side and roll it in hot pan for a minute
                more.
              </li>
              <li>
                Roast in oven 4-6 minutes each side for medium rare. Adjust
                cooking time for desired doneness.
              </li>
            </ol>

            <p>&nbsp;</p>

            <h3>GRILL</h3>

            <ol>
              <li>Heat grill to medium high.</li>
              <li>
                Lightly brush filet with olive oil and season with salt and
                pepper.
              </li>
              <li>Grill 6-8 minutes on each side for medium rare.</li>
            </ol>

            <p>&nbsp;</p>

            <h3>FOR BEST RESULTS</h3>

            <p>
              *See
              <a href='/article/delivery-storage-thawing/cg10001'>
                Delivery Storage and Thawing
              </a>
              for thawing details.
            </p>

            <p>
              Remove thawed product from the refrigerator 30 minutes before
              cooking.
            </p>

            <p>Let rest for 5 minutes before serving.</p> */}
          </div>
        </div>
      )}
    </>
  )
}
