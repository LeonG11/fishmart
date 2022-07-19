import React, {useState} from 'react';
import {ButtonArrow} from "../Contents/ButtonArrow";

const Cards = ({divider, name, place, price, src}) => {
    const [number, setNumber] = useState(0.0);

    const onClick = () => setNumber(parseFloat(Math.max(number + parseFloat(divider), 0).toFixed(3)));
    const onClick1 = () => setNumber(parseFloat(Math.max(number - parseFloat(divider), 0).toFixed(3)));
    return (
        <div>
            <div className="text-white mb-[60px]">
                <img src={src} alt="" className="rounded-[6px]" height="600px"/>
                <div className="font-[700] text-[26px] mt-8">
                    <div className="flex justify-between">
                        <div>{name}</div>
                        <div>{price} ₽/ кг</div>
                    </div>
                </div>
                <div className="mt-[10px] font-light text-[20px] ">{place}</div>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row w-[114px] h-[39px] items-center justify-evenly" style={{
                        backgroundColor: '#B78A61',
                        fontSize: '18px',
                        fontWeight: '400',
                        lineHeight: '27px',
                        borderRadius: '6px',
                        marginTop: '67px'
                    }}>
                        <button onClick={onClick}>+</button>
                        <div>{number}</div>
                        <button onClick={onClick1}>-</button>
                    </div>
                    <button>
                        <ButtonArrow marginTop="67px" fontSize="20px" fontWeight="700" name="В корзину"/>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Cards;