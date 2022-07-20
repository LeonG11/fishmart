import MediaQuery from "react-responsive";
import {Link} from "react-router-dom";
import React from "react";

export function MobileNav() {
    return <MediaQuery maxWidth={768}>
        <div className="header__block">
            <div hidden={false} className="burger__menu__mobile">
                <Link to="/fishfish">
                    <div>
                        FISH FISH
                    </div>
                </Link>
                <Link to="/menu">
                    <div>
                        АССОРТИМЕНТ
                    </div>
                </Link>
                <Link to="/about">
                    <div>
                        КОНТАКТЫ
                    </div>
                </Link>
            </div>
            <button className="burger">
                <div></div>
                <div></div>
                <div></div>
            </button>
            <Link to="/" className="header__block__container">
                <div>
                    <img src="./img/logo.svg" alt="FISH FISH"/>
                    <div>FISH FISH</div>
                </div>
            </Link>
        </div>
    </MediaQuery>;
}