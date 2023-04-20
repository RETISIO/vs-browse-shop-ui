import React, { useState, useEffect } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import NoImage from '../../../../public/static/assets/no-image.png';

function MagnifyImage({
  src, alt, width, height,
}) {
  const [srcImg, setSrc] = useState(src);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setSrc(src);
  }, [src]);

  return (
    <ReactImageMagnify
      {...{
        smallImage: {
          src: srcImg.src ? srcImg.src : srcImg,
          isFluidWidth: true,
          alt,
          onError: () => setSrc(NoImage),
        },
        largeImage: {
          src: srcImg.src ? srcImg.src : srcImg,
          width: width || 600,
          height: height || 600,
          alt,
          onError: () => setSrc(NoImage),
        },
      }}
      style={{
        cursor: 'zoom-in',
      }}
      enlargedImageContainerStyle={{
        zIndex: 999,
      }}
    />
  );
}

export default MagnifyImage;
