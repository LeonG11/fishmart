import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import React from "react";
import { Dot } from "./Dot";

export function DesktopNav() {
  function getOnClick() {
    return () => {
      window.scrollTo(0, 0);
    };
  }

  return (
    <MediaQuery minWidth={768}>
      <div className="header__block">
        <Link to="/" className="header__block__a">
          <div className="header__block__container">
            <img loading="lazy" src="./img/logo.svg" alt="FISH FISH" />
            <div>FISH FISH</div>
          </div>
        </Link>
        <div className="nav__link">
          <div className="flex items-center flex-row ml-auto mr-auto gap-[28px]">
            <Link to="/fishfish" onClick={getOnClick()}>
              <div className="fm">FISH FISH</div>
            </Link>
            <Dot />
            <Link to="/menu" onClick={getOnClick()}>
              <div className="fm">АССОРТИМЕНТ</div>
            </Link>
            <Dot />
            <Link to="/about" onClick={getOnClick()}>
              <div className="fm">КОНТАКТЫ</div>
            </Link>
          </div>
        </div>
        <div className="col-start-12 items-center flex justify-right">
          <button className="fm">
            <img
              loading="lazy"
              className="icon invert mr-7"
              src="./img/user.svg"
              alt=""
            />
          </button>
          <button className="fm">
            <img
              loading="lazy"
              className=" invert mr-7"
              src="./img/basket.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </MediaQuery>
  );
}
