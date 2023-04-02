import React from 'react'
import Wrapper from './Wrapper';
import Image from 'next/image';
import logo from "../../public/Icons/logo.png"
import Link from 'next/link';

const Footer = () => {

    const programs = [
        {
            slug:"BCC",
            name:"Block Chain Computing"
        },
        {
            slug:"AI",
            name:"Artificial Intelligence"
        },
        {
            slug:"CNC",
            name:"Cloud Native Computing"
        },
        {
            slug:"IOT",
            name:"Internet Of Things"
        }
    ]


  return (
    <section>
        <Wrapper>
            <div className='p-2 flex flex-col md:flex-row gap-2 mb-2 bg-white sticky bottom-0'>
                <div className='flex-1 mb-2'>
                    <Image src={logo} alt="" className='py-2 w-32'/>
                    <p className='py-2 text-justify px-2'>
                    Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
                    </p>
                    <div className='mt-2'>
                    <Link className="iconss inline-flex justify-center items-center" href="">
                         <i className="fa fa-twitter"></i>
                    </Link>
                    <Link className="iconss inline-flex justify-center items-center" href="#">
                          <i className="fa fa-facebook"></i>
                    </Link>
                    <Link className="iconss inline-flex justify-center items-center" href="#">
                          <i className="fa fa-youtube"></i>
                    </Link>
                    <Link className="iconss inline-flex justify-center items-center" href="#">
                          <i className="fa fa-linkedin"></i>
                    </Link>
                    <a className="iconss inline-flex justify-center items-center" href="#">
                          <i className="fa fa-github"></i>
                    </a>
                    </div>
                </div>

                <div className='flex-shrink-0 mx-3 md:self-end'>
                    <h1 className='text-lg font-bold'>
                        Programs
                    </h1>
                    {
                        programs.map(items=>{
                            return(
                                <p key={items.slug}className="text-gray-800 pt-1 text-md">{items.name}</p>
                            )
                        })
                    }

                </div>

                <div className='flex-shrink-0 mx-3 md:self-end'>
                    <h1 className='text-lg font-bold'>
                        Quarters
                    </h1>
                    <p className="text-gray-800 pt-1 text-md">Quarter 1</p>
                    <p className="text-gray-800 pt-1 text-md">Quarter 2</p>
                    <p className="text-gray-800 pt-1 text-md">Quarter 3</p>
                    <p className="text-gray-800 pt-1 text-md">Quarter 4</p>

                </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default Footer;