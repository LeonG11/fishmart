import MediaQuery from "react-responsive";
import {Link} from "react-router-dom";
import {Dot} from "./Dot";
import React from "react";

export function DesktopNav() {



    return <MediaQuery minWidth={768}>
        <div className="header__block">

            <Link to="/" className="header__block__a">
                <div className="header__block__container">
                    <img src="./img/logo.svg" alt="FISH FISH"/>
                    <div>FISH FISH</div>
                </div>
            </Link>
            <div className="nav__link">
                <div className="flex items-center flex-row ml-auto mr-auto gap-[28px]">
                    <Link to="/fishfish">
                        <div className="fm">
                            FISH FISH
                        </div>
                    </Link>
                    <Dot/>
                    <Link to="/menu">
                        <div className="fm">
                            АССОРТИМЕНТ
                        </div>
                    </Link>
                    <Dot/>
                    <Link to="/about">
                        <div className="fm">
                            КОНТАКТЫ
                        </div>
                    </Link>
                </div>
            </div>
            <div className="col-start-12 items-center flex justify-right">
                <button className="fm">
                    <img className="icon invert mr-7" src="./img/user.svg" alt=""/>
                </button>
                <button className="fm">
                    <img className=" invert mr-7" src="./img/basket.svg" alt=""/>
                </button>
            </div>
        </div>
    </MediaQuery>;
}