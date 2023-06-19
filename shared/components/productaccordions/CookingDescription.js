/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { HtmlContent } from '@retisio/sf-ui'

export default function CookingDescription ({ id, data, description }) {
  const { origin } = window.location
  const handlePrint = () => {
    const printContent = document.getElementById(id).innerHTML
    const WinPrint = window.open(
      '',
      '',
      'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0'
    )
    WinPrint.document.open()
    WinPrint.document.write(
      `<html><head><title>Cooking Instructions</title></head><body>${printContent}</body></html>`
    )
    WinPrint.document.close()
    WinPrint.focus()
    WinPrint.print()
    WinPrint.close()
  }

  return (
    <div className='panel-body cooking-body'>
      <div className='cooking-instruction-button'>
        <div className='cooking-instruction-printbtn'>
          <button
            id='print-btn'
            className='printbtn btn-primary btn-inverse btn-print'
            onClick={() => handlePrint()}
          >
            <i className='icon icon-left fas fa-print'></i>
            &nbsp; Print
          </button>
        </div>
        <div className='cooking-instruction-sharebtn'>
          <div className='btn-group'>
            <a
              className='sharebtn btn-primary btn-inverse btn-share dropdown-toggle'
              href={`mailto:?subject=${data?.name}&body=Check out these cooking instructions from Allen Brothers: ${origin}/article/${data?.name}/${id}`}
            >
              <i className='icon icon-left fas fa-share-square'></i>
              &nbsp; Share
            </a>
          </div>
        </div>
      </div>
      <div className='cooking-instruction-accordion' id={id}>
        <div className='cooking-instruction-caption-accordion'>
          <div className='cooking-instruction-heading-accordion'>
            <h1>
              {'Cooking Instructions: '}
              <span className='text-slim'>{data?.name}</span>
            </h1>
            {data?.servingSize && data?.servingSize !== '' && (
              <p className='serving-size'>
                <strong>{'Serving Size: '}</strong>
                <span className='text-slim'>{data?.servingSize}</span>
              </p>
            )}
          </div>
          <br />
          <div className='cooking-description-accordion'>
            {description && (
              <HtmlContent contentItemObj={description} isNextJs={true} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
