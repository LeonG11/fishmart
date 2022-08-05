import React from "react";
import Footer from "./Footer";

export default function About() {
  return (
    <div>
      <img
        src="./img/Cards background.svg"
        className="about__background"
        alt="Картинка сзади"
      />
      <div className="about">
        <div className="about__title">Контакты</div>
        <div className="about__text__bold">Связаться с нами:</div>
        <div className="about__line">
          <a href="tel:88009002020" className="about__number">
            +7 (800) 900-20-20
          </a>
          <div className="about__time">c 9:00 до 22:00</div>
        </div>
        <div className="about__mail one">
          <div className="about__mail__link">support@fishmarket.com</div>
          <div className="about__mail__dot" />
          <div className="about__mail__subscribe">если что-то пошло не так</div>
        </div>
        <div className="about__mail two">
          <div className="about__mail__link">sales@fishmarket.com</div>
          <div className="about__mail__dot" />
          <div className="about__mail__subscribe">
            если хотите сотрудничать с FISH FISH
          </div>
        </div>
        <div className="about__address">Наш адрес</div>
        <div className="about__city">
          г.Санкт-Петербург, набережная Обводного канала, д.32
        </div>
        <img src="./img/map.svg" alt="карта" className="about__img" />
      </div>
      <Footer />
    </div>
  );
}
