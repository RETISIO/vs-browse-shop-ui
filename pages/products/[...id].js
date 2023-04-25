/* eslint-disable import/no-named-as-default-member */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
/* eslint-disable semi */
/* eslint-disable space-before-function-paren */
import React, { useEffect } from 'react'
import { PageBuilder } from '@retisio/sf-ui'
import { usePageDataContext } from '../../shared/context/pageData-context'
import MainLayout from '../../shared/components/Layout'
import getPDPData from '../../shared/helpers/getPDPData'
// import ProductDescription from '../../shared/components/pdp/pdpdetails'
// import { viewItem } from '../../shared/components/ThirdPartyScripts/gtag'
import { visitPDP } from '../../shared/components/ThirdPartyScripts/Events'
import Yotpo from '../../shared/components/ThirdPartyScripts/Yotpo'
import ComponentMap from '../../shared/components/componentMap'
import GiftCard from '../../shared/components/giftCard'

export default function ProductDetails({ data }) {
  const { setPageData } = usePageDataContext()
  const pageContent = data && data.page && data.page.segmentsMap
  const { payLoad } = data
  useEffect(() => {
    setPageData(data)
    visitPDP(data)
  }, [])

  const renderProductDescriptionPage = () => {
    const productType = payLoad?.products && payLoad?.products[0]?.productType;
    if (productType === 'giftcard') {
      return <GiftCard pdpData={data}/>
    }
    return (
      <PageBuilder
        pageContent={pageContent}
        ComponentMap={ComponentMap}
        payLoad={payLoad}
      />
    )
  }

  return (
    <MainLayout data={data}>
      {/* <Yotpo /> */}
      <main>
        {/* {i18n.t('title')} */}
        { renderProductDescriptionPage() }
      </main>
      <Yotpo />
    </MainLayout>
  )
}

ProductDetails.getInitialProps = async context => {
  const data = await getPDPData(context)
  return {
    data
  }
}
