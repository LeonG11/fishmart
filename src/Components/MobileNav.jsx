import MediaQuery from "react-responsive";
import {Link} from "react-router-dom";
import React, {useState} from "react";

export function MobileNav() {

    const [open, setOpen] = useState(false);


    const invertOpen = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)

        }
    }


    return <MediaQuery maxWidth={768}>
        <div className="header__block">
            {/*<Menu>*/}
            {/*    <a className=>1</a>*/}
            {/*    <a className=>2</a>*/}
            {/*    <a className=>3</a>*/}
            {/*    <a className=>4</a>*/}
            {/*    <a className=>5</a>*/}
            {/*</Menu>*/}
            <div className="z-10 absolute menu" hidden={open} style={{
                backgroundColor: '#051B26',
                width: '25%',
                height: '100vh',
                top: '0',
                marginLeft: '-20px',
                textAlign: 'left'
            }}>
                <button style={{
                    alignSelf: 'end'
                }} onClick={invertOpen}>
                    X
                </button>
                <Link to="/fishfish">
                    <div className="menu__button">
                        FISH FISH
                    </div>
                </Link>
                <Link to="/menu">
                    <div className="menu__button">
                        АССОРТИМЕНТ
                    </div>
                </Link>
                <Link to="/about">
                    <div className="menu__button">
                        КОНТАКТЫ
                    </div>
                </Link>
            </div>
            <button className="burger" onClick={invertOpen}>
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