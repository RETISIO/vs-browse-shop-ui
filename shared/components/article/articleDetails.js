/* eslint-disable linebreak-style */
/* eslint-disable no-debugger */
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
// import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { HtmlContent } from '@retisio/sf-ui'
import { useRouter } from 'next/router';
import NextImage from '../template/components/nextImage'
import { requestContructor } from '../../helpers/api'
import config from '../../helpers/getConfig'

export default function ArticleDetails({ props }) {
  const Props = props
  const [load, setLoad] = useState(false)
  const [productsData, setProductsData] = useState({})
  const [content, setContent] = useState()
  const [origin, setOrigin] = useState()
  const router = useRouter();

  useEffect(() => {
    if (props && props.content) {
      setContent(JSON.parse(props.content))
      setOrigin(window.location.origin)
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
      if (configValues.buyProduct && res.payLoad && res.payLoad.products) {
        configValues.products = res.payLoad.products
        setProductsData({
          configValues
        })
        setLoad(true)
      }
    })
  }, [])

  const contentData = JSON.parse(props.content)

  const description = {
    content: JSON.stringify([contentData.cookingInstruction])
  }

  const handlePrint = () => {
    const backupContent = document.body.innerHTML

    const headingContent = document.getElementsByClassName(
      'cooking-instruction-heading'
    )[0].innerHTML
    const descContent = document.getElementsByClassName(
      'cooking-description'
    )[0].innerHTML
    document.body.innerHTML = headingContent + descContent
    window.print()
    document.body.innerHTML = backupContent
    const printBtn = document.getElementById('print-btn')
    printBtn.addEventListener('click', handlePrint)
  }

  // const schema = {
  //   '@context': 'https://schema.org',
  //   '@type': 'Article',
  //   author: 'Allen Brothers',
  //   publisher: {
  //     '@type': 'Organization',
  //     name: 'Allen Brothers',
  //     logo: '/dam/AB/storefront/general/Allen-Brothers-Logo-white-528x72.png'
  //   },
  //   headline: contentData.name,
  //   // url: undefined,
  //   description: contentData.description || undefined,
  //   keywords: contentData.keywords || undefined
  // }

  return (
    <>
      {/* <Head>
        <script
          id="CC-schema-org-server"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head> */}
      {content && (
        <div className='cooking-instruction' id='11'>
          <div className='cooking-instruction-caption'>
            {content.servingSize.length ? (
              <div className='cooking-instruction-heading'>
                <h1>
                  {'Cooking Instructions: '}
                  <span className='text-slim'>{content.name}</span>
                </h1>
                <p className='serving-size'>
                  <strong>{'Serving Size: '}</strong>
                  <span className='text-slim'>{content.servingSize}</span>
                </p>
              </div>
            ) : (
              <div className='cooking-instruction-caption-nodata'></div>
            )}

            {load && (
              <>
                {productsData?.configValues?.products.map((value, index) => (
                  <div className='cooking-instruction-buttons'>
                    <NextImage
                      alt={value?.skus?.[value?.defaultSkuId]?.media?.altText}
                      className='item-thumb img-responsive'
                      src={`${config.IMGPATH}${
                        value?.skus?.[value?.defaultSkuId]?.media?.largeImg
                      }`}
                      height={262}
                      width={262}
                    />
                    <Link
                      className='btn btn-primary btn-block btn-buy'
                      id='btnBuyNow'
                      href={`/products/${
                        value.seoData && value.seoData.slug
                          ? value.seoData.slug
                          : value.displayName
                              .replace(
                                /[\s~`!@#$%^&*()_+\-={[}\]|\\:;"'<,>.?/]+/g,
                                '-'
                              )
                              .toLowerCase()
                      }/${value?.productId}`}
                    >
                      Buy Now
                    </Link>
                    <button
                      id='print-btn'
                      className='btn btn-primary btn-inverse btn-print'
                      onClick={() => handlePrint()}
                    >
                      <i className='icon icon-left fas fa-print'></i>
                      Print
                    </button>
                    <div className='btn-group'>
                      <a
                        className='btn btn-primary btn-inverse btn-share dropdown-toggle'
                        href={`mailto:?subject=Bacon Wrapped Quail Appetizers&amp;body=Check out these cooking instructions from Allen Brothers: ${origin}/article/bacon-wrapped-quail-appetizers/9`}
                      >
                        <i className='icon icon-left fas fa-share-square'></i>
                        Share
                      </a>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          <br />
          <div className='cooking-description'>
            <HtmlContent contentItemObj={description} isNextJs={true} />
          </div>
        </div>
      )}
    </>
  )
}
