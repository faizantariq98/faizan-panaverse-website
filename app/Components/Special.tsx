'use client'
import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'

import { sideBarData } from './data'

import { useState } from 'react'

const Special = () => {

  const [seletedItem,setSelectedItem ]= useState('wmd');
  const seletedItemData = sideBarData.find((items)=>items.slug === seletedItem);

  console.log(seletedItem);

  return (
    <section className='my-10 '>
      <Wrapper>
        <div className='px-4'>    {/* heading */}
          <h1 className='text-4xl font-bold '> Specialized Tracks</h1>

          <p className=' mt-5 mb-5 lg:max-w-[50%] text-justify'>After completing the first three quarters the participants will select one or more specializations consisting of two courses each:</p>
        </div>

        <div className='p-6 rounded-lg shadow-lg border-gray-600 flex flex-col-reverse lg:flex-row gap-2'>        {/* flex div for two divs */}

            <div className='lg:w-8/12 px-2 self-start sticky top-28 -z-10'>                 {/* left */}
                <h6 className='text-xs py-2 font-semibold text-blue-800'> Specialized Program</h6>
                <h1 className='text-4xl font-semibold py-2 max-w-lg'>{seletedItemData?.title}</h1>
                <p className='text-gray-500 text-lg py-2 max-w-screen-[50%] text-justify'>{seletedItemData?.description}
                </p>
                <a className='text-blue-800 font-bold text-lg underline my py-2 cursor-pointer'>Learn More{" >"}</a>

                <div className='mt-10 grid md:grid-cols-2 gap-4  '>
                {
                    seletedItemData?.gridData.map((data)=>
                    <div className="relative p-8 z-10" key={data.order}>
                    <h5 className="font-bold text-sm text-black pb-3">{data.quarter}</h5>
                    <p className="py-3 text-justify">{data.content}</p>
                    <span className="absolute text-9xl top-3 right-10 -z-10 font-bold text-gray-300">{data.order}</span>
                    </div>
                    )
                }
                </div>
                
            </div>

            <div className='rounded-sm shadow-sm lg:w-4/12 p-2'>                 {/* right */}

                  {
                    sideBarData.map((items)=>
                      <div className={`flex items-center gap-3 py-4 cursor-pointer rounded-md shadow-md`} key={items.slug} onClick={()=> setSelectedItem(items.slug)} >
                        <Image src={items.image} alt="xyz" className={`h-24 w-48 object-cover flex-shrink-0 ${items.slug === seletedItem ? `rounded-lg shadow-lg shadow-blue-600` : ''}`}/>
                      <div className=''>
                      <h6 className='text-xs text-blue-600'>Specialized Program</h6>
                      <h1 className='text-md my-1 font-medium pr-2 text-left'>{items.title}</h1>
                      </div>
                      </div>)
                  
                  }
            </div>

        </div>

      </Wrapper>
    </section>
  )
}

export default Special