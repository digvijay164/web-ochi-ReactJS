import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.05" className='relative w-full -mt-[11vw] mb-[1vw] p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-[NeueMontreal] text-[4vw] leading-[4.5vw]'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>

        <div className='w-full border-t-[1px] mt-20 border-[#a1b562]'>
            <div className="text-container py-7 flex justify-between font-[NeueMontreal]">
                <div className="left-side px-5">
                    <h1>What you can expect:</h1>
                </div>
                <div className="right-side flex gap-[10vw] px-36">
                    <div className="center">
                    <p className='w-[15vw]  mb-7'>
                    We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
                    </p>
                    
                    <p className='w-[15vw]'>
                    We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                    </p>
                    </div>

                   <div className="rightEnd mt-[6.5vw]">
                   <p>
                        <h1>S:</h1>
                        <br />
                        <ul>
                            <li>instagram</li>
                            <li>Linkedin</li>
                            <li>Behance</li>
                            <li>Facebook</li>
                        </ul>
                    </p>
                   </div>
                </div>
            </div>
        </div>
        {/* about text--------end */}

        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
            <div className='w-1/2'>
                <h1 className='text-7xl'>Our approch: </h1>
                <button className='uppercase  flex gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full text-white mt-10'>Read more
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-[50vw] h-[51vh]'>
                <img src="/src/assets/Media/Homepage-Photo-1326x939.jpg" alt="" className='object-cover rounded-3xl'/>
            </div>
        </div>


    </div>
  )
}

export default About