import MediaQuery from "react-responsive";
import {Link} from "react-router-dom";
import {ButtonArrow} from "./ButtonArrow";
import React from "react";

export function DesktopBody() {
    return <>
        <MediaQuery minWidth={768}>
            <div className="welcome__page animate__animated animate__fadeInLeft">
                <div className="welcome__page__header">
                    Cвежие морепродукты <br/> на любой вкус
                </div>
                <Link to="/menu" className="welcome__page__link">
                    <ButtonArrow fontSize="26px" marginTop="25px" marginLeft="46px" fontWeight="500"
                                 name="Смотреть ассортимент" className="welcome__page__arrow"/>
                </Link>
            </div>
        </MediaQuery>
    </>;
}