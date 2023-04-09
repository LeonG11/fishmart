import React from "react";
import { MobileBody } from "./MobileBody";
import DesktopBody from "./DesktopBody";

function Body() {
  return (
    <div className="bodyClass">
      <MobileBody />
      <DesktopBody />
    </div>
  );
}

export default Body;
