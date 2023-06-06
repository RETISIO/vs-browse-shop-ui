/* eslint-disable linebreak-style */
import React from 'react'

export function Loader () {
  return (
    <div
      id='loadingModal'
      className='loadingIndicator'
      style={{ display: 'block' }}
    >
      <div id='cc-spinner' className='cc-spinner'>
        <div className='cc-spinner-css' style={{ top: '150px' }}>
          <span className='ie-show'>Loading...</span>
          <div className='cc-spinner-css-1'></div>
          <div className='cc-spinner-css-2'></div>
          <div className='cc-spinner-css-3'></div>
          <div className='cc-spinner-css-4'></div>
          <div className='cc-spinner-css-5'></div>
          <div className='cc-spinner-css-6'></div>
          <div className='cc-spinner-css-7'></div>
          <div className='cc-spinner-css-8'></div>
          <div className='cc-spinner-css-9'></div>
          <div className='cc-spinner-css-10'></div>
          <div className='cc-spinner-css-11'></div>
          <div className='cc-spinner-css-12'></div>
        </div>
      </div>
    </div>
  )
}
// export default Loader;

export function EllipseLoader () {
  return (
    <div className='lds-ellipsis'>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
