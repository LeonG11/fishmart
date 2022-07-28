import React, { useState } from "react";
import MediaQuery from "react-responsive";
import { ButtonArrow } from "../Contents/ButtonArrow";

function Cards({ divider, name, place, price, src }) {
  const [number, setNumber] = useState(0.0);

  const onClick = () =>
    setNumber(parseFloat(Math.max(number + parseFloat(divider), 0).toFixed(3)));
  const onClick1 = () =>
    setNumber(parseFloat(Math.max(number - parseFloat(divider), 0).toFixed(3)));
  return (
    <div>
      <div className="cards">
        <img src={src} alt="" className="cards__img" />
        <div className="cards__box">
          <div className="cards__name">{name}</div>
          <div className="cards__price">{price} ₽/ кг</div>
        </div>
        <div className="cards__place">{place}</div>
        <div className="cards__down">
          <div className="cards__button">
            <button className="cards__int" onClick={onClick}>
              +
            </button>
            <div>{number}</div>
            <button className="cards__int" onClick={onClick1}>
              -
            </button>
          </div>
          <button type="button" className="cards__button__inBasket">
            <ButtonArrow fontSize="20px" fontWeight="700" name="В корзину" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
