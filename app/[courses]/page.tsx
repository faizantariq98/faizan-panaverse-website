"use client"
import React from 'react'
import Hero from '../CoursesComponents/Hero'
import CourseDesc from '../CoursesComponents/CourseDesc';
import { usePathname } from 'next/navigation'


const Courses = () =>

{
  const pid= usePathname();

  if(pid === '/BCC'||pid === '/CNC'||pid === '/IOT'||pid === '/AI'){
    return (
      <section>
        <Hero />
        <CourseDesc/>
      </section>
    )
  }else{
    return (
      <section>
        <p>404 Not Found</p>
      </section>
    )
  }
    
}

export default Courses