import { animate, motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3"  className="w-full h-screen pt-1 bg-zinc-100">
      <div className="textStracture mt-52 px-20">
        {["we create", "eye-opening", "presentations"].map((items, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[9vw] rounded-md h-[5.7vw] relative top-[2.8vw] "
                  >
                    <img
                      src="/src/assets/Media/content-image01.jpg"
                      alt=""
                      className="w-[9vw] h-[5.7vw]"
                    />
                  </motion.div>
                )}
                <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[6.25vw]  font-[FoundersGrotesk] ">
                  {items}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-700 mt-[1vw] flex justify-between items-center py-5 px-20">
        {[
          "For public and privete companies",
          "From the first pitch to IPO",
        ].map((items, index) => (
          <p
            key={index}
            className="text-base font-light tracking-tight leading-none"
          >
            {items}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase">
            Start the Project
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-400">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
