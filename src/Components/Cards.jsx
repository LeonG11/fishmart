import { React, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Cards(child) {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="border-spacing-1 font-extralight text-lg border-black border-2 rounded-xl p-2 animate__animated animate__zoomIn">
                <NavLink to={'/menu/'+child.id} className="">{child.names}</NavLink>
                <hr />
                <div className="overflow-hidden h-[300px] w-auto rounded-sm mt-2 mb-2">
                    <img className="object-cover" src={child.src} alt="картинка"></img>
                </div>
                <hr />
                <div className="mt-2 text-sm">{child.descrition}</div>
                <div className="text-sm text-gray-500 font-extralight mb-2">
                    {child.price} р.
                </div>
                <div className="flex flex-row items-center justify-between">
                    <button className="bg-cyan-400 rounded-lg text-white font-light text-sm m-1 p-1 hover:bg-red-400 duration-300">
                        В корзину
                    </button>
                    <div>{count}</div>
                    <div className="items-center">
                        <button
                            className="w-6 border rounded"
                            onClick={() => setCount(Math.max(count + 1,0))}
                        >
                            +
                        </button>
                        <button
                            className="w-6 border rounded"
                            onClick={() =>  setCount(Math.max(count - 1,0))}
                        >
                            -
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
