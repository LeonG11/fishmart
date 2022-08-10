import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import { Dot } from "./Dot";
import React, { useState } from "react";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(true); // React state for opening check burger menu

  // Function for scroll up pages
  function changePages() {
    return () => {
      window.scrollTo(0, 0);
      setIsOpen(!isOpen);
    };
  }

  return (
    <MediaQuery maxWidth={767}>
      {/* Button for open and close burger menu outside burger */}
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button
        style={{
          display: isOpen ? "none" : "flex",
          position: "absolute",
          left: "50%",
          width: "40%",
          height: "100%",
          zIndex: "999",
        }}
        onClick={() => setIsOpen(true)}
      />
      {/* button in Header for open/close burger menu */}
      <div className="burger" style={{ display: isOpen ? "none" : "flex" }}>
        <div className="burger__top">
          <button onClick={() => setIsOpen(!isOpen)}>
            <img loading="lazy" src="./img/close.svg" alt="close" />
          </button>
        </div>
        <div className="burger__item">
          <Link to="/fishfish" onClick={changePages()}>
            FISH FISH
          </Link>
          <Dot />
          <Link to="/menu" onClick={changePages()}>
            АССОРТИМЕНТ
          </Link>
          <Dot />
          <Link to="/about" onClick={changePages()}>
            КОНТАКТЫ
          </Link>
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
              <div /> {/* This div use for make line in button */}
              <div /> {/* This div use for make line in button */}
              <div /> {/* This div use for make line in button */}
            </button>
            {/* Logo in Header, use button for transition on main page */}
            <Link to="/">
              <div className="logo__mobile">
                <img loading="lazy" src="./img/logo.svg" alt="FISH FISH" />
                <div>FISH FISH</div>
              </div>
            </Link>
          </div>
          {/* Icon basket and login/signup in account, don't realease, will be in future:) */}
          <div className="icon__container">
            {/* Link from React-router-dom from transition on any page */}
            <Link to="/login">
              <button>
                <img
                  loading="lazy"
                  src="./img/user.svg"
                  alt="Личный кабинет"
                  className="icon__mobile"
                />
              </button>
            </Link>
            <Link to="/basket">
              <button>
                <img
                  loading="lazy"
                  src="./img/basket.svg"
                  alt="Корзина"
                  className="icon__mobile"
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </MediaQuery>
  );
}
