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
    <div className=" h-svh w-full">
      <div className="mt-5 ">
        <h2 className="text-left text-white sm:text-8xl  underline underline-offset-8 decoration-yellow-400" data-aos="fade-up">ABOUT ME</h2>
        <div className="flex mt-10">
            <div className=" ml-10 w-2/6" data-aos="fade-right">
            <img src={proFileImg} alt="" />
            </div>
            <div className="w-4/6 ml-20" data-aos="fade-left">
            <p className="text-left  text-yellow-400 sm:text-2xl  underline underline-offset-8 decoration-yellow-400">THATTAPONG ROMJAROEN</p>
           <p className="text-left mt-2 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo corporis commodi reiciendis molestias magnam veritatis sit velit corrupti iure harum, dolores accusamus recusandae laborum, vel vero totam consequuntur quasi odit.</p>
           <p className="text-left mt-2 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo corporis commodi reiciendis molestias magnam veritatis sit velit corrupti iure harum, dolores accusamus recusandae laborum, vel vero totam consequuntur quasi odit.</p>
           <p className="text-left mt-2 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo corporis commodi reiciendis molestias magnam veritatis sit velit corrupti iure harum, dolores accusamus recusandae laborum, vel vero totam consequuntur quasi odit.</p>
           <p className="text-left mt-2 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo corporis commodi reiciendis molestias magnam veritatis sit velit corrupti iure harum, dolores accusamus recusandae laborum, vel vero totam consequuntur quasi odit.</p>
         <div className="flex mt-10  justify-center">
         <div className="flex ml-10 w-2/12 ">
            <img className="rounded-full" src={githubLogo} alt="" />
            </div>
            <div className="flex ml-10 w-2/12">
            <img className="rounded-full" src={linkedinLogo} alt="" />
            </div>
            <div className="flex ml-10 w-2/12">
            <img className="rounded-full" src={proFileImg} alt="" />
            </div>

         </div>
          
           </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
