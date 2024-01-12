import React from "react";
import LazyLoad from "react-lazy-load";

function OurWorksItem(props) {
  const { img, title } = props;
  return (
    <div className="reviews_item">
      <div className="reviews_img">
        <LazyLoad height={460} offset={100}>
          <img src={`assets/img/${img}`} alt="tattoo-reviews" />
        </LazyLoad>
      </div>
      <p>{title}</p>
    </div>
  );
}

export default OurWorksItem;
