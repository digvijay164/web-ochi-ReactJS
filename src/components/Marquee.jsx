import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full -translate-y-[1vw] '>
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-20  rounded-tl-3xl rounded-tr-3xl bg-[#004d43]'>
        <div className="text  text-white flex gap-10  overflow-hidden whitespace-nowrap pr-20">
            <motion.h1 initial={{X: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[24vw] leading-none font-[FoundersGroteskCondensed] font-semibold  uppercase pt-10 -mb-[7vw]'>we are ochi</motion.h1>
            <motion.h1 initial={{X: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[24vw] leading-none font-[FoundersGroteskCondensed] font-semibold  uppercase pt-10 -mb-[7vw]'>we are ochi</motion.h1>
            <motion.h1 initial={{X: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[24vw] leading-none font-[FoundersGroteskCondensed] font-semibold  uppercase pt-10 -mb-[7vw]'>we are ochi</motion.h1>
            <motion.h1 initial={{X: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[24vw] leading-none font-[FoundersGroteskCondensed] font-semibold  uppercase pt-10 -mb-[7vw]'>we are ochi</motion.h1>
            <motion.h1 initial={{X: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[24vw] leading-none font-[FoundersGroteskCondensed] font-semibold  uppercase pt-10 -mb-[7vw]'>we are ochi</motion.h1>
            <motion.h1 initial={{X: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[24vw] leading-none font-[FoundersGroteskCondensed] font-semibold  uppercase pt-10 -mb-[7vw]'>we are ochi</motion.h1>
        </div>
        
    </div>
    </div>
  )
}

export default Marquee