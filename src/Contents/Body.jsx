import React from "react";

export default function Bodys() {
  const mainText = {
    fontWeight: "700",
    lineHeight: "73.54px",
    position: "absolute",
    height: "208px",
    left: "60px",
    top: "260px",
  };
  return (
    <div
      className="w-full h-[910px]"
      style={{
        backgroundImage: "url(/img/Background.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="mx-16 py-[150px]"></div>
      <div className="text-[64px] text-white" style={mainText}>
        <div className="animate__animated animate__fadeInLeftBig">
          <div className="mb-4">
            Свежие морепродукты <br /> на любой вкус
          </div>
          <div className="text-2xl font-medium px-10 flex">
            Смотреть ассортимент
            <div className="pt-2"></div>
            <img alt="тык" className="z-10 ml-10" src="/img/arrow next.svg" />
            <div className="bg-orange-400 w-10 -ml-7 h-10 rounded-full zb"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
