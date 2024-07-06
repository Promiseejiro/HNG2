import ReactStars from "react-stars";
import React from "react";
import { render } from "react-dom";

const Rating = ({ rating }) => {
  const ratingChanged = ({}) => {};
  return (
    <div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={16}
        color2={"#FFB020"}
        value={rating}
      />
    </div>
  );
};

export default Rating;
