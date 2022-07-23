import React, {useState} from 'react';
import {ButtonArrow} from "../Contents/ButtonArrow";
import MediaQuery from "react-responsive";

const Cards = ({divider, name, place, price, src}) => {
    const [number, setNumber] = useState(0.0);

    const onClick = () => setNumber(parseFloat(Math.max(number + parseFloat(divider), 0).toFixed(3)));
    const onClick1 = () => setNumber(parseFloat(Math.max(number - parseFloat(divider), 0).toFixed(3)));
    return (
        <div>
            <div className="cards">
                <img src={src} alt="" className="cards__img"/>
                <div className="cards__description">
                    <div className="cards__box">
                        <div className="cards__name">{name}</div>
                        <div className="cards__price">{price} ₽/ кг</div>
                    </div>
                </div>
                <div className="cards__place">{place}</div>
                <div className="cards__down">
                    <div className="cards__button">
                        <button onClick={onClick}>+</button>
                        <div>{number}</div>
                        <button onClick={onClick1}>-</button>
                    </div>
                    <MediaQuery maxWidth={768}>
                        <button className="cards__button__inBasket">
                            <button className="cards__button__inBasket__btn">В корзину</button>
                        </button>
                    </MediaQuery>
                    <MediaQuery minWidth={768}>
                        <button className="cards__button__inBasket">
                            <ButtonArrow marginTop="67px" fontSize="20px" fontWeight="700" name="В корзину"/>
                        </button>
                    </MediaQuery>
                </div>
            </div>
        </div>

    );
};

export default Cards;