import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen flex items-center px-32 gap-5 mt-[7vw]">
      <div className="cardContainer w-1/2 h-[50vh]">
        <div className="card relative w-full h-full flex items-center justify-center rounded-xl bg-[#004d43]">
          <img
            className="w-32"
            src="/src/assets/Media/Cards-ochi-logo.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 text-lime-300 border-lime-300">
            &copy;2019-2022
          </button>
        </div>
      </div>

      <div className="cardContainer w-1/2 h-[50vh] flex gap-5">
        <div className="card relative w-full h-full flex items-center justify-center rounded-xl bg-[#311010]">
          <img className="w-32" src="/src/assets/Media/logo-2.svg" alt="" />
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 text-white border-white uppercase ">
            rating 5.0 on clutch
          </button>
        </div>
        <div className="card relative w-full h-full flex items-center justify-center rounded-xl bg-slate-950">
          <img className="w-32" src="/src/assets/Media/logo-3.png" alt="" />
          <button className="absolute px-4 py-1 -translate-x-5 border-2 rounded-full left-10 bottom-10 text-white border-white uppercase">
            businness bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
