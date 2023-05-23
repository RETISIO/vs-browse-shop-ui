/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import CookingDescription from './CookingDescription'

function CookingInstructions (props) {
  const pdpDetails = props?.payLoad?.products[0]
  const [cookiendGuidIds, setCookingGuidIds]  = useState([]);

  useEffect(() => {
    const pdpData = props?.payLoad?.products[0]
    if (
      pdpData?.productDetails?.productAssociations?.cooking_guides &&
      pdpData?.productDetails?.productAssociations?.cooking_guides?.length > 0
    ) {
      setCookingGuidIds(pdpData?.productDetails?.productAssociations?.cooking_guides);
    }
  }, [props])


  return (
    <>
      {(<div
        className={`accordions-section ${
          pdpDetails?.productDetails?.productAssociations?.cooking_guides &&
          pdpDetails?.productDetails?.productAssociations?.cooking_guides?.length > 0
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
                {cookiendGuidIds.length && cookiendGuidIds.map(id =>(<CookingDescription id={id} />))}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>)}
    </>
  )
}

export default CookingInstructions
