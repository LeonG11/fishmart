import React from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import { Dot } from "../Components/Dot";

export default function DesktopFooter() {
  return (
    <div>
      <MediaQuery minWidth={768}>
        <div className="header__block" style={{ backgroundColor: "#1c3751" }}>
          <Link to="/" className="header__block__a">
            <div className="header__block__container">
              <img src="./img/logo.svg" alt="FISH FISH" />
              <div>FISH FISH</div>
            </div>
          </Link>
          <div className="nav__link">
            <div className="nav__link__container">
              <Link to="/fishfish">
                <div className="fm">FISH FISH</div>
              </Link>
              <Dot />
              <Link to="/menu">
                <div className="fm">АССОРТИМЕНТ</div>
              </Link>
              <Dot />
              <Link to="/about">
                <div className="fm">КОНТАКТЫ</div>
              </Link>
            </div>
          </div>
          <a href="tel:88009002030" className="telephone">
            +7 (800) 900-20-30
          </a>
        </div>
      </MediaQuery>
    </div>
  );
}
