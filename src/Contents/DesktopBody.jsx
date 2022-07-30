import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import React from "react";

export default function DesktopBody() {
  return (
    <MediaQuery minWidth={768}>
      <div className="welcome__page animate__animated animate__fadeInLeft">
        <div className="welcome__page__header">
          Cвежие морепродукты <br /> на любой вкус
        </div>
        <Link to="/menu" className="welcome__page__link">
          <div className="arrow">
            <div
              className="arrow__name"
              style={{
                fontSize: "clamp(1rem, 0.7711rem + 0.9488vw, 1.625rem)",
                marginLeft: "46px",
              }}
            >
              Смотреть ассортимент
            </div>
            <img
              src="./img/arrow next.svg"
              className="arrow__img"
              alt="gentle"
            />
            <div
              className="arrow__dotted"
              style={{
                marginLeft: "-1.5%",
              }}
            />
          </div>
        </Link>
      </div>
    </MediaQuery>
  );
}
