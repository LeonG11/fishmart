import React from 'react';
import Footer from "./Footer";

const FishFish = () => {
    return (
        <>
            <div className="fishfish">
                <div className="fishfish__header">FISH FISH</div>
                <div className="fishfish__img">
                    <img src="./img/fishfish.svg" alt="logo"/>
                </div>
                <div
                    className="fishfish__text animate__animated animate__fadeIn">
                    Мы «FISH FISH» занимаемся доставкой свежих морепродуктов и рыбы на любой вкус.
                    Всегда только свежие продукты в охлажденном состоянии, герметичной упаковке.
                    Наши курьеры привозят рыбу и морепродукты в переносных холодильных пакетах
                    или камерах.
                    Качество продукции для нас превыше всего!
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default FishFish;