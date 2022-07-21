import MediaQuery from "react-responsive";
import {Link} from "react-router-dom";
import React from "react";
import {slide as Menu} from 'react-burger-menu'

export function MobileNav() {

    return <MediaQuery maxWidth={768}>
        <>
            <div id="outer-container">
                <Menu pageWrapId={"page-wrap"} className="text-white bg-[#051B26] p-3"
                      outerContainerId={"outer-container"} width={'30%'}>
                    <main id="page-wrap">
                        <ul className="text-center ul_burger">
                            <li>
                                <Link to="/fishfish">
                                    FISH FISH
                                </Link>
                            </li>
                            <li>
                                <Link to="/menu">
                                    АССОРТИМЕНТ
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    КОНТАКТЫ
                                </Link>
                            </li>
                        </ul>
                    </main>
                </Menu>
                <div className="header__block">

                    <button className="burger" id="react-burger-menu-btn">
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                    <Link to="/" className="">
                        <div>
                            <img src="./img/logo.svg" alt="FISH FISH"/>
                            <div style={{
                                fontSize: '15px'
                            }}>FISH FISH
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    </MediaQuery>
        ;
}