/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion'

function ProductAccordions (props) {
  const [data, setData] = useState()
  const [config, setConfig] = useState()

  useEffect(() => {
    const configVal = JSON.parse(props?.configValue)
    setConfig(configVal)
    if (configVal?.classification?.product === 'longDescription') {
      setData(props?.payLoad?.products[0]?.longDescription)
    } else if (configVal?.classification?.product === 'defaultParentCategory') {
      setData(props?.payLoad?.products[0]?.additionalDetails?.nutritionalInfo)
    }
  }, [props])

  return (
    <>
      {data && (
        <div className='accordions-section'>
          <div className='container'>
            <Accordion
              flush
              defaultActiveKey={`${
                config?.classification?.product === 'longDescription' ? '0' : ''
              }`}
            >
              {config?.classification?.product === 'longDescription' && (
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <div className='panel panel-default panel-large'>
                      <div className='panel-heading'>
                        <div className='panel-title'>
                          <a
                            id='productInfoSelector'
                            className='collapse'
                            role='button'
                            data-toggle='collapse'
                            href='#productInfoPanel'
                          >
                            Product Info
                            <i className='icon fas fa-chevron-down'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div
                      className='panel-body'
                      data-bind='html: $data.product().longDescription()'
                      dangerouslySetInnerHTML={{ __html: data }}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              )}
              {config?.classification?.product === 'defaultParentCategory' && (
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <div className='panel panel-default panel-large'>
                      <div className='panel-heading'>
                        <div className='panel-title'>
                          <a
                            id='nutritionalInfoSelector'
                            className='collapse'
                            role='button'
                            data-toggle='collapse'
                            href='#nutritionalInfoPanel'
                          >
                            Nutrition Info
                            <i className='icon fas fa-chevron-down'></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div
                      className='panel-body'
                      data-bind='html: $data'
                      dangerouslySetInnerHTML={{ __html: data }}
                    ></div>
                  </Accordion.Body>
                </Accordion.Item>
              )}
            </Accordion>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductAccordions
