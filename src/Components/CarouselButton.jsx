import React from "react";

export function CarouselButton(props) {
  // Use for button select in shop
  return (
    <button
      type="button"
      className="carousel__button__category"
      onClick={props.onClick}
    >
      {props.name.toUpperCase()}
    </button>
  );
}
