import React, { useState, useEffect } from 'react'
import ReactImageZoom from 'react-image-zoom'
import NoImage from '../../../public/static/assets/no-image.png'

function MagnifyImage (props) {
  const [data, setData] = useState(props)

  const getImageOrFallback = (url, fallback) =>
    new Promise((resolve, reject) => {
      const img = new Image()
      img.src = url
      img.onload = () => resolve(url)
      img.onerror = () => {
        reject(`image not found for url ${url}`)
      }
    }).catch(() => fallback?.src)

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    getImageOrFallback(props?.img, NoImage).then(res => {
      setData({
        ...props,
        zoomPosition: 'original',
        img: res
      })
    })
  }, [props])

  return (
    <div className='magnify-img'>
      <ReactImageZoom {...data} />
    </div>
  )
}

export default MagnifyImage
