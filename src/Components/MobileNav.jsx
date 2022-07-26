import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import React from "react";

export function MobileNav() {
  return (
    <MediaQuery maxWidth={767}>
      <div>
        <div className="header__block">
          <div className="header__left">
            <button type="button" className="header__burger">
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
