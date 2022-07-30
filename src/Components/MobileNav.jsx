import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import { Dot } from "./Dot";
import React, { useState } from "react";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <MediaQuery maxWidth={767}>
      {isOpen}
      <div className="burger" style={{ display: isOpen ? "none" : "flex" }}>
        <div className="burger__top">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img src="./img/close.svg" alt="close" />
          </button>
        </div>
        <div className="burger__item">
          <Link to="/fishfish">FISH FISH</Link>
          <Dot />
          <Link to="/menu">АССОРТИМЕНТ</Link>
          <Dot />
          <Link to="/about">КОНТАКТЫ</Link>
        </div>
      </div>
      <div>
        <div className="header__block">
          <div className="header__left">
            <button
              type="button"
              className="header__burger"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div />
              <div />
              <div />
            </button>
            <Link to="/">
              <div className="logo__mobile">
                <img src="./img/logo.svg" alt="FISH FISH" />
                <div>FISH FISH</div>
              </div>
            </Link>
          </div>
          <div className="icon__container">
            <Link to="/login">
              <button>
                <img src="./img/user.svg" alt="ЛК" className="icon__mobile" />
              </button>
            </Link>
            <Link to="/basket">
              <button>
                <img src="./img/basket.svg" alt="ЛК" className="icon__mobile" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </MediaQuery>
  );
}
