/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable jsx-quotes */
/* eslint-disable space-before-function-paren */
import React from 'react'

function ArticleTitle(props) {
  const nameObj = JSON.parse(props.content)

  return (
    <div className='page-title-container'>
      <h1>{nameObj.name}</h1>
    </div>
  )
}

export default ArticleTitle
