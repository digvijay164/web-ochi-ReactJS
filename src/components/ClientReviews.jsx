import React from "react";

function ClientReviews() {
  return (
    <div className="w-full h-screen ">
      <div className="w-full px-20 border-b-[1px] border-zinc-400 pb-10">
        <h1 className="text-7xl font-[NeueMontreal] tracking-tight">
          Clients' reviews
        </h1>
      </div>
      <div className="containers flex mt-5">
        <div className="first-container w-1/2 font-[NeueMontreal] ">
          <div className="left-side flex justify-between ">
            <h1 className="text-2xl px-[3vw]">Karmen Ventures</h1>
            <h1 className="text-2xl -translate-x-[7vw]">Services</h1>
          </div>
          <div className="btn absolute  mt-[10%] translate-x-[30vw]">
            <div className="t1 uppercase">
              <h1 className="mb-7 px-5 py-2 border-[2px] border-black rounded-full text-2xl">
                investor deck
              </h1>
              <h1 className="mb-7 px-5 py-2 border-[2px] border-black rounded-full text-2xl">
                sales deck
              </h1>
            </div>
          </div>
        </div>

        <div className="second-containe w-1/2 font-[NeueMontreal] ">
          <div className="right-side flex justify-between">
            <h1 className="text-2xl">Karmen Ventures</h1>
            <h1 className="text-2xl -translate-x-[1.5vw] text-zinc-500 uppercase">
              read
            </h1>
          </div>

          <div className="image">
            <img
              className="w-[10vw] mt-[20%] rounded-xl"
              src="/src/assets/Media/willam.png"
              alt=""
            />
            <div className="font-line w-[29vw]">
              <p className="py-5">
                They were transparent about the time and the stages of the
                project. The end product is high quality, and I feel confident
                about how they were handholding the client through the process.
                I feel like I can introduce them to someone who needs to put a
                sales deck together from scratch, and they would be able to
                handhold the client experience from 0 to 100 very effectively
                from story to design. 5/5
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="table w-full px-7   font-[NeueMontreal] ">
        <div className="list w-full h-[3vw]  border-t-[1px] border-b-[1px] border-black flex justify-between  items-center px-[5vw] text-zinc-500">
          <h1>Planetly</h1>
          <h1>Nina Walloch</h1>
          <h1>READ</h1>
        </div>

        <div className="list w-full h-[3vw]  border-b-[1px] border-black flex justify-between items-center px-[5vw]">
          <h1>Workiz Easy</h1>
          <h1>Tomer Levy</h1>
          <h1>READ</h1>
        </div>

        <div className="list w-full h-[3vw]  border-b-[1px] border-black flex justify-between items-center px-[5vw]">
          <h1>Premium Blend</h1>
          <h1>Ellen Kim</h1>
          <h1>READ</h1>
        </div>

        <div className="list w-full h-[3vw]  border-b-[1px] border-black flex justify-between items-center px-[5vw]">
          <h1>Planetly</h1>
          <h1>Brendan Goss</h1>
          <h1>READ</h1>
        </div>

        <div className="list w-full h-[3vw]  border-b-[1px] border-black flex justify-between items-center px-[5vw]">
          <h1>Officevibe</h1>
          <h1>Raff Labrie</h1>
          <h1>READ</h1>
        </div>

        <div className="list w-full h-[3vw]  border-b-[1px] border-black flex justify-between items-center px-[5vw]">
          <h1>Orderlion</h1>
          <h1>Stefan Strohmerh</h1>
          <h1>READ</h1>
        </div>

        <div className="list w-full h-[3vw]  border-b-[1px] border-black flex justify-between items-center px-[5vw]">
          <h1>Officevibe</h1>
          <h1>Jaci Smith</h1>
          <h1>READ</h1>
        </div>

        <div className="list w-full h-[3vw]  border-b-[1px] border-black flex justify-between items-center px-[5vw]">
          <h1>Black Book</h1>
          <h1>Nina Walloch</h1>
          <h1>READ</h1>
        </div>

        <div className="list w-full h-[3vw]  border-b-[1px] border-black flex justify-between items-center px-[5vw]">
          <h1>Trawa Energy</h1>
          <h1>David Budde</h1>
          <h1>READ</h1>
        </div>
      </div>
    </div>
  );
}

export default ClientReviews;
