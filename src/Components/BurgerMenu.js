import React, {useState} from "react";

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(true);
    return <div className="burger__menu" hidden={isOpen}>
        <button className="burger__menu__close" onClick={() => setIsOpen(!isOpen)}>
            <div></div>
            <div></div>
        </button>
    </div>;
}

export default BurgerMenu;