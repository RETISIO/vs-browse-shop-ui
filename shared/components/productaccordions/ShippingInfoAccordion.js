import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion'

function ShippingInfoAccordion (props) {
  const [data, setData] = useState()

  useEffect(() => {
    const configVal = JSON.parse(props?.configValue)
    if (configVal?.pdpShippingInfo) {
      setData(configVal?.pdpShippingInfoHtml)
    }
  }, [props])

  return (
    <div className='accordions-section'>
      <div className='container'>
        <Accordion flush>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              <div className='panel panel-default panel-large'>
                <div className='panel-heading'>
                  <div className='panel-title'>
                    <a
                      id='shippingInfoSelector'
                      className='collapse'
                      role='button'
                      data-toggle='collapse'
                      // href="#shippingInfoPanel"
                    >
                      Shipping Info
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
        </Accordion>
      </div>
    </div>
  )
}

export default ShippingInfoAccordion
