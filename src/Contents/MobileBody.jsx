import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import React from "react";
import { ButtonArrow } from "./ButtonArrow";

export function MobileBody() {
  return (
    <MediaQuery maxWidth={768}>
      <div className="welcome__page animate__animated animate__fadeInLeft">
        <div className="welcome__page__header">
          Cвежие морепродукты <br /> на любой вкус
        </div>
        <Link to="/menu" className="">
          <ButtonArrow
            fontSize="16px"
            marginTop="14px"
            marginLeft="17px"
            fontWeight="400"
            name="Смотреть ассортимент"
            className="welcome__page__arrow"
          />
        </Link>
      </div>
    </MediaQuery>
  );
}
