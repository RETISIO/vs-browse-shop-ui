import React from 'react';

export default function RestaurantPartnerIcons(props) {
  return (
    <span id={props.iconId}>
      <div className="cc-image">
        <a data-bind="attr: {href: config.image.link}" href={props.iconHref}>
          <img
            src={props.iconSrc}
            alt={props.iconAlt}
            title={props.iconTitle}
          />
        </a>
      </div>
    </span>
  );
}
