/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
/* eslint-disable semi */
/* eslint-disable space-before-function-paren */
import React, { useState, useEffect } from 'react'
import { PageBuilder } from '@retisio/sf-ui'
import absoluteUrl from 'next-absolute-url'
import { useRouter, Router } from 'next/router'
import { usePageDataContext } from '../../shared/context/pageData-context'
import MainLayout from '../../shared/components/Layout'
import getPDPData from '../../shared/helpers/getPDPData'
import { Loader } from '../../shared/components/loader'

// import ProductDescription from '../../shared/components/pdp/pdpdetails'
// import { viewItem } from '../../shared/components/ThirdPartyScripts/gtag'
import { visitPDP } from '../../shared/components/ThirdPartyScripts/Events'
import Yotpo from '../../shared/components/ThirdPartyScripts/Yotpo'
import ComponentMap from '../../shared/components/componentMap'
import GiftCard from '../../shared/components/giftCard'
import SchemaOrg from '../../shared/helpers/schemaOrg'

export default function ProductDetails({ data, origin }) {
  const { setPageData } = usePageDataContext()
  const pageContent = data && data.page && data.page.segmentsMap
  const pageType = 'PDP'
  const { payLoad } = data
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setPageData(data)
    visitPDP(data)
    router.events.on('routeChangeStart', url => {
      setLoading(true)
    })
    Router.events.on('routeChangeComplete', url => {
      setLoading(false)
      if (window && window.yotpo) {
        window.yotpo.refreshWidgets()
      }
    })
    Router.events.on('routeChangeError', url => {
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if (data?.page === undefined || !data?.payLoad?.products) {
      router?.push('/404')
    }
  }, [])

  let abUrl = ''
  let seoData = ''
  if (origin) {
    abUrl = origin + router.asPath
  } else {
    abUrl = window.location.href
  }
  if (
    data &&
    data.payLoad &&
    data.payLoad.products &&
    data.payLoad.products[0] &&
    data.payLoad.products[0].seoData
  ) {
    seoData = data.payLoad.products[0].seoData
  }
  const renderProductDescriptionPage = () => {
    const productType = payLoad?.products && payLoad?.products[0]?.productType
    if (productType === 'egiftcard' || productType === 'giftcard') {
      return <GiftCard pdpData={data} />
    }
    return (
      <>
        {payLoad?.products && payLoad?.products.length && (
          <PageBuilder
            pageContent={pageContent}
            ComponentMap={ComponentMap}
            payLoad={{ ...payLoad, pageType }}
          />
        )}
      </>
    )
  }

  return (
    <MainLayout data={data} abUrl={abUrl} SEO={seoData}>
      {/* <Yotpo /> */}
      <SchemaOrg abUrl={abUrl} productData={payLoad?.products?.[0]} />
      <main>
        {/* {i18n.t('title')} */}
        {loading && <Loader />}
        {renderProductDescriptionPage()}
      </main>
      <Yotpo />
    </MainLayout>
  )
}

ProductDetails.getInitialProps = async context => {
  const { origin } = absoluteUrl(context.req)
  const data = await getPDPData(context)
  return {
    data,
    origin
  }
}
