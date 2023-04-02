"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Wrapper from '../Components/Wrapper'
import gridLines from '../../public/lines-light.png'
import Axis from '../../public/axis.png'
import { HeroData } from '@/public/jsondata/coursesData'
import { usePathname } from 'next/navigation'


const Hero = () => {
    const pid = usePathname()

        const dispData = HeroData.find(items=>{
            return items.slug === pid
        })
       
  return (
    <div className='bg-slate-800'>
        <Wrapper>
            <div className='max-w-screen bg-repeat-x px-2 ' style={{backgroundImage: `url(${gridLines})`}}>
                <div className='flex flex-col md:flex-row justify-around flex-wrap '>
                    <div className='max-w-xl my-10'>      {/*left*/}
                            <h6 className='text-lg font-bold text-green-400 py-4' >
                                Specialized Track
                            </h6>
                            <h1 className='text-5xl font-bold py-6 text-white '>
                               {dispData?.title}
                            </h1>
                            <p className='text-white font-mono text-justify pt-3 pb-7 pr-2'>
                            {dispData?.content}
                            </p>
                            <button className="py-3 px-6 my-4 text-center text-black rounded-full bg-green-400 font-bold">
                            Learn More
                            </button>
                    </div>

                    <div className='max-w-sm mb-10 mt-5'>
                        <Image alt="Axis" src={Axis}>

                        </Image>
                    </div>
                </div>
            </div>
        </Wrapper>
    </div>
  )
}

export default Hero