import React from "react";
import {Link} from "react-router-dom";

function Dot() {
    return <div className="w-1 h-1 rounded-full bg-white"></div>;
}

function Footer() {
    return (
        <div className="pl-[60px] pr-[60px] h-[110px] blue grid grid-cols-12 items-center gap-5" style={{
            background: '#1C3751',
            color: "white",
            fontSize: '18px',
            lineHeight: '27px',
            fontWeight: '400'
        }}>
            <div className="col-start-1 col-end-2">
                <img src="./img/logo.svg" alt="FISH FISH" height="60px" width="60px" className="ml-3"/>
                <div className="text-orange-300 inline">FISH FISH</div>
            </div>
            <div className="col-start-5 col-end-9 flex flex-row justify-between items-center" style={{
                fontStyle: "normal"
            }}>
                <Link to="/" className="text-white">FISH FISH</Link>
                <Dot/>
                <Link to="/menu" className="text-white">АССОРТИМЕНТ</Link>
                <Dot/>
                <Link to="/about" className="text-white">КОНТАКТЫ</Link>
            </div>
            <div className="text-[20px] col-start-11 col-end-13 text-right text-white ">+7 (800) 900-20-20</div>
        </div>
    );
}

export default Footer;
