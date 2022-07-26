import React from "react";

export function CarouselButton(props) {
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
