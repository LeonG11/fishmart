import React from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";

function MobileFooter() {
  return (
    <div>
      <MediaQuery maxWidth={767}>
        <div>
          <div
            className="header__block"
            style={{
              backgroundColor: "#1c3751",
            }}
          >
            <div className="header__left">
              <Link to="/">
                <div className="logo__mobile">
                  <img src="./img/logo.svg" alt="FISH FISH" />
                  <div>FISH FISH</div>
                </div>
              </Link>
            </div>
            <a href="tel:88009002030" className="telephone">
              +7 (800) 900-20-30
            </a>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}

export default MobileFooter;
