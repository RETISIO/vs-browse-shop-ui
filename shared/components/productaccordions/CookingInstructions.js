/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import CookingDescription from './CookingDescription'

function CookingInstructions (props) {
  const pdpDetails = props?.payLoad?.products[0]
  const [cookiendGuidIds, setCookingGuidIds] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    const pdpData = props?.payLoad?.products[0]
    if (
      pdpData?.productDetails?.productAssociations?.cooking_guides &&
      pdpData?.productDetails?.productAssociations?.cooking_guides?.length > 0
    ) {
      setData([])
      setCookingGuidIds(
        pdpData?.productDetails?.productAssociations?.cooking_guides
      )
    }
  }, [props])

  useEffect(() => {
    if (cookiendGuidIds && cookiendGuidIds?.length > 0) {
      cookiendGuidIds.map(id => fetchCookingData(id))
    }
  }, [cookiendGuidIds])

  async function fetchCookingData (cid) {
    try {
      const response = await fetch(`/arc/getContentItem/${cid}`)
      if (response && response.status !== 400) {
        const jsonData = await response.json()
        if (jsonData) {
          const config = JSON.parse(jsonData?.localizedConfigValue?.en_US)
          const desc = {
            content: JSON.stringify([config.cookingInstruction])
          }
          setData([...data, { id: cid, config, desc }])
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  function displayCookingDescription () {
    if (data && data.length > 0) {
      return (
        <div
          className={`accordions-section ${
            pdpDetails?.productDetails?.productAssociations?.cooking_guides &&
            pdpDetails?.productDetails?.productAssociations?.cooking_guides &&
            data &&
            data.length > 0
              ? ''
              : 'hide'
          }`}
        >
          <div className='container'>
            <Accordion flush>
              <Accordion.Item eventKey='0'>
                <Accordion.Header>
                  <div className='panel panel-default panel-large'>
                    <div className='panel-heading'>
                      <div className='panel-title'>
                        <a
                          id='cookingInfoSelector'
                          className='collapse'
                          role='button'
                          data-toggle='collapse'
                          href='#cookingInfoPanel'
                        >
                          Cooking Instructions
                          <i className='icon fas fa-chevron-down'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  {data.length &&
                    data.map(dataObj => (
                      <CookingDescription
                        id={dataObj.id}
                        data={dataObj.config}
                        description={dataObj.desc}
                      />
                    ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      )
    }
    return ''
  }
  return <> {displayCookingDescription()}</>
}

export default CookingInstructions
