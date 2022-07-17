import {React, useState} from "react";
import Cards from "../Components/Cards";

export default function Menu() {
    const [Mash, setMash] = useState("Рыба");
    const products = [
        {
            id: 1,
            names: "Кальмар",
            src: "/img/calmar.jfif",
            descrition: 'Невероятно вкусный кальмар',
            price: '1100',
            type: 'Рыба'
        },
        {
            id: 2,
            names: "Устрица королевская",
            src: "/img/ustr.jpg",
            descrition: 'Свежие и лучшие устрицы',
            price: '850',
            type: 'Устрицы'
        },
        {
            id: 3,
            names: "Карп",
            src: "/img/carp.jfif",
            descrition: 'Свежий карп',
            price: '330',
            type: 'Рыба'
        },
        {
            id: 4,
            names: "Креветки королевские",
            src: "/img/shrimp.jfif",
            descrition: 'Вкусные и нежные креветки',
            price: '510',
            type: 'Креветки'
        },
    ]

    return (
        <div className="mx-[60px] mt-4">
            <div className="grid grid-cols-4 gap-5">
                <div className="col-start-1 col-end-5 flex justify-center">
                    <button onClick={() => setMash('Рыба')}
                            className="w-auto mx-3 text-center text-lg font-light rounded-md text-gray-400 focus:text-black">Рыба
                    </button>
                    <button onClick={() => setMash('Краб')}
                            className="w-auto mx-3 text-center text-lg font-light rounded-md text-gray-400 focus:text-black">Краб
                    </button>
                    <button onClick={() => setMash('Креветки')}
                            className="w-auto mx-3 text-center text-lg font-light rounded-md text-gray-400 focus:text-black">Креветки
                    </button>
                    <button onClick={() => setMash('Устрицы')}
                            className="w-auto mx-3 text-center text-lg font-light rounded-md text-gray-400 focus:text-black">Устрицы
                    </button>
                </div>
                {products.map((type, click) => {
                    if (type.type === Mash) {
                        return <Cards id={type.id} names={type.names} src={type.src} descrition={type.descrition}
                                      price={type.price} type={type.type}/>;
                    }
                })}
            </div>
        </div>
    );
}

