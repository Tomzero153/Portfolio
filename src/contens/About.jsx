import React from "react";
import proFileImg from "../assets/profile.jpg";
import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/Linkedin.png";
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'; 



const About = () => {
  useEffect(()=>
  {
    Aos.init({duration:1200})

  })
  return (
    <div className=" h-[auto] xl:w-[1280px] w-full m-auto mb-[200px]">
      <div className="mt-5 ">
        <h2 className="md:text-left  text-white sm:text-8xl text-4xl  underline underline-offset-8 decoration-yellow-400" data-aos="fade-up">ABOUT ME</h2>
        <div className="flex  md:flex-nowrap flex-wrap  mt-10  justify-center ">
            <div className=" ml-10 md:w-2/6 w-4/6  " data-aos="fade-right">
            <img src={proFileImg} alt="" />
            </div>
            <div className=" w-4/6 md:ml-20 md:mt-0  mt-5" data-aos="fade-left">
            <p className="text-left  text-yellow-400 sm:text-3xl  underline underline-offset-8 decoration-yellow-400">THATTAPONG ROMJAROEN</p>
           <p className="sm:text-xl text-left mt-5 text-white">My name is Thattapong , and I am an electronic engineer with 5 years of experience working as a Test Development Engineer. In this role, I specialized in develop programs using C# .NET to control microcontrollers and measurement instruments</p>
           <p className="sm:text-xl text-left  mt-3 text-white">Currently, I am expanding my skills in web development by learning React and Next.js.</p>
           <p className="sm:text-xl text-left mt-3 text-white">With a basic foundation in programming and an understanding of the field of electronic engineering. I believe I have the ability to effectively apply my knowledge and skills in the field of Web Development.</p>
           <p className="sm:text-xl text-left mt-3 text-white">Furthermore, I am passionate about continuous learning and self-improvement. I am ready to tackle any challenges and further develop my abilities.</p>
         <div className="flex mt-10  justify-center">
         <div className="flex ml-10 w-3/12 ">
         <a href="https://github.com/Tomzero153">
            <img className="rounded-full p-2 border-2 border-slate-400 hover:border-yellow-400" src={githubLogo} alt="" />
            </a>
            </div>
            <div className="flex ml-10 w-3/12">
            <a href="https://www.linkedin.com/in/thattapong-romjaroen-355696286/">
            <img className="rounded-full p-2 border-2 hover:border-yellow-400" src={linkedinLogo} alt="" />
            </a>
            </div>
            {/* <div className="flex ml-10 w-2/12">
            <img className="rounded-full" src={proFileImg} alt="" />
            </div> */}

         </div>
          
           </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
