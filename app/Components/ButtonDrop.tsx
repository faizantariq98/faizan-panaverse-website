"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'


const ButtonDrop = () => {

  const [dropDown,setDropDown]=useState(false);

  return (
  <div className={`flex flex-col ${!dropDown ? " ":" transition duration-150 ease-out rounded-lg shadow-md bg-slate-100"}`}>
    <button className={`text-black  text-md  text-center inline-flex items-center`} type="button" onClick={()=>{
      setDropDown(!dropDown);
    }}>Courses<svg className="w-4 h-4 ml-1" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

    <div className={`${!dropDown ? "hidden":" transition duration-150 ease-out bg-slate-100"} flex flex-col flex-shrink-0 top-20 self-center absolute gap-1 right-4 bg-white p-3 rounded-md shadow-lg `}>
        <Link href={"/BCC"} className='font-medium' onClick={()=>{setDropDown(!dropDown)}}>BlockChain</Link>
        <Link href={"/IOT"}className='font-medium' onClick={()=>{setDropDown(!dropDown)}}>Internet of Things</Link>
        <Link href={"/AI"}className='font-medium' onClick={()=>{setDropDown(!dropDown)}}>Artificial Intelligence</Link>
        <Link href={"/CNC"}className='font-medium' onClick={()=>{setDropDown(!dropDown)}}>Cloud Native Computing</Link>

    </div>
  </div>   
  )
}

export default ButtonDrop