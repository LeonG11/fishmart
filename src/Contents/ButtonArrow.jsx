import React from "react";

export function ButtonArrow(props) {
  return (
    <div
      className="arrow"
      style={{
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        marginLeft: props.marginLeft,
        marginTop: props.marginTop,
      }}
    >
      <div className="arrow__name">{props.name}</div>
      <img
        loading="lazy"
        src="./img/arrow next.svg"
        className="arrow__img"
        alt="gentle"
      />
      <div className="arrow__dotted" />
    </div>
  );
}
