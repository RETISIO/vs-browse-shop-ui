/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import NoImage from '../../../public/static/assets/no-image.png'

function NextImage (props) {
  const { src, alt, className } = props
  const [srcImg, setSrc] = useState(src)

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setSrc(props.src)
  }, [props])

  return (
    <Image
      {...props}
      alt={alt || 'alternate Image'}
      className={className}
      src={srcImg}
      loading='lazy'
      // placeholder="blur"
      blurDataURL='/static/assets/blur.png'
      onError={() => setSrc(NoImage)}
    />
  )
}
export default NextImage
