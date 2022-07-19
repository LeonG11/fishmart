import React from 'react';
import Footer from "./Footer";

const FishFish = () => {
    return (
        <>
            <div className="grid grid-cols-12 pl-[60px] pr-[60px] bg-blue-600 text-white font-medium" style={{
                backgroundColor: "#051B26",
            }}>
                <div className="col-start-1 col-end-3 pt-[60px] text-[40px]">FISH FISH</div>
                <div
                    className="row-start-2 col-start-2 col-end-7 font-[300] text-[24px] leading-[31px] mb-[50%] animate__animated animate__fadeIn">
                    Мы «FISH FISH» занимаемся доставкой свежих морепродуктов и рыбы на любой вкус.
                    Всегда только свежие продукты в охлажденном состоянии, герметичной упаковке.
                    Наши курьеры привозят рыбу и морепродукты в переносных холодильных пакетах
                    или камерах.
                    Качество продукции для нас превыше всего!
                </div>
                <div className="row-start-1 row-end-3 col-start-8 col-end-13 mt-[130px] pb-[50vh]">
                    <img src="./img/fishfish.svg"/>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default FishFish;