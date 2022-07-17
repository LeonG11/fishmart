import React from "react";
import { Link } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';

export default function Top() {
  const basket = "/img/basket.svg";
  const user = "/img/user.svg";
  const topSide = {
    background: "#051B26",
    gridGap: "20px",
    height: "110px",
    lineHeight: "20px",
    gridColumnStart: "0",
    gridColumnEnd: "1",
    color: "white",
  };
  const gridStyle = {
    background: "#051B26",
    gridGap: "20px",
  };
  return (
    <div className="text-lg" style={topSide}>
      <div
        className="mx-20 grid grid-cols-12 gap-5 h-[110px] items-center"
        style={gridStyle}
      >
        <div
          style={{
            gridColumnStart: "1",
            gridColumnEnd: "3",
          }}
        >
          <img src="/img/logo.svg" className="mx-3 h-[55px] w-[55px]" alt="" />
          <div
            style={{ color: "#B78A61", fontSize: "18px", lineHeight: "20px" }}
          >
            FISH FISH
          </div>
        </div>
        <div
          className="flex justify-between items-center"
          style={{ gridColumnStart: "5", gridColumnEnd: "9" }}
        >
          <Link className="hoverb" to="/">
            FISH FISH
          </Link>
          <div className="bg-white rounded-full w-1 h-1"></div>
          <Link className="hoverb" to="/menu">
            АССОРТИМЕНТ
          </Link>
          <div className="bg-white rounded-full w-1 h-1"></div>
          <Link className="hoverb" to="/contents">
            КОНТАКТЫ
          </Link>
        </div>
        <div className="col-start-12 col-end-13 flex justify-between h-28 items-center">
          <Link to='/auth'>
            <img
              className="w-6 h-6 moveTop"
              src={user}
              alt="Пользователь"
              style={{ filter: "invert(100%)" }}
            />
          </Link>
          <Link to="/basket">
            <img
              className=" w-6 h-6 moveTop"
              src={basket}
              alt="Корзина"
              style={{ filter: "invert(100%)" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
