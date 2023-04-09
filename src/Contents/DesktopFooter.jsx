import React from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";

export default function DesktopFooter() {
  function getOnclick() {
    return () => {
      window.scrollTo(0, 0);
    };
  }

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
                <div className="fm" onClick={getOnclick()}>
                  FISH FISH
                </div>
              </Link>
              <Link to="/menu">
                <div className="fm" onClick={getOnclick()}>
                  АССОРТИМЕНТ
                </div>
              </Link>
              <Link to="/about">
                <div className="fm" onClick={getOnclick()}>
                  КОНТАКТЫ
                </div>
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
