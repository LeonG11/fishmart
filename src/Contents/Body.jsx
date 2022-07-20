import React from 'react';
import {ButtonArrow} from "./ButtonArrow";
import {Link} from "react-router-dom";

const Body = () => {

    document.body.style.background = 'url("./img/Background.jpg") no-repeat center center'
    document.body.style.backgroundSize = "cover"
    return (
        <>
            <div className="pl-[60px] pr-[60px] grid-cols-12 text-white flex flex-col h-[100vh]">
                <div
                    className="pt-[150px] font-bold text-white font-bold text-[64px] leading-[84px] col-start-1 col-end-8 animate__animated animate__fadeInLeft">
                    Cвежие морепродукты <br/> на любой вкус
                </div>
                <Link to="/menu" className="animate__animated animate__fadeInLeft">
                    <ButtonArrow fontSize="26px" marginTop="25px" marginLeft="46px" fontWeight="500"
                                 name="Смотреть ассортимент"/>
                </Link>
            </div>
        </>
    );
};

export default Body;