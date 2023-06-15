/* eslint-disable prefer-const */
/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { GetAccordianData } from '../../helpers/utils';

function ProductAccordions (props) {
  let initialData = GetAccordianData(props);
  const [data, setData] = useState(initialData.data);
  // const [config, setConfig] = useState()
  const [name, setName] = useState(initialData.name);

  useEffect(() => {
    let productData = GetAccordianData(props);
    setName(productData.name)
    setData(productData.data)
  }, [props])

  return (
    <>
      {data && (
        <div className='accordions-section'>
          <div className='container'>
            <Accordion
              flush
              defaultActiveKey={`${
                name ? (name === 'longDescription' ? '0' : '') : ''
              }`}
            >
              {name && name === 'longDescription' ? (
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
              ) : (
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
                      // id='nutrition-info-body'
                      className='panel-body nutrition-info-body'
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
