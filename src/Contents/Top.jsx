import React from "react";
import {Link} from "react-router-dom";
import MediaQuery from "react-responsive";

function Dot() {
    return <div className="w-1 h-1 rounded-full bg-white"></div>;
}

function TopLink() {
    return (
        <div className="header__block">
            <Link to="/" className="header__block__a">
                <div className="header__block__container">
                    <MediaQuery minWidth={768}>
                        <img src="./img/logo.svg" alt="FISH FISH"/>
                        <div>FISH FISH</div>
                    </MediaQuery>
                </div>
            </Link>
            <div className="navlink">
                <MediaQuery minWidth={768}>
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
                </MediaQuery>
                <MediaQuery maxWidth={768}>
                    <select className='w-full'>
                        <option>FISH FISH</option>
                        <option>АССОРТИМЕНТ</option>
                        <option>КОНТАКТЫ</option>
                    </select>
                </MediaQuery>

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
    );
}

export default TopLink;
