import React from "react";
import { MobileBody } from "./MobileBody";
import DesktopBody from "./DesktopBody";

function Body() {
  document.body.style.background =
    'url("./img/Background.jpg") no-repeat center center';
  document.body.style.backgroundSize = "cover";
  return (
    <>
      <MobileBody />
      <DesktopBody />
    </>
  );
}

export default Body;
