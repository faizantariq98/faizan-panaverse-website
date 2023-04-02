import React from 'react'
import Wrapper from '../Components/Wrapper'
import Link from 'next/link'
import Quarter1 from '../../public/Quarter1.png'
import Quarter2 from '../../public/Quarter2.png'
import Quarter3 from '../../public/Quarter3.png'
import Quarter4 from '../../public/Quarter4.png'
import Image from 'next/image'
import { quarterDetails } from '@/public/jsondata/QuarterData'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const CourseDesc = () => {
    const [quarter,setQuarter]= useState('Q1');

    const pid = usePathname()

    const displayData = quarterDetails.find(items=>{
        return items.slug === pid
    })
    let filterdata;



     const selectQuarter = (quarterValue:string,id:number) =>{
        setQuarter(quarterValue);
        console.log("This is quarter ",quarter); 

        // filterdata=displayData?.gridData.map(items=>{
        //     return items.quarter === quarter
        // })
    }


   
  return (
    
        <div className='mb-10 md:relative '>
        <Wrapper>
            <div className=" max-w-screen h-16">
                {/* empty div for spacing */}
            </div>
        <div className='flex flex-col-reverse md:flex-row justify-between '>

           <div className='max-w-md lg:max-w-xl xl:max-w-3xl px-2 mr-2 -z-10'>
                <h6 className="text-lg font-bold text-blue-600 px-2 py-3"> W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</h6>
                <h2 className="text-4xl font-bold px-2 py-3">
                Course Description:
                </h2>
                <p className='text-md font-mono px-2 py-4 text-justify'>
                 The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).
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
                    <Link href="">
                    <h4 className='text-2xl font-semibold py-1 text-black'>
                    Next.js 13 Web Development  
                    </h4>
                    </Link>
                    <Link href="">
                    <h6 className='text-md py-1 underline text-blue-700'>
                    Next 13 Official Documentation
                    </h6>
                    </Link>
                    <Link href="">
                    <h4 className='text-md py-1 underline text-blue-700'>
                    Latest Learn React Official Website 
                    </h4>
                    </Link>
                    <Link href="">
                    <h4 className='text-md py-1 underline text-blue-700'>
                    Learn Next.js 13 Learning Repo  
                    </h4>
                    </Link>
                </div>

                <div className='max-w-xl px-2 my-2'>
                    <Link href="">
                    <h4 className='text-2xl font-semibold py-1 text-black'>
                    Next.js 13 using Chakra UI (Remote Zoom Class)  
                    </h4>
                    </Link>
                    <Link href="">
                    <h6 className='text-md py-1 underline text-blue-700'>
                    CSS Flexbox Explained – Complete Guide to Flexible Containers and Flex Items Chakra UI Docs 
                    </h6>
                    </Link>
                    {/* <Link href="">
                    <h4 className='text-md py-1 underline text-blue-700'>
                    Next.js 13 Web Development  
                    </h4>
                    </Link>
                    <Link href="">
                    <h4 className='text-md py-1 underline text-blue-700'>
                    Next.js 13 Web Development  
                    </h4>
                    </Link> */}
                </div>

                <div className='max-w-xl px-2 my-3'>
                    <Link href="">
                    <h4 className='text-2xl font-semibold py-1 text-black'>
                    UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom Class)  
                    </h4>
                    <p className='text-justify py-1'>Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop by Fabio Staiano</p>
                    </Link>
                    <Link href="https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa">
                    <h6 className='text-md py-1 underline text-blue-700'>
                    Get your Curriculum Book from here  
                    </h6>
                    </Link>
                    <Link href="">
                    <h4 className='text-md py-1 underline text-blue-700'>
                    Figma Design Kit for TailwindCSS 
                    </h4>
                    </Link>
                    <Link href="">
                    <h4 className='text-md py-1 underline text-blue-700'>
                    Chakra UI Figma Kit
                    </h4>
                    </Link>
                </div>

           </div>

           <div className='bg-blue-200 self-start max-w-md rounded-lg p-3 md:sticky md:top-40 mx-2'>
                    
                        <h5 className='py-2 text-xl font-bold'> Program Structure</h5>
                        <p className='py-2 text-justify'> After finishing the first three quarters, the participants will delve into two specialized quarters specific to their chosen specialization</p>
                        <div className="grid py-5 gap-4 ">
                        <button onClick={()=>selectQuarter('Q1',0)} > <Image src={Quarter1} alt={""}  /></button>
                        <button onClick={()=>selectQuarter('Q2',1)} id="Q2"><Image src={Quarter2} alt={""} /></button>
                        <button onClick={()=>selectQuarter('Q3',2)} ><Image src={Quarter3} alt={""}  /></button>
                        <button onClick={()=>selectQuarter('Q4',3)} ><Image className='ml-2' src={Quarter4} alt={""} /></button>
                        </div>     
           </div>

        </div>
        </Wrapper>
        </div>
  )
}

export default CourseDesc