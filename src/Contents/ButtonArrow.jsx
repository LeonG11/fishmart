import React from "react";

export function ButtonArrow(props) {
  return (
    <div
      className="flex flex-row items-center"
      style={{
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        marginLeft: props.marginLeft,
        marginTop: props.marginTop,
      }}
    >
      <div className="hover:text-red-400 duration-500">{props.name}</div>
      <img src="./img/arrow next.svg" className="ml-10 z-10" alt="gentle" />
      <div className="h-10 w-10 bg-orange-300 rounded-full -ml-7 z-0 hover:scale-125 duration-500 dotted" />
    </div>
  );
}
