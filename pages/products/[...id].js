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
import { viewItem } from '../../shared/components/ThirdPartyScripts/gtag'
import Yotpo from '../../shared/components/ThirdPartyScripts/Yotpo'
import ComponentMap from '../../shared/components/componentMap'

export default function ProductDetails({ data }) {
  const { setPageData } = usePageDataContext()
  const pageContent = data && data.page && data.page.segmentsMap
  const { payLoad } = data
  useEffect(() => {
    setPageData(data)
    viewItem(data)
  }, [])

  return (
    <MainLayout data={data}>
      {/* <Yotpo /> */}
      <main>
        {/* {i18n.t('title')} */}
        <PageBuilder
          pageContent={pageContent}
          ComponentMap={ComponentMap}
          payLoad={payLoad}
        />
        {/* <ProductDescription pdpData={data} /> */}
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
