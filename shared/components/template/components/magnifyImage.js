import React, { useState, useEffect } from 'react';
import ReactImageZoom from 'react-image-zoom';
import NoImage from '../../../../public/static/assets/no-image.png';

function MagnifyImage(props) {
  const [srcImg, setSrc] = useState(props?.src);

  useEffect(() => {
    // eslint-disable-next-line react/destructuring-assignment
    setSrc(props?.src);
  }, [props]);

  return (
    <div className="magnify-img">
      <ReactImageZoom
        {...props}
      />
    </div>
  );
}

export default MagnifyImage;
