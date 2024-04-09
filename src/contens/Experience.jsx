import React from 'react'

import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'; 

const Experience = () => {
  useEffect(()=>
  {
    Aos.init({duration:1200})

  })
  return ( 
    <div className="h-auto w-full mb-[200px]">

<div className="mt-5 ">
    <h2 className="md:text-left text-white sm:text-8xl text-4xl  underline underline-offset-8 decoration-yellow-400" data-aos="fade-up">
    Experience 
    </h2>
  <div className='mt-10 text-left' data-aos="fade-right">
  <ul
    aria-label="Changelog feed"
    role="feed"
    className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200  text-white"
  >
    <li
      role="article"
      className="relative pl-8 before:absolute before:left-0 before:top-2 before:z-10 before:h-4 before:w-4 before:-translate-x-1/2 before:rounded-full before:bg-yellow-400 before:ring-2 before:ring-white"
    >
      <div className="flex flex-col flex-1 gap-4">
        <h4 className="text-lg   font-bold  text-yellow-400 sm:text-4xl">
          Test Develop Engineer{" "}
          <br /><span className="text-lg font-normal  text-white">
            {" "}
            5 year (2018 - 2023) at  TEAM PRECISION PCL
          </span>{" "}
        </h4>
        <ul className="pl-5 list-disc  text-white marker:text-yellow-400">
          <li>Develop Automation Programing(<span className=' text-yellow-500'>C# .Net</span>)</li>
          <li>Create Automation Functional Tester(FCT)</li>
        </ul>
      </div>
    </li>
 
  
  </ul>
  </div>

  </div>
   
</div>

)
}

export default Experience