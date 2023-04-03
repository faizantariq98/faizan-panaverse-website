import React from 'react'
import Wrapper from '../Components/Wrapper'
import Link from 'next/link'
import Quarter1 from '../../public/Quarter1.png'
import Quarter2 from '../../public/Quarter2.png'
import Quarter3 from '../../public/Quarter3.png'
import Quarter4 from '../../public/Quarter4.png'
import Image from 'next/image'
import { quarterwiseData } from '@/public/jsondata/QuarterData'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const CourseDesc = () => {
    const[quarter,setQuarter]=useState('Q1');

    const pid = usePathname()

    const displayData = quarterwiseData.filter(items=>{
        return items.slug === pid
    })
    
    const length = displayData.length;
    let filteredData:any=[];
     const selectQuarter = (event:any) =>{
        event.preventDefault();
        setQuarter(event.currentTarget.id);
      }

      for(let i=0; i<length; i++){
        if(displayData[i].quarter === quarter){
            filteredData=[displayData[i]];
         }
        } 
    
  return (
    
        <div className='mb-10 md:relative '>
        <Wrapper>
            <div className=" max-w-screen h-16">
                {/* empty div for spacing */}
            </div>
        <div className='flex flex-col-reverse md:flex-row justify-between '>

           <div className='max-w-md lg:max-w-xl xl:max-w-3xl px-2 mr-2 -z-10'>
                <h6 className="text-lg font-bold text-blue-600 px-2 py-3"> {filteredData[0]?.heading}</h6>
                <h2 className="text-4xl font-bold px-2 py-3">
                Course Description:
                </h2>
                <p className='text-md font-mono px-2 py-4 text-justify'>
                {filteredData[0]?.desc}
                </p>
                <div className='flex flex-col-reverse md:flex-row  rounded-lg border-2 border-slate-800 my-4'>
                    <div className='basis-1/2 m-auto p-10'>
                            <h1 className='text-2xl font-bold py-2'>Core Track</h1>
                            <h4 className='text-slate-600 '>Common in All Specializations</h4>
                    </div>
                    <div className='basis-1/2  bg-slate-800 text-white p-10'>
                            <h1 className='text-2xl font-bold py-2'>Duration</h1>
                            <h4 className=''>13 Weeks</h4>
                    </div>
                </div>

                 <h2 className="text-4xl font-bold px-2 py-3">
                    Course Description:
                </h2>

                <div className='max-w-xl px-2 my-2'>
                    <h4 className='text-2xl font-semibold py-1 text-black'>
                    {filteredData[0]?.h1}  
                    </h4>
                    {
                       filteredData[0]?.c1.map((items:any)=>{
                        return <Link href="" key={Math.random()}>
                        <h6 className='text-md py-1 underline text-blue-700'>
                        {items.p}
                        </h6>
                        </Link>
                       }) 
                    }
                    
                    
                </div>

                <div className='max-w-xl px-2 my-2'>
                    
                    <h4 className='text-2xl font-semibold py-1 text-black'>
                    {filteredData[0]?.h2} 
                    </h4>
                    
                    {
                        filteredData[0]?.c2.map((items:any)=>{
                            return <Link href="" key={Math.random()}>
                            <h6 className='text-md py-1 underline text-blue-700'>
                            {items.p}
                            </h6>
                            </Link>
                        })
                    }
                    
                    
                </div>

                <div className='max-w-xl px-2 my-3'>
                
                    <h4 className='text-2xl font-semibold py-1 text-black'>
                    {filteredData[0]?.h3} 
                    </h4>
                    <p className='text-justify py-1'>{filteredData[0]?.p1}</p>
                    
                    {
                        filteredData[0]?.c3.map((items:any)=>{
                            return <Link href="" key={Math.random()}>
                            <h6 className='text-md py-1 underline text-blue-700'>
                            {items.p}
                            </h6>
                            </Link>
                        })
                    }
                    
                </div>

           </div>

           <div className='bg-blue-200 self-start max-w-md rounded-lg p-3 md:sticky md:top-40 mx-2 z-9'>
                    
                        <h5 className='py-2 text-xl font-bold'> Program Structure</h5>
                        <p className='py-2 text-justify'> After finishing the first three quarters, the participants will delve into two specialized quarters specific to their chosen specialization</p>
                        <div className="grid py-5 gap-4 ">
                        <button onClick={selectQuarter} id="Q1"> <Image src={Quarter1} alt={""}  /></button>
                        <button onClick={selectQuarter} id="Q2"><Image src={Quarter2} alt={""} /></button>
                        <button onClick={selectQuarter} id="Q3" ><Image src={Quarter3} alt={""}  /></button>
                        <button onClick={selectQuarter} id="Q4"><Image className='ml-2' src={Quarter4} alt={""} /></button>
                        </div>     
           </div>

        </div>
        </Wrapper>
        </div>
  )
}

export default CourseDesc