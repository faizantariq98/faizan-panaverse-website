"use client"
import React from 'react'
import Hero from '../CoursesComponents/Hero'
import CourseDesc from '../CoursesComponents/CourseDesc'


const Courses = ({ params, searchParams }: {
  params: { courses: string },
  searchParams: { id: string },
}) =>
{
    return (
      <section>
        <Hero />
        <CourseDesc/>
      </section>
    )
}

export default Courses