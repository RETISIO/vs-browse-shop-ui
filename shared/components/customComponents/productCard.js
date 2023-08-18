/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable linebreak-style */
import React, { useRef, useEffect } from 'react';
import ProductTile from './ProductTile';

export default function ProductCard({
  value, isLast, newLimit, index, singleColumn
}) {
  /**
   * Select the Card component with useRef
   */
  const cardRef = useRef();

   /**
    * Implement Intersection Observer to check if the last Card in the array is visible on the screen, then set a new limit
    */
  useEffect(() => {
    if (!cardRef?.current) return;
 
    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting) {
        newLimit();
        observer.unobserve(entry.target);
      }
    });
 
    observer.observe(cardRef.current);
  }, [isLast]);

  return (
    <>
      <div className={`col-md-${singleColumn ? 3 : 4} col-sm-6 col-xs-12`} ref={cardRef} key={index}>
        <ProductTile value={value} />
      </div>
    </>
  );
}
