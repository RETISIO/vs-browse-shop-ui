/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { HtmlContent } from '@retisio/sf-ui'

function CookingInstructions (props) {
  const pdpDetails = props?.payLoad?.products[0]
  const [data, setData] = useState()
  const [description, setDescription] = useState()
  const [contentId, setContentId] = useState()

  const fetchCookingData = async id => {
    try {
      const response = await fetch(`/arc/getContentItem/${id}`)
      if (response && response.status !== 400) {
        const jsonData = await response.json()
        if (jsonData) {
          const config = JSON.parse(jsonData?.localizedConfigValue?.en_US)
          setData(config)
          const desc = {
            content: JSON.stringify([config.cookingInstruction])
          }
          setDescription(desc)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const pdpData = props?.payLoad?.products[0]
    if (
      pdpData?.additionalDetails?.cookingGuideProductIds &&
      pdpData?.additionalDetails?.cookingGuideProductIds?.length > 0
    ) {
      fetchCookingData(pdpData?.additionalDetails?.cookingGuideProductIds[0])
      setContentId(pdpData?.additionalDetails?.cookingGuideProductIds[0])
    }
  }, [props])

  const handlePrint = () => {
    const printContent = document.getElementsByClassName(
      'cooking-instruction-accordion'
    )[0].innerHTML
    const WinPrint = window.open(
      '',
      '',
      'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0'
    )
    WinPrint.document.write(printContent)
    WinPrint.document.close()
    WinPrint.focus()
    WinPrint.print()
    WinPrint.close()
  }

  return (
    <div
      className={`accordions-section ${
        pdpDetails?.additionalDetails?.cookingGuideProductIds &&
        pdpDetails?.additionalDetails?.cookingGuideProductIds?.length > 0
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
              <div className='panel-body'>
                <div className='cooking-instruction-button'>
                  <button
                    id='print-btn'
                    className='printbtn btn-primary btn-inverse btn-print'
                    onClick={() => handlePrint()}
                  >
                    <i className='icon icon-left fas fa-print'></i>
                    &nbsp; Print
                  </button>
                  <div className='btn-group'>
                    <a
                      className='sharebtn btn-primary btn-inverse btn-share dropdown-toggle'
                      href={`mailto:?subject=${data?.name}&body=Check out these cooking instructions from Allen Brothers: https://www.allenbrothers.com/article/${data?.name}/${contentId}`}
                    >
                      <i className='icon icon-left fas fa-share-square'></i>
                      &nbsp; Share
                    </a>
                  </div>
                </div>
                <div className='cooking-instruction-accordion'>
                  <div className='cooking-instruction-caption-accordion'>
                    <div className='cooking-instruction-heading-accordion'>
                      <h1>
                        {'Cooking Instructions: '}
                        <span className='text-slim'>{data?.name}</span>
                      </h1>
                      <p className='serving-size'>
                        <strong>{'Serving Size: '}</strong>
                        <span className='text-slim'>{data?.servingSize}</span>
                      </p>
                    </div>
                    <br />
                    <div className='cooking-description-accordion'>
                      {description && (
                        <HtmlContent
                          contentItemObj={description}
                          isNextJs={true}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}

export default CookingInstructions
