import React from "react";
import {Link} from "react-router-dom";
import MediaQuery from "react-responsive";

function Dot() {
    return <div className="w-1 h-1 rounded-full bg-white"></div>;
}

function TopLink() {
    return (
        <>
            <MediaQuery minWidth={768}>
                <div className="header__block">
                    <Link to="/" className="header__block__a">
                        <div className="header__block__container">
                            <img src="./img/logo.svg" alt="FISH FISH"/>
                            <div>FISH FISH</div>
                        </div>
                    </Link>

                    <div className="nav__link">
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
                    <div className="col-start-12 items-center flex justify-right">
                        <button className="fm">
                            <img className="w-6 h-6 invert mr-7" src="./img/user.svg" alt=""/>
                        </button>
                        <button className="fm">
                            <img className="w-6 h-6 invert" src="./img/basket.svg" alt=""/>
                        </button>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
                <div className="header__block">
                    <div hidden={false} className="burger__menu">
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
            </MediaQuery>
        </>
    );
}

export default TopLink;
