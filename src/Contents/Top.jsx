import React from "react";
import {Link} from "react-router-dom";

function Dot() {
    return <div className="w-1 h-1 rounded-full bg-white"></div>;
}

function TopLink() {
    return (
        <div className="pl-[60px] pr-[60px] h-[110px] blue grid grid-cols-12 items-center gap-5" style={{
            background: '#051B26',
            color: "white",
            fontSize: '18px',
            lineHeight: '27px',
            fontWeight: '400'
        }}>
            <Link to="/">
                <div className="col-start-1 col-end-2">
                    <img src="./img/logo.svg" alt="FISH FISH" height="60px" width="60px" className="ml-3"/>
                    <div className="text-orange-300 inline">FISH FISH</div>
                </div>
            </Link>
            <div className="col-start-5 col-end-9 flex flex-row justify-between items-center" style={{
                fontStyle: "normal"
            }}>
                <Link to="/fishfish" className="text-white">
                    <div className="animate__animated fm">
                        FISH FISH
                    </div>
                </Link>
                <Dot/>
                <Link to="/menu" className="text-white">
                    <div className="animate__animated fm">
                        АССОРТИМЕНТ
                    </div>
                </Link>
                <Dot/>
                <Link to="/about" className="text-white">
                    <div className="animate__animated fm">
                        КОНТАКТЫ
                    </div>
                </Link>
            </div>
            <div className="col-start-12 items-center flex justify-right">
                <button className="fm">
                    <img className="w-6 h-6 invert mr-7" src={"./img/user.svg"} alt=""/>
                </button>
                <button className="fm">
                    <img className="w-6 h-6 invert" src="./img/basket.svg" alt=""/>
                </button>
            </div>
        </div>
    );
}

export default TopLink;
