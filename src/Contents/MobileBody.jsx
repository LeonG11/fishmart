import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import React from "react";

export function MobileBody() {
  return (
    <MediaQuery maxWidth={768}>
      <div className="welcome__page animate__animated animate__fadeInLeft">
        <div className="welcome__page__header">
          Cвежие морепродукты <br /> на любой вкус
        </div>
        <Link to="/menu" className="">
          <div className="arrow">
            <div
              className="arrow__name"
              style={{
                fontSize: "16px",
                fontWeight: "400",
                marginLeft: "17px",
              }}
            >
              Смотреть ассортимент
            </div>
            <img
              src="./img/arrow next.svg"
              className="arrow__img"
              alt="gentle"
            />
            <div className="arrow__dotted" style={{ marginLeft: "-14px" }} />
          </div>
        </Link>
      </div>
    </MediaQuery>
  );
}
