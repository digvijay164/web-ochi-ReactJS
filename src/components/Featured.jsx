import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-400 pb-10">
        <h1 className="text-7xl font-[NeueMontreal] tracking-tight">
          Featured projects
        </h1>
      </div>

      {/* --------------------SECTION-1-------------------- */}
      <div className="px-10">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContaine relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#cdea68] right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full overflow-hidden rounded-xl">
              <img
                className="w-full h-full bg-cover"
                src="/src/assets/Media/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>

            <div className="btn-lines flex gap-3">
              <div className="px-5 py-2 mt-5 w-[5vw] border-[1px] border-zinc-900 text-zinc-950   rounded-full font-light text-md uppercase">
                audit
              </div>
              <div className="px-5 py-2 mt-5 w-[9vw] border-[1px] border-zinc-900 text-zinc-950   rounded-full font-light text-md uppercase">
                copywriting
              </div>
              <div className="px-5 py-2 mt-5 w-[8vw] border-[1px] border-zinc-900 text-zinc-950   rounded-full font-light text-md uppercase">
                slaes deck
              </div>
              <div className="px-5 py-2 mt-5 w-[10vw] border-[1px] border-zinc-900 text-zinc-950   rounded-full font-light text-md uppercase">
                slides design
              </div>
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContaine relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#cdea68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full overflow-hidden rounded-xl">
              <img
                className="w-full h-full bg-cover"
                src="/src/assets/Media/Vise_front2-1326x1101.jpg"
                alt=""
              />
            </div>

            <div className="btn-lines flex gap-3">
              <div className="px-5 py-2 mt-5 w-[6vw] border-[1px] border-zinc-900 text-zinc-950   rounded-full font-light text-md uppercase">
                agency
              </div>
              <div className="px-5 py-2 mt-5 w-[14vw] border-[1px] border-zinc-900 text-zinc-950   rounded-full font-light text-md uppercase">
                company presentation
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* --------------------END-------------------- */}

      {/* --------------------SECTION-2-------------------- */}
      <div className="px-10">
        <div className="cards w-full flex gap-10 mt-1">
          <div className="DOt absolute w-[1vw] h-[2vh] mt-[6.7vw] translate-x-[.50vw] rounded-full bg-black"></div>

          <h1 className="t1 absolute z-10  py-5  text-2xl px-[5vw] mt-[5vw] -translate-x-[3vw]">
            TRAWA
          </h1>
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardContaine relative w-1/2 h-[75vh] mt-[9vw]"
          >
            <h1 className="absolute flex overflow-hidden text-[#cdea68] right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full overflow-hidden rounded-xl">
              <img
                className="w-full h-full bg-cover"
                src="/src/assets/Media/feature2.jpg"
                alt=""
              />
            </div>

            <div className="btn-lines flex gap-3">
              <div className="px-5 py-2 mt-5 w-[10vw] border-[1px] border-zinc-900 text-zinc-950   rounded-full font-light text-md uppercase">
                brand identity
              </div>
              <div className="px-5 py-2 mt-5 w-[11vw] border-[1px] border-zinc-900 text-zinc-950   rounded-full font-light text-md uppercase">
                design research
              </div>
              <div className="px-5 py-2 mt-5 w-[11vw] border-[1px] border-zinc-900 text-zinc-950   rounded-full font-light text-md uppercase">
                investor check
              </div>
            </div>
          </motion.div>
          {/* ------------------------------------- */}
          <div className="DOt absolute w-[1vw] h-[2vh] left-[50%] mt-[6.7vw] translate-x-[3.5vw] rounded-full bg-black"></div>
          <h1 className="t2 absolute z-10  py-5 left-[50%] text-2xl px-[5vw] mt-[5vw]">
            PREMIUM BLEND
          </h1>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardContaine relative w-1/2 h-[75vh] mt-[9vw]"
          >
            <h1 className="absolute overflow-hidden flex text-[#cdea68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-nowrap leading-none tracking-tighter text-8xl">
              {"PREMIUM BLEND".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="card w-full h-full overflow-hidden rounded-xl">
              <img
                className="w-full h-full bg-cover"
                src="/src/assets/Media/feature2a.png"
                alt=""
              />
            </div>

            <div className="btn-lines flex gap-3">
              <div className="px-5 py-2 mt-5 w-[11vw] border-[1px] border-zinc-900 text-zinc-950   rounded-full font-light text-md uppercase">
                brand template
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* --------------------END-------------------- */}

      {/* -------CENTER BUTTOM--------- */}
      <div className="center-btn translate-y-[5vw] translate-x-[40%] mb-[5vw]">
        <button className="uppercase  flex gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 uppercase">
          view all case studies
          <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
        </button>
      </div>
      {/* --------------------END-------------------- */}
    </div>
  );
}

export default Featured;
