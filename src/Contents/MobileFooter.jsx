import React from 'react';
import MediaQuery from "react-responsive";
import {Link} from "react-router-dom";

const MobileFooter = () => {
    return (
        <div>
            <MediaQuery maxWidth={768}>
            <>
                <div className="header__block" style={{
                    backgroundColor:"rgba(28, 55, 81)"
                }}>
                    <div className="header__left">
                        <Link to="/">
                            <div className="logo__mobile">
                                <img src="./img/logo.svg" alt="FISH FISH"/>
                                <div>FISH FISH</div>
                            </div>
                        </Link>
                    </div>
                    <a href="tel:88009002030" className="telephone">+7 (800) 900-20-30</a>
                </div>
            </>
        </MediaQuery>

        </div>
    );
};

export default MobileFooter;